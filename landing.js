(function () {
	"use strict";

	var I18N = {
		tr: {
			page_title: "Noname Soccer — Ücretsiz arcade futbol",
			meta_desc: "Ücretsiz arcade 11v11 futbol. Futbol oyna, yönetme. Tarayıcıda veya Windows ve macOS'ta, hesap gerekmez.",
			skip: "İçeriğe atla",
			nav_trailer: "Fragman",
			nav_download: "İndir",
			nav_controls: "Kontroller",
			eyebrow: "Arcade 11 v 11",
			tagline: "Futbol oyna. Yönetme.",
			lede: "Tam saha, sevimli oyuncular, düzgün kurallar. Özellik yok, stamina çubuğu yok, taktik kaydırıcısı yok — sadece maç.",
			cta_play: "Tarayıcıda dene",
			cta_download: "İndir",
			cta_trailer: "Fragmanı izle",
			free_badge: "Ücretsiz",
			free_note: "Hesap gerekmez — hemen oyna.",
			mobile_note: "En iyisi masaüstünde klavye veya gamepad ile.",
			version: "Sürüm",
			dl_version: "Son sürüm",
			trailer_title: "Fragman",
			trailer_lead: "Saha, oyuncular ve arcade maç gününe kısa bir bakış.",
			shots_title: "Sahada",
			shots_lead: "Gol ara ekranları, nostaljik sevinçler, penaltı atışları ve kar — bir arcade paketinde bütün maç günü.",
			cap_match: "Maç görünümü",
			cap_free_kick: "Serbest vuruş",
			cap_goal: "Gol ara ekranları",
			cap_train: "Nostaljik sevinçler",
			cap_shootout: "Penaltı atışları",
			cap_snow: "Kar",
			dl_title: "İndir",
			dl_lead: "Ücretsiz taşınabilir sürümler — zip'i aç ve oyna. Kurulum yok. Ayarlar kullanıcı profilinde kalır.",
			dl_win_meta: "x64 · ~95 MB zip · tek .exe",
			dl_win_btn: "Windows için indir",
			dl_win_1: "Herhangi bir yere aç ve NonameSoccer.exe'yi çalıştır.",
			dl_win_2: "SmartScreen uyarırsa: More info → Run anyway.",
			dl_mac_meta: "Universal · ~120 MB zip · Apple Silicon + Intel",
			dl_mac_btn: "macOS için indir",
			dl_mac_1: "Zip'i aç, uygulamaya Control-tıkla → Open → Open.",
			dl_mac_2: "macOS bozuk derse Terminal'de şunu çalıştır:",
			copy: "Kopyala",
			dl_or: "Kurulum istemiyor musun?",
			dl_browser_link: "Tarayıcıda dene",
			ctl_title: "Kontroller",
			ctl_lead: "Küçük bir set. Klavye ve gamepad'de aynı eylemler.",
			ctl_action: "Eylem",
			ctl_keys: "Klavye",
			ctl_pad: "Gamepad",
			ctl_move: "Hareket",
			ctl_shoot: "Şut / baskı",
			ctl_pass: "Pas",
			ctl_through: "Ara pas",
			ctl_lob: "Lob / kayma",
			ctl_skill: "Skill / kalkan (top sendeyken)",
			ctl_switch: "Oyuncu değiştir (top sende değilken)",
			ctl_cam: "Kamera",
			ctl_pause: "Duraklat",
			phil_title: "Futbol oyna, yönetme",
			phil_lead: "Tek üstünlük daha iyi oynamaktır. Hiçbir menü ayarı veya meta-strateji başlamadan önce kimseyi önde bırakmaz.",
			phil_1_t: "Herkes eşit",
			phil_1_b: "Hız, şut veya boy istatistiği yok. Forma numaraları 1–11 yalnızca kimlik.",
			phil_2_t: "Kondisyon sistemi yok",
			phil_2_b: "Maçı değiştiren stamina, form, moral veya sakatlık yok.",
			phil_3_t: "İlerleme yok, parayla üstünlük yok",
			phil_3_b: "XP, seviye veya yükseltme yok; kazanmana yardım eden satılık hiçbir şey yok. Uzun süre oynayan daha iyi oynadığı için daha iyidir.",
			phil_4_t: "Taktik yönetimi yok",
			phil_4_b: "Kaydırıcı veya talimat yok. Birkaç dengeli diziliş, maç için kilitli.",
			phil_5_t: "Gizli etki yok",
			phil_5_b: "Momentum senaryosu veya iç saha avantajı yok. Yağmurda top yalnızca biraz daha uzağa gider ve biraz daha alçak seker, iki taraf için de aynı.",
			phil_6_t: "Küçük kontrol seti",
			phil_6_b: "Hareket, pas, ara pas, lob, şut, skill, değiştir. Başlık → takım seç → başla.",
			phil_diff: "Zorluk yalnızca CPU'nun ne kadar iyi karar verdiğini değiştirir — fiziği değil, takım arkadaşlarını değil.",
			foot_line: "Ücretsiz, bağımsız arcade futbol. Yalnızca özgün takım adları — gerçek kulüp veya oyuncu yok.",
			foot_fonts: "Fontlar: Russo One ve Barlow (OFL).",
			copied: "Kopyalandı",
			lb_prev: "Önceki ekran görüntüsü",
			lb_next: "Sonraki ekran görüntüsü",
			pw_title: "Tarayıcı sürümü daha yavaş",
			pw_body: "En akıcı maç için ücretsiz masaüstü sürümünü indir. Tarayıcıda da oynayabilirsin ama kare hızı düşebilir.",
			pw_continue: "Yine de tarayıcıda oyna",
			pw_all: "Tüm indirme seçenekleri",
			pw_close: "Kapat",
			pw_mobile_title: "En iyisi masaüstünde",
			pw_mobile_body: "Noname Soccer klavye veya gamepad ister ve telefon ile tablette yavaş çalışır. Oynamak için bu sayfayı bir bilgisayarda aç.",
			pw_try_anyway: "Yine de dene"
		},
		en: {
			page_title: "Noname Soccer — Free arcade football",
			meta_desc: "Free arcade 11v11 soccer. Play football, don't manage it. In the browser or on Windows and macOS, no account needed.",
			skip: "Skip to content",
			nav_trailer: "Trailer",
			nav_download: "Download",
			nav_controls: "Controls",
			eyebrow: "Arcade 11 v 11",
			tagline: "Play football. Don't manage it.",
			lede: "Full pitch, cute players, honest rules. No attributes, no stamina bars, no tactics sliders — just the match.",
			cta_play: "Try in browser",
			cta_download: "Download",
			cta_trailer: "Watch the trailer",
			free_badge: "Free",
			free_note: "No account needed — just play.",
			mobile_note: "Best on desktop with keyboard or gamepad.",
			version: "Version",
			dl_version: "Latest version",
			trailer_title: "Trailer",
			trailer_lead: "A quick look at the pitch, the players, and the arcade match day.",
			shots_title: "On the pitch",
			shots_lead: "Goal cut-ins, retro celebrations, penalty shootouts and snow — the whole match day in one arcade package.",
			cap_match: "Match view",
			cap_free_kick: "Free kick",
			cap_goal: "Goal cut-ins",
			cap_train: "Retro celebrations",
			cap_shootout: "Penalty shootout",
			cap_snow: "Snow",
			dl_title: "Download",
			dl_lead: "Free portable builds — unzip and play. No installer. Settings live in your user profile.",
			dl_win_meta: "x64 · ~95 MB zip · single .exe",
			dl_win_btn: "Download for Windows",
			dl_win_1: "Unzip anywhere and run NonameSoccer.exe.",
			dl_win_2: "If SmartScreen warns: More info → Run anyway.",
			dl_mac_meta: "Universal · ~120 MB zip · Apple Silicon + Intel",
			dl_mac_btn: "Download for macOS",
			dl_mac_1: "Unzip, then Control-click the app → Open → Open.",
			dl_mac_2: "If macOS says it is damaged, run this in Terminal:",
			copy: "Copy",
			dl_or: "Prefer zero install?",
			dl_browser_link: "Try it in the browser",
			ctl_title: "Controls",
			ctl_lead: "A small set. Same actions on keyboard and gamepad.",
			ctl_action: "Action",
			ctl_keys: "Keyboard",
			ctl_pad: "Gamepad",
			ctl_move: "Move",
			ctl_shoot: "Shoot / press",
			ctl_pass: "Pass",
			ctl_through: "Through pass",
			ctl_lob: "Lob / slide",
			ctl_skill: "Skill / shield (with the ball)",
			ctl_switch: "Switch player (without the ball)",
			ctl_cam: "Camera",
			ctl_pause: "Pause",
			phil_title: "Play football, don't manage it",
			phil_lead: "The only edge is playing better. No menu setting or meta-strategy puts anyone ahead before kickoff.",
			phil_1_t: "Equal players",
			phil_1_b: "No pace, shooting or height stats. Shirt numbers 1–11 are identity only.",
			phil_2_t: "No condition systems",
			phil_2_b: "No stamina, form, morale or injuries that change how the match plays.",
			phil_3_t: "No progression, no pay-to-win",
			phil_3_b: "No XP, levels or upgrades, and nothing to buy that helps you win. A long-time player is better only because they play better.",
			phil_4_t: "No tactics management",
			phil_4_b: "No sliders or instructions. A few balanced formations, locked for the match.",
			phil_5_t: "No hidden modifiers",
			phil_5_b: "No momentum scripting or home advantage. Rain only lets the ball run a touch further and bounce a touch lower, for both sides alike.",
			phil_6_t: "Small control set",
			phil_6_b: "Move, pass, through, lob, shoot, skill, switch. Title → pick teams → kick off.",
			phil_diff: "Difficulty only changes how well the CPU decides — never the physics, never your teammates.",
			foot_line: "Free, independent arcade football. Original team names only — no real clubs or players.",
			foot_fonts: "Fonts: Russo One & Barlow (OFL).",
			copied: "Copied",
			lb_prev: "Previous screenshot",
			lb_next: "Next screenshot",
			pw_title: "The browser version runs slower",
			pw_body: "For the smoothest match, download the free desktop build. You can still play in the browser, but the frame rate may drop.",
			pw_continue: "Play in the browser anyway",
			pw_all: "All download options",
			pw_close: "Close",
			pw_mobile_title: "Best played on a desktop",
			pw_mobile_body: "Noname Soccer needs a keyboard or gamepad and runs slowly on phones and tablets. Open this page on a computer to play.",
			pw_try_anyway: "Try anyway"
		}
	};

	var LANG_KEY = "noname-soccer-lang";
	var lang = "en";

	function detectLang() {
		try {
			var q = new URLSearchParams(window.location.search).get("lang");
			if (q === "tr" || q === "en") return q;
		} catch (e) { /* ignore */ }
		try {
			var saved = localStorage.getItem(LANG_KEY);
			if (saved === "tr" || saved === "en") return saved;
		} catch (e) { /* ignore */ }
		var nav = (navigator.language || "en").toLowerCase();
		return nav.indexOf("tr") === 0 ? "tr" : "en";
	}

	function applyLang(next) {
		lang = next;
		var dict = I18N[lang] || I18N.en;
		document.documentElement.lang = lang;
		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (dict[key] != null) el.textContent = dict[key];
		});
		document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-aria");
			if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
		});
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
		});
		try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
		if (dict.page_title) document.title = dict.page_title;
		var meta = document.querySelector('meta[name="description"]');
		if (meta && dict.meta_desc) meta.setAttribute("content", dict.meta_desc);
	}

	function setupLang() {
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.addEventListener("click", function () {
				applyLang(btn.getAttribute("data-lang"));
			});
		});
		applyLang(detectLang());
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
			var full = btn.getAttribute("data-full");
			var key = btn.getAttribute("data-caption-key");
			var dict = I18N[lang] || I18N.en;
			img.src = full;
			img.alt = dict[key] || "";
			cap.textContent = dict[key] || "";
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
			link.addEventListener("click", function (ev) {
				// New-tab clicks and returning visitors go straight to the game.
				if (ev.button !== 0 || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return;
				if (warned()) return;
				ev.preventDefault();
				dlg.showModal();
			});
		});

		["pw-continue", "pw-continue-mobile"].forEach(function (id) {
			var a = document.getElementById(id);
			if (a) a.addEventListener("click", rememberContinue);
		});

		var all = document.getElementById("pw-all");
		if (all) all.addEventListener("click", function () { dlg.close(); });
		dlg.querySelectorAll(".pw-dl").forEach(function (a) {
			a.addEventListener("click", function () { dlg.close(); });
		});

		dlg.addEventListener("click", function (ev) {
			if (ev.target === dlg) dlg.close();
		});
	}

	function setupCopy() {
		var btn = document.getElementById("copy-xattr");
		var code = document.getElementById("xattr-cmd");
		if (!btn || !code) return;
		btn.addEventListener("click", function () {
			var text = code.textContent;
			var done = function () {
				var dict = I18N[lang] || I18N.en;
				var prev = btn.textContent;
				btn.textContent = dict.copied || "Copied";
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
		// publish_web.ps1 replaces the token; the raw misc/landing copy has none to show.
		document.querySelectorAll(".version-num").forEach(function (el) {
			if (el.textContent.indexOf("__") === 0) {
				(el.closest(".version-tag, .dl-version") || el.parentElement).style.display = "none";
			}
		});
	}

	setupLang();
	hideUnstampedVersion();
	setupOsHighlight();
	setupLightbox();
	setupPlayWarning();
	setupCopy();
	cleanupRootServiceWorker();
}());
