(function () {
	"use strict";

	function track(name, params) {
		if (typeof window.gtag === "function") window.gtag("event", name, params || {});
	}

	// The page is built in one language (tools/build_landing.py); the game reads this key on its first launch.
	var LANG_KEY = "noname-soccer-lang";
	var lang = document.documentElement.lang || "en";

	function saveLang(value) {
		try { localStorage.setItem(LANG_KEY, value); } catch (e) { /* ignore */ }
	}

	function setupLangMenu() {
		saveLang(lang);
		var menu = document.querySelector(".lang-menu");
		if (!menu) return;
		menu.querySelectorAll("a[hreflang]").forEach(function (a) {
			a.addEventListener("click", function (ev) {
				saveLang(a.getAttribute("hreflang"));
				if (a.getAttribute("aria-current") === "true") {
					ev.preventDefault();
					menu.open = false;
				} else if (window.location.hash && ev.button === 0 && !ev.ctrlKey && !ev.metaKey && !ev.shiftKey && !ev.altKey) {
					ev.preventDefault();
					window.location.href = a.getAttribute("href") + window.location.hash;
				}
			});
		});
		document.addEventListener("click", function (ev) {
			if (menu.open && !menu.contains(ev.target)) menu.open = false;
		});
		document.addEventListener("keydown", function (ev) {
			if (ev.key === "Escape" && menu.open) {
				menu.open = false;
				menu.querySelector("summary").focus();
			}
		});
	}

	function detectOs() {
		var ua = navigator.userAgent || "";
		return /Mac|iPhone|iPad|iPod/i.test(ua) ? "mac"
			: /Win/i.test(ua) ? "windows"
			: null;
	}

	function isMobile() {
		var ua = navigator.userAgent || "";
		if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
		// iPadOS reports itself as a Mac.
		return /Mac/i.test(ua) && navigator.maxTouchPoints > 1;
	}

	function setupOsHighlight() {
		var os = detectOs();
		if (!os) return;
		document.querySelectorAll(".dl-card").forEach(function (card) {
			if (card.getAttribute("data-os") === os) {
				card.classList.add("is-preferred");
			}
		});
	}

	function setupStoreLinks() {
		if (detectOs() !== "windows" || isMobile()) return;
		document.querySelectorAll("[data-store-app]").forEach(function (a) {
			a.setAttribute("href", a.getAttribute("data-store-app"));
		});
		document.querySelectorAll(".dl-store-web").forEach(function (p) {
			p.hidden = false;
		});
	}

	function setupLightbox() {
		var dlg = document.getElementById("lightbox");
		var img = document.getElementById("lb-img");
		var cap = document.getElementById("lb-cap");
		var prevBtn = document.getElementById("lb-prev");
		var nextBtn = document.getElementById("lb-next");
		if (!dlg || !img) return;

		var shots = Array.prototype.slice.call(document.querySelectorAll(".shot"));
		var index = 0;

		function showAt(i) {
			if (!shots.length) return;
			index = (i + shots.length) % shots.length;
			var btn = shots[index];
			var label = btn.querySelector(".shot-cap");
			var text = label ? label.textContent : "";
			img.src = btn.getAttribute("data-full");
			img.alt = text;
			cap.textContent = text;
		}

		function openAt(i) {
			showAt(i);
			if (typeof dlg.showModal === "function") dlg.showModal();
		}

		shots.forEach(function (btn, i) {
			btn.addEventListener("click", function () {
				openAt(i);
			});
		});

		if (prevBtn) {
			prevBtn.addEventListener("click", function (ev) {
				ev.stopPropagation();
				showAt(index - 1);
			});
		}
		if (nextBtn) {
			nextBtn.addEventListener("click", function (ev) {
				ev.stopPropagation();
				showAt(index + 1);
			});
		}

		dlg.addEventListener("keydown", function (ev) {
			if (!dlg.open) return;
			if (ev.key === "ArrowLeft") {
				ev.preventDefault();
				showAt(index - 1);
			} else if (ev.key === "ArrowRight") {
				ev.preventDefault();
				showAt(index + 1);
			}
		});

		dlg.addEventListener("click", function (ev) {
			if (ev.target === dlg) dlg.close();
		});
	}

	var PLAY_WARNED_KEY = "noname-soccer-play-warned";

	function setupPlayWarning() {
		var dlg = document.getElementById("play-warn");
		if (!dlg || typeof dlg.showModal !== "function") return;

		var mobile = isMobile();
		dlg.classList.add(mobile ? "is-mobile" : "is-desktop");

		var os = detectOs();
		if (!mobile && os) {
			dlg.querySelectorAll(".pw-dl").forEach(function (a) {
				if (a.getAttribute("data-os") !== os) a.hidden = true;
			});
		}

		function warned() {
			try { return localStorage.getItem(PLAY_WARNED_KEY) === "1"; } catch (e) { return false; }
		}
		function rememberContinue() {
			try { localStorage.setItem(PLAY_WARNED_KEY, "1"); } catch (e) { /* ignore */ }
		}

		document.querySelectorAll("[data-play-link]").forEach(function (link) {
			var source = link.getAttribute("data-play-link") || "unknown";
			link.addEventListener("click", function (ev) {
				// New-tab clicks and returning visitors go straight to the game.
				if (ev.button !== 0 || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey || warned()) {
					track("play_browser", { source: source });
					return;
				}
				ev.preventDefault();
				track("play_warning_shown", { source: source });
				dlg.showModal();
			});
		});

		["pw-continue", "pw-continue-mobile"].forEach(function (id) {
			var a = document.getElementById(id);
			if (!a) return;
			a.addEventListener("click", function () {
				rememberContinue();
				track("play_browser", { source: "play_warning" });
			});
		});

		var all = document.getElementById("pw-all");
		if (all) all.addEventListener("click", function () { dlg.close(); });
		dlg.querySelectorAll(".pw-dl").forEach(function (a) {
			a.addEventListener("click", function () {
				track("download", { os: a.getAttribute("data-os"), channel: a.getAttribute("data-channel"), source: "play_warning" });
				dlg.close();
			});
		});

		dlg.addEventListener("click", function (ev) {
			if (ev.target === dlg) dlg.close();
		});
	}

	function setupTracking() {
		[["dl-win-store", "windows", "store"], ["dl-win", "windows", "zip"], ["dl-mac", "mac", "zip"]].forEach(function (link) {
			var a = document.getElementById(link[0]);
			if (a) a.addEventListener("click", function () {
				track("download", { os: link[1], channel: link[2], source: "download_section" });
			});
		});
		document.querySelectorAll(".trailer-link").forEach(function (a) {
			a.addEventListener("click", function () { track("trailer_link"); });
		});
	}

	function setupVoiceSamples() {
		var buttons = Array.prototype.slice.call(document.querySelectorAll(".voice-play"));
		var players = {};
		var current = null;

		function stop(btn) {
			var a = players[btn.getAttribute("data-voice")];
			if (a) {
				a.pause();
				a.currentTime = 0;
			}
			btn.setAttribute("aria-pressed", "false");
			if (current === btn) current = null;
		}

		buttons.forEach(function (btn) {
			btn.addEventListener("click", function () {
				var id = btn.getAttribute("data-voice");
				if (current === btn) {
					stop(btn);
					return;
				}
				if (current) stop(current);
				var a = players[id];
				if (!a) {
					a = new Audio(btn.getAttribute("data-src"));
					a.preload = "auto";
					a.addEventListener("ended", function () { stop(btn); });
					players[id] = a;
				}
				current = btn;
				btn.setAttribute("aria-pressed", "true");
				var p = a.play();
				if (p && p.catch) p.catch(function () { stop(btn); });
				track("voice_sample", { voice: id });
			});
		});
	}

	var COOKIE_OK_KEY = "noname-soccer-cookie-ok";

	function setupCookieBar() {
		var bar = document.getElementById("cookie-bar");
		if (!bar) return;
		try { if (localStorage.getItem(COOKIE_OK_KEY) === "1") return; } catch (e) { /* ignore */ }
		bar.hidden = false;
		bar.querySelector(".cookie-ok").addEventListener("click", function () {
			try { localStorage.setItem(COOKIE_OK_KEY, "1"); } catch (e) { /* ignore */ }
			bar.remove();
		});
	}

	function setupCopy() {
		var btn = document.getElementById("copy-xattr");
		var code = document.getElementById("xattr-cmd");
		if (!btn || !code) return;
		btn.addEventListener("click", function () {
			var text = code.textContent;
			var done = function () {
				var prev = btn.textContent;
				btn.textContent = btn.getAttribute("data-copied") || "Copied";
				setTimeout(function () { btn.textContent = prev; }, 1400);
			};
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(text).then(done).catch(function () {
					fallbackCopy(text, done);
				});
			} else {
				fallbackCopy(text, done);
			}
		});
	}

	function fallbackCopy(text, done) {
		var ta = document.createElement("textarea");
		ta.value = text;
		document.body.appendChild(ta);
		ta.select();
		try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
		document.body.removeChild(ta);
	}

	function cleanupRootServiceWorker() {
		if (!("serviceWorker" in navigator)) return;
		navigator.serviceWorker.getRegistrations().then(function (regs) {
			regs.forEach(function (reg) {
				var scope = reg.scope || "";
				var path = "/";
				try { path = new URL(scope).pathname; } catch (e) { path = scope; }
				if (path.indexOf("/play") !== -1) return;
				// Old game SW was registered at /noname-soccer/ (or site root in preview).
				var normalized = path.replace(/\/+$/, "") || "/";
				if (normalized === "/" || /\/noname-soccer$/i.test(normalized) || /\/mega-soccer$/i.test(normalized)) {
					reg.unregister();
				}
			});
		}).catch(function () { /* ignore */ });
	}

	function hideUnstampedVersion() {
		// publish_web.ps1 stamps the token; a local preview build has none to show.
		document.querySelectorAll(".version-num").forEach(function (el) {
			if (el.textContent.indexOf("__") === 0) {
				(el.closest(".version-tag, .dl-version") || el.parentElement).style.display = "none";
			}
		});
	}

	setupCookieBar();
	setupLangMenu();
	hideUnstampedVersion();
	setupOsHighlight();
	setupStoreLinks();
	setupLightbox();
	setupPlayWarning();
	setupTracking();
	setupVoiceSamples();
	setupCopy();
	cleanupRootServiceWorker();
}());
