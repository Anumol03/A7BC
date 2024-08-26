! function(n, o) {
    "use strict";
    n("[data-wrapper-link]").on("click", (function(o) {
        let e = n(this).data("wrapper-link"),
            t = function(n) {
                try {
                    let o = new URL(n.url);
                    if ("http:" !== o.protocol && "https:" !== o.protocol) throw new Error("Invalid protocol. Only HTTP and HTTPS are allowed.");
                    return o.toString()
                } catch (o) {
                    return console.error("Invalid URL provided:", o.message), null
                }
            }(e);
        t ? e.is_external ? window.open(t, "_blank") : window.open(t, "_self") : console.log("URL was invalid and could not be sanitized.")
    }))
}(jQuery, window.elementorFrontend);