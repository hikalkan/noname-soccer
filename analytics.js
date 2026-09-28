// Google Analytics 4 (gtag.js). The tag loads only on the live site so local previews stay out of the stats;
// elsewhere gtag() just queues into dataLayer and nothing is sent.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

(function () {
	var ID = "G-S97V2HGG4T";
	var host = window.location.hostname;
	if (host !== "nonamesoccer.com" && host !== "www.nonamesoccer.com") return;
	var s = document.createElement("script");
	s.async = true;
	s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
	document.head.appendChild(s);
	gtag("js", new Date());
	gtag("config", ID);
}());
