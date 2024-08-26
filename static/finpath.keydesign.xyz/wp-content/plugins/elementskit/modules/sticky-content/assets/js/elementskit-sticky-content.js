! function() {
    var t = {
            264: function() {
                ! function(t, e) {
                    "use strict";
                    var i = function() {
                        e.hooks.addAction("frontend/element_ready/global", (function(t) {
                            var e = t.find("[data-ekit-sticky]");
                            if (e.length) return e.attr({
                                "data-element_type": t.data("element_type")
                            }).data({
                                id: t.data("id"),
                                widget_type: t.data("widget_type"),
                                settings: t.data("settings")
                            }), void new n({
                                $element: e
                            });
                            new n({
                                $element: t
                            })
                        }))
                    };
                    t(window).on("elementor/frontend/init", i);
                    var o = elementorModules.frontend.handlers.Base,
                        n = o.extend({
                            bindEvents: function() {
                                elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "ekit_sticky", "resize", this.run)
                            },
                            unbindEvents: function() {
                                elementorFrontend.removeListeners(this.getUniqueHandlerID() + "ekit_sticky", "resize", this.run)
                            },
                            isStickyOn: function() {
                                return undefined !== this.$element.data("ekit_sticky")
                            },
                            getResponsiveValue: function(t) {
                                var e = this.getElementSettings(),
                                    i = elementorFrontend.getCurrentDeviceMode();
                                return e[`${t}_${i}`] ? .size ? e[`${t}_${i}`] ? .size : e[t] ? .size
                            },
                            activate: function() {
                                var i = this.getElementSettings(),
                                    o = t("#" + i.ekit_sticky_until),
                                    n = {
                                        to: i.ekit_sticky,
                                        offset: this.getResponsiveValue("ekit_sticky_offset"),
                                        effectsOffset: this.getResponsiveValue("ekit_sticky_effect_offset"),
                                        classes: {
                                            sticky: "ekit-sticky",
                                            stickyActive: "ekit-sticky--active ekit-section--handles-inside",
                                            stickyEffects: "ekit-sticky--effects",
                                            spacer: "ekit-sticky__spacer"
                                        },
                                        stopAt: !!o.length && o
                                    },
                                    s = elementorFrontend.getElements("$wpAdminBar");
                                "column" === i.ekit_sticky && (n.to = "top", n.column = !0), "show_on_scroll_up" === i.ekit_sticky && (n.to = "top", n.isShowOnScrollUp = !0), i.ekit_sticky_parent && (n.parent = ".ekit-widget-wrap"), e.hooks.addFilter("frontend/handlers/menu_anchor/scroll_top_distance", (function(e) {
                                    var i = t(".elementor-top-section.ekit-sticky--active:visible");
                                    return i.length ? e - i.outerHeight() : e
                                })), s.length && "top" === i.ekit_sticky && "fixed" === s.css("position") && (n.offset += s.height()), this.$element.ekit_sticky(n)
                            },
                            deactivate: function() {
                                this.isStickyOn() && this.$element.ekit_sticky("destroy")
                            },
                            run: function(t) {
                                if (this.getElementSettings("ekit_sticky")) {
                                    var e = elementorFrontend.getCurrentDeviceMode();
                                    e === this.getElementSettings("ekit_sticky_on_" + e) ? !0 === t || this.isStickyOn() ? this.reactivate() : this.activate() : this.deactivate()
                                } else this.deactivate()
                            },
                            reactivate: function() {
                                this.deactivate(), this.activate()
                            },
                            onElementChange: function(t) {
                                -1 !== ["ekit_sticky", "ekit_sticky_on"].indexOf(t) && this.run(!0), -1 !== ["ekit_sticky_offset", "ekit_sticky_effect_offset", "ekit_sticky_parent", "ekit_sticky_until", "ekit_sticky_color"].indexOf(t) && this.reactivate()
                            },
                            onInit: function() {
                                o.prototype.onInit.apply(this, arguments), this.run()
                            },
                            onDestroy: function() {
                                o.prototype.onDestroy.apply(this, arguments), this.deactivate()
                            }
                        })
                }(jQuery, window.elementorFrontend)
            },
            95: function() {
                var t, e;
                t = jQuery, e = function(e, i) {
                    var o, n, s = !1,
                        r = !1,
                        c = !1,
                        a = {},
                        f = -1,
                        l = {
                            to: "top",
                            offset: 0,
                            effectsOffset: 0,
                            parent: !1,
                            classes: {
                                sticky: "ekit-sticky",
                                stickyActive: "ekit-sticky-active",
                                stickyEffects: "ekit-sticky-effects",
                                spacer: "ekit-sticky-spacer",
                                up: "ekit-sticky--up",
                                down: "ekit-sticky--down"
                            }
                        },
                        p = function(t, e, i) {
                            var o = {},
                                n = t[0].style;
                            i.forEach((function(t) {
                                o[t] = undefined !== n[t] ? n[t] : ""
                            })), t.data("css-backup-" + e, o)
                        },
                        d = function(t, e) {
                            return t.data("css-backup-" + e)
                        },
                        u = function() {
                            p(o, "unsticky", ["position", "width", "margin-top", "margin-bottom", "top", "bottom"]);
                            var t = {
                                position: "fixed",
                                width: y(o, "width"),
                                marginTop: 0,
                                marginBottom: 0
                            };
                            t[n.to] = n.offset + "px", t["top" === n.to ? "bottom" : "top"] = "", o.css(t).addClass(n.classes.stickyActive)
                        },
                        k = function() {
                            o.css(d(o, "unsticky")).removeClass(n.classes.stickyActive)
                        },
                        y = function(t, e, i) {
                            var o = getComputedStyle(t[0]),
                                n = parseFloat(o[e]),
                                s = "height" === e ? ["top", "bottom"] : ["left", "right"],
                                r = [];
                            return "border-box" !== o.boxSizing && r.push("border", "padding"), i && r.push("margin"), r.forEach((function(t) {
                                s.forEach((function(e) {
                                    n += parseFloat(o[t + "-" + e])
                                }))
                            })), n
                        },
                        m = function(t) {
                            var e = a.$window.scrollTop(),
                                i = y(t, "height"),
                                o = innerHeight,
                                n = t.offset().top - e,
                                s = n - o;
                            return {
                                top: {
                                    fromTop: n,
                                    fromBottom: s
                                },
                                bottom: {
                                    fromTop: n + i,
                                    fromBottom: s + i
                                }
                            }
                        },
                        h = function() {
                            a.$spacer = o.clone().addClass(n.classes.spacer).css({
                                visibility: "hidden",
                                transition: "none",
                                animation: "none"
                            }), o.after(a.$spacer), u(), s = !0, o.trigger("sticky:stick")
                        },
                        v = function() {
                            k(), a.$spacer.remove(), s = !1, o[0].style.transform = null, o.trigger("sticky:unstick")
                        },
                        g = function() {
                            var t = m(o),
                                e = "top" === n.to;
                            if (r)(e ? t.top.fromTop > n.offset : t.bottom.fromBottom < -n.offset) && (a.$parent.css(d(a.$parent, "childNotFollowing")), o.css(d(o, "notFollowing")), r = !1);
                            else {
                                var i = m(a.$parent),
                                    s = getComputedStyle(a.$parent[0]),
                                    c = parseFloat(s[e ? "borderBottomWidth" : "borderTopWidth"]),
                                    f = e ? i.bottom.fromTop - c : i.top.fromBottom + c;
                                (e ? f <= t.bottom.fromTop : f >= t.top.fromBottom) && function() {
                                    p(a.$parent, "childNotFollowing", ["position"]), a.$parent.css("position", "relative"), p(o, "notFollowing", ["position", "top", "bottom"]);
                                    var t = {
                                        position: "absolute"
                                    };
                                    t[n.to] = "", t["top" === n.to ? "bottom" : "top"] = 0, o.css(t), r = !0
                                }()
                            }
                        },
                        _ = function() {
                            var t, e = n.offset;
                            if (n.stopAt || n.column) {
                                var i = o[0],
                                    r = n.stopAt || o.parent(),
                                    f = r.offset().top,
                                    l = r[0].clientHeight - i.clientHeight,
                                    p = this.scrollY - f + n.offset,
                                    d = p >= l;
                                if ("bottom" === n.to && (l = f - (this.innerHeight - i.clientHeight), d = (p = this.scrollY + n.offset) <= l, i.clientHeight), d && n.column && "widget" === i.dataset.element_type) return s && v(), void(i.style.transform = "translateY(" + l + "px)");
                                i.style.transform = null
                            }
                            if (s) {
                                var u = m(a.$spacer);
                                t = "top" === n.to ? u.top.fromTop - e : -u.bottom.fromBottom - e, n.parent && g(), t > 0 && v()
                            } else {
                                var k = m(o);
                                (t = "top" === n.to ? k.top.fromTop - e : -k.bottom.fromBottom - e) <= 0 && (h(), n.parent && g())
                            }(n.stopAt || n.column) && d && n.stopAt && (p = "top" === n.to ? -(p - l) : l - p, i.style.transform = "translateY(" + p + "px)"),
                                function(t) {
                                    c && -t < n.effectsOffset ? (o.removeClass(n.classes.stickyEffects), c = !1) : !c && -t >= n.effectsOffset && (o.addClass(n.classes.stickyEffects), c = !0)
                                }(t), w()
                        },
                        w = function() {
                            n.isShowOnScrollUp && -1 != f && (f > window.scrollY ? o.addClass(n.classes.up).removeClass(n.classes.down) : o.addClass(n.classes.down).removeClass(n.classes.up)), f = window.scrollY
                        },
                        b = function() {
                            _()
                        },
                        $ = function() {
                            s && (k(), u())
                        };
                    this.destroy = function() {
                        s && v(), a.$window.off("scroll", b).off("resize", $), o.removeClass(n.classes.sticky)
                    }, n = jQuery.extend(!0, l, i), o = t(e).addClass(n.classes.sticky), a.$window = t(window), n.parent && ("parent" === n.parent ? a.$parent = o.parent() : a.$parent = o.closest(n.parent)), a.$window.on({
                        scroll: b,
                        resize: $
                    }), _()
                }, t.fn.ekit_sticky = function(i) {
                    var o = "string" == typeof i;
                    return this.each((function() {
                        var n = t(this);
                        if (o) {
                            var s = n.data("ekit_sticky");
                            if (!s) throw Error("Trying to perform the `" + i + "` method prior to initialization");
                            if (!s[i]) throw ReferenceError("Method `" + i + "` not found in sticky instance");
                            s[i].apply(s, Array.prototype.slice.call(arguments, 1)), "destroy" === i && n.removeData("ekit_sticky")
                        } else n.data("ekit_sticky", new e(this, i))
                    })), this
                }, window.EkitSticky = e
            }
        },
        e = {};

    function i(o) {
        var n = e[o];
        if (n !== undefined) return n.exports;
        var s = e[o] = {
            exports: {}
        };
        return t[o](s, s.exports, i), s.exports
    }
    i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return i.d(e, {
                a: e
            }), e
        }, i.d = function(t, e) {
            for (var o in e) i.o(e, o) && !i.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            })
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";
            i(95), i(264)
        }()
}();