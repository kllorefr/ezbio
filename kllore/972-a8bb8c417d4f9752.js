(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [972],
    {
        2962: function (t, e, r) {
            "use strict";
            r.d(e, {
                PB: function () {
                    return d;
                },
            });
            var n = r(7294),
                i = r(9008),
                o = r.n(i);
            function s() {
                return (s = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var r = arguments[e];
                              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                          }
                          return t;
                      }).apply(this, arguments);
            }
            function a(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    i = {},
                    o = Object.keys(t);
                for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                return i;
            }
            var l = ["keyOverride"],
                u = ["crossOrigin"],
                h = { templateTitle: "", noindex: !1, nofollow: !1, norobots: !1, defaultOpenGraphImageWidth: 0, defaultOpenGraphImageHeight: 0, defaultOpenGraphVideoWidth: 0, defaultOpenGraphVideoHeight: 0 },
                c = function (t, e, r) {
                    void 0 === e && (e = []);
                    var i = void 0 === r ? {} : r,
                        o = i.defaultWidth,
                        s = i.defaultHeight;
                    return e.reduce(function (e, r, i) {
                        return (
                            e.push(n.createElement("meta", { key: "og:" + t + ":0" + i, property: "og:" + t, content: r.url })),
                            r.alt && e.push(n.createElement("meta", { key: "og:" + t + ":alt0" + i, property: "og:" + t + ":alt", content: r.alt })),
                            r.secureUrl && e.push(n.createElement("meta", { key: "og:" + t + ":secure_url0" + i, property: "og:" + t + ":secure_url", content: r.secureUrl.toString() })),
                            r.type && e.push(n.createElement("meta", { key: "og:" + t + ":type0" + i, property: "og:" + t + ":type", content: r.type.toString() })),
                            r.width
                                ? e.push(n.createElement("meta", { key: "og:" + t + ":width0" + i, property: "og:" + t + ":width", content: r.width.toString() }))
                                : o && e.push(n.createElement("meta", { key: "og:" + t + ":width0" + i, property: "og:" + t + ":width", content: o.toString() })),
                            r.height
                                ? e.push(n.createElement("meta", { key: "og:" + t + ":height" + i, property: "og:" + t + ":height", content: r.height.toString() }))
                                : s && e.push(n.createElement("meta", { key: "og:" + t + ":height" + i, property: "og:" + t + ":height", content: s.toString() })),
                            e
                        );
                    }, []);
                },
                p = function (t) {
                    var e,
                        r,
                        i,
                        o,
                        p,
                        f = [];
                    t.titleTemplate && (h.templateTitle = t.titleTemplate);
                    var d = "";
                    t.title
                        ? ((d = t.title),
                          h.templateTitle &&
                              (d = h.templateTitle.replace(/%s/g, function () {
                                  return d;
                              })))
                        : t.defaultTitle && (d = t.defaultTitle),
                        d && f.push(n.createElement("title", { key: "title" }, d));
                    var m = void 0 === t.noindex ? h.noindex || t.dangerouslySetAllPagesToNoIndex : t.noindex,
                        g = void 0 === t.nofollow ? h.nofollow || t.dangerouslySetAllPagesToNoFollow : t.nofollow,
                        y = t.norobots || h.norobots,
                        v = "";
                    if (t.robotsProps) {
                        var b = t.robotsProps,
                            w = b.nosnippet,
                            x = b.maxSnippet,
                            E = b.maxImagePreview,
                            A = b.maxVideoPreview,
                            T = b.noarchive,
                            P = b.noimageindex,
                            S = b.notranslate,
                            k = b.unavailableAfter;
                        v =
                            (w ? ",nosnippet" : "") +
                            (x ? ",max-snippet:" + x : "") +
                            (E ? ",max-image-preview:" + E : "") +
                            (T ? ",noarchive" : "") +
                            (k ? ",unavailable_after:" + k : "") +
                            (P ? ",noimageindex" : "") +
                            (A ? ",max-video-preview:" + A : "") +
                            (S ? ",notranslate" : "");
                    }
                    if (
                        (t.norobots && (h.norobots = !0),
                        m || g
                            ? (t.dangerouslySetAllPagesToNoIndex && (h.noindex = !0),
                              t.dangerouslySetAllPagesToNoFollow && (h.nofollow = !0),
                              f.push(n.createElement("meta", { key: "robots", name: "robots", content: (m ? "noindex" : "index") + "," + (g ? "nofollow" : "follow") + v })))
                            : (!y || v) && f.push(n.createElement("meta", { key: "robots", name: "robots", content: "index,follow" + v })),
                        t.description && f.push(n.createElement("meta", { key: "description", name: "description", content: t.description })),
                        t.themeColor && f.push(n.createElement("meta", { key: "theme-color", name: "theme-color", content: t.themeColor })),
                        t.mobileAlternate && f.push(n.createElement("link", { rel: "alternate", key: "mobileAlternate", media: t.mobileAlternate.media, href: t.mobileAlternate.href })),
                        t.languageAlternates &&
                            t.languageAlternates.length > 0 &&
                            t.languageAlternates.forEach(function (t) {
                                f.push(n.createElement("link", { rel: "alternate", key: "languageAlternate-" + t.hrefLang, hrefLang: t.hrefLang, href: t.href }));
                            }),
                        t.twitter &&
                            (t.twitter.cardType && f.push(n.createElement("meta", { key: "twitter:card", name: "twitter:card", content: t.twitter.cardType })),
                            t.twitter.site && f.push(n.createElement("meta", { key: "twitter:site", name: "twitter:site", content: t.twitter.site })),
                            t.twitter.handle && f.push(n.createElement("meta", { key: "twitter:creator", name: "twitter:creator", content: t.twitter.handle }))),
                        t.facebook && t.facebook.appId && f.push(n.createElement("meta", { key: "fb:app_id", property: "fb:app_id", content: t.facebook.appId })),
                        ((null != (e = t.openGraph) && e.title) || d) && f.push(n.createElement("meta", { key: "og:title", property: "og:title", content: (null == (o = t.openGraph) ? void 0 : o.title) || d })),
                        ((null != (r = t.openGraph) && r.description) || t.description) &&
                            f.push(n.createElement("meta", { key: "og:description", property: "og:description", content: (null == (p = t.openGraph) ? void 0 : p.description) || t.description })),
                        t.openGraph)
                    ) {
                        if (((t.openGraph.url || t.canonical) && f.push(n.createElement("meta", { key: "og:url", property: "og:url", content: t.openGraph.url || t.canonical })), t.openGraph.type)) {
                            var C = t.openGraph.type.toLowerCase();
                            f.push(n.createElement("meta", { key: "og:type", property: "og:type", content: C })),
                                "profile" === C && t.openGraph.profile
                                    ? (t.openGraph.profile.firstName && f.push(n.createElement("meta", { key: "profile:first_name", property: "profile:first_name", content: t.openGraph.profile.firstName })),
                                      t.openGraph.profile.lastName && f.push(n.createElement("meta", { key: "profile:last_name", property: "profile:last_name", content: t.openGraph.profile.lastName })),
                                      t.openGraph.profile.username && f.push(n.createElement("meta", { key: "profile:username", property: "profile:username", content: t.openGraph.profile.username })),
                                      t.openGraph.profile.gender && f.push(n.createElement("meta", { key: "profile:gender", property: "profile:gender", content: t.openGraph.profile.gender })))
                                    : "book" === C && t.openGraph.book
                                    ? (t.openGraph.book.authors &&
                                          t.openGraph.book.authors.length &&
                                          t.openGraph.book.authors.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "book:author:0" + e, property: "book:author", content: t }));
                                          }),
                                      t.openGraph.book.isbn && f.push(n.createElement("meta", { key: "book:isbn", property: "book:isbn", content: t.openGraph.book.isbn })),
                                      t.openGraph.book.releaseDate && f.push(n.createElement("meta", { key: "book:release_date", property: "book:release_date", content: t.openGraph.book.releaseDate })),
                                      t.openGraph.book.tags &&
                                          t.openGraph.book.tags.length &&
                                          t.openGraph.book.tags.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "book:tag:0" + e, property: "book:tag", content: t }));
                                          }))
                                    : "article" === C && t.openGraph.article
                                    ? (t.openGraph.article.publishedTime && f.push(n.createElement("meta", { key: "article:published_time", property: "article:published_time", content: t.openGraph.article.publishedTime })),
                                      t.openGraph.article.modifiedTime && f.push(n.createElement("meta", { key: "article:modified_time", property: "article:modified_time", content: t.openGraph.article.modifiedTime })),
                                      t.openGraph.article.expirationTime && f.push(n.createElement("meta", { key: "article:expiration_time", property: "article:expiration_time", content: t.openGraph.article.expirationTime })),
                                      t.openGraph.article.authors &&
                                          t.openGraph.article.authors.length &&
                                          t.openGraph.article.authors.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "article:author:0" + e, property: "article:author", content: t }));
                                          }),
                                      t.openGraph.article.section && f.push(n.createElement("meta", { key: "article:section", property: "article:section", content: t.openGraph.article.section })),
                                      t.openGraph.article.tags &&
                                          t.openGraph.article.tags.length &&
                                          t.openGraph.article.tags.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "article:tag:0" + e, property: "article:tag", content: t }));
                                          }))
                                    : ("video.movie" === C || "video.episode" === C || "video.tv_show" === C || "video.other" === C) &&
                                      t.openGraph.video &&
                                      (t.openGraph.video.actors &&
                                          t.openGraph.video.actors.length &&
                                          t.openGraph.video.actors.forEach(function (t, e) {
                                              t.profile && f.push(n.createElement("meta", { key: "video:actor:0" + e, property: "video:actor", content: t.profile })),
                                                  t.role && f.push(n.createElement("meta", { key: "video:actor:role:0" + e, property: "video:actor:role", content: t.role }));
                                          }),
                                      t.openGraph.video.directors &&
                                          t.openGraph.video.directors.length &&
                                          t.openGraph.video.directors.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "video:director:0" + e, property: "video:director", content: t }));
                                          }),
                                      t.openGraph.video.writers &&
                                          t.openGraph.video.writers.length &&
                                          t.openGraph.video.writers.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "video:writer:0" + e, property: "video:writer", content: t }));
                                          }),
                                      t.openGraph.video.duration && f.push(n.createElement("meta", { key: "video:duration", property: "video:duration", content: t.openGraph.video.duration.toString() })),
                                      t.openGraph.video.releaseDate && f.push(n.createElement("meta", { key: "video:release_date", property: "video:release_date", content: t.openGraph.video.releaseDate })),
                                      t.openGraph.video.tags &&
                                          t.openGraph.video.tags.length &&
                                          t.openGraph.video.tags.forEach(function (t, e) {
                                              f.push(n.createElement("meta", { key: "video:tag:0" + e, property: "video:tag", content: t }));
                                          }),
                                      t.openGraph.video.series && f.push(n.createElement("meta", { key: "video:series", property: "video:series", content: t.openGraph.video.series })));
                        }
                        t.defaultOpenGraphImageWidth && (h.defaultOpenGraphImageWidth = t.defaultOpenGraphImageWidth),
                            t.defaultOpenGraphImageHeight && (h.defaultOpenGraphImageHeight = t.defaultOpenGraphImageHeight),
                            t.openGraph.images && t.openGraph.images.length && f.push.apply(f, c("image", t.openGraph.images, { defaultWidth: h.defaultOpenGraphImageWidth, defaultHeight: h.defaultOpenGraphImageHeight })),
                            t.defaultOpenGraphVideoWidth && (h.defaultOpenGraphVideoWidth = t.defaultOpenGraphVideoWidth),
                            t.defaultOpenGraphVideoHeight && (h.defaultOpenGraphVideoHeight = t.defaultOpenGraphVideoHeight),
                            t.openGraph.videos && t.openGraph.videos.length && f.push.apply(f, c("video", t.openGraph.videos, { defaultWidth: h.defaultOpenGraphVideoWidth, defaultHeight: h.defaultOpenGraphVideoHeight })),
                            t.openGraph.audio && f.push.apply(f, c("audio", t.openGraph.audio)),
                            t.openGraph.locale && f.push(n.createElement("meta", { key: "og:locale", property: "og:locale", content: t.openGraph.locale })),
                            (t.openGraph.siteName || t.openGraph.site_name) && f.push(n.createElement("meta", { key: "og:site_name", property: "og:site_name", content: t.openGraph.siteName || t.openGraph.site_name }));
                    }
                    return (
                        t.canonical && f.push(n.createElement("link", { rel: "canonical", href: t.canonical, key: "canonical" })),
                        t.additionalMetaTags &&
                            t.additionalMetaTags.length > 0 &&
                            t.additionalMetaTags.forEach(function (t) {
                                var e,
                                    r,
                                    i = t.keyOverride,
                                    o = a(t, l);
                                f.push(n.createElement("meta", s({ key: "meta:" + (null != (e = null != (r = null != i ? i : o.name) ? r : o.property) ? e : o.httpEquiv) }, o)));
                            }),
                        null != (i = t.additionalLinkTags) &&
                            i.length &&
                            t.additionalLinkTags.forEach(function (t) {
                                var e,
                                    r = t.crossOrigin,
                                    i = a(t, u);
                                f.push(n.createElement("link", s({ key: "link" + (null != (e = i.keyOverride) ? e : i.href) + i.rel }, i, { crossOrigin: "anonymous" === r || "use-credentials" === r || "" === r ? r : void 0 })));
                            }),
                        f
                    );
                },
                f = function (t) {
                    return n.createElement(o(), null, p(t));
                },
                d = function (t) {
                    var e = t.title,
                        r = t.themeColor,
                        i = t.noindex,
                        o = t.nofollow,
                        s = t.robotsProps,
                        a = t.description,
                        l = t.canonical,
                        u = t.openGraph,
                        h = t.facebook,
                        c = t.twitter,
                        p = t.additionalMetaTags,
                        d = t.titleTemplate,
                        m = t.defaultTitle,
                        g = t.mobileAlternate,
                        y = t.languageAlternates,
                        v = t.additionalLinkTags;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(f, {
                            title: e,
                            themeColor: r,
                            noindex: i,
                            nofollow: o,
                            robotsProps: s,
                            description: a,
                            canonical: l,
                            facebook: h,
                            openGraph: u,
                            additionalMetaTags: p,
                            twitter: c,
                            titleTemplate: d,
                            defaultTitle: m,
                            mobileAlternate: g,
                            languageAlternates: y,
                            additionalLinkTags: v,
                        })
                    );
                };
            RegExp("[" + Object.keys(Object.freeze({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })).join("") + "]", "g");
        },
        1876: function (t) {
            !(function () {
                var e = {
                        675: function (t, e) {
                            "use strict";
                            (e.byteLength = function (t) {
                                var e = l(t),
                                    r = e[0],
                                    n = e[1];
                                return ((r + n) * 3) / 4 - n;
                            }),
                                (e.toByteArray = function (t) {
                                    var e,
                                        r,
                                        o = l(t),
                                        s = o[0],
                                        a = o[1],
                                        u = new i(((s + a) * 3) / 4 - a),
                                        h = 0,
                                        c = a > 0 ? s - 4 : s;
                                    for (r = 0; r < c; r += 4)
                                        (e = (n[t.charCodeAt(r)] << 18) | (n[t.charCodeAt(r + 1)] << 12) | (n[t.charCodeAt(r + 2)] << 6) | n[t.charCodeAt(r + 3)]), (u[h++] = (e >> 16) & 255), (u[h++] = (e >> 8) & 255), (u[h++] = 255 & e);
                                    return (
                                        2 === a && ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (u[h++] = 255 & e)),
                                        1 === a && ((e = (n[t.charCodeAt(r)] << 10) | (n[t.charCodeAt(r + 1)] << 4) | (n[t.charCodeAt(r + 2)] >> 2)), (u[h++] = (e >> 8) & 255), (u[h++] = 255 & e)),
                                        u
                                    );
                                }),
                                (e.fromByteArray = function (t) {
                                    for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383)
                                        o.push(
                                            (function (t, e, n) {
                                                for (var i, o = [], s = e; s < n; s += 3)
                                                    o.push(r[((i = ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])) >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]);
                                                return o.join("");
                                            })(t, s, s + 16383 > a ? a : s + 16383)
                                        );
                                    return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="), o.join("");
                                });
                            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
                                (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
                            function l(t) {
                                var e = t.length;
                                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                                var r = t.indexOf("=");
                                -1 === r && (r = e);
                                var n = r === e ? 0 : 4 - (r % 4);
                                return [r, n];
                            }
                            (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
                        },
                        72: function (t, e, r) {
                            "use strict";
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <https://feross.org>
                             * @license  MIT
                             */ var n = r(675),
                                i = r(783),
                                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                            function s(t) {
                                if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                                var e = new Uint8Array(t);
                                return Object.setPrototypeOf(e, a.prototype), e;
                            }
                            function a(t, e, r) {
                                if ("number" == typeof t) {
                                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                                    return h(t);
                                }
                                return l(t, e, r);
                            }
                            function l(t, e, r) {
                                if ("string" == typeof t)
                                    return (function (t, e) {
                                        if ((("string" != typeof e || "" === e) && (e = "utf8"), !a.isEncoding(e))) throw TypeError("Unknown encoding: " + e);
                                        var r = 0 | f(t, e),
                                            n = s(r),
                                            i = n.write(t, e);
                                        return i !== r && (n = n.slice(0, i)), n;
                                    })(t, e);
                                if (ArrayBuffer.isView(t)) return c(t);
                                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                if (R(t, ArrayBuffer) || (t && R(t.buffer, ArrayBuffer)) || ("undefined" != typeof SharedArrayBuffer && (R(t, SharedArrayBuffer) || (t && R(t.buffer, SharedArrayBuffer)))))
                                    return (function (t, e, r) {
                                        var n;
                                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                                        return Object.setPrototypeOf((n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r)), a.prototype), n;
                                    })(t, e, r);
                                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                                var n = t.valueOf && t.valueOf();
                                if (null != n && n !== t) return a.from(n, e, r);
                                var i = (function (t) {
                                    if (a.isBuffer(t)) {
                                        var e,
                                            r = 0 | p(t.length),
                                            n = s(r);
                                        return 0 === n.length || t.copy(n, 0, 0, r), n;
                                    }
                                    return void 0 !== t.length ? ("number" != typeof t.length || (e = t.length) != e ? s(0) : c(t)) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0;
                                })(t);
                                if (i) return i;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                            }
                            function u(t) {
                                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"');
                            }
                            function h(t) {
                                return u(t), s(t < 0 ? 0 : 0 | p(t));
                            }
                            function c(t) {
                                for (var e = t.length < 0 ? 0 : 0 | p(t.length), r = s(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                                return r;
                            }
                            function p(t) {
                                if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                                return 0 | t;
                            }
                            function f(t, e) {
                                if (a.isBuffer(t)) return t.length;
                                if (ArrayBuffer.isView(t) || R(t, ArrayBuffer)) return t.byteLength;
                                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                                var r = t.length,
                                    n = arguments.length > 2 && !0 === arguments[2];
                                if (!n && 0 === r) return 0;
                                for (var i = !1; ; )
                                    switch (e) {
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                            return r;
                                        case "utf8":
                                        case "utf-8":
                                            return P(t).length;
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return 2 * r;
                                        case "hex":
                                            return r >>> 1;
                                        case "base64":
                                            return k(t).length;
                                        default:
                                            if (i) return n ? -1 : P(t).length;
                                            (e = ("" + e).toLowerCase()), (i = !0);
                                    }
                            }
                            function d(t, e, r) {
                                var i,
                                    o,
                                    s = !1;
                                if (((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0)))) return "";
                                for (t || (t = "utf8"); ; )
                                    switch (t) {
                                        case "hex":
                                            return (function (t, e, r) {
                                                var n = t.length;
                                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                                for (var i = "", o = e; o < r; ++o) i += O[t[o]];
                                                return i;
                                            })(this, e, r);
                                        case "utf8":
                                        case "utf-8":
                                            return v(this, e, r);
                                        case "ascii":
                                            return (function (t, e, r) {
                                                var n = "";
                                                r = Math.min(t.length, r);
                                                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                                return n;
                                            })(this, e, r);
                                        case "latin1":
                                        case "binary":
                                            return (function (t, e, r) {
                                                var n = "";
                                                r = Math.min(t.length, r);
                                                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                                return n;
                                            })(this, e, r);
                                        case "base64":
                                            return (i = e), (o = r), 0 === i && o === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, o));
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return (function (t, e, r) {
                                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                                return i;
                                            })(this, e, r);
                                        default:
                                            if (s) throw TypeError("Unknown encoding: " + t);
                                            (t = (t + "").toLowerCase()), (s = !0);
                                    }
                            }
                            function m(t, e, r) {
                                var n = t[e];
                                (t[e] = t[r]), (t[r] = n);
                            }
                            function g(t, e, r, n, i) {
                                var o;
                                if (0 === t.length) return -1;
                                if (
                                    ("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                                    (o = r = +r) != o && (r = i ? 0 : t.length - 1),
                                    r < 0 && (r = t.length + r),
                                    r >= t.length)
                                ) {
                                    if (i) return -1;
                                    r = t.length - 1;
                                } else if (r < 0) {
                                    if (!i) return -1;
                                    r = 0;
                                }
                                if (("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e))) return 0 === e.length ? -1 : y(t, e, r, n, i);
                                if ("number" == typeof e)
                                    return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf) ? (i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : y(t, [e], r, n, i);
                                throw TypeError("val must be string, number or Buffer");
                            }
                            function y(t, e, r, n, i) {
                                var o,
                                    s = 1,
                                    a = t.length,
                                    l = e.length;
                                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    (s = 2), (a /= 2), (l /= 2), (r /= 2);
                                }
                                function u(t, e) {
                                    return 1 === s ? t[e] : t.readUInt16BE(e * s);
                                }
                                if (i) {
                                    var h = -1;
                                    for (o = r; o < a; o++)
                                        if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                                            if ((-1 === h && (h = o), o - h + 1 === l)) return h * s;
                                        } else -1 !== h && (o -= o - h), (h = -1);
                                } else
                                    for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
                                        for (var c = !0, p = 0; p < l; p++)
                                            if (u(t, o + p) !== u(e, p)) {
                                                c = !1;
                                                break;
                                            }
                                        if (c) return o;
                                    }
                                return -1;
                            }
                            function v(t, e, r) {
                                r = Math.min(t.length, r);
                                for (var n = [], i = e; i < r; ) {
                                    var o,
                                        s,
                                        a,
                                        l,
                                        u = t[i],
                                        h = null,
                                        c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (i + c <= r)
                                        switch (c) {
                                            case 1:
                                                u < 128 && (h = u);
                                                break;
                                            case 2:
                                                (192 & (o = t[i + 1])) == 128 && (l = ((31 & u) << 6) | (63 & o)) > 127 && (h = l);
                                                break;
                                            case 3:
                                                (o = t[i + 1]), (s = t[i + 2]), (192 & o) == 128 && (192 & s) == 128 && (l = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 && (l < 55296 || l > 57343) && (h = l);
                                                break;
                                            case 4:
                                                (o = t[i + 1]),
                                                    (s = t[i + 2]),
                                                    (a = t[i + 3]),
                                                    (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (l = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 && l < 1114112 && (h = l);
                                        }
                                    null === h ? ((h = 65533), (c = 1)) : h > 65535 && ((h -= 65536), n.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))), n.push(h), (i += c);
                                }
                                return (function (t) {
                                    var e = t.length;
                                    if (e <= 4096) return String.fromCharCode.apply(String, t);
                                    for (var r = "", n = 0; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
                                    return r;
                                })(n);
                            }
                            function b(t, e, r) {
                                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                                if (t + e > r) throw RangeError("Trying to access beyond buffer length");
                            }
                            function w(t, e, r, n, i, o) {
                                if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                                if (r + n > t.length) throw RangeError("Index out of range");
                            }
                            function x(t, e, r, n, i, o) {
                                if (r + n > t.length || r < 0) throw RangeError("Index out of range");
                            }
                            function E(t, e, r, n, o) {
                                return (e = +e), (r >>>= 0), o || x(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4;
                            }
                            function A(t, e, r, n, o) {
                                return (e = +e), (r >>>= 0), o || x(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8;
                            }
                            (e.Buffer = a),
                                (e.SlowBuffer = function (t) {
                                    return +t != t && (t = 0), a.alloc(+t);
                                }),
                                (e.INSPECT_MAX_BYTES = 50),
                                (e.kMaxLength = 2147483647),
                                (a.TYPED_ARRAY_SUPPORT = (function () {
                                    try {
                                        var t = new Uint8Array(1),
                                            e = {
                                                foo: function () {
                                                    return 42;
                                                },
                                            };
                                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
                                    } catch (t) {
                                        return !1;
                                    }
                                })()),
                                a.TYPED_ARRAY_SUPPORT ||
                                    "undefined" == typeof console ||
                                    "function" != typeof console.error ||
                                    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                                Object.defineProperty(a.prototype, "parent", {
                                    enumerable: !0,
                                    get: function () {
                                        if (a.isBuffer(this)) return this.buffer;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "offset", {
                                    enumerable: !0,
                                    get: function () {
                                        if (a.isBuffer(this)) return this.byteOffset;
                                    },
                                }),
                                (a.poolSize = 8192),
                                (a.from = function (t, e, r) {
                                    return l(t, e, r);
                                }),
                                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                                Object.setPrototypeOf(a, Uint8Array),
                                (a.alloc = function (t, e, r) {
                                    return (u(t), t <= 0) ? s(t) : void 0 !== e ? ("string" == typeof r ? s(t).fill(e, r) : s(t).fill(e)) : s(t);
                                }),
                                (a.allocUnsafe = function (t) {
                                    return h(t);
                                }),
                                (a.allocUnsafeSlow = function (t) {
                                    return h(t);
                                }),
                                (a.isBuffer = function (t) {
                                    return null != t && !0 === t._isBuffer && t !== a.prototype;
                                }),
                                (a.compare = function (t, e) {
                                    if ((R(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), R(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)))
                                        throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                    if (t === e) return 0;
                                    for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                                        if (t[i] !== e[i]) {
                                            (r = t[i]), (n = e[i]);
                                            break;
                                        }
                                    return r < n ? -1 : n < r ? 1 : 0;
                                }),
                                (a.isEncoding = function (t) {
                                    switch (String(t).toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                }),
                                (a.concat = function (t, e) {
                                    if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                                    if (0 === t.length) return a.alloc(0);
                                    if (void 0 === e) for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                                    var r,
                                        n = a.allocUnsafe(e),
                                        i = 0;
                                    for (r = 0; r < t.length; ++r) {
                                        var o = t[r];
                                        if ((R(o, Uint8Array) && (o = a.from(o)), !a.isBuffer(o))) throw TypeError('"list" argument must be an Array of Buffers');
                                        o.copy(n, i), (i += o.length);
                                    }
                                    return n;
                                }),
                                (a.byteLength = f),
                                (a.prototype._isBuffer = !0),
                                (a.prototype.swap16 = function () {
                                    var t = this.length;
                                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                    for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                                    return this;
                                }),
                                (a.prototype.swap32 = function () {
                                    var t = this.length;
                                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                    for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                                    return this;
                                }),
                                (a.prototype.swap64 = function () {
                                    var t = this.length;
                                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                    for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                                    return this;
                                }),
                                (a.prototype.toString = function () {
                                    var t = this.length;
                                    return 0 === t ? "" : 0 == arguments.length ? v(this, 0, t) : d.apply(this, arguments);
                                }),
                                (a.prototype.toLocaleString = a.prototype.toString),
                                (a.prototype.equals = function (t) {
                                    if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                                    return this === t || 0 === a.compare(this, t);
                                }),
                                (a.prototype.inspect = function () {
                                    var t = "",
                                        r = e.INSPECT_MAX_BYTES;
                                    return (
                                        (t = this.toString("hex", 0, r)
                                            .replace(/(.{2})/g, "$1 ")
                                            .trim()),
                                        this.length > r && (t += " ... "),
                                        "<Buffer " + t + ">"
                                    );
                                }),
                                o && (a.prototype[o] = a.prototype.inspect),
                                (a.prototype.compare = function (t, e, r, n, i) {
                                    if ((R(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                                    if ((void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length))
                                        throw RangeError("out of range index");
                                    if (n >= i && e >= r) return 0;
                                    if (n >= i) return -1;
                                    if (e >= r) return 1;
                                    if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)) return 0;
                                    for (var o = i - n, s = r - e, l = Math.min(o, s), u = this.slice(n, i), h = t.slice(e, r), c = 0; c < l; ++c)
                                        if (u[c] !== h[c]) {
                                            (o = u[c]), (s = h[c]);
                                            break;
                                        }
                                    return o < s ? -1 : s < o ? 1 : 0;
                                }),
                                (a.prototype.includes = function (t, e, r) {
                                    return -1 !== this.indexOf(t, e, r);
                                }),
                                (a.prototype.indexOf = function (t, e, r) {
                                    return g(this, t, e, r, !0);
                                }),
                                (a.prototype.lastIndexOf = function (t, e, r) {
                                    return g(this, t, e, r, !1);
                                }),
                                (a.prototype.write = function (t, e, r, n) {
                                    if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                                    else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                                    else if (isFinite(e)) (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    var i,
                                        o,
                                        s,
                                        a,
                                        l,
                                        u,
                                        h,
                                        c,
                                        p,
                                        f,
                                        d,
                                        m,
                                        g = this.length - e;
                                    if (((void 0 === r || r > g) && (r = g), (t.length > 0 && (r < 0 || e < 0)) || e > this.length)) throw RangeError("Attempt to write outside buffer bounds");
                                    n || (n = "utf8");
                                    for (var y = !1; ; )
                                        switch (n) {
                                            case "hex":
                                                return (function (t, e, r, n) {
                                                    r = Number(r) || 0;
                                                    var i = t.length - r;
                                                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                                                    var o = e.length;
                                                    n > o / 2 && (n = o / 2);
                                                    for (var s = 0; s < n; ++s) {
                                                        var a = parseInt(e.substr(2 * s, 2), 16);
                                                        if (a != a) break;
                                                        t[r + s] = a;
                                                    }
                                                    return s;
                                                })(this, t, e, r);
                                            case "utf8":
                                            case "utf-8":
                                                return (l = e), (u = r), C(P(t, this.length - l), this, l, u);
                                            case "ascii":
                                                return (h = e), (c = r), C(S(t), this, h, c);
                                            case "latin1":
                                            case "binary":
                                                return (i = this), (o = t), (s = e), (a = r), C(S(o), i, s, a);
                                            case "base64":
                                                return (p = e), (f = r), C(k(t), this, p, f);
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return (
                                                    (d = e),
                                                    (m = r),
                                                    C(
                                                        (function (t, e) {
                                                            for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) (n = (r = t.charCodeAt(o)) >> 8), i.push(r % 256), i.push(n);
                                                            return i;
                                                        })(t, this.length - d),
                                                        this,
                                                        d,
                                                        m
                                                    )
                                                );
                                            default:
                                                if (y) throw TypeError("Unknown encoding: " + n);
                                                (n = ("" + n).toLowerCase()), (y = !0);
                                        }
                                }),
                                (a.prototype.toJSON = function () {
                                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                                }),
                                (a.prototype.slice = function (t, e) {
                                    var r = this.length;
                                    (t = ~~t), (e = void 0 === e ? r : ~~e), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                                    var n = this.subarray(t, e);
                                    return Object.setPrototypeOf(n, a.prototype), n;
                                }),
                                (a.prototype.readUIntLE = function (t, e, r) {
                                    (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
                                    return n;
                                }),
                                (a.prototype.readUIntBE = function (t, e, r) {
                                    (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                                    for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i;
                                    return n;
                                }),
                                (a.prototype.readUInt8 = function (t, e) {
                                    return (t >>>= 0), e || b(t, 1, this.length), this[t];
                                }),
                                (a.prototype.readUInt16LE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 2, this.length), this[t] | (this[t + 1] << 8);
                                }),
                                (a.prototype.readUInt16BE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 2, this.length), (this[t] << 8) | this[t + 1];
                                }),
                                (a.prototype.readUInt32LE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                                }),
                                (a.prototype.readUInt32BE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                                }),
                                (a.prototype.readIntLE = function (t, e, r) {
                                    (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
                                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
                                }),
                                (a.prototype.readIntBE = function (t, e, r) {
                                    (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                                    for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
                                }),
                                (a.prototype.readInt8 = function (t, e) {
                                    return ((t >>>= 0), e || b(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t];
                                }),
                                (a.prototype.readInt16LE = function (t, e) {
                                    (t >>>= 0), e || b(t, 2, this.length);
                                    var r = this[t] | (this[t + 1] << 8);
                                    return 32768 & r ? 4294901760 | r : r;
                                }),
                                (a.prototype.readInt16BE = function (t, e) {
                                    (t >>>= 0), e || b(t, 2, this.length);
                                    var r = this[t + 1] | (this[t] << 8);
                                    return 32768 & r ? 4294901760 | r : r;
                                }),
                                (a.prototype.readInt32LE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                                }),
                                (a.prototype.readInt32BE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                                }),
                                (a.prototype.readFloatLE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !0, 23, 4);
                                }),
                                (a.prototype.readFloatBE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !1, 23, 4);
                                }),
                                (a.prototype.readDoubleLE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !0, 52, 8);
                                }),
                                (a.prototype.readDoubleBE = function (t, e) {
                                    return (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !1, 52, 8);
                                }),
                                (a.prototype.writeUIntLE = function (t, e, r, n) {
                                    if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                                        var i = Math.pow(2, 8 * r) - 1;
                                        w(this, t, e, r, i, 0);
                                    }
                                    var o = 1,
                                        s = 0;
                                    for (this[e] = 255 & t; ++s < r && (o *= 256); ) this[e + s] = (t / o) & 255;
                                    return e + r;
                                }),
                                (a.prototype.writeUIntBE = function (t, e, r, n) {
                                    if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                                        var i = Math.pow(2, 8 * r) - 1;
                                        w(this, t, e, r, i, 0);
                                    }
                                    var o = r - 1,
                                        s = 1;
                                    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); ) this[e + o] = (t / s) & 255;
                                    return e + r;
                                }),
                                (a.prototype.writeUInt8 = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
                                }),
                                (a.prototype.writeUInt16LE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                                }),
                                (a.prototype.writeUInt16BE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                                }),
                                (a.prototype.writeUInt32LE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 4, 4294967295, 0), (this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t), e + 4;
                                }),
                                (a.prototype.writeUInt32BE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 4, 4294967295, 0), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                                }),
                                (a.prototype.writeIntLE = function (t, e, r, n) {
                                    if (((t = +t), (e >>>= 0), !n)) {
                                        var i = Math.pow(2, 8 * r - 1);
                                        w(this, t, e, r, i - 1, -i);
                                    }
                                    var o = 0,
                                        s = 1,
                                        a = 0;
                                    for (this[e] = 255 & t; ++o < r && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
                                    return e + r;
                                }),
                                (a.prototype.writeIntBE = function (t, e, r, n) {
                                    if (((t = +t), (e >>>= 0), !n)) {
                                        var i = Math.pow(2, 8 * r - 1);
                                        w(this, t, e, r, i - 1, -i);
                                    }
                                    var o = r - 1,
                                        s = 1,
                                        a = 0;
                                    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), (this[e + o] = (((t / s) >> 0) - a) & 255);
                                    return e + r;
                                }),
                                (a.prototype.writeInt8 = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                                }),
                                (a.prototype.writeInt16LE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                                }),
                                (a.prototype.writeInt16BE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                                }),
                                (a.prototype.writeInt32LE = function (t, e, r) {
                                    return (t = +t), (e >>>= 0), r || w(this, t, e, 4, 2147483647, -2147483648), (this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24), e + 4;
                                }),
                                (a.prototype.writeInt32BE = function (t, e, r) {
                                    return (
                                        (t = +t),
                                        (e >>>= 0),
                                        r || w(this, t, e, 4, 2147483647, -2147483648),
                                        t < 0 && (t = 4294967295 + t + 1),
                                        (this[e] = t >>> 24),
                                        (this[e + 1] = t >>> 16),
                                        (this[e + 2] = t >>> 8),
                                        (this[e + 3] = 255 & t),
                                        e + 4
                                    );
                                }),
                                (a.prototype.writeFloatLE = function (t, e, r) {
                                    return E(this, t, e, !0, r);
                                }),
                                (a.prototype.writeFloatBE = function (t, e, r) {
                                    return E(this, t, e, !1, r);
                                }),
                                (a.prototype.writeDoubleLE = function (t, e, r) {
                                    return A(this, t, e, !0, r);
                                }),
                                (a.prototype.writeDoubleBE = function (t, e, r) {
                                    return A(this, t, e, !1, r);
                                }),
                                (a.prototype.copy = function (t, e, r, n) {
                                    if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                                    if ((r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length)) return 0;
                                    if (e < 0) throw RangeError("targetStart out of bounds");
                                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                                    n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                                    var i = n - r;
                                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                                    else if (this === t && r < e && e < n) for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                                    else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                                    return i;
                                }),
                                (a.prototype.fill = function (t, e, r, n) {
                                    if ("string" == typeof t) {
                                        if (("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), void 0 !== n && "string" != typeof n))
                                            throw TypeError("encoding must be a string");
                                        if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                                        if (1 === t.length) {
                                            var i,
                                                o = t.charCodeAt(0);
                                            (("utf8" === n && o < 128) || "latin1" === n) && (t = o);
                                        }
                                    } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
                                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                                    if (r <= e) return this;
                                    if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t)) for (i = e; i < r; ++i) this[i] = t;
                                    else {
                                        var s = a.isBuffer(t) ? t : a.from(t, n),
                                            l = s.length;
                                        if (0 === l) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                                        for (i = 0; i < r - e; ++i) this[i + e] = s[i % l];
                                    }
                                    return this;
                                });
                            var T = /[^+/0-9A-Za-z-_]/g;
                            function P(t, e) {
                                e = e || 1 / 0;
                                for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                                    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                                        if (!i) {
                                            if (r > 56319 || s + 1 === n) {
                                                (e -= 3) > -1 && o.push(239, 191, 189);
                                                continue;
                                            }
                                            i = r;
                                            continue;
                                        }
                                        if (r < 56320) {
                                            (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                                            continue;
                                        }
                                        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                                    if (((i = null), r < 128)) {
                                        if ((e -= 1) < 0) break;
                                        o.push(r);
                                    } else if (r < 2048) {
                                        if ((e -= 2) < 0) break;
                                        o.push((r >> 6) | 192, (63 & r) | 128);
                                    } else if (r < 65536) {
                                        if ((e -= 3) < 0) break;
                                        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                                    } else if (r < 1114112) {
                                        if ((e -= 4) < 0) break;
                                        o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                                    } else throw Error("Invalid code point");
                                }
                                return o;
                            }
                            function S(t) {
                                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                return e;
                            }
                            function k(t) {
                                return n.toByteArray(
                                    (function (t) {
                                        if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2) return "";
                                        for (; t.length % 4 != 0; ) t += "=";
                                        return t;
                                    })(t)
                                );
                            }
                            function C(t, e, r, n) {
                                for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                                return i;
                            }
                            function R(t, e) {
                                return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
                            }
                            var O = (function () {
                                for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r) for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                                return e;
                            })();
                        },
                        783: function (t, e) {
                            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read = function (t, e, r, n, i) {
                                var o,
                                    s,
                                    a = 8 * i - n - 1,
                                    l = (1 << a) - 1,
                                    u = l >> 1,
                                    h = -7,
                                    c = r ? i - 1 : 0,
                                    p = r ? -1 : 1,
                                    f = t[e + c];
                                for (c += p, o = f & ((1 << -h) - 1), f >>= -h, h += a; h > 0; o = 256 * o + t[e + c], c += p, h -= 8);
                                for (s = o & ((1 << -h) - 1), o >>= -h, h += n; h > 0; s = 256 * s + t[e + c], c += p, h -= 8);
                                if (0 === o) o = 1 - u;
                                else {
                                    if (o === l) return s ? NaN : (f ? -1 : 1) * (1 / 0);
                                    (s += Math.pow(2, n)), (o -= u);
                                }
                                return (f ? -1 : 1) * s * Math.pow(2, o - n);
                            }),
                                (e.write = function (t, e, r, n, i, o) {
                                    var s,
                                        a,
                                        l,
                                        u = 8 * o - i - 1,
                                        h = (1 << u) - 1,
                                        c = h >> 1,
                                        p = 23 === i ? 5960464477539062e-23 : 0,
                                        f = n ? 0 : o - 1,
                                        d = n ? 1 : -1,
                                        m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                                    for (
                                        isNaN((e = Math.abs(e))) || e === 1 / 0
                                            ? ((a = isNaN(e) ? 1 : 0), (s = h))
                                            : ((s = Math.floor(Math.log(e) / Math.LN2)),
                                              e * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                                              s + c >= 1 ? (e += p / l) : (e += p * Math.pow(2, 1 - c)),
                                              e * l >= 2 && (s++, (l /= 2)),
                                              s + c >= h ? ((a = 0), (s = h)) : s + c >= 1 ? ((a = (e * l - 1) * Math.pow(2, i)), (s += c)) : ((a = e * Math.pow(2, c - 1) * Math.pow(2, i)), (s = 0)));
                                        i >= 8;
                                        t[r + f] = 255 & a, f += d, a /= 256, i -= 8
                                    );
                                    for (s = (s << i) | a, u += i; u > 0; t[r + f] = 255 & s, f += d, s /= 256, u -= 8);
                                    t[r + f - d] |= 128 * m;
                                });
                        },
                    },
                    r = {};
                function n(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var o = (r[t] = { exports: {} }),
                        s = !0;
                    try {
                        e[t](o, o.exports, n), (s = !1);
                    } finally {
                        s && delete r[t];
                    }
                    return o.exports;
                }
                n.ab = "//";
                var i = n(72);
                t.exports = i;
            })();
        },
        9008: function (t, e, r) {
            t.exports = r(2636);
        },
        6154: function (t, e, r) {
            "use strict";
            let n;
            function i(t, e) {
                return function () {
                    return t.apply(e, arguments);
                };
            }
            r.d(e, {
                Z: function () {
                    return t7;
                },
            });
            let { toString: o } = Object.prototype,
                { getPrototypeOf: s } = Object,
                a =
                    ((te = Object.create(null)),
                    (t) => {
                        let e = o.call(t);
                        return te[e] || (te[e] = e.slice(8, -1).toLowerCase());
                    }),
                l = (t) => ((t = t.toLowerCase()), (e) => a(e) === t),
                u = (t) => (e) => typeof e === t,
                { isArray: h } = Array,
                c = u("undefined"),
                p = l("ArrayBuffer"),
                f = u("string"),
                d = u("function"),
                m = u("number"),
                g = (t) => null !== t && "object" == typeof t,
                y = (t) => {
                    if ("object" !== a(t)) return !1;
                    let e = s(t);
                    return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
                },
                v = l("Date"),
                b = l("File"),
                w = l("Blob"),
                x = l("FileList"),
                E = (t) => g(t) && d(t.pipe),
                A = (t) => {
                    let e;
                    return t && (("function" == typeof FormData && t instanceof FormData) || (d(t.append) && ("formdata" === (e = a(t)) || ("object" === e && d(t.toString) && "[object FormData]" === t.toString()))));
                },
                T = l("URLSearchParams"),
                P = (t) => (t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
            function S(t, e, { allOwnKeys: r = !1 } = {}) {
                let n, i;
                if (null != t) {
                    if (("object" != typeof t && (t = [t]), h(t))) for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                    else {
                        let i;
                        let o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                            s = o.length;
                        for (n = 0; n < s; n++) (i = o[n]), e.call(null, t[i], i, t);
                    }
                }
            }
            function k(t, e) {
                let r;
                e = e.toLowerCase();
                let n = Object.keys(t),
                    i = n.length;
                for (; i-- > 0; ) if (e === (r = n[i]).toLowerCase()) return r;
                return null;
            }
            let C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                R = (t) => !c(t) && t !== C,
                O = (t, e, r, { allOwnKeys: n } = {}) => (
                    S(
                        e,
                        (e, n) => {
                            r && d(e) ? (t[n] = i(e, r)) : (t[n] = e);
                        },
                        { allOwnKeys: n }
                    ),
                    t
                ),
                B = (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
                V = (t, e, r, n) => {
                    (t.prototype = Object.create(e.prototype, n)), (t.prototype.constructor = t), Object.defineProperty(t, "super", { value: e.prototype }), r && Object.assign(t.prototype, r);
                },
                L = (t, e, r, n) => {
                    let i, o, a;
                    let l = {};
                    if (((e = e || {}), null == t)) return e;
                    do {
                        for (o = (i = Object.getOwnPropertyNames(t)).length; o-- > 0; ) (a = i[o]), (!n || n(a, t, e)) && !l[a] && ((e[a] = t[a]), (l[a] = !0));
                        t = !1 !== r && s(t);
                    } while (t && (!r || r(t, e)) && t !== Object.prototype);
                    return e;
                },
                M = (t, e, r) => {
                    (t = String(t)), (void 0 === r || r > t.length) && (r = t.length), (r -= e.length);
                    let n = t.indexOf(e, r);
                    return -1 !== n && n === r;
                },
                j = (t) => {
                    if (!t) return null;
                    if (h(t)) return t;
                    let e = t.length;
                    if (!m(e)) return null;
                    let r = Array(e);
                    for (; e-- > 0; ) r[e] = t[e];
                    return r;
                },
                D = ((tr = "undefined" != typeof Uint8Array && s(Uint8Array)), (t) => tr && t instanceof tr),
                U = (t, e) => {
                    let r;
                    let n = t && t[Symbol.iterator],
                        i = n.call(t);
                    for (; (r = i.next()) && !r.done; ) {
                        let n = r.value;
                        e.call(t, n[0], n[1]);
                    }
                },
                F = (t, e) => {
                    let r;
                    let n = [];
                    for (; null !== (r = t.exec(e)); ) n.push(r);
                    return n;
                },
                N = l("HTMLFormElement"),
                I = (t) =>
                    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
                        return e.toUpperCase() + r;
                    }),
                G = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype),
                _ = l("RegExp"),
                z = (t, e) => {
                    let r = Object.getOwnPropertyDescriptors(t),
                        n = {};
                    S(r, (r, i) => {
                        let o;
                        !1 !== (o = e(r, i, t)) && (n[i] = o || r);
                    }),
                        Object.defineProperties(t, n);
                },
                H = (t) => {
                    z(t, (e, r) => {
                        if (d(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                        let n = t[r];
                        if (d(n)) {
                            if (((e.enumerable = !1), "writable" in e)) {
                                e.writable = !1;
                                return;
                            }
                            e.set ||
                                (e.set = () => {
                                    throw Error("Can not rewrite read-only method '" + r + "'");
                                });
                        }
                    });
                },
                W = (t, e) => {
                    let r = {};
                    return (
                        ((t) => {
                            t.forEach((t) => {
                                r[t] = !0;
                            });
                        })(h(t) ? t : String(t).split(e)),
                        r
                    );
                },
                $ = () => {},
                q = (t, e) => (Number.isFinite((t = +t)) ? t : e),
                Y = "abcdefghijklmnopqrstuvwxyz",
                X = "0123456789",
                J = { DIGIT: X, ALPHA: Y, ALPHA_DIGIT: Y + Y.toUpperCase() + X },
                K = (t = 16, e = J.ALPHA_DIGIT) => {
                    let r = "",
                        { length: n } = e;
                    for (; t--; ) r += e[(Math.random() * n) | 0];
                    return r;
                },
                Z = (t) => {
                    let e = Array(10),
                        r = (t, n) => {
                            if (g(t)) {
                                if (e.indexOf(t) >= 0) return;
                                if (!("toJSON" in t)) {
                                    e[n] = t;
                                    let i = h(t) ? [] : {};
                                    return (
                                        S(t, (t, e) => {
                                            let o = r(t, n + 1);
                                            c(o) || (i[e] = o);
                                        }),
                                        (e[n] = void 0),
                                        i
                                    );
                                }
                            }
                            return t;
                        };
                    return r(t, 0);
                },
                Q = l("AsyncFunction"),
                tt = (t) => t && (g(t) || d(t)) && d(t.then) && d(t.catch);
            var te,
                tr,
                tn = {
                    isArray: h,
                    isArrayBuffer: p,
                    isBuffer: function (t) {
                        return null !== t && !c(t) && null !== t.constructor && !c(t.constructor) && d(t.constructor.isBuffer) && t.constructor.isBuffer(t);
                    },
                    isFormData: A,
                    isArrayBufferView: function (t) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && p(t.buffer);
                    },
                    isString: f,
                    isNumber: m,
                    isBoolean: (t) => !0 === t || !1 === t,
                    isObject: g,
                    isPlainObject: y,
                    isUndefined: c,
                    isDate: v,
                    isFile: b,
                    isBlob: w,
                    isRegExp: _,
                    isFunction: d,
                    isStream: E,
                    isURLSearchParams: T,
                    isTypedArray: D,
                    isFileList: x,
                    forEach: S,
                    merge: function t() {
                        let { caseless: e } = (R(this) && this) || {},
                            r = {},
                            n = (n, i) => {
                                let o = (e && k(r, i)) || i;
                                y(r[o]) && y(n) ? (r[o] = t(r[o], n)) : y(n) ? (r[o] = t({}, n)) : h(n) ? (r[o] = n.slice()) : (r[o] = n);
                            };
                        for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && S(arguments[t], n);
                        return r;
                    },
                    extend: O,
                    trim: P,
                    stripBOM: B,
                    inherits: V,
                    toFlatObject: L,
                    kindOf: a,
                    kindOfTest: l,
                    endsWith: M,
                    toArray: j,
                    forEachEntry: U,
                    matchAll: F,
                    isHTMLForm: N,
                    hasOwnProperty: G,
                    hasOwnProp: G,
                    reduceDescriptors: z,
                    freezeMethods: H,
                    toObjectSet: W,
                    toCamelCase: I,
                    noop: $,
                    toFiniteNumber: q,
                    findKey: k,
                    global: C,
                    isContextDefined: R,
                    ALPHABET: J,
                    generateString: K,
                    isSpecCompliantForm: function (t) {
                        return !!(t && d(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator]);
                    },
                    toJSONObject: Z,
                    isAsyncFn: Q,
                    isThenable: tt,
                };
            function ti(t, e, r, n, i) {
                Error.call(this),
                    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = Error().stack),
                    (this.message = t),
                    (this.name = "AxiosError"),
                    e && (this.code = e),
                    r && (this.config = r),
                    n && (this.request = n),
                    i && (this.response = i);
            }
            tn.inherits(ti, Error, {
                toJSON: function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: tn.toJSONObject(this.config),
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null,
                    };
                },
            });
            let to = ti.prototype,
                ts = {};
            [
                "ERR_BAD_OPTION_VALUE",
                "ERR_BAD_OPTION",
                "ECONNABORTED",
                "ETIMEDOUT",
                "ERR_NETWORK",
                "ERR_FR_TOO_MANY_REDIRECTS",
                "ERR_DEPRECATED",
                "ERR_BAD_RESPONSE",
                "ERR_BAD_REQUEST",
                "ERR_CANCELED",
                "ERR_NOT_SUPPORT",
                "ERR_INVALID_URL",
            ].forEach((t) => {
                ts[t] = { value: t };
            }),
                Object.defineProperties(ti, ts),
                Object.defineProperty(to, "isAxiosError", { value: !0 }),
                (ti.from = (t, e, r, n, i, o) => {
                    let s = Object.create(to);
                    return (
                        tn.toFlatObject(
                            t,
                            s,
                            function (t) {
                                return t !== Error.prototype;
                            },
                            (t) => "isAxiosError" !== t
                        ),
                        ti.call(s, t.message, e, r, n, i),
                        (s.cause = t),
                        (s.name = t.name),
                        o && Object.assign(s, o),
                        s
                    );
                });
            var ta = r(1876).Buffer;
            function tl(t) {
                return tn.isPlainObject(t) || tn.isArray(t);
            }
            function tu(t) {
                return tn.endsWith(t, "[]") ? t.slice(0, -2) : t;
            }
            function th(t, e, r) {
                return t
                    ? t
                          .concat(e)
                          .map(function (t, e) {
                              return (t = tu(t)), !r && e ? "[" + t + "]" : t;
                          })
                          .join(r ? "." : "")
                    : e;
            }
            let tc = tn.toFlatObject(tn, {}, null, function (t) {
                return /^is[A-Z]/.test(t);
            });
            var tp = function (t, e, r) {
                if (!tn.isObject(t)) throw TypeError("target must be an object");
                (e = e || new FormData()),
                    (r = tn.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (t, e) {
                        return !tn.isUndefined(e[t]);
                    }));
                let n = r.metaTokens,
                    i = r.visitor || h,
                    o = r.dots,
                    s = r.indexes,
                    a = r.Blob || ("undefined" != typeof Blob && Blob),
                    l = a && tn.isSpecCompliantForm(e);
                if (!tn.isFunction(i)) throw TypeError("visitor must be a function");
                function u(t) {
                    if (null === t) return "";
                    if (tn.isDate(t)) return t.toISOString();
                    if (!l && tn.isBlob(t)) throw new ti("Blob is not supported. Use a Buffer instead.");
                    return tn.isArrayBuffer(t) || tn.isTypedArray(t) ? (l && "function" == typeof Blob ? new Blob([t]) : ta.from(t)) : t;
                }
                function h(t, r, i) {
                    let a = t;
                    if (t && !i && "object" == typeof t) {
                        if (tn.endsWith(r, "{}")) (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
                        else {
                            var l;
                            if ((tn.isArray(t) && ((l = t), tn.isArray(l) && !l.some(tl))) || ((tn.isFileList(t) || tn.endsWith(r, "[]")) && (a = tn.toArray(t))))
                                return (
                                    (r = tu(r)),
                                    a.forEach(function (t, n) {
                                        tn.isUndefined(t) || null === t || e.append(!0 === s ? th([r], n, o) : null === s ? r : r + "[]", u(t));
                                    }),
                                    !1
                                );
                        }
                    }
                    return !!tl(t) || (e.append(th(i, r, o), u(t)), !1);
                }
                let c = [],
                    p = Object.assign(tc, { defaultVisitor: h, convertValue: u, isVisitable: tl });
                if (!tn.isObject(t)) throw TypeError("data must be an object");
                return (
                    !(function t(r, n) {
                        if (!tn.isUndefined(r)) {
                            if (-1 !== c.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                            c.push(r),
                                tn.forEach(r, function (r, o) {
                                    let s = !(tn.isUndefined(r) || null === r) && i.call(e, r, tn.isString(o) ? o.trim() : o, n, p);
                                    !0 === s && t(r, n ? n.concat(o) : [o]);
                                }),
                                c.pop();
                        }
                    })(t),
                    e
                );
            };
            function tf(t) {
                let e = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\x00" };
                return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
                    return e[t];
                });
            }
            function td(t, e) {
                (this._pairs = []), t && tp(t, this, e);
            }
            let tm = td.prototype;
            function tg(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            }
            function ty(t, e, r) {
                let n;
                if (!e) return t;
                let i = (r && r.encode) || tg,
                    o = r && r.serialize;
                if ((n = o ? o(e, r) : tn.isURLSearchParams(e) ? e.toString() : new td(e, r).toString(i))) {
                    let e = t.indexOf("#");
                    -1 !== e && (t = t.slice(0, e)), (t += (-1 === t.indexOf("?") ? "?" : "&") + n);
                }
                return t;
            }
            (tm.append = function (t, e) {
                this._pairs.push([t, e]);
            }),
                (tm.toString = function (t) {
                    let e = t
                        ? function (e) {
                              return t.call(this, e, tf);
                          }
                        : tf;
                    return this._pairs
                        .map(function (t) {
                            return e(t[0]) + "=" + e(t[1]);
                        }, "")
                        .join("&");
                });
            var tv = class {
                    constructor() {
                        this.handlers = [];
                    }
                    use(t, e, r) {
                        return this.handlers.push({ fulfilled: t, rejected: e, synchronous: !!r && r.synchronous, runWhen: r ? r.runWhen : null }), this.handlers.length - 1;
                    }
                    eject(t) {
                        this.handlers[t] && (this.handlers[t] = null);
                    }
                    clear() {
                        this.handlers && (this.handlers = []);
                    }
                    forEach(t) {
                        tn.forEach(this.handlers, function (e) {
                            null !== e && t(e);
                        });
                    }
                },
                tb = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
                tw = "undefined" != typeof URLSearchParams ? URLSearchParams : td,
                tx = "undefined" != typeof FormData ? FormData : null,
                tE = "undefined" != typeof Blob ? Blob : null;
            let tA = ("undefined" == typeof navigator || ("ReactNative" !== (n = navigator.product) && "NativeScript" !== n && "NS" !== n)) && "undefined" != typeof window && "undefined" != typeof document,
                tT = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
            var tP = { isBrowser: !0, classes: { URLSearchParams: tw, FormData: tx, Blob: tE }, isStandardBrowserEnv: tA, isStandardBrowserWebWorkerEnv: tT, protocols: ["http", "https", "file", "blob", "url", "data"] },
                tS = function (t) {
                    if (tn.isFormData(t) && tn.isFunction(t.entries)) {
                        let e = {};
                        return (
                            tn.forEachEntry(t, (t, r) => {
                                !(function t(e, r, n, i) {
                                    let o = e[i++],
                                        s = Number.isFinite(+o),
                                        a = i >= e.length;
                                    if (((o = !o && tn.isArray(n) ? n.length : o), a)) return tn.hasOwnProp(n, o) ? (n[o] = [n[o], r]) : (n[o] = r), !s;
                                    (n[o] && tn.isObject(n[o])) || (n[o] = []);
                                    let l = t(e, r, n[o], i);
                                    return (
                                        l &&
                                            tn.isArray(n[o]) &&
                                            (n[o] = (function (t) {
                                                let e, r;
                                                let n = {},
                                                    i = Object.keys(t),
                                                    o = i.length;
                                                for (e = 0; e < o; e++) n[(r = i[e])] = t[r];
                                                return n;
                                            })(n[o])),
                                        !s
                                    );
                                })(
                                    tn.matchAll(/\w+|\[(\w*)]/g, t).map((t) => ("[]" === t[0] ? "" : t[1] || t[0])),
                                    r,
                                    e,
                                    0
                                );
                            }),
                            e
                        );
                    }
                    return null;
                };
            let tk = {
                transitional: tb,
                adapter: ["xhr", "http"],
                transformRequest: [
                    function (t, e) {
                        let r;
                        let n = e.getContentType() || "",
                            i = n.indexOf("application/json") > -1,
                            o = tn.isObject(t);
                        o && tn.isHTMLForm(t) && (t = new FormData(t));
                        let s = tn.isFormData(t);
                        if (s) return i && i ? JSON.stringify(tS(t)) : t;
                        if (tn.isArrayBuffer(t) || tn.isBuffer(t) || tn.isStream(t) || tn.isFile(t) || tn.isBlob(t)) return t;
                        if (tn.isArrayBufferView(t)) return t.buffer;
                        if (tn.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                        if (o) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                                var a, l;
                                return ((a = t),
                                (l = this.formSerializer),
                                tp(
                                    a,
                                    new tP.classes.URLSearchParams(),
                                    Object.assign(
                                        {
                                            visitor: function (t, e, r, n) {
                                                return tP.isNode && tn.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
                                            },
                                        },
                                        l
                                    )
                                )).toString();
                            }
                            if ((r = tn.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                                let e = this.env && this.env.FormData;
                                return tp(r ? { "files[]": t } : t, e && new e(), this.formSerializer);
                            }
                        }
                        return o || i
                            ? (e.setContentType("application/json", !1),
                              (function (t, e, r) {
                                  if (tn.isString(t))
                                      try {
                                          return (0, JSON.parse)(t), tn.trim(t);
                                      } catch (t) {
                                          if ("SyntaxError" !== t.name) throw t;
                                      }
                                  return (0, JSON.stringify)(t);
                              })(t))
                            : t;
                    },
                ],
                transformResponse: [
                    function (t) {
                        let e = this.transitional || tk.transitional,
                            r = e && e.forcedJSONParsing,
                            n = "json" === this.responseType;
                        if (t && tn.isString(t) && ((r && !this.responseType) || n)) {
                            let r = e && e.silentJSONParsing;
                            try {
                                return JSON.parse(t);
                            } catch (t) {
                                if (!r && n) {
                                    if ("SyntaxError" === t.name) throw ti.from(t, ti.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw t;
                                }
                            }
                        }
                        return t;
                    },
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: { FormData: tP.classes.FormData, Blob: tP.classes.Blob },
                validateStatus: function (t) {
                    return t >= 200 && t < 300;
                },
                headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
            };
            tn.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
                tk.headers[t] = {};
            });
            let tC = tn.toObjectSet([
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ]);
            var tR = (t) => {
                let e, r, n;
                let i = {};
                return (
                    t &&
                        t.split("\n").forEach(function (t) {
                            (n = t.indexOf(":")),
                                (e = t.substring(0, n).trim().toLowerCase()),
                                (r = t.substring(n + 1).trim()),
                                !e || (i[e] && tC[e]) || ("set-cookie" === e ? (i[e] ? i[e].push(r) : (i[e] = [r])) : (i[e] = i[e] ? i[e] + ", " + r : r));
                        }),
                    i
                );
            };
            let tO = Symbol("internals");
            function tB(t) {
                return t && String(t).trim().toLowerCase();
            }
            function tV(t) {
                return !1 === t || null == t ? t : tn.isArray(t) ? t.map(tV) : String(t);
            }
            let tL = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
            function tM(t, e, r, n, i) {
                if (tn.isFunction(n)) return n.call(this, e, r);
                if ((i && (e = r), tn.isString(e))) {
                    if (tn.isString(n)) return -1 !== e.indexOf(n);
                    if (tn.isRegExp(n)) return n.test(e);
                }
            }
            class tj {
                constructor(t) {
                    t && this.set(t);
                }
                set(t, e, r) {
                    let n = this;
                    function i(t, e, r) {
                        let i = tB(e);
                        if (!i) throw Error("header name must be a non-empty string");
                        let o = tn.findKey(n, i);
                        (o && void 0 !== n[o] && !0 !== r && (void 0 !== r || !1 === n[o])) || (n[o || e] = tV(t));
                    }
                    let o = (t, e) => tn.forEach(t, (t, r) => i(t, r, e));
                    return tn.isPlainObject(t) || t instanceof this.constructor ? o(t, e) : tn.isString(t) && (t = t.trim()) && !tL(t) ? o(tR(t), e) : null != t && i(e, t, r), this;
                }
                get(t, e) {
                    if ((t = tB(t))) {
                        let r = tn.findKey(this, t);
                        if (r) {
                            let t = this[r];
                            if (!e) return t;
                            if (!0 === e)
                                return (function (t) {
                                    let e;
                                    let r = Object.create(null),
                                        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                    for (; (e = n.exec(t)); ) r[e[1]] = e[2];
                                    return r;
                                })(t);
                            if (tn.isFunction(e)) return e.call(this, t, r);
                            if (tn.isRegExp(e)) return e.exec(t);
                            throw TypeError("parser must be boolean|regexp|function");
                        }
                    }
                }
                has(t, e) {
                    if ((t = tB(t))) {
                        let r = tn.findKey(this, t);
                        return !!(r && void 0 !== this[r] && (!e || tM(this, this[r], r, e)));
                    }
                    return !1;
                }
                delete(t, e) {
                    let r = this,
                        n = !1;
                    function i(t) {
                        if ((t = tB(t))) {
                            let i = tn.findKey(r, t);
                            i && (!e || tM(r, r[i], i, e)) && (delete r[i], (n = !0));
                        }
                    }
                    return tn.isArray(t) ? t.forEach(i) : i(t), n;
                }
                clear(t) {
                    let e = Object.keys(this),
                        r = e.length,
                        n = !1;
                    for (; r--; ) {
                        let i = e[r];
                        (!t || tM(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
                    }
                    return n;
                }
                normalize(t) {
                    let e = this,
                        r = {};
                    return (
                        tn.forEach(this, (n, i) => {
                            let o = tn.findKey(r, i);
                            if (o) {
                                (e[o] = tV(n)), delete e[i];
                                return;
                            }
                            let s = t
                                ? i
                                      .trim()
                                      .toLowerCase()
                                      .replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r)
                                : String(i).trim();
                            s !== i && delete e[i], (e[s] = tV(n)), (r[s] = !0);
                        }),
                        this
                    );
                }
                concat(...t) {
                    return this.constructor.concat(this, ...t);
                }
                toJSON(t) {
                    let e = Object.create(null);
                    return (
                        tn.forEach(this, (r, n) => {
                            null != r && !1 !== r && (e[n] = t && tn.isArray(r) ? r.join(", ") : r);
                        }),
                        e
                    );
                }
                [Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]();
                }
                toString() {
                    return Object.entries(this.toJSON())
                        .map(([t, e]) => t + ": " + e)
                        .join("\n");
                }
                get [Symbol.toStringTag]() {
                    return "AxiosHeaders";
                }
                static from(t) {
                    return t instanceof this ? t : new this(t);
                }
                static concat(t, ...e) {
                    let r = new this(t);
                    return e.forEach((t) => r.set(t)), r;
                }
                static accessor(t) {
                    let e = (this[tO] = this[tO] = { accessors: {} }),
                        r = e.accessors,
                        n = this.prototype;
                    function i(t) {
                        let e = tB(t);
                        r[e] ||
                            (!(function (t, e) {
                                let r = tn.toCamelCase(" " + e);
                                ["get", "set", "has"].forEach((n) => {
                                    Object.defineProperty(t, n + r, {
                                        value: function (t, r, i) {
                                            return this[n].call(this, e, t, r, i);
                                        },
                                        configurable: !0,
                                    });
                                });
                            })(n, t),
                            (r[e] = !0));
                    }
                    return tn.isArray(t) ? t.forEach(i) : i(t), this;
                }
            }
            function tD(t, e) {
                let r = this || tk,
                    n = e || r,
                    i = tj.from(n.headers),
                    o = n.data;
                return (
                    tn.forEach(t, function (t) {
                        o = t.call(r, o, i.normalize(), e ? e.status : void 0);
                    }),
                    i.normalize(),
                    o
                );
            }
            function tU(t) {
                return !!(t && t.__CANCEL__);
            }
            function tF(t, e, r) {
                ti.call(this, null == t ? "canceled" : t, ti.ERR_CANCELED, e, r), (this.name = "CanceledError");
            }
            tj.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
                tn.reduceDescriptors(tj.prototype, ({ value: t }, e) => {
                    let r = e[0].toUpperCase() + e.slice(1);
                    return {
                        get: () => t,
                        set(t) {
                            this[r] = t;
                        },
                    };
                }),
                tn.freezeMethods(tj),
                tn.inherits(tF, ti, { __CANCEL__: !0 });
            var tN = tP.isStandardBrowserEnv
                ? {
                      write: function (t, e, r, n, i, o) {
                          let s = [];
                          s.push(t + "=" + encodeURIComponent(e)),
                              tn.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                              tn.isString(n) && s.push("path=" + n),
                              tn.isString(i) && s.push("domain=" + i),
                              !0 === o && s.push("secure"),
                              (document.cookie = s.join("; "));
                      },
                      read: function (t) {
                          let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                          return e ? decodeURIComponent(e[3]) : null;
                      },
                      remove: function (t) {
                          this.write(t, "", Date.now() - 864e5);
                      },
                  }
                : {
                      write: function () {},
                      read: function () {
                          return null;
                      },
                      remove: function () {},
                  };
            function tI(t, e) {
                return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? (e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t) : e;
            }
            var tG = tP.isStandardBrowserEnv
                    ? (function () {
                          let t;
                          let e = /(msie|trident)/i.test(navigator.userAgent),
                              r = document.createElement("a");
                          function n(t) {
                              let n = t;
                              return (
                                  e && (r.setAttribute("href", n), (n = r.href)),
                                  r.setAttribute("href", n),
                                  {
                                      href: r.href,
                                      protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                                      host: r.host,
                                      search: r.search ? r.search.replace(/^\?/, "") : "",
                                      hash: r.hash ? r.hash.replace(/^#/, "") : "",
                                      hostname: r.hostname,
                                      port: r.port,
                                      pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
                                  }
                              );
                          }
                          return (
                              (t = n(window.location.href)),
                              function (e) {
                                  let r = tn.isString(e) ? n(e) : e;
                                  return r.protocol === t.protocol && r.host === t.host;
                              }
                          );
                      })()
                    : function () {
                          return !0;
                      },
                t_ = function (t, e) {
                    let r;
                    t = t || 10;
                    let n = Array(t),
                        i = Array(t),
                        o = 0,
                        s = 0;
                    return (
                        (e = void 0 !== e ? e : 1e3),
                        function (a) {
                            let l = Date.now(),
                                u = i[s];
                            r || (r = l), (n[o] = a), (i[o] = l);
                            let h = s,
                                c = 0;
                            for (; h !== o; ) (c += n[h++]), (h %= t);
                            if (((o = (o + 1) % t) === s && (s = (s + 1) % t), l - r < e)) return;
                            let p = u && l - u;
                            return p ? Math.round((1e3 * c) / p) : void 0;
                        }
                    );
                };
            function tz(t, e) {
                let r = 0,
                    n = t_(50, 250);
                return (i) => {
                    let o = i.loaded,
                        s = i.lengthComputable ? i.total : void 0,
                        a = o - r,
                        l = n(a);
                    r = o;
                    let u = { loaded: o, total: s, progress: s ? o / s : void 0, bytes: a, rate: l || void 0, estimated: l && s && o <= s ? (s - o) / l : void 0, event: i };
                    (u[e ? "download" : "upload"] = !0), t(u);
                };
            }
            let tH = "undefined" != typeof XMLHttpRequest;
            var tW =
                tH &&
                function (t) {
                    return new Promise(function (e, r) {
                        let n,
                            i,
                            o = t.data,
                            s = tj.from(t.headers).normalize(),
                            a = t.responseType;
                        function l() {
                            t.cancelToken && t.cancelToken.unsubscribe(n), t.signal && t.signal.removeEventListener("abort", n);
                        }
                        tn.isFormData(o) &&
                            (tP.isStandardBrowserEnv || tP.isStandardBrowserWebWorkerEnv
                                ? s.setContentType(!1)
                                : s.getContentType(/^\s*multipart\/form-data/)
                                ? tn.isString((i = s.getContentType())) && s.setContentType(i.replace(/^\s*(multipart\/form-data);+/, "$1"))
                                : s.setContentType("multipart/form-data"));
                        let u = new XMLHttpRequest();
                        if (t.auth) {
                            let e = t.auth.username || "",
                                r = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                            s.set("Authorization", "Basic " + btoa(e + ":" + r));
                        }
                        let h = tI(t.baseURL, t.url);
                        function c() {
                            if (!u) return;
                            let n = tj.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                                i = a && "text" !== a && "json" !== a ? u.response : u.responseText,
                                o = { data: i, status: u.status, statusText: u.statusText, headers: n, config: t, request: u };
                            !(function (t, e, r) {
                                let n = r.config.validateStatus;
                                !r.status || !n || n(r.status) ? t(r) : e(new ti("Request failed with status code " + r.status, [ti.ERR_BAD_REQUEST, ti.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
                            })(
                                function (t) {
                                    e(t), l();
                                },
                                function (t) {
                                    r(t), l();
                                },
                                o
                            ),
                                (u = null);
                        }
                        if (
                            (u.open(t.method.toUpperCase(), ty(h, t.params, t.paramsSerializer), !0),
                            (u.timeout = t.timeout),
                            "onloadend" in u
                                ? (u.onloadend = c)
                                : (u.onreadystatechange = function () {
                                      u && 4 === u.readyState && (0 !== u.status || (u.responseURL && 0 === u.responseURL.indexOf("file:"))) && setTimeout(c);
                                  }),
                            (u.onabort = function () {
                                u && (r(new ti("Request aborted", ti.ECONNABORTED, t, u)), (u = null));
                            }),
                            (u.onerror = function () {
                                r(new ti("Network Error", ti.ERR_NETWORK, t, u)), (u = null);
                            }),
                            (u.ontimeout = function () {
                                let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                    n = t.transitional || tb;
                                t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(new ti(e, n.clarifyTimeoutError ? ti.ETIMEDOUT : ti.ECONNABORTED, t, u)), (u = null);
                            }),
                            tP.isStandardBrowserEnv)
                        ) {
                            let e = tG(h) && t.xsrfCookieName && tN.read(t.xsrfCookieName);
                            e && s.set(t.xsrfHeaderName, e);
                        }
                        void 0 === o && s.setContentType(null),
                            "setRequestHeader" in u &&
                                tn.forEach(s.toJSON(), function (t, e) {
                                    u.setRequestHeader(e, t);
                                }),
                            tn.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials),
                            a && "json" !== a && (u.responseType = t.responseType),
                            "function" == typeof t.onDownloadProgress && u.addEventListener("progress", tz(t.onDownloadProgress, !0)),
                            "function" == typeof t.onUploadProgress && u.upload && u.upload.addEventListener("progress", tz(t.onUploadProgress)),
                            (t.cancelToken || t.signal) &&
                                ((n = (e) => {
                                    u && (r(!e || e.type ? new tF(null, t, u) : e), u.abort(), (u = null));
                                }),
                                t.cancelToken && t.cancelToken.subscribe(n),
                                t.signal && (t.signal.aborted ? n() : t.signal.addEventListener("abort", n)));
                        let p = (function (t) {
                            let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                            return (e && e[1]) || "";
                        })(h);
                        if (p && -1 === tP.protocols.indexOf(p)) {
                            r(new ti("Unsupported protocol " + p + ":", ti.ERR_BAD_REQUEST, t));
                            return;
                        }
                        u.send(o || null);
                    });
                };
            let t$ = { http: null, xhr: tW };
            tn.forEach(t$, (t, e) => {
                if (t) {
                    try {
                        Object.defineProperty(t, "name", { value: e });
                    } catch (t) {}
                    Object.defineProperty(t, "adapterName", { value: e });
                }
            });
            let tq = (t) => `- ${t}`,
                tY = (t) => tn.isFunction(t) || null === t || !1 === t;
            var tX = {
                getAdapter: (t) => {
                    let e, r;
                    t = tn.isArray(t) ? t : [t];
                    let { length: n } = t,
                        i = {};
                    for (let o = 0; o < n; o++) {
                        let n;
                        if (((r = e = t[o]), !tY(e) && void 0 === (r = t$[(n = String(e)).toLowerCase()]))) throw new ti(`Unknown adapter '${n}'`);
                        if (r) break;
                        i[n || "#" + o] = r;
                    }
                    if (!r) {
                        let t = Object.entries(i).map(([t, e]) => `adapter ${t} ` + (!1 === e ? "is not supported by the environment" : "is not available in the build")),
                            e = n ? (t.length > 1 ? "since :\n" + t.map(tq).join("\n") : " " + tq(t[0])) : "as no adapter specified";
                        throw new ti("There is no suitable adapter to dispatch the request " + e, "ERR_NOT_SUPPORT");
                    }
                    return r;
                },
                adapters: t$,
            };
            function tJ(t) {
                if ((t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)) throw new tF(null, t);
            }
            function tK(t) {
                tJ(t), (t.headers = tj.from(t.headers)), (t.data = tD.call(t, t.transformRequest)), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1);
                let e = tX.getAdapter(t.adapter || tk.adapter);
                return e(t).then(
                    function (e) {
                        return tJ(t), (e.data = tD.call(t, t.transformResponse, e)), (e.headers = tj.from(e.headers)), e;
                    },
                    function (e) {
                        return !tU(e) && (tJ(t), e && e.response && ((e.response.data = tD.call(t, t.transformResponse, e.response)), (e.response.headers = tj.from(e.response.headers)))), Promise.reject(e);
                    }
                );
            }
            let tZ = (t) => (t instanceof tj ? t.toJSON() : t);
            function tQ(t, e) {
                e = e || {};
                let r = {};
                function n(t, e, r) {
                    return tn.isPlainObject(t) && tn.isPlainObject(e) ? tn.merge.call({ caseless: r }, t, e) : tn.isPlainObject(e) ? tn.merge({}, e) : tn.isArray(e) ? e.slice() : e;
                }
                function i(t, e, r) {
                    return tn.isUndefined(e) ? (tn.isUndefined(t) ? void 0 : n(void 0, t, r)) : n(t, e, r);
                }
                function o(t, e) {
                    if (!tn.isUndefined(e)) return n(void 0, e);
                }
                function s(t, e) {
                    return tn.isUndefined(e) ? (tn.isUndefined(t) ? void 0 : n(void 0, t)) : n(void 0, e);
                }
                function a(r, i, o) {
                    return o in e ? n(r, i) : o in t ? n(void 0, r) : void 0;
                }
                let l = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    beforeRedirect: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: a,
                    headers: (t, e) => i(tZ(t), tZ(e), !0),
                };
                return (
                    tn.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
                        let o = l[n] || i,
                            s = o(t[n], e[n], n);
                        (tn.isUndefined(s) && o !== a) || (r[n] = s);
                    }),
                    r
                );
            }
            let t0 = "1.6.0",
                t1 = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
                t1[t] = function (r) {
                    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
                };
            });
            let t2 = {};
            t1.transitional = function (t, e, r) {
                function n(t, e) {
                    return "[Axios v" + t0 + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "");
                }
                return (r, i, o) => {
                    if (!1 === t) throw new ti(n(i, " has been removed" + (e ? " in " + e : "")), ti.ERR_DEPRECATED);
                    return e && !t2[i] && ((t2[i] = !0), console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, i, o);
                };
            };
            var t5 = {
                assertOptions: function (t, e, r) {
                    if ("object" != typeof t) throw new ti("options must be an object", ti.ERR_BAD_OPTION_VALUE);
                    let n = Object.keys(t),
                        i = n.length;
                    for (; i-- > 0; ) {
                        let o = n[i],
                            s = e[o];
                        if (s) {
                            let e = t[o],
                                r = void 0 === e || s(e, o, t);
                            if (!0 !== r) throw new ti("option " + o + " must be " + r, ti.ERR_BAD_OPTION_VALUE);
                            continue;
                        }
                        if (!0 !== r) throw new ti("Unknown option " + o, ti.ERR_BAD_OPTION);
                    }
                },
                validators: t1,
            };
            let t3 = t5.validators;
            class t6 {
                constructor(t) {
                    (this.defaults = t), (this.interceptors = { request: new tv(), response: new tv() });
                }
                request(t, e) {
                    let r, n;
                    "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}), (e = tQ(this.defaults, e));
                    let { transitional: i, paramsSerializer: o, headers: s } = e;
                    void 0 !== i && t5.assertOptions(i, { silentJSONParsing: t3.transitional(t3.boolean), forcedJSONParsing: t3.transitional(t3.boolean), clarifyTimeoutError: t3.transitional(t3.boolean) }, !1),
                        null != o && (tn.isFunction(o) ? (e.paramsSerializer = { serialize: o }) : t5.assertOptions(o, { encode: t3.function, serialize: t3.function }, !0)),
                        (e.method = (e.method || this.defaults.method || "get").toLowerCase());
                    let a = s && tn.merge(s.common, s[e.method]);
                    s &&
                        tn.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (t) => {
                            delete s[t];
                        }),
                        (e.headers = tj.concat(a, s));
                    let l = [],
                        u = !0;
                    this.interceptors.request.forEach(function (t) {
                        ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && ((u = u && t.synchronous), l.unshift(t.fulfilled, t.rejected));
                    });
                    let h = [];
                    this.interceptors.response.forEach(function (t) {
                        h.push(t.fulfilled, t.rejected);
                    });
                    let c = 0;
                    if (!u) {
                        let t = [tK.bind(this), void 0];
                        for (t.unshift.apply(t, l), t.push.apply(t, h), n = t.length, r = Promise.resolve(e); c < n; ) r = r.then(t[c++], t[c++]);
                        return r;
                    }
                    n = l.length;
                    let p = e;
                    for (c = 0; c < n; ) {
                        let t = l[c++],
                            e = l[c++];
                        try {
                            p = t(p);
                        } catch (t) {
                            e.call(this, t);
                            break;
                        }
                    }
                    try {
                        r = tK.call(this, p);
                    } catch (t) {
                        return Promise.reject(t);
                    }
                    for (c = 0, n = h.length; c < n; ) r = r.then(h[c++], h[c++]);
                    return r;
                }
                getUri(t) {
                    t = tQ(this.defaults, t);
                    let e = tI(t.baseURL, t.url);
                    return ty(e, t.params, t.paramsSerializer);
                }
            }
            tn.forEach(["delete", "get", "head", "options"], function (t) {
                t6.prototype[t] = function (e, r) {
                    return this.request(tQ(r || {}, { method: t, url: e, data: (r || {}).data }));
                };
            }),
                tn.forEach(["post", "put", "patch"], function (t) {
                    function e(e) {
                        return function (r, n, i) {
                            return this.request(tQ(i || {}, { method: t, headers: e ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: n }));
                        };
                    }
                    (t6.prototype[t] = e()), (t6.prototype[t + "Form"] = e(!0));
                });
            class t4 {
                constructor(t) {
                    let e;
                    if ("function" != typeof t) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function (t) {
                        e = t;
                    });
                    let r = this;
                    this.promise.then((t) => {
                        if (!r._listeners) return;
                        let e = r._listeners.length;
                        for (; e-- > 0; ) r._listeners[e](t);
                        r._listeners = null;
                    }),
                        (this.promise.then = (t) => {
                            let e;
                            let n = new Promise((t) => {
                                r.subscribe(t), (e = t);
                            }).then(t);
                            return (
                                (n.cancel = function () {
                                    r.unsubscribe(e);
                                }),
                                n
                            );
                        }),
                        t(function (t, n, i) {
                            r.reason || ((r.reason = new tF(t, n, i)), e(r.reason));
                        });
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason;
                }
                subscribe(t) {
                    if (this.reason) {
                        t(this.reason);
                        return;
                    }
                    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
                }
                unsubscribe(t) {
                    if (!this._listeners) return;
                    let e = this._listeners.indexOf(t);
                    -1 !== e && this._listeners.splice(e, 1);
                }
                static source() {
                    let t;
                    let e = new t4(function (e) {
                        t = e;
                    });
                    return { token: e, cancel: t };
                }
            }
            let t8 = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511,
            };
            Object.entries(t8).forEach(([t, e]) => {
                t8[e] = t;
            });
            let t9 = (function t(e) {
                let r = new t6(e),
                    n = i(t6.prototype.request, r);
                return (
                    tn.extend(n, t6.prototype, r, { allOwnKeys: !0 }),
                    tn.extend(n, r, null, { allOwnKeys: !0 }),
                    (n.create = function (r) {
                        return t(tQ(e, r));
                    }),
                    n
                );
            })(tk);
            (t9.Axios = t6),
                (t9.CanceledError = tF),
                (t9.CancelToken = t4),
                (t9.isCancel = tU),
                (t9.VERSION = t0),
                (t9.toFormData = tp),
                (t9.AxiosError = ti),
                (t9.Cancel = t9.CanceledError),
                (t9.all = function (t) {
                    return Promise.all(t);
                }),
                (t9.spread = function (t) {
                    return function (e) {
                        return t.apply(null, e);
                    };
                }),
                (t9.isAxiosError = function (t) {
                    return tn.isObject(t) && !0 === t.isAxiosError;
                }),
                (t9.mergeConfig = tQ),
                (t9.AxiosHeaders = tj),
                (t9.formToJSON = (t) => tS(tn.isHTMLForm(t) ? new FormData(t) : t)),
                (t9.getAdapter = tX.getAdapter),
                (t9.HttpStatusCode = t8),
                (t9.default = t9);
            var t7 = t9;
        },
        89: function (t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                E: function () {
                    return iI;
                },
            });
            var i,
                o,
                s = r(7294);
            let a = (0, s.createContext)({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" }),
                l = (0, s.createContext)({}),
                u = (0, s.createContext)(null),
                h = "undefined" != typeof document,
                c = h ? s.useLayoutEffect : s.useEffect,
                p = (0, s.createContext)({ strict: !1 });
            function f(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current");
            }
            function d(t) {
                return "string" == typeof t || Array.isArray(t);
            }
            function m(t) {
                return "object" == typeof t && "function" == typeof t.start;
            }
            let g = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                y = ["initial", ...g];
            function v(t) {
                return m(t.animate) || y.some((e) => d(t[e]));
            }
            function b(t) {
                return !!(v(t) || t.variants);
            }
            function w(t) {
                return Array.isArray(t) ? t.join(" ") : t;
            }
            let x = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"],
                },
                E = {};
            for (let t in x) E[t] = { isEnabled: (e) => x[t].some((t) => !!e[t]) };
            let A = (0, s.createContext)({}),
                T = (0, s.createContext)({}),
                P = Symbol.for("motionComponentSymbol"),
                S = [
                    "animate",
                    "circle",
                    "defs",
                    "desc",
                    "ellipse",
                    "g",
                    "image",
                    "line",
                    "filter",
                    "marker",
                    "mask",
                    "metadata",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "rect",
                    "stop",
                    "switch",
                    "symbol",
                    "svg",
                    "text",
                    "tspan",
                    "use",
                    "view",
                ];
            function k(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (S.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1;
            }
            let C = {},
                R = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                O = new Set(R);
            function B(t, { layout: e, layoutId: r }) {
                return O.has(t) || t.startsWith("origin") || ((e || void 0 !== r) && (!!C[t] || "opacity" === t));
            }
            let V = (t) => !!(t && t.getVelocity),
                L = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
                M = R.length,
                j = (t) => (e) => "string" == typeof e && e.startsWith(t),
                D = j("--"),
                U = j("var(--"),
                F = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
                N = (t, e, r) => Math.min(Math.max(r, t), e),
                I = { test: (t) => "number" == typeof t, parse: parseFloat, transform: (t) => t },
                G = { ...I, transform: (t) => N(0, 1, t) },
                _ = { ...I, default: 1 },
                z = (t) => Math.round(1e5 * t) / 1e5,
                H = /(-)?([\d]*\.?[\d])+/g,
                W = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                $ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
            function q(t) {
                return "string" == typeof t;
            }
            let Y = (t) => ({ test: (e) => q(e) && e.endsWith(t) && 1 === e.split(" ").length, parse: parseFloat, transform: (e) => `${e}${t}` }),
                X = Y("deg"),
                J = Y("%"),
                K = Y("px"),
                Z = Y("vh"),
                Q = Y("vw"),
                tt = { ...J, parse: (t) => J.parse(t) / 100, transform: (t) => J.transform(100 * t) },
                te = { ...I, transform: Math.round },
                tr = {
                    borderWidth: K,
                    borderTopWidth: K,
                    borderRightWidth: K,
                    borderBottomWidth: K,
                    borderLeftWidth: K,
                    borderRadius: K,
                    radius: K,
                    borderTopLeftRadius: K,
                    borderTopRightRadius: K,
                    borderBottomRightRadius: K,
                    borderBottomLeftRadius: K,
                    width: K,
                    maxWidth: K,
                    height: K,
                    maxHeight: K,
                    size: K,
                    top: K,
                    right: K,
                    bottom: K,
                    left: K,
                    padding: K,
                    paddingTop: K,
                    paddingRight: K,
                    paddingBottom: K,
                    paddingLeft: K,
                    margin: K,
                    marginTop: K,
                    marginRight: K,
                    marginBottom: K,
                    marginLeft: K,
                    rotate: X,
                    rotateX: X,
                    rotateY: X,
                    rotateZ: X,
                    scale: _,
                    scaleX: _,
                    scaleY: _,
                    scaleZ: _,
                    skew: X,
                    skewX: X,
                    skewY: X,
                    distance: K,
                    translateX: K,
                    translateY: K,
                    translateZ: K,
                    x: K,
                    y: K,
                    z: K,
                    perspective: K,
                    transformPerspective: K,
                    opacity: G,
                    originX: tt,
                    originY: tt,
                    originZ: K,
                    zIndex: te,
                    fillOpacity: G,
                    strokeOpacity: G,
                    numOctaves: te,
                };
            function tn(t, e, r, n) {
                let { style: i, vars: o, transform: s, transformOrigin: a } = t,
                    l = !1,
                    u = !1,
                    h = !0;
                for (let t in e) {
                    let r = e[t];
                    if (D(t)) {
                        o[t] = r;
                        continue;
                    }
                    let n = tr[t],
                        c = F(r, n);
                    if (O.has(t)) {
                        if (((l = !0), (s[t] = c), !h)) continue;
                        r !== (n.default || 0) && (h = !1);
                    } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (i[t] = c);
                }
                if (
                    (!e.transform &&
                        (l || n
                            ? (i.transform = (function (t, { enableHardwareAcceleration: e = !0, allowTransformNone: r = !0 }, n, i) {
                                  let o = "";
                                  for (let e = 0; e < M; e++) {
                                      let r = R[e];
                                      if (void 0 !== t[r]) {
                                          let e = L[r] || r;
                                          o += `${e}(${t[r]}) `;
                                      }
                                  }
                                  return e && !t.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(t, n ? "" : o)) : r && n && (o = "none"), o;
                              })(t.transform, r, h, n))
                            : i.transform && (i.transform = "none")),
                    u)
                ) {
                    let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = a;
                    i.transformOrigin = `${t} ${e} ${r}`;
                }
            }
            let ti = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
            function to(t, e, r) {
                for (let n in e) V(e[n]) || B(n, r) || (t[n] = e[n]);
            }
            function ts(t, e, r) {
                let n = {},
                    i = (function (t, e, r) {
                        let n = t.style || {},
                            i = {};
                        return (
                            to(i, n, t),
                            Object.assign(
                                i,
                                (function ({ transformTemplate: t }, e, r) {
                                    return (0, s.useMemo)(() => {
                                        let n = ti();
                                        return tn(n, e, { enableHardwareAcceleration: !r }, t), Object.assign({}, n.vars, n.style);
                                    }, [e]);
                                })(t, e, r)
                            ),
                            t.transformValues ? t.transformValues(i) : i
                        );
                    })(t, e, r);
                return (
                    t.drag && !1 !== t.dragListener && ((n.draggable = !1), (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"), (i.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
                    void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                    (n.style = i),
                    n
                );
            }
            let ta = new Set([
                "animate",
                "exit",
                "variants",
                "initial",
                "style",
                "values",
                "variants",
                "transition",
                "transformTemplate",
                "transformValues",
                "custom",
                "inherit",
                "onLayoutAnimationStart",
                "onLayoutAnimationComplete",
                "onLayoutMeasure",
                "onBeforeLayoutMeasure",
                "onAnimationStart",
                "onAnimationComplete",
                "onUpdate",
                "onDragStart",
                "onDrag",
                "onDragEnd",
                "onMeasureDragConstraints",
                "onDirectionLock",
                "onDragTransitionEnd",
                "_dragX",
                "_dragY",
                "onHoverStart",
                "onHoverEnd",
                "onViewportEnter",
                "onViewportLeave",
                "ignoreStrict",
                "viewport",
            ]);
            function tl(t) {
                return t.startsWith("while") || (t.startsWith("drag") && "draggable" !== t) || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ta.has(t);
            }
            let tu = (t) => !tl(t);
            try {
                (i = require("@emotion/is-prop-valid").default) && (tu = (t) => (t.startsWith("on") ? !tl(t) : i(t)));
            } catch (t) {}
            function th(t, e, r) {
                return "string" == typeof t ? t : K.transform(e + r * t);
            }
            let tc = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
                tp = { offset: "strokeDashoffset", array: "strokeDasharray" };
            function tf(t, { attrX: e, attrY: r, attrScale: n, originX: i, originY: o, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, h, c, p) {
                if ((tn(t, u, h, p), c)) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return;
                }
                (t.attrs = t.style), (t.style = {});
                let { attrs: f, style: d, dimensions: m } = t;
                f.transform && (m && (d.transform = f.transform), delete f.transform),
                    m &&
                        (void 0 !== i || void 0 !== o || d.transform) &&
                        (d.transformOrigin = (function (t, e, r) {
                            let n = th(e, t.x, t.width),
                                i = th(r, t.y, t.height);
                            return `${n} ${i}`;
                        })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
                    void 0 !== e && (f.x = e),
                    void 0 !== r && (f.y = r),
                    void 0 !== n && (f.scale = n),
                    void 0 !== s &&
                        (function (t, e, r = 1, n = 0, i = !0) {
                            t.pathLength = 1;
                            let o = i ? tc : tp;
                            t[o.offset] = K.transform(-n);
                            let s = K.transform(e),
                                a = K.transform(r);
                            t[o.array] = `${s} ${a}`;
                        })(f, s, a, l, !1);
            }
            let td = () => ({ ...ti(), attrs: {} }),
                tm = (t) => "string" == typeof t && "svg" === t.toLowerCase();
            function tg(t, e, r, n) {
                let i = (0, s.useMemo)(() => {
                    let r = td();
                    return tf(r, e, { enableHardwareAcceleration: !1 }, tm(n), t.transformTemplate), { ...r.attrs, style: { ...r.style } };
                }, [e]);
                if (t.style) {
                    let e = {};
                    to(e, t.style, t), (i.style = { ...e, ...i.style });
                }
                return i;
            }
            let ty = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            function tv(t, { style: e, vars: r }, n, i) {
                for (let o in (Object.assign(t.style, e, i && i.getProjectionStyles(n)), r)) t.style.setProperty(o, r[o]);
            }
            let tb = new Set([
                "baseFrequency",
                "diffuseConstant",
                "kernelMatrix",
                "kernelUnitLength",
                "keySplines",
                "keyTimes",
                "limitingConeAngle",
                "markerHeight",
                "markerWidth",
                "numOctaves",
                "targetX",
                "targetY",
                "surfaceScale",
                "specularConstant",
                "specularExponent",
                "stdDeviation",
                "tableValues",
                "viewBox",
                "gradientTransform",
                "pathLength",
                "startOffset",
                "textLength",
                "lengthAdjust",
            ]);
            function tw(t, e, r, n) {
                for (let r in (tv(t, e, void 0, n), e.attrs)) t.setAttribute(tb.has(r) ? r : ty(r), e.attrs[r]);
            }
            function tx(t, e) {
                let { style: r } = t,
                    n = {};
                for (let i in r) (V(r[i]) || (e.style && V(e.style[i])) || B(i, t)) && (n[i] = r[i]);
                return n;
            }
            function tE(t, e) {
                let r = tx(t, e);
                for (let n in t)
                    if (V(t[n]) || V(e[n])) {
                        let e = -1 !== R.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                        r[e] = t[n];
                    }
                return r;
            }
            function tA(t, e, r, n = {}, i = {}) {
                return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), e;
            }
            let tT = (t) => Array.isArray(t),
                tP = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
                tS = (t) => (tT(t) ? t[t.length - 1] || 0 : t);
            function tk(t) {
                let e = V(t) ? t.get() : t;
                return tP(e) ? e.toValue() : e;
            }
            let tC = (t) => (e, r) => {
                    let n = (0, s.useContext)(l),
                        i = (0, s.useContext)(u),
                        o = () =>
                            (function ({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: r }, n, i, o) {
                                let s = {
                                    latestValues: (function (t, e, r, n) {
                                        let i = {},
                                            o = n(t, {});
                                        for (let t in o) i[t] = tk(o[t]);
                                        let { initial: s, animate: a } = t,
                                            l = v(t),
                                            u = b(t);
                                        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
                                        let h = !!r && !1 === r.initial;
                                        h = h || !1 === s;
                                        let c = h ? a : s;
                                        if (c && "boolean" != typeof c && !m(c)) {
                                            let e = Array.isArray(c) ? c : [c];
                                            e.forEach((e) => {
                                                let r = tA(t, e);
                                                if (!r) return;
                                                let { transitionEnd: n, transition: o, ...s } = r;
                                                for (let t in s) {
                                                    let e = s[t];
                                                    if (Array.isArray(e)) {
                                                        let t = h ? e.length - 1 : 0;
                                                        e = e[t];
                                                    }
                                                    null !== e && (i[t] = e);
                                                }
                                                for (let t in n) i[t] = n[t];
                                            });
                                        }
                                        return i;
                                    })(n, i, o, t),
                                    renderState: e(),
                                };
                                return r && (s.mount = (t) => r(n, t, s)), s;
                            })(t, e, n, i);
                    return r
                        ? o()
                        : (function (t) {
                              let e = (0, s.useRef)(null);
                              return null === e.current && (e.current = t()), e.current;
                          })(o);
                },
                tR = (t) => t;
            class tO {
                constructor() {
                    (this.order = []), (this.scheduled = new Set());
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0;
                }
                remove(t) {
                    let e = this.order.indexOf(t);
                    -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
                }
                clear() {
                    (this.order.length = 0), this.scheduled.clear();
                }
            }
            let tB = ["prepare", "read", "update", "preRender", "render", "postRender"],
                { schedule: tV, cancel: tL, state: tM, steps: tj } = (function (t, e) {
                    let r = !1,
                        n = !0,
                        i = { delta: 0, timestamp: 0, isProcessing: !1 },
                        o = tB.reduce(
                            (t, e) => (
                                (t[e] = (function (t) {
                                    let e = new tO(),
                                        r = new tO(),
                                        n = 0,
                                        i = !1,
                                        o = !1,
                                        s = new WeakSet(),
                                        a = {
                                            schedule: (t, o = !1, a = !1) => {
                                                let l = a && i,
                                                    u = l ? e : r;
                                                return o && s.add(t), u.add(t) && l && i && (n = e.order.length), t;
                                            },
                                            cancel: (t) => {
                                                r.remove(t), s.delete(t);
                                            },
                                            process: (l) => {
                                                if (i) {
                                                    o = !0;
                                                    return;
                                                }
                                                if (((i = !0), ([e, r] = [r, e]), r.clear(), (n = e.order.length)))
                                                    for (let r = 0; r < n; r++) {
                                                        let n = e.order[r];
                                                        n(l), s.has(n) && (a.schedule(n), t());
                                                    }
                                                (i = !1), o && ((o = !1), a.process(l));
                                            },
                                        };
                                    return a;
                                })(() => (r = !0))),
                                t
                            ),
                            {}
                        ),
                        s = (t) => o[t].process(i),
                        a = () => {
                            let o = performance.now();
                            (r = !1), (i.delta = n ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)), (i.timestamp = o), (i.isProcessing = !0), tB.forEach(s), (i.isProcessing = !1), r && e && ((n = !1), t(a));
                        },
                        l = () => {
                            (r = !0), (n = !0), i.isProcessing || t(a);
                        },
                        u = tB.reduce((t, e) => {
                            let n = o[e];
                            return (t[e] = (t, e = !1, i = !1) => (r || l(), n.schedule(t, e, i))), t;
                        }, {}),
                        h = (t) => tB.forEach((e) => o[e].cancel(t));
                    return { schedule: u, cancel: h, state: i, steps: o };
                })("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : tR, !0),
                tD = {
                    useVisualState: tC({
                        scrapeMotionValuesFromProps: tE,
                        createRenderState: td,
                        onMount: (t, e, { renderState: r, latestValues: n }) => {
                            tV.read(() => {
                                try {
                                    r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect();
                                } catch (t) {
                                    r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                                }
                            }),
                                tV.render(() => {
                                    tf(r, n, { enableHardwareAcceleration: !1 }, tm(e.tagName), t.transformTemplate), tw(e, r);
                                });
                        },
                    }),
                },
                tU = { useVisualState: tC({ scrapeMotionValuesFromProps: tx, createRenderState: ti }) };
            function tF(t, e, r, n = { passive: !0 }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
            }
            let tN = (t) => ("mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary);
            function tI(t, e = "page") {
                return { point: { x: t[e + "X"], y: t[e + "Y"] } };
            }
            let tG = (t) => (e) => tN(e) && t(e, tI(e));
            function t_(t, e, r, n) {
                return tF(t, e, tG(r), n);
            }
            let tz = (t, e) => (r) => e(t(r)),
                tH = (...t) => t.reduce(tz);
            function tW(t) {
                let e = null;
                return () => {
                    let r = () => {
                        e = null;
                    };
                    return null === e && ((e = t), r);
                };
            }
            let t$ = tW("dragHorizontal"),
                tq = tW("dragVertical");
            function tY(t) {
                let e = !1;
                if ("y" === t) e = tq();
                else if ("x" === t) e = t$();
                else {
                    let t = t$(),
                        r = tq();
                    t && r
                        ? (e = () => {
                              t(), r();
                          })
                        : (t && t(), r && r());
                }
                return e;
            }
            function tX() {
                let t = tY(!0);
                return !t || (t(), !1);
            }
            class tJ {
                constructor(t) {
                    (this.isMounted = !1), (this.node = t);
                }
                update() {}
            }
            function tK(t, e) {
                let r = "onHover" + (e ? "Start" : "End"),
                    n = (n, i) => {
                        if ("touch" === n.type || tX()) return;
                        let o = t.getProps();
                        t.animationState && o.whileHover && t.animationState.setActive("whileHover", e), o[r] && tV.update(() => o[r](n, i));
                    };
                return t_(t.current, "pointer" + (e ? "enter" : "leave"), n, { passive: !t.getProps()[r] });
            }
            let tZ = (t, e) => !!e && (t === e || tZ(t, e.parentElement));
            function tQ(t, e) {
                if (!e) return;
                let r = new PointerEvent("pointer" + t);
                e(r, tI(r));
            }
            let t0 = new WeakMap(),
                t1 = new WeakMap(),
                t2 = (t) => {
                    let e = t0.get(t.target);
                    e && e(t);
                },
                t5 = (t) => {
                    t.forEach(t2);
                },
                t3 = { some: 0, all: 1 };
            function t6(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            function t4(t, e, r) {
                let n = t.getProps();
                return tA(
                    n,
                    e,
                    void 0 !== r ? r : n.custom,
                    (function (t) {
                        let e = {};
                        return t.values.forEach((t, r) => (e[r] = t.get())), e;
                    })(t),
                    (function (t) {
                        let e = {};
                        return t.values.forEach((t, r) => (e[r] = t.getVelocity())), e;
                    })(t)
                );
            }
            let t8 = "data-" + ty("framerAppearId"),
                t9 = (t) => 1e3 * t,
                t7 = (t) => t / 1e3,
                et = { current: !1 },
                ee = (t) => Array.isArray(t) && "number" == typeof t[0],
                er = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                en = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: er([0, 0.65, 0.55, 1]),
                    circOut: er([0.55, 0, 1, 0.45]),
                    backIn: er([0.31, 0.01, 0.66, -0.59]),
                    backOut: er([0.33, 1.53, 0.69, 0.99]),
                },
                ei = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
            function eo(t, e, r, n) {
                if (t === e && r === n) return tR;
                let i = (e) =>
                    (function (t, e, r, n, i) {
                        let o, s;
                        let a = 0;
                        do (o = ei((s = e + (r - e) / 2), n, i) - t) > 0 ? (r = s) : (e = s);
                        while (Math.abs(o) > 1e-7 && ++a < 12);
                        return s;
                    })(e, 0, 1, t, r);
                return (t) => (0 === t || 1 === t ? t : ei(i(t), e, n));
            }
            let es = eo(0.42, 0, 1, 1),
                ea = eo(0, 0, 0.58, 1),
                el = eo(0.42, 0, 0.58, 1),
                eu = (t) => Array.isArray(t) && "number" != typeof t[0],
                eh = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
                ec = (t) => (e) => 1 - t(1 - e),
                ep = (t) => 1 - Math.sin(Math.acos(t)),
                ef = ec(ep),
                ed = eh(ef),
                em = eo(0.33, 1.53, 0.69, 0.99),
                eg = ec(em),
                ey = eh(eg),
                ev = (t) => ((t *= 2) < 1 ? 0.5 * eg(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
                eb = { linear: tR, easeIn: es, easeInOut: el, easeOut: ea, circIn: ep, circInOut: ed, circOut: ef, backIn: eg, backInOut: ey, backOut: em, anticipate: ev },
                ew = (t) => {
                    if (Array.isArray(t)) {
                        tR(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, n, i] = t;
                        return eo(e, r, n, i);
                    }
                    return "string" == typeof t ? (tR(void 0 !== eb[t], `Invalid easing type '${t}'`), eb[t]) : t;
                },
                ex = (t, e) => (r) => !!((q(r) && $.test(r) && r.startsWith(t)) || (e && Object.prototype.hasOwnProperty.call(r, e))),
                eE = (t, e, r) => (n) => {
                    if (!q(n)) return n;
                    let [i, o, s, a] = n.match(H);
                    return { [t]: parseFloat(i), [e]: parseFloat(o), [r]: parseFloat(s), alpha: void 0 !== a ? parseFloat(a) : 1 };
                },
                eA = (t) => N(0, 255, t),
                eT = { ...I, transform: (t) => Math.round(eA(t)) },
                eP = {
                    test: ex("rgb", "red"),
                    parse: eE("red", "green", "blue"),
                    transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) => "rgba(" + eT.transform(t) + ", " + eT.transform(e) + ", " + eT.transform(r) + ", " + z(G.transform(n)) + ")",
                },
                eS = {
                    test: ex("#"),
                    parse: function (t) {
                        let e = "",
                            r = "",
                            n = "",
                            i = "";
                        return (
                            t.length > 5
                                ? ((e = t.substring(1, 3)), (r = t.substring(3, 5)), (n = t.substring(5, 7)), (i = t.substring(7, 9)))
                                : ((e = t.substring(1, 2)), (r = t.substring(2, 3)), (n = t.substring(3, 4)), (i = t.substring(4, 5)), (e += e), (r += r), (n += n), (i += i)),
                            { red: parseInt(e, 16), green: parseInt(r, 16), blue: parseInt(n, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
                        );
                    },
                    transform: eP.transform,
                },
                ek = {
                    test: ex("hsl", "hue"),
                    parse: eE("hue", "saturation", "lightness"),
                    transform: ({ hue: t, saturation: e, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(t) + ", " + J.transform(z(e)) + ", " + J.transform(z(r)) + ", " + z(G.transform(n)) + ")",
                },
                eC = {
                    test: (t) => eP.test(t) || eS.test(t) || ek.test(t),
                    parse: (t) => (eP.test(t) ? eP.parse(t) : ek.test(t) ? ek.parse(t) : eS.parse(t)),
                    transform: (t) => (q(t) ? t : t.hasOwnProperty("red") ? eP.transform(t) : ek.transform(t)),
                },
                eR = (t, e, r) => -r * t + r * e + t;
            function eO(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            let eB = (t, e, r) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, r * (e * e - n) + n));
                },
                eV = [eS, eP, ek],
                eL = (t) => eV.find((e) => e.test(t));
            function eM(t) {
                let e = eL(t);
                tR(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let r = e.parse(t);
                return (
                    e === ek &&
                        (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
                            (t /= 360), (r /= 100);
                            let i = 0,
                                o = 0,
                                s = 0;
                            if ((e /= 100)) {
                                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                                    a = 2 * r - n;
                                (i = eO(a, n, t + 1 / 3)), (o = eO(a, n, t)), (s = eO(a, n, t - 1 / 3));
                            } else i = o = s = r;
                            return { red: Math.round(255 * i), green: Math.round(255 * o), blue: Math.round(255 * s), alpha: n };
                        })(r)),
                    r
                );
            }
            let ej = (t, e) => {
                    let r = eM(t),
                        n = eM(e),
                        i = { ...r };
                    return (t) => ((i.red = eB(r.red, n.red, t)), (i.green = eB(r.green, n.green, t)), (i.blue = eB(r.blue, n.blue, t)), (i.alpha = eR(r.alpha, n.alpha, t)), eP.transform(i));
                },
                eD = { regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, countKey: "Vars", token: "${v}", parse: tR },
                eU = { regex: W, countKey: "Colors", token: "${c}", parse: eC.parse },
                eF = { regex: H, countKey: "Numbers", token: "${n}", parse: I.parse };
            function eN(t, { regex: e, countKey: r, token: n, parse: i }) {
                let o = t.tokenised.match(e);
                o && ((t["num" + r] = o.length), (t.tokenised = t.tokenised.replace(e, n)), t.values.push(...o.map(i)));
            }
            function eI(t) {
                let e = t.toString(),
                    r = { value: e, tokenised: e, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
                return r.value.includes("var(--") && eN(r, eD), eN(r, eU), eN(r, eF), r;
            }
            function eG(t) {
                return eI(t).values;
            }
            function e_(t) {
                let { values: e, numColors: r, numVars: n, tokenised: i } = eI(t),
                    o = e.length;
                return (t) => {
                    let e = i;
                    for (let i = 0; i < o; i++) e = i < n ? e.replace(eD.token, t[i]) : i < n + r ? e.replace(eU.token, eC.transform(t[i])) : e.replace(eF.token, z(t[i]));
                    return e;
                };
            }
            let ez = (t) => ("number" == typeof t ? 0 : t),
                eH = {
                    test: function (t) {
                        var e, r;
                        return isNaN(t) && q(t) && ((null === (e = t.match(H)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(W)) || void 0 === r ? void 0 : r.length) || 0) > 0;
                    },
                    parse: eG,
                    createTransformer: e_,
                    getAnimatableNone: function (t) {
                        let e = eG(t),
                            r = e_(t);
                        return r(e.map(ez));
                    },
                },
                eW = (t, e) => (r) => `${r > 0 ? e : t}`;
            function e$(t, e) {
                return "number" == typeof t ? (r) => eR(t, e, r) : eC.test(t) ? ej(t, e) : t.startsWith("var(") ? eW(t, e) : eX(t, e);
            }
            let eq = (t, e) => {
                    let r = [...t],
                        n = r.length,
                        i = t.map((t, r) => e$(t, e[r]));
                    return (t) => {
                        for (let e = 0; e < n; e++) r[e] = i[e](t);
                        return r;
                    };
                },
                eY = (t, e) => {
                    let r = { ...t, ...e },
                        n = {};
                    for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = e$(t[i], e[i]));
                    return (t) => {
                        for (let e in n) r[e] = n[e](t);
                        return r;
                    };
                },
                eX = (t, e) => {
                    let r = eH.createTransformer(e),
                        n = eI(t),
                        i = eI(e),
                        o = n.numVars === i.numVars && n.numColors === i.numColors && n.numNumbers >= i.numNumbers;
                    return o
                        ? tH(eq(n.values, i.values), r)
                        : (tR(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
                          eW(t, e));
                },
                eJ = (t, e, r) => {
                    let n = e - t;
                    return 0 === n ? 1 : (r - t) / n;
                },
                eK = (t, e) => (r) => eR(t, e, r);
            function eZ(t, e, { clamp: r = !0, ease: n, mixer: i } = {}) {
                let o = t.length;
                if ((tR(o === e.length, "Both input and output ranges must be the same length"), 1 === o)) return () => e[0];
                t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
                let s = (function (t, e, r) {
                        let n = [],
                            i =
                                r ||
                                (function (t) {
                                    if ("number" == typeof t);
                                    else if ("string" == typeof t) return eC.test(t) ? ej : eX;
                                    else if (Array.isArray(t)) return eq;
                                    else if ("object" == typeof t) return eY;
                                    return eK;
                                })(t[0]),
                            o = t.length - 1;
                        for (let r = 0; r < o; r++) {
                            let o = i(t[r], t[r + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[r] || tR : e;
                                o = tH(t, o);
                            }
                            n.push(o);
                        }
                        return n;
                    })(e, n, i),
                    a = s.length,
                    l = (e) => {
                        let r = 0;
                        if (a > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                        let n = eJ(t[r], t[r + 1], e);
                        return s[r](n);
                    };
                return r ? (e) => l(N(t[0], t[o - 1], e)) : l;
            }
            function eQ({ duration: t = 300, keyframes: e, times: r, ease: n = "easeInOut" }) {
                let i = eu(n) ? n.map(ew) : ew(n),
                    o = { done: !1, value: e[0] },
                    s = (r && r.length === e.length
                        ? r
                        : (function (t) {
                              let e = [0];
                              return (
                                  (function (t, e) {
                                      let r = t[t.length - 1];
                                      for (let n = 1; n <= e; n++) {
                                          let i = eJ(0, e, n);
                                          t.push(eR(r, 1, i));
                                      }
                                  })(e, t.length - 1),
                                  e
                              );
                          })(e)
                    ).map((e) => e * t),
                    a = eZ(s, e, { ease: Array.isArray(i) ? i : e.map(() => i || el).splice(0, e.length - 1) });
                return { calculatedDuration: t, next: (e) => ((o.value = a(e)), (o.done = e >= t), o) };
            }
            function e0(t, e, r) {
                var n, i;
                let o = Math.max(e - 5, 0);
                return (n = r - t(o)), (i = e - o) ? n * (1e3 / i) : 0;
            }
            function e1(t, e) {
                return t * Math.sqrt(1 - e * e);
            }
            let e2 = ["duration", "bounce"],
                e5 = ["stiffness", "damping", "mass"];
            function e3(t, e) {
                return e.some((e) => void 0 !== t[e]);
            }
            function e6({ keyframes: t, restDelta: e, restSpeed: r, ...n }) {
                let i;
                let o = t[0],
                    s = t[t.length - 1],
                    a = { done: !1, value: o },
                    { stiffness: l, damping: u, mass: h, velocity: c, duration: p, isResolvedFromDuration: f } = (function (t) {
                        let e = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t };
                        if (!e3(t, e5) && e3(t, e2)) {
                            let r = (function ({ duration: t = 800, bounce: e = 0.25, velocity: r = 0, mass: n = 1 }) {
                                let i, o;
                                tR(t <= t9(10), "Spring duration must be 10 seconds or less");
                                let s = 1 - e;
                                (s = N(0.05, 1, s)),
                                    (t = N(0.01, 10, t7(t))),
                                    s < 1
                                        ? ((i = (e) => {
                                              let n = e * s,
                                                  i = n * t,
                                                  o = e1(e, s);
                                              return 0.001 - ((n - r) / o) * Math.exp(-i);
                                          }),
                                          (o = (e) => {
                                              let n = e * s,
                                                  o = n * t,
                                                  a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                                                  l = e1(Math.pow(e, 2), s),
                                                  u = -i(e) + 0.001 > 0 ? -1 : 1;
                                              return (u * ((o * r + r - a) * Math.exp(-o))) / l;
                                          }))
                                        : ((i = (e) => {
                                              let n = Math.exp(-e * t),
                                                  i = (e - r) * t + 1;
                                              return -0.001 + n * i;
                                          }),
                                          (o = (e) => {
                                              let n = Math.exp(-e * t),
                                                  i = (r - e) * (t * t);
                                              return n * i;
                                          }));
                                let a = 5 / t,
                                    l = (function (t, e, r) {
                                        let n = r;
                                        for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                        return n;
                                    })(i, o, a);
                                if (((t = t9(t)), isNaN(l))) return { stiffness: 100, damping: 10, duration: t };
                                {
                                    let e = Math.pow(l, 2) * n;
                                    return { stiffness: e, damping: 2 * s * Math.sqrt(n * e), duration: t };
                                }
                            })(t);
                            (e = { ...e, ...r, velocity: 0, mass: 1 }).isResolvedFromDuration = !0;
                        }
                        return e;
                    })(n),
                    d = c ? -t7(c) : 0,
                    m = u / (2 * Math.sqrt(l * h)),
                    g = s - o,
                    y = t7(Math.sqrt(l / h)),
                    v = 5 > Math.abs(g);
                if ((r || (r = v ? 0.01 : 2), e || (e = v ? 0.005 : 0.5), m < 1)) {
                    let t = e1(y, m);
                    i = (e) => s - Math.exp(-m * y * e) * (((d + m * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
                } else if (1 === m) i = (t) => s - Math.exp(-y * t) * (g + (d + y * g) * t);
                else {
                    let t = y * Math.sqrt(m * m - 1);
                    i = (e) => {
                        let r = Math.min(t * e, 300);
                        return s - (Math.exp(-m * y * e) * ((d + m * y * g) * Math.sinh(r) + t * g * Math.cosh(r))) / t;
                    };
                }
                return {
                    calculatedDuration: (f && p) || null,
                    next: (t) => {
                        let n = i(t);
                        if (f) a.done = t >= p;
                        else {
                            let o = d;
                            0 !== t && (o = m < 1 ? e0(i, t, n) : 0);
                            let l = Math.abs(o) <= r,
                                u = Math.abs(s - n) <= e;
                            a.done = l && u;
                        }
                        return (a.value = a.done ? s : n), a;
                    },
                };
            }
            function e4({ keyframes: t, velocity: e = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: h }) {
                let c, p;
                let f = t[0],
                    d = { done: !1, value: f },
                    m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
                    g = (t) => (void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l),
                    y = r * e,
                    v = f + y,
                    b = void 0 === s ? v : s(v);
                b !== v && (y = b - f);
                let w = (t) => -y * Math.exp(-t / n),
                    x = (t) => b + w(t),
                    E = (t) => {
                        let e = w(t),
                            r = x(t);
                        (d.done = Math.abs(e) <= u), (d.value = d.done ? b : r);
                    },
                    A = (t) => {
                        m(d.value) && ((c = t), (p = e6({ keyframes: [d.value, g(d.value)], velocity: e0(x, t, d.value), damping: i, stiffness: o, restDelta: u, restSpeed: h })));
                    };
                return (
                    A(0),
                    {
                        calculatedDuration: null,
                        next: (t) => {
                            let e = !1;
                            return (p || void 0 !== c || ((e = !0), E(t), A(t)), void 0 !== c && t > c) ? p.next(t - c) : (e || E(t), d);
                        },
                    }
                );
            }
            let e8 = (t) => {
                let e = ({ timestamp: e }) => t(e);
                return { start: () => tV.update(e, !0), stop: () => tL(e), now: () => (tM.isProcessing ? tM.timestamp : performance.now()) };
            };
            function e9(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
            }
            let e7 = { decay: e4, inertia: e4, tween: eQ, keyframes: eQ, spring: e6 };
            function rt({ autoplay: t = !0, delay: e = 0, driver: r = e8, keyframes: n, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: h, onUpdate: c, ...p }) {
                let f,
                    d,
                    m,
                    g,
                    y,
                    v = 1,
                    b = !1,
                    w = () => {
                        d = new Promise((t) => {
                            f = t;
                        });
                    };
                w();
                let x = e7[i] || eQ;
                x !== eQ && "number" != typeof n[0] && ((g = eZ([0, 100], n, { clamp: !1 })), (n = [0, 100]));
                let E = x({ ...p, keyframes: n });
                "mirror" === a && (y = x({ ...p, keyframes: [...n].reverse(), velocity: -(p.velocity || 0) }));
                let A = "idle",
                    T = null,
                    P = null,
                    S = null;
                null === E.calculatedDuration && o && (E.calculatedDuration = e9(E));
                let { calculatedDuration: k } = E,
                    C = 1 / 0,
                    R = 1 / 0;
                null !== k && (R = (C = k + s) * (o + 1) - s);
                let O = 0,
                    B = (t) => {
                        if (null === P) return;
                        v > 0 && (P = Math.min(P, t)), v < 0 && (P = Math.min(t - R / v, P)), (O = null !== T ? T : Math.round(t - P) * v);
                        let r = O - e * (v >= 0 ? 1 : -1),
                            i = v >= 0 ? r < 0 : r > R;
                        (O = Math.max(r, 0)), "finished" === A && null === T && (O = R);
                        let l = O,
                            u = E;
                        if (o) {
                            let t = O / C,
                                e = Math.floor(t),
                                r = t % 1;
                            !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, o + 1));
                            let n = !!(e % 2);
                            n && ("reverse" === a ? ((r = 1 - r), s && (r -= s / C)) : "mirror" === a && (u = y));
                            let i = N(0, 1, r);
                            O > R && (i = "reverse" === a && n ? 1 : 0), (l = i * C);
                        }
                        let h = i ? { done: !1, value: n[0] } : u.next(l);
                        g && (h.value = g(h.value));
                        let { done: p } = h;
                        i || null === k || (p = v >= 0 ? O >= R : O <= 0);
                        let f = null === T && ("finished" === A || ("running" === A && p));
                        return c && c(h.value), f && M(), h;
                    },
                    V = () => {
                        m && m.stop(), (m = void 0);
                    },
                    L = () => {
                        (A = "idle"), V(), f(), w(), (P = S = null);
                    },
                    M = () => {
                        (A = "finished"), h && h(), V(), f();
                    },
                    j = () => {
                        if (b) return;
                        m || (m = r(B));
                        let t = m.now();
                        l && l(), null !== T ? (P = t - T) : (P && "finished" !== A) || (P = t), "finished" === A && w(), (S = P), (T = null), (A = "running"), m.start();
                    };
                t && j();
                let D = {
                    then: (t, e) => d.then(t, e),
                    get time() {
                        return t7(O);
                    },
                    set time(newTime) {
                        (O = newTime = t9(newTime)), null === T && m && 0 !== v ? (P = m.now() - newTime / v) : (T = newTime);
                    },
                    get duration() {
                        let t = null === E.calculatedDuration ? e9(E) : E.calculatedDuration;
                        return t7(t);
                    },
                    get speed() {
                        return v;
                    },
                    set speed(newSpeed) {
                        if (newSpeed === v || !m) return;
                        (v = newSpeed), (D.time = t7(O));
                    },
                    get state() {
                        return A;
                    },
                    play: j,
                    pause: () => {
                        (A = "paused"), (T = O);
                    },
                    stop: () => {
                        (b = !0), "idle" !== A && ((A = "idle"), u && u(), L());
                    },
                    cancel: () => {
                        null !== S && B(S), L();
                    },
                    complete: () => {
                        A = "finished";
                    },
                    sample: (t) => ((P = 0), B(t)),
                };
                return D;
            }
            let re = ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")), () => (void 0 === n && (n = o()), n)),
                rr = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                rn = (t, e) =>
                    "spring" === e.type ||
                    "backgroundColor" === t ||
                    !(function t(e) {
                        return !!(!e || ("string" == typeof e && en[e]) || ee(e) || (Array.isArray(e) && e.every(t)));
                    })(e.ease),
                ri = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
                ro = (t) => ({ type: "spring", stiffness: 550, damping: 0 === t ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
                rs = { type: "keyframes", duration: 0.8 },
                ra = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
                rl = (t, { keyframes: e }) => (e.length > 2 ? rs : O.has(t) ? (t.startsWith("scale") ? ro(e[1]) : ri) : ra),
                ru = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || ("string" == typeof e && (eH.test(e) || "0" === e) && !e.startsWith("url("))),
                rh = new Set(["brightness", "contrast", "saturate", "opacity"]);
            function rc(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = r.match(H) || [];
                if (!n) return t;
                let i = r.replace(n, ""),
                    o = rh.has(e) ? 1 : 0;
                return n !== r && (o *= 100), e + "(" + o + i + ")";
            }
            let rp = /([a-z-]*)\(.*?\)/g,
                rf = {
                    ...eH,
                    getAnimatableNone: (t) => {
                        let e = t.match(rp);
                        return e ? e.map(rc).join(" ") : t;
                    },
                },
                rd = { ...tr, color: eC, backgroundColor: eC, outlineColor: eC, fill: eC, stroke: eC, borderColor: eC, borderTopColor: eC, borderRightColor: eC, borderBottomColor: eC, borderLeftColor: eC, filter: rf, WebkitFilter: rf },
                rm = (t) => rd[t];
            function rg(t, e) {
                let r = rm(t);
                return r !== rf && (r = eH), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0;
            }
            let ry = (t) => /^0[^.\s]+$/.test(t);
            function rv(t, e) {
                return t[e] || t.default || t;
            }
            let rb = (t, e, r, n = {}) => (i) => {
                let o = rv(n, t) || {},
                    s = o.delay || n.delay || 0,
                    { elapsed: a = 0 } = n;
                a -= t9(s);
                let l = (function (t, e, r, n) {
                        let i, o;
                        let s = ru(e, r);
                        i = Array.isArray(r) ? [...r] : [null, r];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let t = 0; t < i.length; t++) {
                            var u;
                            null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                                ("number" == typeof (u = i[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || ry(u) : void 0) && l.push(t),
                                "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (o = i[t]);
                        }
                        if (s && l.length && o)
                            for (let t = 0; t < l.length; t++) {
                                let r = l[t];
                                i[r] = rg(e, o);
                            }
                        return i;
                    })(e, t, r, o),
                    u = l[0],
                    h = l[l.length - 1],
                    c = ru(t, u),
                    p = ru(t, h);
                tR(c === p, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let f = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...o,
                    delay: -a,
                    onUpdate: (t) => {
                        e.set(t), o.onUpdate && o.onUpdate(t);
                    },
                    onComplete: () => {
                        i(), o.onComplete && o.onComplete();
                    },
                };
                if (
                    (!(function ({ when: t, delay: e, delayChildren: r, staggerChildren: n, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...h }) {
                        return !!Object.keys(h).length;
                    })(o) && (f = { ...f, ...rl(t, f) }),
                    f.duration && (f.duration = t9(f.duration)),
                    f.repeatDelay && (f.repeatDelay = t9(f.repeatDelay)),
                    !c || !p || et.current || !1 === o.type)
                )
                    return (function ({ keyframes: t, delay: e, onUpdate: r, onComplete: n }) {
                        let i = () => (r && r(t[t.length - 1]), n && n(), { time: 0, speed: 1, duration: 0, play: tR, pause: tR, stop: tR, then: (t) => (t(), Promise.resolve()), cancel: tR, complete: tR });
                        return e ? rt({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i }) : i();
                    })(et.current ? { ...f, delay: 0 } : f);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let r = (function (t, e, { onUpdate: r, onComplete: n, ...i }) {
                        let o, s;
                        let a = re() && rr.has(e) && !i.repeatDelay && "mirror" !== i.repeatType && 0 !== i.damping && "inertia" !== i.type;
                        if (!a) return !1;
                        let l = !1,
                            u = () => {
                                s = new Promise((t) => {
                                    o = t;
                                });
                            };
                        u();
                        let { keyframes: h, duration: c = 300, ease: p, times: f } = i;
                        if (rn(e, i)) {
                            let t = rt({ ...i, repeat: 0, delay: 0 }),
                                e = { done: !1, value: h[0] },
                                r = [],
                                n = 0;
                            for (; !e.done && n < 2e4; ) r.push((e = t.sample(n)).value), (n += 10);
                            (f = void 0), (h = r), (c = n - 10), (p = "linear");
                        }
                        let d = (function (t, e, r, { delay: n = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
                            let u = { [e]: r };
                            l && (u.offset = l);
                            let h = (function t(e) {
                                if (e) return ee(e) ? er(e) : Array.isArray(e) ? e.map(t) : en[e];
                            })(a);
                            return Array.isArray(h) && (u.easing = h), t.animate(u, { delay: n, duration: i, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: o + 1, direction: "reverse" === s ? "alternate" : "normal" });
                        })(t.owner.current, e, h, { ...i, duration: c, ease: p, times: f });
                        i.syncStart && (d.startTime = tM.isProcessing ? tM.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                        let m = () => d.cancel(),
                            g = () => {
                                tV.update(m), o(), u();
                            };
                        d.onfinish = () => {
                            t.set(
                                (function (t, { repeat: e, repeatType: r = "loop" }) {
                                    let n = e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                                    return t[n];
                                })(h, i)
                            ),
                                n && n(),
                                g();
                        };
                        let y = {
                            then: (t, e) => s.then(t, e),
                            attachTimeline: (t) => ((d.timeline = t), (d.onfinish = null), tR),
                            get time() {
                                return t7(d.currentTime || 0);
                            },
                            set time(newTime) {
                                d.currentTime = t9(newTime);
                            },
                            get speed() {
                                return d.playbackRate;
                            },
                            set speed(newSpeed) {
                                d.playbackRate = newSpeed;
                            },
                            get duration() {
                                return t7(c);
                            },
                            play: () => {
                                l || (d.play(), tL(m));
                            },
                            pause: () => d.pause(),
                            stop: () => {
                                if (((l = !0), "idle" === d.playState)) return;
                                let { currentTime: e } = d;
                                if (e) {
                                    let r = rt({ ...i, autoplay: !1 });
                                    t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10);
                                }
                                g();
                            },
                            complete: () => d.finish(),
                            cancel: g,
                        };
                        return y;
                    })(e, t, f);
                    if (r) return r;
                }
                return rt(f);
            };
            function rw(t) {
                return !!(V(t) && t.add);
            }
            let rx = (t) => /^\-?\d*\.?\d+$/.test(t);
            function rE(t, e) {
                -1 === t.indexOf(e) && t.push(e);
            }
            function rA(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1);
            }
            class rT {
                constructor() {
                    this.subscriptions = [];
                }
                add(t) {
                    return rE(this.subscriptions, t), () => rA(this.subscriptions, t);
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r);
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length;
                }
                clear() {
                    this.subscriptions.length = 0;
                }
            }
            let rP = (t) => !isNaN(parseFloat(t)),
                rS = { current: void 0 };
            class rk {
                constructor(t, e = {}) {
                    (this.version = "10.16.4"),
                        (this.timeDelta = 0),
                        (this.lastUpdated = 0),
                        (this.canTrackVelocity = !1),
                        (this.events = {}),
                        (this.updateAndNotify = (t, e = !0) => {
                            (this.prev = this.current), (this.current = t);
                            let { delta: r, timestamp: n } = tM;
                            this.lastUpdated !== n && ((this.timeDelta = r), (this.lastUpdated = n), tV.postRender(this.scheduleVelocityCheck)),
                                this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                                e && this.events.renderRequest && this.events.renderRequest.notify(this.current);
                        }),
                        (this.scheduleVelocityCheck = () => tV.postRender(this.velocityCheck)),
                        (this.velocityCheck = ({ timestamp: t }) => {
                            t !== this.lastUpdated && ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
                        }),
                        (this.hasAnimated = !1),
                        (this.prev = this.current = t),
                        (this.canTrackVelocity = rP(this.current)),
                        (this.owner = e.owner);
                }
                onChange(t) {
                    return this.on("change", t);
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new rT());
                    let r = this.events[t].add(e);
                    return "change" === t
                        ? () => {
                              r(),
                                  tV.read(() => {
                                      this.events.change.getSize() || this.stop();
                                  });
                          }
                        : r;
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear();
                }
                attach(t, e) {
                    (this.passiveEffect = t), (this.stopPassiveEffect = e);
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e);
                }
                setWithVelocity(t, e, r) {
                    this.set(e), (this.prev = t), (this.timeDelta = r);
                }
                jump(t) {
                    this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
                get() {
                    return rS.current && rS.current.push(this), this.current;
                }
                getPrevious() {
                    return this.prev;
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? ((t = parseFloat(this.current) - parseFloat(this.prev)), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0;
                }
                start(t) {
                    return (
                        this.stop(),
                        new Promise((e) => {
                            (this.hasAnimated = !0), (this.animation = t(e)), this.events.animationStart && this.events.animationStart.notify();
                        }).then(() => {
                            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
                        })
                    );
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
                }
                isAnimating() {
                    return !!this.animation;
                }
                clearAnimation() {
                    delete this.animation;
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
            }
            function rC(t, e) {
                return new rk(t, e);
            }
            let rR = (t) => (e) => e.test(t),
                rO = [I, K, J, X, Q, Z, { test: (t) => "auto" === t, parse: (t) => t }],
                rB = (t) => rO.find(rR(t)),
                rV = [...rO, eC, eH],
                rL = (t) => rV.find(rR(t));
            function rM(t, e, { delay: r = 0, transitionOverride: n, type: i } = {}) {
                let { transition: o = t.getDefaultTransition(), transitionEnd: s, ...a } = t.makeTargetAnimatable(e),
                    l = t.getValue("willChange");
                n && (o = n);
                let u = [],
                    h = i && t.animationState && t.animationState.getState()[i];
                for (let e in a) {
                    let n = t.getValue(e),
                        i = a[e];
                    if (
                        !n ||
                        void 0 === i ||
                        (h &&
                            (function ({ protectedKeys: t, needsAnimating: e }, r) {
                                let n = t.hasOwnProperty(r) && !0 !== e[r];
                                return (e[r] = !1), n;
                            })(h, e))
                    )
                        continue;
                    let s = { delay: r, elapsed: 0, ...o };
                    if (window.HandoffAppearAnimations && !n.hasAnimated) {
                        let r = t.getProps()[t8];
                        r && ((s.elapsed = window.HandoffAppearAnimations(r, e, n, tV)), (s.syncStart = !0));
                    }
                    n.start(rb(e, n, i, t.shouldReduceMotion && O.has(e) ? { type: !1 } : s));
                    let c = n.animation;
                    rw(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
                }
                return (
                    s &&
                        Promise.all(u).then(() => {
                            s &&
                                (function (t, e) {
                                    let r = t4(t, e),
                                        { transitionEnd: n = {}, transition: i = {}, ...o } = r ? t.makeTargetAnimatable(r, !1) : {};
                                    for (let e in (o = { ...o, ...n })) {
                                        var s;
                                        let r = tS(o[e]);
                                        (s = e), t.hasValue(s) ? t.getValue(s).set(r) : t.addValue(s, rC(r));
                                    }
                                })(t, s);
                        }),
                    u
                );
            }
            function rj(t, e, r = {}) {
                let n = t4(t, e, r.custom),
                    { transition: i = t.getDefaultTransition() || {} } = n || {};
                r.transitionOverride && (i = r.transitionOverride);
                let o = n ? () => Promise.all(rM(t, n, r)) : () => Promise.resolve(),
                    s =
                        t.variantChildren && t.variantChildren.size
                            ? (n = 0) => {
                                  let { delayChildren: o = 0, staggerChildren: s, staggerDirection: a } = i;
                                  return (function (t, e, r = 0, n = 0, i = 1, o) {
                                      let s = [],
                                          a = (t.variantChildren.size - 1) * n,
                                          l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                                      return (
                                          Array.from(t.variantChildren)
                                              .sort(rD)
                                              .forEach((t, n) => {
                                                  t.notify("AnimationStart", e), s.push(rj(t, e, { ...o, delay: r + l(n) }).then(() => t.notify("AnimationComplete", e)));
                                              }),
                                          Promise.all(s)
                                      );
                                  })(t, e, o + n, s, a, r);
                              }
                            : () => Promise.resolve(),
                    { when: a } = i;
                if (!a) return Promise.all([o(), s(r.delay)]);
                {
                    let [t, e] = "beforeChildren" === a ? [o, s] : [s, o];
                    return t().then(() => e());
                }
            }
            function rD(t, e) {
                return t.sortNodePosition(e);
            }
            let rU = [...g].reverse(),
                rF = g.length;
            function rN(t = !1) {
                return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
            }
            let rI = 0,
                rG = (t, e) => Math.abs(t - e);
            class r_ {
                constructor(t, e, { transformPagePoint: r } = {}) {
                    if (
                        ((this.startEvent = null),
                        (this.lastMoveEvent = null),
                        (this.lastMoveEventInfo = null),
                        (this.handlers = {}),
                        (this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = rW(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                r =
                                    (function (t, e) {
                                        let r = rG(t.x, e.x),
                                            n = rG(t.y, e.y);
                                        return Math.sqrt(r ** 2 + n ** 2);
                                    })(t.offset, { x: 0, y: 0 }) >= 3;
                            if (!e && !r) return;
                            let { point: n } = t,
                                { timestamp: i } = tM;
                            this.history.push({ ...n, timestamp: i });
                            let { onStart: o, onMove: s } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), (this.startEvent = this.lastMoveEvent)), s && s(this.lastMoveEvent, t);
                        }),
                        (this.handlePointerMove = (t, e) => {
                            (this.lastMoveEvent = t), (this.lastMoveEventInfo = rz(e, this.transformPagePoint)), tV.update(this.updatePoint, !0);
                        }),
                        (this.handlePointerUp = (t, e) => {
                            if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
                            let { onEnd: r, onSessionEnd: n } = this.handlers,
                                i = rW("pointercancel" === t.type ? this.lastMoveEventInfo : rz(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, i), n && n(t, i);
                        }),
                        !tN(t))
                    )
                        return;
                    (this.handlers = e), (this.transformPagePoint = r);
                    let n = tI(t),
                        i = rz(n, this.transformPagePoint),
                        { point: o } = i,
                        { timestamp: s } = tM;
                    this.history = [{ ...o, timestamp: s }];
                    let { onSessionStart: a } = e;
                    a && a(t, rW(i, this.history)), (this.removeListeners = tH(t_(window, "pointermove", this.handlePointerMove), t_(window, "pointerup", this.handlePointerUp), t_(window, "pointercancel", this.handlePointerUp)));
                }
                updateHandlers(t) {
                    this.handlers = t;
                }
                end() {
                    this.removeListeners && this.removeListeners(), tL(this.updatePoint);
                }
            }
            function rz(t, e) {
                return e ? { point: e(t.point) } : t;
            }
            function rH(t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }
            function rW({ point: t }, e) {
                return {
                    point: t,
                    delta: rH(t, r$(e)),
                    offset: rH(t, e[0]),
                    velocity: (function (t, e) {
                        if (t.length < 2) return { x: 0, y: 0 };
                        let r = t.length - 1,
                            n = null,
                            i = r$(t);
                        for (; r >= 0 && ((n = t[r]), !(i.timestamp - n.timestamp > t9(0.1))); ) r--;
                        if (!n) return { x: 0, y: 0 };
                        let o = t7(i.timestamp - n.timestamp);
                        if (0 === o) return { x: 0, y: 0 };
                        let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
                        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
                    })(e, 0),
                };
            }
            function r$(t) {
                return t[t.length - 1];
            }
            function rq(t) {
                return t.max - t.min;
            }
            function rY(t, e = 0, r = 0.01) {
                return Math.abs(t - e) <= r;
            }
            function rX(t, e, r, n = 0.5) {
                (t.origin = n),
                    (t.originPoint = eR(e.min, e.max, t.origin)),
                    (t.scale = rq(r) / rq(e)),
                    (rY(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
                    (t.translate = eR(r.min, r.max, t.origin) - t.originPoint),
                    (rY(t.translate) || isNaN(t.translate)) && (t.translate = 0);
            }
            function rJ(t, e, r, n) {
                rX(t.x, e.x, r.x, n ? n.originX : void 0), rX(t.y, e.y, r.y, n ? n.originY : void 0);
            }
            function rK(t, e, r) {
                (t.min = r.min + e.min), (t.max = t.min + rq(e));
            }
            function rZ(t, e, r) {
                (t.min = e.min - r.min), (t.max = t.min + rq(e));
            }
            function rQ(t, e, r) {
                rZ(t.x, e.x, r.x), rZ(t.y, e.y, r.y);
            }
            function r0(t, e, r) {
                return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0 };
            }
            function r1(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n };
            }
            function r2(t, e, r) {
                return { min: r5(t, e), max: r5(t, r) };
            }
            function r5(t, e) {
                return "number" == typeof t ? t : t[e] || 0;
            }
            let r3 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
                r6 = () => ({ x: r3(), y: r3() }),
                r4 = () => ({ min: 0, max: 0 }),
                r8 = () => ({ x: r4(), y: r4() });
            function r9(t) {
                return [t("x"), t("y")];
            }
            function r7({ top: t, left: e, right: r, bottom: n }) {
                return { x: { min: e, max: r }, y: { min: t, max: n } };
            }
            function nt(t) {
                return void 0 === t || 1 === t;
            }
            function ne({ scale: t, scaleX: e, scaleY: r }) {
                return !nt(t) || !nt(e) || !nt(r);
            }
            function nr(t) {
                return ne(t) || nn(t) || t.z || t.rotate || t.rotateX || t.rotateY;
            }
            function nn(t) {
                var e, r;
                return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
            }
            function ni(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
            }
            function no(t, e = 0, r = 1, n, i) {
                (t.min = ni(t.min, e, r, n, i)), (t.max = ni(t.max, e, r, n, i));
            }
            function ns(t, { x: e, y: r }) {
                no(t.x, e.translate, e.scale, e.originPoint), no(t.y, r.translate, r.scale, r.originPoint);
            }
            function na(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
            }
            function nl(t, e) {
                (t.min = t.min + e), (t.max = t.max + e);
            }
            function nu(t, e, [r, n, i]) {
                let o = void 0 !== e[i] ? e[i] : 0.5,
                    s = eR(t.min, t.max, o);
                no(t, e[r], e[n], s, e.scale);
            }
            let nh = ["x", "scaleX", "originX"],
                nc = ["y", "scaleY", "originY"];
            function np(t, e) {
                nu(t.x, e, nh), nu(t.y, e, nc);
            }
            function nf(t, e) {
                return r7(
                    (function (t, e) {
                        if (!e) return t;
                        let r = e({ x: t.left, y: t.top }),
                            n = e({ x: t.right, y: t.bottom });
                        return { top: r.y, left: r.x, bottom: n.y, right: n.x };
                    })(t.getBoundingClientRect(), e)
                );
            }
            let nd = new WeakMap();
            class nm {
                constructor(t) {
                    (this.openGlobalLock = null),
                        (this.isDragging = !1),
                        (this.currentDirection = null),
                        (this.originPoint = { x: 0, y: 0 }),
                        (this.constraints = !1),
                        (this.hasMutatedConstraints = !1),
                        (this.elastic = r8()),
                        (this.visualElement = t);
                }
                start(t, { snapToCursor: e = !1 } = {}) {
                    let { presenceContext: r } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let n = (t) => {
                            this.stopAnimation(), e && this.snapToCursor(tI(t, "page").point);
                        },
                        i = (t, e) => {
                            let { drag: r, dragPropagation: n, onDragStart: i } = this.getProps();
                            if (r && !n && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = tY(r)), !this.openGlobalLock)) return;
                            (this.isDragging = !0),
                                (this.currentDirection = null),
                                this.resolveConstraints(),
                                this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                                r9((t) => {
                                    let e = this.getAxisMotionValue(t).get() || 0;
                                    if (J.test(e)) {
                                        let { projection: r } = this.visualElement;
                                        if (r && r.layout) {
                                            let n = r.layout.layoutBox[t];
                                            if (n) {
                                                let t = rq(n);
                                                e = t * (parseFloat(e) / 100);
                                            }
                                        }
                                    }
                                    this.originPoint[t] = e;
                                }),
                                i && tV.update(() => i(t, e), !1, !0);
                            let { animationState: o } = this.visualElement;
                            o && o.setActive("whileDrag", !0);
                        },
                        o = (t, e) => {
                            let { dragPropagation: r, dragDirectionLock: n, onDirectionLock: i, onDrag: o } = this.getProps();
                            if (!r && !this.openGlobalLock) return;
                            let { offset: s } = e;
                            if (n && null === this.currentDirection) {
                                (this.currentDirection = (function (t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? (r = "y") : Math.abs(t.x) > e && (r = "x"), r;
                                })(s)),
                                    null !== this.currentDirection && i && i(this.currentDirection);
                                return;
                            }
                            this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), o && o(t, e);
                        },
                        s = (t, e) => this.stop(t, e);
                    this.panSession = new r_(t, { onSessionStart: n, onStart: i, onMove: o, onSessionEnd: s }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if ((this.cancel(), !r)) return;
                    let { velocity: n } = e;
                    this.startAnimation(n);
                    let { onDragEnd: i } = this.getProps();
                    i && tV.update(() => i(t, e));
                }
                cancel() {
                    this.isDragging = !1;
                    let { projection: t, animationState: e } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
                    let { dragPropagation: r } = this.getProps();
                    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), e && e.setActive("whileDrag", !1);
                }
                updateAxis(t, e, r) {
                    let { drag: n } = this.getProps();
                    if (!r || !ng(t, n, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + r[t];
                    this.constraints &&
                        this.constraints[t] &&
                        (o = (function (t, { min: e, max: r }, n) {
                            return void 0 !== e && t < e ? (t = n ? eR(e, t, n.min) : Math.max(t, e)) : void 0 !== r && t > r && (t = n ? eR(r, t, n.max) : Math.min(t, r)), t;
                        })(o, this.constraints[t], this.elastic[t])),
                        i.set(o);
                }
                resolveConstraints() {
                    let { dragConstraints: t, dragElastic: e } = this.getProps(),
                        { layout: r } = this.visualElement.projection || {},
                        n = this.constraints;
                    t && f(t)
                        ? this.constraints || (this.constraints = this.resolveRefConstraints())
                        : t && r
                        ? (this.constraints = (function (t, { top: e, left: r, bottom: n, right: i }) {
                              return { x: r0(t.x, r, i), y: r0(t.y, e, n) };
                          })(r.layoutBox, t))
                        : (this.constraints = !1),
                        (this.elastic = (function (t = 0.35) {
                            return !1 === t ? (t = 0) : !0 === t && (t = 0.35), { x: r2(t, "left", "right"), y: r2(t, "top", "bottom") };
                        })(e)),
                        n !== this.constraints &&
                            r &&
                            this.constraints &&
                            !this.hasMutatedConstraints &&
                            r9((t) => {
                                this.getAxisMotionValue(t) &&
                                    (this.constraints[t] = (function (t, e) {
                                        let r = {};
                                        return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r;
                                    })(r.layoutBox[t], this.constraints[t]));
                            });
                }
                resolveRefConstraints() {
                    var t;
                    let { dragConstraints: e, onMeasureDragConstraints: r } = this.getProps();
                    if (!e || !f(e)) return !1;
                    let n = e.current;
                    tR(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let { projection: i } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let o = (function (t, e, r) {
                            let n = nf(t, r),
                                { scroll: i } = e;
                            return i && (nl(n.x, i.offset.x), nl(n.y, i.offset.y)), n;
                        })(n, i.root, this.visualElement.getTransformPagePoint()),
                        s = { x: r1((t = i.layout.layoutBox).x, o.x), y: r1(t.y, o.y) };
                    if (r) {
                        let t = r(
                            (function ({ x: t, y: e }) {
                                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
                            })(s)
                        );
                        (this.hasMutatedConstraints = !!t), t && (s = r7(t));
                    }
                    return s;
                }
                startAnimation(t) {
                    let { drag: e, dragMomentum: r, dragElastic: n, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s } = this.getProps(),
                        a = this.constraints || {},
                        l = r9((s) => {
                            if (!ng(s, e, this.currentDirection)) return;
                            let l = (a && a[s]) || {};
                            o && (l = { min: 0, max: 0 });
                            let u = { type: "inertia", velocity: r ? t[s] : 0, bounceStiffness: n ? 200 : 1e6, bounceDamping: n ? 40 : 1e7, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...l };
                            return this.startAxisValueAnimation(s, u);
                        });
                    return Promise.all(l).then(s);
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return r.start(rb(t, r, 0, e));
                }
                stopAnimation() {
                    r9((t) => this.getAxisMotionValue(t).stop());
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        r = this.visualElement.getProps(),
                        n = r[e];
                    return n || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
                }
                snapToCursor(t) {
                    r9((e) => {
                        let { drag: r } = this.getProps();
                        if (!ng(e, r, this.currentDirection)) return;
                        let { projection: n } = this.visualElement,
                            i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let { min: r, max: o } = n.layout.layoutBox[e];
                            i.set(t[e] - eR(r, o, 0.5));
                        }
                    });
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let { drag: t, dragConstraints: e } = this.getProps(),
                        { projection: r } = this.visualElement;
                    if (!f(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = { x: 0, y: 0 };
                    r9((t) => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let r = e.get();
                            n[t] = (function (t, e) {
                                let r = 0.5,
                                    n = rq(t),
                                    i = rq(e);
                                return i > n ? (r = eJ(e.min, e.max - n, t.min)) : n > i && (r = eJ(t.min, t.max - i, e.min)), N(0, 1, r);
                            })({ min: r, max: r }, this.constraints[t]);
                        }
                    });
                    let { transformTemplate: i } = this.visualElement.getProps();
                    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
                        r.root && r.root.updateScroll(),
                        r.updateLayout(),
                        this.resolveConstraints(),
                        r9((e) => {
                            if (!ng(e, t, null)) return;
                            let r = this.getAxisMotionValue(e),
                                { min: i, max: o } = this.constraints[e];
                            r.set(eR(i, o, n[e]));
                        });
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nd.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = t_(t, "pointerdown", (t) => {
                            let { drag: e, dragListener: r = !0 } = this.getProps();
                            e && r && this.start(t);
                        }),
                        r = () => {
                            let { dragConstraints: t } = this.getProps();
                            f(t) && (this.constraints = this.resolveRefConstraints());
                        },
                        { projection: n } = this.visualElement,
                        i = n.addEventListener("measure", r);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), r();
                    let o = tF(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = n.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e }) => {
                            this.isDragging &&
                                e &&
                                (r9((e) => {
                                    let r = this.getAxisMotionValue(e);
                                    r && ((this.originPoint[e] += t[e].translate), r.set(r.get() + t[e].translate));
                                }),
                                this.visualElement.render());
                        });
                    return () => {
                        o(), e(), i(), s && s();
                    };
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        { drag: e = !1, dragDirectionLock: r = !1, dragPropagation: n = !1, dragConstraints: i = !1, dragElastic: o = 0.35, dragMomentum: s = !0 } = t;
                    return { ...t, drag: e, dragDirectionLock: r, dragPropagation: n, dragConstraints: i, dragElastic: o, dragMomentum: s };
                }
            }
            function ng(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t);
            }
            let ny = (t) => (e, r) => {
                    t && tV.update(() => t(e, r));
                },
                nv = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
            function nb(t, e) {
                return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
            }
            let nw = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!K.test(t)) return t;
                        t = parseFloat(t);
                    }
                    let r = nb(t, e.target.x),
                        n = nb(t, e.target.y);
                    return `${r}% ${n}%`;
                },
            };
            class nx extends s.Component {
                componentDidMount() {
                    let { visualElement: t, layoutGroup: e, switchLayoutGroup: r, layoutId: n } = this.props,
                        { projection: i } = t;
                    Object.assign(C, nA),
                        i &&
                            (e.group && e.group.add(i),
                            r && r.register && n && r.register(i),
                            i.root.didUpdate(),
                            i.addEventListener("animationComplete", () => {
                                this.safeToRemove();
                            }),
                            i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
                        (nv.hasEverUpdated = !0);
                }
                getSnapshotBeforeUpdate(t) {
                    let { layoutDependency: e, visualElement: r, drag: n, isPresent: i } = this.props,
                        o = r.projection;
                    return (
                        o &&
                            ((o.isPresent = i),
                            n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
                            t.isPresent === i ||
                                (i
                                    ? o.promote()
                                    : o.relegate() ||
                                      tV.postRender(() => {
                                          let t = o.getStack();
                                          (t && t.members.length) || this.safeToRemove();
                                      }))),
                        null
                    );
                }
                componentDidUpdate() {
                    let { projection: t } = this.props.visualElement;
                    t &&
                        (t.root.didUpdate(),
                        queueMicrotask(() => {
                            !t.currentAnimation && t.isLead() && this.safeToRemove();
                        }));
                }
                componentWillUnmount() {
                    let { visualElement: t, layoutGroup: e, switchLayoutGroup: r } = this.props,
                        { projection: n } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n));
                }
                safeToRemove() {
                    let { safeToRemove: t } = this.props;
                    t && t();
                }
                render() {
                    return null;
                }
            }
            function nE(t) {
                let [e, r] = (function () {
                        let t = (0, s.useContext)(u);
                        if (null === t) return [!0, null];
                        let { isPresent: e, onExitComplete: r, register: n } = t,
                            i = (0, s.useId)();
                        (0, s.useEffect)(() => n(i), []);
                        let o = () => r && r(i);
                        return !e && r ? [!1, o] : [!0];
                    })(),
                    n = (0, s.useContext)(A);
                return s.createElement(nx, { ...t, layoutGroup: n, switchLayoutGroup: (0, s.useContext)(T), isPresent: e, safeToRemove: r });
            }
            let nA = {
                    borderRadius: { ...nw, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] },
                    borderTopLeftRadius: nw,
                    borderTopRightRadius: nw,
                    borderBottomLeftRadius: nw,
                    borderBottomRightRadius: nw,
                    boxShadow: {
                        correct: (t, { treeScale: e, projectionDelta: r }) => {
                            let n = eH.parse(t);
                            if (n.length > 5) return t;
                            let i = eH.createTransformer(t),
                                o = "number" != typeof n[0] ? 1 : 0,
                                s = r.x.scale * e.x,
                                a = r.y.scale * e.y;
                            (n[0 + o] /= s), (n[1 + o] /= a);
                            let l = eR(s, a, 0.5);
                            return "number" == typeof n[2 + o] && (n[2 + o] /= l), "number" == typeof n[3 + o] && (n[3 + o] /= l), i(n);
                        },
                    },
                },
                nT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nP = nT.length,
                nS = (t) => ("string" == typeof t ? parseFloat(t) : t),
                nk = (t) => "number" == typeof t || K.test(t);
            function nC(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius;
            }
            let nR = nB(0, 0.5, ef),
                nO = nB(0.5, 0.95, tR);
            function nB(t, e, r) {
                return (n) => (n < t ? 0 : n > e ? 1 : r(eJ(t, e, n)));
            }
            function nV(t, e) {
                (t.min = e.min), (t.max = e.max);
            }
            function nL(t, e) {
                nV(t.x, e.x), nV(t.y, e.y);
            }
            function nM(t, e, r, n, i) {
                return (t -= e), (t = n + (1 / r) * (t - n)), void 0 !== i && (t = n + (1 / i) * (t - n)), t;
            }
            function nj(t, e, [r, n, i], o, s) {
                !(function (t, e = 0, r = 1, n = 0.5, i, o = t, s = t) {
                    if (J.test(e)) {
                        e = parseFloat(e);
                        let t = eR(s.min, s.max, e / 100);
                        e = t - s.min;
                    }
                    if ("number" != typeof e) return;
                    let a = eR(o.min, o.max, n);
                    t === o && (a -= e), (t.min = nM(t.min, e, r, a, i)), (t.max = nM(t.max, e, r, a, i));
                })(t, e[r], e[n], e[i], e.scale, o, s);
            }
            let nD = ["x", "scaleX", "originX"],
                nU = ["y", "scaleY", "originY"];
            function nF(t, e, r, n) {
                nj(t.x, e, nD, r ? r.x : void 0, n ? n.x : void 0), nj(t.y, e, nU, r ? r.y : void 0, n ? n.y : void 0);
            }
            function nN(t) {
                return 0 === t.translate && 1 === t.scale;
            }
            function nI(t) {
                return nN(t.x) && nN(t.y);
            }
            function nG(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
            }
            function n_(t) {
                return rq(t.x) / rq(t.y);
            }
            class nz {
                constructor() {
                    this.members = [];
                }
                add(t) {
                    rE(this.members, t), t.scheduleRender();
                }
                remove(t) {
                    if ((rA(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t);
                    }
                }
                relegate(t) {
                    let e;
                    let r = this.members.findIndex((e) => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break;
                        }
                    }
                    return !!e && (this.promote(e), !0);
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
                        r.instance && r.scheduleRender(),
                            t.scheduleRender(),
                            (t.resumeFrom = r),
                            e && (t.resumeFrom.preserveOpacity = !0),
                            r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
                            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let { crossfade: n } = t.options;
                        !1 === n && r.hide();
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((t) => {
                        let { options: e, resumingFrom: r } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
                    });
                }
                scheduleRender() {
                    this.members.forEach((t) => {
                        t.instance && t.scheduleRender(!1);
                    });
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
                }
            }
            function nH(t, e, r) {
                let n = "",
                    i = t.x.translate / e.x,
                    o = t.y.translate / e.y;
                if (((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), r)) {
                    let { rotate: t, rotateX: e, rotateY: i } = r;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), i && (n += `rotateY(${i}deg) `);
                }
                let s = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== s || 1 !== a) && (n += `scale(${s}, ${a})`), n || "none";
            }
            let nW = (t, e) => t.depth - e.depth;
            class n$ {
                constructor() {
                    (this.children = []), (this.isDirty = !1);
                }
                add(t) {
                    rE(this.children, t), (this.isDirty = !0);
                }
                remove(t) {
                    rA(this.children, t), (this.isDirty = !0);
                }
                forEach(t) {
                    this.isDirty && this.children.sort(nW), (this.isDirty = !1), this.children.forEach(t);
                }
            }
            let nq = ["", "X", "Y", "Z"],
                nY = 0,
                nX = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
            function nJ({ attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: n, resetTransform: i }) {
                return class {
                    constructor(t = {}, r = null == e ? void 0 : e()) {
                        (this.id = nY++),
                            (this.animationId = 0),
                            (this.children = new Set()),
                            (this.options = {}),
                            (this.isTreeAnimating = !1),
                            (this.isAnimationBlocked = !1),
                            (this.isLayoutDirty = !1),
                            (this.isProjectionDirty = !1),
                            (this.isSharedProjectionDirty = !1),
                            (this.isTransformDirty = !1),
                            (this.updateManuallyBlocked = !1),
                            (this.updateBlockedByResize = !1),
                            (this.isUpdating = !1),
                            (this.isSVG = !1),
                            (this.needsReset = !1),
                            (this.shouldResetTransform = !1),
                            (this.treeScale = { x: 1, y: 1 }),
                            (this.eventHandlers = new Map()),
                            (this.hasTreeAnimated = !1),
                            (this.updateScheduled = !1),
                            (this.checkUpdateFailed = () => {
                                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                            }),
                            (this.updateProjection = () => {
                                (nX.totalNodes = nX.resolvedTargetDeltas = nX.recalculatedProjection = 0),
                                    this.nodes.forEach(nQ),
                                    this.nodes.forEach(n4),
                                    this.nodes.forEach(n8),
                                    this.nodes.forEach(n0),
                                    window.MotionDebug && window.MotionDebug.record(nX);
                            }),
                            (this.hasProjected = !1),
                            (this.isVisible = !0),
                            (this.animationProgress = 0),
                            (this.sharedNodes = new Map()),
                            (this.latestValues = t),
                            (this.root = r ? r.root || r : this),
                            (this.path = r ? [...r.path, r] : []),
                            (this.parent = r),
                            (this.depth = r ? r.depth + 1 : 0);
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new n$());
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rT()), this.eventHandlers.get(t).add(e);
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e);
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t);
                    }
                    mount(e, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName), (this.instance = e);
                        let { layoutId: n, layout: i, visualElement: o } = this.options;
                        if ((o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (i || n) && (this.isLayoutDirty = !0), t)) {
                            let r;
                            let n = () => (this.root.updateBlockedByResize = !1);
                            t(e, () => {
                                (this.root.updateBlockedByResize = !0),
                                    r && r(),
                                    (r = (function (t, e) {
                                        let r = performance.now(),
                                            n = ({ timestamp: i }) => {
                                                let o = i - r;
                                                o >= e && (tL(n), t(o - e));
                                            };
                                        return tV.read(n, !0), () => tL(n);
                                    })(n, 250)),
                                    nv.hasAnimatedSinceResize && ((nv.hasAnimatedSinceResize = !1), this.nodes.forEach(n6));
                            });
                        }
                        n && this.root.registerSharedNode(n, this),
                            !1 !== this.options.animate &&
                                o &&
                                (n || i) &&
                                this.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: r, layout: n }) => {
                                    if (this.isTreeAnimationBlocked()) {
                                        (this.target = void 0), (this.relativeTarget = void 0);
                                        return;
                                    }
                                    let i = this.options.transition || o.getDefaultTransition() || ii,
                                        { onLayoutAnimationStart: s, onLayoutAnimationComplete: a } = o.getProps(),
                                        l = !this.targetLayout || !nG(this.targetLayout, n) || r,
                                        u = !e && r;
                                    if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || u || (e && (l || !this.currentAnimation))) {
                                        this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(t, u);
                                        let e = { ...rv(i, "layout"), onPlay: s, onComplete: a };
                                        (o.shouldReduceMotion || this.options.layoutRoot) && ((e.delay = 0), (e.type = !1)), this.startAnimation(e);
                                    } else e || n6(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                                    this.targetLayout = n;
                                });
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), tL(this.updateProjection);
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0;
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1;
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize;
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && ((this.isUpdating = !0), this.nodes && this.nodes.forEach(n9), this.animationId++);
                    }
                    getTransformTemplate() {
                        let { visualElement: t } = this.options;
                        return t && t.getProps().transformTemplate;
                    }
                    willUpdate(t = !0) {
                        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return;
                        }
                        if ((this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty)) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            (e.shouldResetTransform = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1);
                        }
                        let { layoutId: e, layout: r } = this.options;
                        if (void 0 === e && !r) return;
                        let n = this.getTransformTemplate();
                        (this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0), this.updateSnapshot(), t && this.notifyListeners("willUpdate");
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n2);
                            return;
                        }
                        this.isUpdating || this.nodes.forEach(n5), (this.isUpdating = !1), this.nodes.forEach(n3), this.nodes.forEach(nK), this.nodes.forEach(nZ), this.clearAllSnapshots();
                        let e = performance.now();
                        (tM.delta = N(0, 1e3 / 60, e - tM.timestamp)), (tM.timestamp = e), (tM.isProcessing = !0), tj.update.process(tM), tj.preRender.process(tM), tj.render.process(tM), (tM.isProcessing = !1);
                    }
                    didUpdate() {
                        this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(n1), this.sharedNodes.forEach(n7);
                    }
                    scheduleUpdateProjection() {
                        tV.preRender(this.updateProjection, !1, !0);
                    }
                    scheduleCheckAfterUnmount() {
                        tV.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                        });
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure());
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll();
                            }
                        let t = this.layout;
                        (this.layout = this.measure(!1)), (this.layoutCorrected = r8()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
                        let { visualElement: e } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                            e && (this.scroll = { animationId: this.root.animationId, phase: t, isRoot: n(this.instance), offset: r(this.instance) });
                    }
                    resetTransform() {
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !nI(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            o = n !== this.prevTransformTemplateValue;
                        t && (e || nr(this.latestValues) || o) && (i(this.instance, n), (this.shouldResetTransform = !1), this.scheduleRender());
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return t && (n = this.removeTransform(n)), ia((e = n).x), ia(e.y), { animationId: this.root.animationId, measuredBox: r, layoutBox: n, latestValues: {}, source: this.id };
                    }
                    measurePageBox() {
                        let { visualElement: t } = this.options;
                        if (!t) return r8();
                        let e = t.measureViewportBox(),
                            { scroll: r } = this.root;
                        return r && (nl(e.x, r.offset.x), nl(e.y, r.offset.y)), e;
                    }
                    removeElementScroll(t) {
                        let e = r8();
                        nL(e, t);
                        for (let r = 0; r < this.path.length; r++) {
                            let n = this.path[r],
                                { scroll: i, options: o } = n;
                            if (n !== this.root && i && o.layoutScroll) {
                                if (i.isRoot) {
                                    nL(e, t);
                                    let { scroll: r } = this.root;
                                    r && (nl(e.x, -r.offset.x), nl(e.y, -r.offset.y));
                                }
                                nl(e.x, i.offset.x), nl(e.y, i.offset.y);
                            }
                        }
                        return e;
                    }
                    applyTransform(t, e = !1) {
                        let r = r8();
                        nL(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && np(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }), nr(n.latestValues) && np(r, n.latestValues);
                        }
                        return nr(this.latestValues) && np(r, this.latestValues), r;
                    }
                    removeTransform(t) {
                        let e = r8();
                        nL(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !nr(r.latestValues)) continue;
                            ne(r.latestValues) && r.updateSnapshot();
                            let n = r8(),
                                i = r.measurePageBox();
                            nL(n, i), nF(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n);
                        }
                        return nr(this.latestValues) && nF(e, this.latestValues), e;
                    }
                    setTargetDelta(t) {
                        (this.targetDelta = t), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
                    }
                    setOptions(t) {
                        this.options = { ...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade };
                    }
                    clearMeasurements() {
                        (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tM.timestamp && this.relativeParent.resolveTargetDelta(!0);
                    }
                    resolveTargetDelta(t = !1) {
                        var e, r, n, i;
                        let o = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                            this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                        let s = !!this.resumingFrom || this !== o,
                            a = !(t || (s && this.isSharedProjectionDirty) || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let { layout: l, layoutId: u } = this.options;
                        if (this.layout && (l || u)) {
                            if (((this.resolvedRelativeTargetAt = tM.timestamp), !this.targetDelta && !this.relativeTarget)) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress
                                    ? ((this.relativeParent = t),
                                      this.forceRelativeParentToResolveTarget(),
                                      (this.relativeTarget = r8()),
                                      (this.relativeTargetOrigin = r8()),
                                      rQ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                                      nL(this.relativeTarget, this.relativeTargetOrigin))
                                    : (this.relativeParent = this.relativeTarget = void 0);
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (
                                    ((this.target || ((this.target = r8()), (this.targetWithTransforms = r8())), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
                                        ? (this.forceRelativeParentToResolveTarget(), (r = this.target), (n = this.relativeTarget), (i = this.relativeParent.target), rK(r.x, n.x, i.x), rK(r.y, n.y, i.y))
                                        : this.targetDelta
                                        ? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : nL(this.target, this.layout.layoutBox), ns(this.target, this.targetDelta))
                                        : nL(this.target, this.layout.layoutBox),
                                    this.attemptToResolveRelativeTarget)
                                ) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress
                                        ? ((this.relativeParent = t),
                                          this.forceRelativeParentToResolveTarget(),
                                          (this.relativeTarget = r8()),
                                          (this.relativeTargetOrigin = r8()),
                                          rQ(this.relativeTargetOrigin, this.target, t.target),
                                          nL(this.relativeTarget, this.relativeTargetOrigin))
                                        : (this.relativeParent = this.relativeTarget = void 0);
                                }
                                nX.resolvedTargetDeltas++;
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || ne(this.parent.latestValues) || nn(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            r = !!this.resumingFrom || this !== e,
                            n = !0;
                        if (
                            ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                            r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                            this.resolvedRelativeTargetAt === tM.timestamp && (n = !1),
                            n)
                        )
                            return;
                        let { layout: i, layoutId: o } = this.options;
                        if (
                            ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
                            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                            !this.layout || !(i || o))
                        )
                            return;
                        nL(this.layoutCorrected, this.layout.layoutBox);
                        let s = this.treeScale.x,
                            a = this.treeScale.y;
                        !(function (t, e, r, n = !1) {
                            let i, o;
                            let s = r.length;
                            if (s) {
                                e.x = e.y = 1;
                                for (let a = 0; a < s; a++) {
                                    o = (i = r[a]).projectionDelta;
                                    let s = i.instance;
                                    (!s || !s.style || "contents" !== s.style.display) &&
                                        (n && i.options.layoutScroll && i.scroll && i !== i.root && np(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                                        o && ((e.x *= o.x.scale), (e.y *= o.y.scale), ns(t, o)),
                                        n && nr(i.latestValues) && np(t, i.latestValues));
                                }
                                (e.x = na(e.x)), (e.y = na(e.y));
                            }
                        })(this.layoutCorrected, this.treeScale, this.path, r),
                            e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let { target: l } = e;
                        if (!l) {
                            this.projectionTransform && ((this.projectionDelta = r6()), (this.projectionTransform = "none"), this.scheduleRender());
                            return;
                        }
                        this.projectionDelta || ((this.projectionDelta = r6()), (this.projectionDeltaWithTransform = r6()));
                        let u = this.projectionTransform;
                        rJ(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                            (this.projectionTransform = nH(this.projectionDelta, this.treeScale)),
                            (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== a) && ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", l)),
                            nX.recalculatedProjection++;
                    }
                    hide() {
                        this.isVisible = !1;
                    }
                    show() {
                        this.isVisible = !0;
                    }
                    scheduleRender(t = !0) {
                        if ((this.options.scheduleRender && this.options.scheduleRender(), t)) {
                            let t = this.getStack();
                            t && t.scheduleRender();
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r;
                        let n = this.snapshot,
                            i = n ? n.latestValues : {},
                            o = { ...this.latestValues },
                            s = r6();
                        (this.relativeParent && this.relativeParent.options.layoutRoot) || (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !e);
                        let a = r8(),
                            l = n ? n.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            p = !c || c.members.length <= 1,
                            f = !!(h && !p && !0 === this.options.crossfade && !this.path.some(ir));
                        (this.animationProgress = 0),
                            (this.mixTargetDelta = (e) => {
                                let n = e / 1e3;
                                if ((it(s.x, t.x, n), it(s.y, t.y, n), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout)) {
                                    var l, u, c, d;
                                    rQ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                                        (c = this.relativeTarget),
                                        (d = this.relativeTargetOrigin),
                                        ie(c.x, d.x, a.x, n),
                                        ie(c.y, d.y, a.y, n),
                                        r && ((l = this.relativeTarget), (u = r), l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1),
                                        r || (r = r8()),
                                        nL(r, this.relativeTarget);
                                }
                                h &&
                                    ((this.animationValues = o),
                                    (function (t, e, r, n, i, o) {
                                        i
                                            ? ((t.opacity = eR(0, void 0 !== r.opacity ? r.opacity : 1, nR(n))), (t.opacityExit = eR(void 0 !== e.opacity ? e.opacity : 1, 0, nO(n))))
                                            : o && (t.opacity = eR(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                        for (let i = 0; i < nP; i++) {
                                            let o = `border${nT[i]}Radius`,
                                                s = nC(e, o),
                                                a = nC(r, o);
                                            if (void 0 === s && void 0 === a) continue;
                                            s || (s = 0), a || (a = 0);
                                            let l = 0 === s || 0 === a || nk(s) === nk(a);
                                            l ? ((t[o] = Math.max(eR(nS(s), nS(a), n), 0)), (J.test(a) || J.test(s)) && (t[o] += "%")) : (t[o] = a);
                                        }
                                        (e.rotate || r.rotate) && (t.rotate = eR(e.rotate || 0, r.rotate || 0, n));
                                    })(o, i, this.latestValues, n, f, p)),
                                    this.root.scheduleUpdateProjection(),
                                    this.scheduleRender(),
                                    (this.animationProgress = n);
                            }),
                            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"),
                            this.currentAnimation && this.currentAnimation.stop(),
                            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                            this.pendingAnimation && (tL(this.pendingAnimation), (this.pendingAnimation = void 0)),
                            (this.pendingAnimation = tV.update(() => {
                                (nv.hasAnimatedSinceResize = !0),
                                    (this.currentAnimation = (function (t, e, r) {
                                        let n = V(t) ? t : rC(t);
                                        return n.start(rb("", n, 1e3, r)), n.animation;
                                    })(0, 0, {
                                        ...t,
                                        onUpdate: (e) => {
                                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                                        },
                                        onComplete: () => {
                                            t.onComplete && t.onComplete(), this.completeAnimation();
                                        },
                                    })),
                                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                                    (this.pendingAnimation = void 0);
                            }));
                    }
                    completeAnimation() {
                        this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            { targetWithTransforms: e, target: r, layout: n, latestValues: i } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && il(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || r8();
                                let e = rq(this.layout.layoutBox.x);
                                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                                let n = rq(this.layout.layoutBox.y);
                                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
                            }
                            nL(e, r), np(e, i), rJ(this.projectionDeltaWithTransform, this.layoutCorrected, e, i);
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nz());
                        let r = this.sharedNodes.get(t);
                        r.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({ transition: n ? n.transition : void 0, preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0 });
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this;
                    }
                    getLead() {
                        var t;
                        let { layoutId: e } = this.options;
                        return (e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this;
                    }
                    getPrevLead() {
                        var t;
                        let { layoutId: e } = this.options;
                        return e ? (null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead) : void 0;
                    }
                    getStack() {
                        let { layoutId: t } = this.options;
                        if (t) return this.root.sharedNodes.get(t);
                    }
                    promote({ needsReset: t, transition: e, preserveFollowOpacity: r } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), t && ((this.projectionDelta = void 0), (this.needsReset = !0)), e && this.setOptions({ transition: e });
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this);
                    }
                    resetRotation() {
                        let { visualElement: t } = this.options;
                        if (!t) return;
                        let e = !1,
                            { latestValues: r } = t;
                        if (((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0), !e)) return;
                        let n = {};
                        for (let e = 0; e < nq.length; e++) {
                            let i = "rotate" + nq[e];
                            r[i] && ((n[i] = r[i]), t.setStaticValue(i, 0));
                        }
                        for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
                        t.scheduleRender();
                    }
                    getProjectionStyles(t = {}) {
                        var e, r;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return { visibility: "hidden" };
                        n.visibility = "";
                        let i = this.getTransformTemplate();
                        if (this.needsReset) return (this.needsReset = !1), (n.opacity = ""), (n.pointerEvents = tk(t.pointerEvents) || ""), (n.transform = i ? i(this.latestValues, "") : "none"), n;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let e = {};
                            return (
                                this.options.layoutId && ((e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1), (e.pointerEvents = tk(t.pointerEvents) || "")),
                                this.hasProjected && !nr(this.latestValues) && ((e.transform = i ? i({}, "") : "none"), (this.hasProjected = !1)),
                                e
                            );
                        }
                        let s = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), (n.transform = nH(this.projectionDeltaWithTransform, this.treeScale, s)), i && (n.transform = i(s, n.transform));
                        let { x: a, y: l } = this.projectionDelta;
                        for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
                        o.animationValues
                            ? (n.opacity = o === this ? (null !== (r = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1) : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit)
                            : (n.opacity = o === this ? (void 0 !== s.opacity ? s.opacity : "") : void 0 !== s.opacityExit ? s.opacityExit : 0),
                        C)) {
                            if (void 0 === s[t]) continue;
                            let { correct: e, applyTo: r } = C[t],
                                i = "none" === n.transform ? s[t] : e(s[t], o);
                            if (r) {
                                let t = r.length;
                                for (let e = 0; e < t; e++) n[r[e]] = i;
                            } else n[t] = i;
                        }
                        return this.options.layoutId && (n.pointerEvents = o === this ? tk(t.pointerEvents) || "" : "none"), n;
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0;
                    }
                    resetTree() {
                        this.root.nodes.forEach((t) => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
                        }),
                            this.root.nodes.forEach(n2),
                            this.root.sharedNodes.clear();
                    }
                };
            }
            function nK(t) {
                t.updateLayout();
            }
            function nZ(t) {
                var e;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let { layoutBox: e, measuredBox: n } = t.layout,
                        { animationType: i } = t.options,
                        o = r.source !== t.layout.source;
                    "size" === i
                        ? r9((t) => {
                              let n = o ? r.measuredBox[t] : r.layoutBox[t],
                                  i = rq(n);
                              (n.min = e[t].min), (n.max = n.min + i);
                          })
                        : il(i, r.layoutBox, e) &&
                          r9((n) => {
                              let i = o ? r.measuredBox[n] : r.layoutBox[n],
                                  s = rq(e[n]);
                              (i.max = i.min + s), t.relativeTarget && !t.currentAnimation && ((t.isProjectionDirty = !0), (t.relativeTarget[n].max = t.relativeTarget[n].min + s));
                          });
                    let s = r6();
                    rJ(s, e, r.layoutBox);
                    let a = r6();
                    o ? rJ(a, t.applyTransform(n, !0), r.measuredBox) : rJ(a, e, r.layoutBox);
                    let l = !nI(s),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let { snapshot: i, layout: o } = n;
                            if (i && o) {
                                let s = r8();
                                rQ(s, r.layoutBox, i.layoutBox);
                                let a = r8();
                                rQ(a, e, o.layoutBox), nG(s, a) || (u = !0), n.options.layoutRoot && ((t.relativeTarget = a), (t.relativeTargetOrigin = s), (t.relativeParent = n));
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", { layout: e, snapshot: r, delta: a, layoutDelta: s, hasLayoutChanged: l, hasRelativeTargetChanged: u });
                } else if (t.isLead()) {
                    let { onExitComplete: e } = t.options;
                    e && e();
                }
                t.options.transition = void 0;
            }
            function nQ(t) {
                nX.totalNodes++,
                    t.parent &&
                        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
                        t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
                        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
            }
            function n0(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
            }
            function n1(t) {
                t.clearSnapshot();
            }
            function n2(t) {
                t.clearMeasurements();
            }
            function n5(t) {
                t.isLayoutDirty = !1;
            }
            function n3(t) {
                let { visualElement: e } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
            }
            function n6(t) {
                t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0), (t.isProjectionDirty = !0);
            }
            function n4(t) {
                t.resolveTargetDelta();
            }
            function n8(t) {
                t.calcProjection();
            }
            function n9(t) {
                t.resetRotation();
            }
            function n7(t) {
                t.removeLeadSnapshot();
            }
            function it(t, e, r) {
                (t.translate = eR(e.translate, 0, r)), (t.scale = eR(e.scale, 1, r)), (t.origin = e.origin), (t.originPoint = e.originPoint);
            }
            function ie(t, e, r, n) {
                (t.min = eR(e.min, r.min, n)), (t.max = eR(e.max, r.max, n));
            }
            function ir(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit;
            }
            let ii = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
                io = (t) => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                is = io("applewebkit/") && !io("chrome/") ? Math.round : tR;
            function ia(t) {
                (t.min = is(t.min)), (t.max = is(t.max));
            }
            function il(t, e, r) {
                return "position" === t || ("preserve-aspect" === t && !rY(n_(e), n_(r), 0.2));
            }
            let iu = nJ({
                    attachResizeListener: (t, e) => tF(t, "resize", e),
                    measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
                    checkIsScrollRoot: () => !0,
                }),
                ih = { current: void 0 },
                ic = nJ({
                    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
                    defaultParent: () => {
                        if (!ih.current) {
                            let t = new iu({});
                            t.mount(window), t.setOptions({ layoutScroll: !0 }), (ih.current = t);
                        }
                        return ih.current;
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none";
                    },
                    checkIsScrollRoot: (t) => "fixed" === window.getComputedStyle(t).position,
                }),
                ip = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
            function id(t, e, r = 1) {
                tR(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, i] = (function (t) {
                    let e = ip.exec(t);
                    if (!e) return [,];
                    let [, r, n] = e;
                    return [r, n];
                })(t);
                if (!n) return;
                let o = window.getComputedStyle(e).getPropertyValue(n);
                if (o) {
                    let t = o.trim();
                    return rx(t) ? parseFloat(t) : t;
                }
                return U(i) ? id(i, e, r + 1) : i;
            }
            let im = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                ig = (t) => im.has(t),
                iy = (t) => Object.keys(t).some(ig),
                iv = (t) => t === I || t === K,
                ib = (t, e) => parseFloat(t.split(", ")[e]),
                iw = (t, e) => (r, { transform: n }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/);
                    if (i) return ib(i[1], e);
                    {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? ib(e[1], t) : 0;
                    }
                },
                ix = new Set(["x", "y", "z"]),
                iE = R.filter((t) => !ix.has(t)),
                iA = {
                    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, { top: e }) => parseFloat(e),
                    left: (t, { left: e }) => parseFloat(e),
                    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
                    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
                    x: iw(4, 13),
                    y: iw(5, 14),
                };
            (iA.translateX = iA.x), (iA.translateY = iA.y);
            let iT = (t, e, r) => {
                    let n = e.measureViewportBox(),
                        i = e.current,
                        o = getComputedStyle(i),
                        { display: s } = o,
                        a = {};
                    "none" === s && e.setStaticValue("display", t.display || "block"),
                        r.forEach((t) => {
                            a[t] = iA[t](n, o);
                        }),
                        e.render();
                    let l = e.measureViewportBox();
                    return (
                        r.forEach((r) => {
                            let n = e.getValue(r);
                            n && n.jump(a[r]), (t[r] = iA[r](l, o));
                        }),
                        t
                    );
                },
                iP = (t, e, r = {}, n = {}) => {
                    (e = { ...e }), (n = { ...n });
                    let i = Object.keys(e).filter(ig),
                        o = [],
                        s = !1,
                        a = [];
                    if (
                        (i.forEach((i) => {
                            let l;
                            let u = t.getValue(i);
                            if (!t.hasValue(i)) return;
                            let h = r[i],
                                c = rB(h),
                                p = e[i];
                            if (tT(p)) {
                                let t = p.length,
                                    e = null === p[0] ? 1 : 0;
                                c = rB((h = p[e]));
                                for (let r = e; r < t && null !== p[r]; r++)
                                    l ? tR(rB(p[r]) === l, "All keyframes must be of the same type") : tR((l = rB(p[r])) === c || (iv(c) && iv(l)), "Keyframes must be of the same dimension as the current value");
                            } else l = rB(p);
                            if (c !== l) {
                                if (iv(c) && iv(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof p ? (e[i] = parseFloat(p)) : Array.isArray(p) && l === K && (e[i] = p.map(parseFloat));
                                } else
                                    (null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === p)
                                        ? 0 === h
                                            ? u.set(l.transform(h))
                                            : (e[i] = c.transform(p))
                                        : (s ||
                                              ((o = (function (t) {
                                                  let e = [];
                                                  return (
                                                      iE.forEach((r) => {
                                                          let n = t.getValue(r);
                                                          void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
                                                      }),
                                                      e.length && t.render(),
                                                      e
                                                  );
                                              })(t)),
                                              (s = !0)),
                                          a.push(i),
                                          (n[i] = void 0 !== n[i] ? n[i] : e[i]),
                                          u.jump(p));
                            }
                        }),
                        !a.length)
                    )
                        return { target: e, transitionEnd: n };
                    {
                        let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            i = iT(e, t, a);
                        return (
                            o.length &&
                                o.forEach(([e, r]) => {
                                    t.getValue(e).set(r);
                                }),
                            t.render(),
                            h && null !== r && window.scrollTo({ top: r }),
                            { target: i, transitionEnd: n }
                        );
                    }
                },
                iS = (t, e, r, n) => {
                    var i, o;
                    let s = (function (t, { ...e }, r) {
                        let n = t.current;
                        if (!(n instanceof Element)) return { target: e, transitionEnd: r };
                        for (let i in (r && (r = { ...r }),
                        t.values.forEach((t) => {
                            let e = t.get();
                            if (!U(e)) return;
                            let r = id(e, n);
                            r && t.set(r);
                        }),
                        e)) {
                            let t = e[i];
                            if (!U(t)) continue;
                            let o = id(t, n);
                            o && ((e[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = t));
                        }
                        return { target: e, transitionEnd: r };
                    })(t, e, n);
                    return (e = s.target), (n = s.transitionEnd), (i = e), (o = n), iy(i) ? iP(t, i, r, o) : { target: i, transitionEnd: o };
                },
                ik = { current: null },
                iC = { current: !1 },
                iR = new WeakMap(),
                iO = Object.keys(E),
                iB = iO.length,
                iV = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                iL = y.length;
            class iM {
                constructor({ parent: t, props: e, presenceContext: r, reducedMotionConfig: n, visualState: i }, o = {}) {
                    (this.current = null),
                        (this.children = new Set()),
                        (this.isVariantNode = !1),
                        (this.isControllingVariants = !1),
                        (this.shouldReduceMotion = null),
                        (this.values = new Map()),
                        (this.features = {}),
                        (this.valueSubscriptions = new Map()),
                        (this.prevMotionValues = {}),
                        (this.events = {}),
                        (this.propEventSubscriptions = {}),
                        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                        (this.render = () => {
                            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
                        }),
                        (this.scheduleRender = () => tV.render(this.render, !1, !0));
                    let { latestValues: s, renderState: a } = i;
                    (this.latestValues = s),
                        (this.baseTarget = { ...s }),
                        (this.initialValues = e.initial ? { ...s } : {}),
                        (this.renderState = a),
                        (this.parent = t),
                        (this.props = e),
                        (this.presenceContext = r),
                        (this.depth = t ? t.depth + 1 : 0),
                        (this.reducedMotionConfig = n),
                        (this.options = o),
                        (this.isControllingVariants = v(e)),
                        (this.isVariantNode = b(e)),
                        this.isVariantNode && (this.variantChildren = new Set()),
                        (this.manuallyAnimateOnMount = !!(t && t.current));
                    let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== s[t] && V(e) && (e.set(s[t], !1), rw(l) && l.add(t));
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {};
                }
                mount(t) {
                    (this.current = t),
                        iR.set(t, this),
                        this.projection && !this.projection.instance && this.projection.mount(t),
                        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                        this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
                        iC.current ||
                            (function () {
                                if (((iC.current = !0), h)) {
                                    if (window.matchMedia) {
                                        let t = window.matchMedia("(prefers-reduced-motion)"),
                                            e = () => (ik.current = t.matches);
                                        t.addListener(e), e();
                                    } else ik.current = !1;
                                }
                            })(),
                        (this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ik.current)),
                        this.parent && this.parent.children.add(this),
                        this.update(this.props, this.presenceContext);
                }
                unmount() {
                    for (let t in (iR.delete(this.current),
                    this.projection && this.projection.unmount(),
                    tL(this.notifyUpdate),
                    tL(this.render),
                    this.valueSubscriptions.forEach((t) => t()),
                    this.removeFromVariantTree && this.removeFromVariantTree(),
                    this.parent && this.parent.children.delete(this),
                    this.events))
                        this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null;
                }
                bindToMotionValue(t, e) {
                    let r = O.has(t),
                        n = e.on("change", (e) => {
                            (this.latestValues[t] = e), this.props.onUpdate && tV.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
                        }),
                        i = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), i();
                    });
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0;
                }
                loadFeatures({ children: t, ...e }, r, n, i) {
                    let o, s;
                    for (let t = 0; t < iB; t++) {
                        let r = iO[t],
                            { isEnabled: n, Feature: i, ProjectionNode: a, MeasureLayout: l } = E[r];
                        a && (o = a), n(e) && (!this.features[r] && i && (this.features[r] = new i(this)), l && (s = l));
                    }
                    if (!this.projection && o) {
                        this.projection = new o(this.latestValues, this.parent && this.parent.projection);
                        let { layoutId: t, layout: r, drag: n, dragConstraints: s, layoutScroll: a, layoutRoot: l } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: r,
                            alwaysMeasureLayout: !!n || (s && f(s)),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: i,
                            layoutScroll: a,
                            layoutRoot: l,
                        });
                    }
                    return s;
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props);
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : r8();
                }
                getStaticValue(t) {
                    return this.latestValues[t];
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e;
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e);
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = t), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = e);
                    for (let e = 0; e < iV.length; e++) {
                        let r = iV[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n));
                    }
                    (this.prevMotionValues = (function (t, e, r) {
                        let { willChange: n } = e;
                        for (let i in e) {
                            let o = e[i],
                                s = r[i];
                            if (V(o)) t.addValue(i, o), rw(n) && n.add(i);
                            else if (V(s)) t.addValue(i, rC(o, { owner: t })), rw(n) && n.remove(i);
                            else if (s !== o) {
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    e.hasAnimated || e.set(o);
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, rC(void 0 !== e ? e : o, { owner: t }));
                                }
                            }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e;
                    })(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)),
                        this.handleChildMotionValue && this.handleChildMotionValue();
                }
                getProps() {
                    return this.props;
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0;
                }
                getDefaultTransition() {
                    return this.props.transition;
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint;
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = (this.parent && this.parent.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t;
                    }
                    let e = {};
                    for (let t = 0; t < iL; t++) {
                        let r = y[t],
                            n = this.props[r];
                        (d(n) || !1 === n) && (e[r] = n);
                    }
                    return e;
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), (this.latestValues[t] = e.get());
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
                }
                hasValue(t) {
                    return this.values.has(t);
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && ((r = rC(e, { owner: this })), this.addValue(t, r)), r;
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? (null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options)) : this.latestValues[t];
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e;
                }
                getBaseTarget(t) {
                    var e;
                    let { initial: r } = this.props,
                        n = "string" == typeof r || "object" == typeof r ? (null === (e = tA(this.props, r)) || void 0 === e ? void 0 : e[t]) : void 0;
                    if (r && void 0 !== n) return n;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || V(i) ? (void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t]) : i;
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new rT()), this.events[t].add(e);
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e);
                }
            }
            class ij extends iM {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1;
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0;
                }
                removeValueFromRenderState(t, { vars: e, style: r }) {
                    delete e[t], delete r[t];
                }
                makeTargetAnimatableFromInstance({ transition: t, transitionEnd: e, ...r }, { transformValues: n }, i) {
                    let o = (function (t, e, r) {
                        let n = {};
                        for (let i in t) {
                            let t = (function (t, e) {
                                if (!e) return;
                                let r = e[t] || e.default || e;
                                return r.from;
                            })(i, e);
                            if (void 0 !== t) n[i] = t;
                            else {
                                let t = r.getValue(i);
                                t && (n[i] = t.get());
                            }
                        }
                        return n;
                    })(r, t || {}, this);
                    if ((n && (e && (e = n(e)), r && (r = n(r)), o && (o = n(o))), i)) {
                        !(function (t, e, r) {
                            var n, i;
                            let o = Object.keys(e).filter((e) => !t.hasValue(e)),
                                s = o.length;
                            if (s)
                                for (let a = 0; a < s; a++) {
                                    let s = o[a],
                                        l = e[s],
                                        u = null;
                                    Array.isArray(l) && (u = l[0]),
                                        null === u && (u = null !== (i = null !== (n = r[s]) && void 0 !== n ? n : t.readValue(s)) && void 0 !== i ? i : e[s]),
                                        null != u &&
                                            ("string" == typeof u && (rx(u) || ry(u)) ? (u = parseFloat(u)) : !rL(u) && eH.test(l) && (u = rg(s, l)),
                                            t.addValue(s, rC(u, { owner: t })),
                                            void 0 === r[s] && (r[s] = u),
                                            null !== u && t.setBaseTarget(s, u));
                                }
                        })(this, r, o);
                        let t = iS(this, r, o, e);
                        (e = t.transitionEnd), (r = t.target);
                    }
                    return { transition: t, transitionEnd: e, ...r };
                }
            }
            class iD extends ij {
                readValueFromInstance(t, e) {
                    if (O.has(e)) {
                        let t = rm(e);
                        return (t && t.default) || 0;
                    }
                    {
                        let r = window.getComputedStyle(t),
                            n = (D(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n;
                    }
                }
                measureInstanceViewportBox(t, { transformPagePoint: e }) {
                    return nf(t, e);
                }
                build(t, e, r, n) {
                    tn(t, e, r, n.transformTemplate);
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tx(t, e);
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let { children: t } = this.props;
                    V(t) &&
                        (this.childSubscription = t.on("change", (t) => {
                            this.current && (this.current.textContent = `${t}`);
                        }));
                }
                renderInstance(t, e, r, n) {
                    tv(t, e, r, n);
                }
            }
            class iU extends ij {
                constructor() {
                    super(...arguments), (this.isSVGTag = !1);
                }
                getBaseTargetFromProps(t, e) {
                    return t[e];
                }
                readValueFromInstance(t, e) {
                    if (O.has(e)) {
                        let t = rm(e);
                        return (t && t.default) || 0;
                    }
                    return (e = tb.has(e) ? e : ty(e)), t.getAttribute(e);
                }
                measureInstanceViewportBox() {
                    return r8();
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tE(t, e);
                }
                build(t, e, r, n) {
                    tf(t, e, r, this.isSVGTag, n.transformTemplate);
                }
                renderInstance(t, e, r, n) {
                    tw(t, e, r, n);
                }
                mount(t) {
                    (this.isSVGTag = tm(t.tagName)), super.mount(t);
                }
            }
            let iF = (t, e) => (k(t) ? new iU(e, { enableHardwareAcceleration: !1 }) : new iD(e, { enableHardwareAcceleration: !0 })),
                iN = {
                    animation: {
                        Feature: class extends tJ {
                            constructor(t) {
                                super(t),
                                    t.animationState ||
                                        (t.animationState = (function (t) {
                                            let e = (e) =>
                                                    Promise.all(
                                                        e.map(({ animation: e, options: r }) =>
                                                            (function (t, e, r = {}) {
                                                                let n;
                                                                if ((t.notify("AnimationStart", e), Array.isArray(e))) {
                                                                    let i = e.map((e) => rj(t, e, r));
                                                                    n = Promise.all(i);
                                                                } else if ("string" == typeof e) n = rj(t, e, r);
                                                                else {
                                                                    let i = "function" == typeof e ? t4(t, e, r.custom) : e;
                                                                    n = Promise.all(rM(t, i, r));
                                                                }
                                                                return n.then(() => t.notify("AnimationComplete", e));
                                                            })(t, e, r)
                                                        )
                                                    ),
                                                r = { animate: rN(!0), whileInView: rN(), whileHover: rN(), whileTap: rN(), whileDrag: rN(), whileFocus: rN(), exit: rN() },
                                                n = !0,
                                                i = (e, r) => {
                                                    let n = t4(t, r);
                                                    if (n) {
                                                        let { transition: t, transitionEnd: r, ...i } = n;
                                                        e = { ...e, ...i, ...r };
                                                    }
                                                    return e;
                                                };
                                            function o(o, s) {
                                                let a = t.getProps(),
                                                    l = t.getVariantContext(!0) || {},
                                                    u = [],
                                                    h = new Set(),
                                                    c = {},
                                                    p = 1 / 0;
                                                for (let e = 0; e < rF; e++) {
                                                    var f;
                                                    let g = rU[e],
                                                        y = r[g],
                                                        v = void 0 !== a[g] ? a[g] : l[g],
                                                        b = d(v),
                                                        w = g === s ? y.isActive : null;
                                                    !1 === w && (p = e);
                                                    let x = v === l[g] && v !== a[g] && b;
                                                    if ((x && n && t.manuallyAnimateOnMount && (x = !1), (y.protectedKeys = { ...c }), (!y.isActive && null === w) || (!v && !y.prevProp) || m(v) || "boolean" == typeof v)) continue;
                                                    let E = ((f = y.prevProp), "string" == typeof v ? v !== f : !!Array.isArray(v) && !t6(v, f)),
                                                        A = E || (g === s && y.isActive && !x && b) || (e > p && b),
                                                        T = Array.isArray(v) ? v : [v],
                                                        P = T.reduce(i, {});
                                                    !1 === w && (P = {});
                                                    let { prevResolvedValues: S = {} } = y,
                                                        k = { ...S, ...P },
                                                        C = (t) => {
                                                            (A = !0), h.delete(t), (y.needsAnimating[t] = !0);
                                                        };
                                                    for (let t in k) {
                                                        let e = P[t],
                                                            r = S[t];
                                                        c.hasOwnProperty(t) ||
                                                            (e !== r ? (tT(e) && tT(r) ? (!t6(e, r) || E ? C(t) : (y.protectedKeys[t] = !0)) : void 0 !== e ? C(t) : h.add(t)) : void 0 !== e && h.has(t) ? C(t) : (y.protectedKeys[t] = !0));
                                                    }
                                                    (y.prevProp = v),
                                                        (y.prevResolvedValues = P),
                                                        y.isActive && (c = { ...c, ...P }),
                                                        n && t.blockInitialAnimation && (A = !1),
                                                        A && !x && u.push(...T.map((t) => ({ animation: t, options: { type: g, ...o } })));
                                                }
                                                if (h.size) {
                                                    let e = {};
                                                    h.forEach((r) => {
                                                        let n = t.getBaseTarget(r);
                                                        void 0 !== n && (e[r] = n);
                                                    }),
                                                        u.push({ animation: e });
                                                }
                                                let g = !!u.length;
                                                return n && !1 === a.initial && !t.manuallyAnimateOnMount && (g = !1), (n = !1), g ? e(u) : Promise.resolve();
                                            }
                                            return {
                                                animateChanges: o,
                                                setActive: function (e, n, i) {
                                                    var s;
                                                    if (r[e].isActive === n) return Promise.resolve();
                                                    null === (s = t.variantChildren) ||
                                                        void 0 === s ||
                                                        s.forEach((t) => {
                                                            var r;
                                                            return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n);
                                                        }),
                                                        (r[e].isActive = n);
                                                    let a = o(i, e);
                                                    for (let t in r) r[t].protectedKeys = {};
                                                    return a;
                                                },
                                                setAnimateFunction: function (r) {
                                                    e = r(t);
                                                },
                                                getState: () => r,
                                            };
                                        })(t));
                            }
                            updateAnimationControlsSubscription() {
                                let { animate: t } = this.node.getProps();
                                this.unmount(), m(t) && (this.unmount = t.subscribe(this.node));
                            }
                            mount() {
                                this.updateAnimationControlsSubscription();
                            }
                            update() {
                                let { animate: t } = this.node.getProps(),
                                    { animate: e } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription();
                            }
                            unmount() {}
                        },
                    },
                    exit: {
                        Feature: class extends tJ {
                            constructor() {
                                super(...arguments), (this.id = rI++);
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let { isPresent: t, onExitComplete: e, custom: r } = this.node.presenceContext,
                                    { isPresent: n } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let i = this.node.animationState.setActive("exit", !t, { custom: null != r ? r : this.node.getProps().custom });
                                e && !t && i.then(() => e(this.id));
                            }
                            mount() {
                                let { register: t } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id));
                            }
                            unmount() {}
                        },
                    },
                    inView: {
                        Feature: class extends tJ {
                            constructor() {
                                super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
                            }
                            startObserver() {
                                this.unmount();
                                let { viewport: t = {} } = this.node.getProps(),
                                    { root: e, margin: r, amount: n = "some", once: i } = t,
                                    o = { root: e ? e.current : void 0, rootMargin: r, threshold: "number" == typeof n ? n : t3[n] },
                                    s = (t) => {
                                        let { isIntersecting: e } = t;
                                        if (this.isInView === e || ((this.isInView = e), i && !e && this.hasEnteredView)) return;
                                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                        let { onViewportEnter: r, onViewportLeave: n } = this.node.getProps(),
                                            o = e ? r : n;
                                        o && o(t);
                                    };
                                return (function (t, e, r) {
                                    let n = (function ({ root: t, ...e }) {
                                        let r = t || document;
                                        t1.has(r) || t1.set(r, {});
                                        let n = t1.get(r),
                                            i = JSON.stringify(e);
                                        return n[i] || (n[i] = new IntersectionObserver(t5, { root: t, ...e })), n[i];
                                    })(e);
                                    return (
                                        t0.set(t, r),
                                        n.observe(t),
                                        () => {
                                            t0.delete(t), n.unobserve(t);
                                        }
                                    );
                                })(this.node.current, o, s);
                            }
                            mount() {
                                this.startObserver();
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let { props: t, prevProps: e } = this.node,
                                    r = ["amount", "margin", "root"].some(
                                        (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                                            return (r) => t[r] !== e[r];
                                        })(t, e)
                                    );
                                r && this.startObserver();
                            }
                            unmount() {}
                        },
                    },
                    tap: {
                        Feature: class extends tJ {
                            constructor() {
                                super(...arguments),
                                    (this.removeStartListeners = tR),
                                    (this.removeEndListeners = tR),
                                    (this.removeAccessibleListeners = tR),
                                    (this.startPointerPress = (t, e) => {
                                        if ((this.removeEndListeners(), this.isPressing)) return;
                                        let r = this.node.getProps(),
                                            n = (t, e) => {
                                                if (!this.checkPressEnd()) return;
                                                let { onTap: r, onTapCancel: n } = this.node.getProps();
                                                tV.update(() => {
                                                    tZ(this.node.current, t.target) ? r && r(t, e) : n && n(t, e);
                                                });
                                            },
                                            i = t_(window, "pointerup", n, { passive: !(r.onTap || r.onPointerUp) }),
                                            o = t_(window, "pointercancel", (t, e) => this.cancelPress(t, e), { passive: !(r.onTapCancel || r.onPointerCancel) });
                                        (this.removeEndListeners = tH(i, o)), this.startPress(t, e);
                                    }),
                                    (this.startAccessiblePress = () => {
                                        let t = (t) => {
                                                if ("Enter" !== t.key || this.isPressing) return;
                                                let e = (t) => {
                                                    "Enter" === t.key &&
                                                        this.checkPressEnd() &&
                                                        tQ("up", (t, e) => {
                                                            let { onTap: r } = this.node.getProps();
                                                            r && tV.update(() => r(t, e));
                                                        });
                                                };
                                                this.removeEndListeners(),
                                                    (this.removeEndListeners = tF(this.node.current, "keyup", e)),
                                                    tQ("down", (t, e) => {
                                                        this.startPress(t, e);
                                                    });
                                            },
                                            e = tF(this.node.current, "keydown", t),
                                            r = () => {
                                                this.isPressing && tQ("cancel", (t, e) => this.cancelPress(t, e));
                                            },
                                            n = tF(this.node.current, "blur", r);
                                        this.removeAccessibleListeners = tH(e, n);
                                    });
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let { onTapStart: r, whileTap: n } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && tV.update(() => r(t, e));
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), (this.isPressing = !1);
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tX();
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let { onTapCancel: r } = this.node.getProps();
                                r && tV.update(() => r(t, e));
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = t_(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
                                    r = tF(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tH(e, r);
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
                            }
                        },
                    },
                    focus: {
                        Feature: class extends tJ {
                            constructor() {
                                super(...arguments), (this.isActive = !1);
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible");
                                } catch (e) {
                                    t = !0;
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                            }
                            mount() {
                                this.unmount = tH(
                                    tF(this.node.current, "focus", () => this.onFocus()),
                                    tF(this.node.current, "blur", () => this.onBlur())
                                );
                            }
                            unmount() {}
                        },
                    },
                    hover: {
                        Feature: class extends tJ {
                            mount() {
                                this.unmount = tH(tK(this.node, !0), tK(this.node, !1));
                            }
                            unmount() {}
                        },
                    },
                    pan: {
                        Feature: class extends tJ {
                            constructor() {
                                super(...arguments), (this.removePointerDownListener = tR);
                            }
                            onPointerDown(t) {
                                this.session = new r_(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
                            }
                            createPanHandlers() {
                                let { onPanSessionStart: t, onPanStart: e, onPan: r, onPanEnd: n } = this.node.getProps();
                                return {
                                    onSessionStart: ny(t),
                                    onStart: ny(e),
                                    onMove: r,
                                    onEnd: (t, e) => {
                                        delete this.session, n && tV.update(() => n(t, e));
                                    },
                                };
                            }
                            mount() {
                                this.removePointerDownListener = t_(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers());
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end();
                            }
                        },
                    },
                    drag: {
                        Feature: class extends tJ {
                            constructor(t) {
                                super(t), (this.removeGroupControls = tR), (this.removeListeners = tR), (this.controls = new nm(t));
                            }
                            mount() {
                                let { dragControls: t } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || tR);
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners();
                            }
                        },
                        ProjectionNode: ic,
                        MeasureLayout: nE,
                    },
                    layout: { ProjectionNode: ic, MeasureLayout: nE },
                },
                iI = (function (t) {
                    function e(e, r = {}) {
                        return (function ({ preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: n, Component: i }) {
                            t &&
                                (function (t) {
                                    for (let e in t) E[e] = { ...E[e], ...t[e] };
                                })(t);
                            let o = (0, s.forwardRef)(function (o, m) {
                                var g, y;
                                let b;
                                let x = {
                                        ...(0, s.useContext)(a),
                                        ...o,
                                        layoutId: (function ({ layoutId: t }) {
                                            let e = (0, s.useContext)(A).id;
                                            return e && void 0 !== t ? e + "-" + t : t;
                                        })(o),
                                    },
                                    { isStatic: E } = x,
                                    P = (function (t) {
                                        let { initial: e, animate: r } = (function (t, e) {
                                            if (v(t)) {
                                                let { initial: e, animate: r } = t;
                                                return { initial: !1 === e || d(e) ? e : void 0, animate: d(r) ? r : void 0 };
                                            }
                                            return !1 !== t.inherit ? e : {};
                                        })(t, (0, s.useContext)(l));
                                        return (0, s.useMemo)(() => ({ initial: e, animate: r }), [w(e), w(r)]);
                                    })(o),
                                    S = n(o, E);
                                if (!E && h) {
                                    P.visualElement = (function (t, e, r, n) {
                                        let { visualElement: i } = (0, s.useContext)(l),
                                            o = (0, s.useContext)(p),
                                            h = (0, s.useContext)(u),
                                            f = (0, s.useContext)(a).reducedMotion,
                                            d = (0, s.useRef)();
                                        (n = n || o.renderer), !d.current && n && (d.current = n(t, { visualState: e, parent: i, props: r, presenceContext: h, blockInitialAnimation: !!h && !1 === h.initial, reducedMotionConfig: f }));
                                        let m = d.current;
                                        (0, s.useInsertionEffect)(() => {
                                            m && m.update(r, h);
                                        });
                                        let g = (0, s.useRef)(!!window.HandoffAppearAnimations);
                                        return (
                                            c(() => {
                                                m && (m.render(), g.current && m.animationState && m.animationState.animateChanges());
                                            }),
                                            (0, s.useEffect)(() => {
                                                m && (m.updateFeatures(), !g.current && m.animationState && m.animationState.animateChanges(), (window.HandoffAppearAnimations = void 0), (g.current = !1));
                                            }),
                                            m
                                        );
                                    })(i, S, x, e);
                                    let r = (0, s.useContext)(T),
                                        n = (0, s.useContext)(p).strict;
                                    P.visualElement && (b = P.visualElement.loadFeatures(x, n, t, r));
                                }
                                return s.createElement(
                                    l.Provider,
                                    { value: P },
                                    b && P.visualElement ? s.createElement(b, { visualElement: P.visualElement, ...x }) : null,
                                    r(
                                        i,
                                        o,
                                        ((g = P.visualElement),
                                        (y = m),
                                        (0, s.useCallback)(
                                            (t) => {
                                                t && S.mount && S.mount(t), g && (t ? g.mount(t) : g.unmount()), y && ("function" == typeof y ? y(t) : f(y) && (y.current = t));
                                            },
                                            [g]
                                        )),
                                        S,
                                        E,
                                        P.visualElement
                                    )
                                );
                            });
                            return (o[P] = i), o;
                        })(t(e, r));
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let r = new Map();
                    return new Proxy(e, { get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n)) });
                })((t, e) =>
                    (function (t, { forwardMotionProps: e = !1 }, r, n) {
                        let i = k(t) ? tD : tU;
                        return {
                            ...i,
                            preloadedFeatures: r,
                            useRender: (function (t = !1) {
                                let e = (e, r, n, { latestValues: i }, o) => {
                                    let a = k(e) ? tg : ts,
                                        l = a(r, i, o, e),
                                        u = (function (t, e, r) {
                                            let n = {};
                                            for (let i in t) ("values" !== i || "object" != typeof t.values) && (tu(i) || (!0 === r && tl(i)) || (!e && !tl(i)) || (t.draggable && i.startsWith("onDrag"))) && (n[i] = t[i]);
                                            return n;
                                        })(r, "string" == typeof e, t),
                                        h = { ...u, ...l, ref: n },
                                        { children: c } = r,
                                        p = (0, s.useMemo)(() => (V(c) ? c.get() : c), [c]);
                                    return (0, s.createElement)(e, { ...h, children: p });
                                };
                                return e;
                            })(e),
                            createVisualElement: n,
                            Component: t,
                        };
                    })(t, e, iN, iF)
                );
        },
    },
]);
