(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923],
    {
        2350: function () {},
        3454: function (e, t, n) {
            "use strict";
            var r, i;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663);
        },
        5677: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    noSSR: function () {
                        return s;
                    },
                    default: function () {
                        return a;
                    },
                });
            let r = n(8754),
                i = (n(7294), r._(n(8976)));
            function o(e) {
                return { default: (null == e ? void 0 : e.default) || e };
            }
            function s(e, t) {
                return delete t.webpack, delete t.modules, e(t);
            }
            function a(e, t) {
                let n = i.default,
                    r = {
                        loading: (e) => {
                            let { error: t, isLoading: n, pastDelay: r } = e;
                            return null;
                        },
                    };
                e instanceof Promise ? (r.loader = () => e) : "function" == typeof e ? (r.loader = e) : "object" == typeof e && (r = { ...r, ...e }), (r = { ...r, ...t });
                let a = r.loader,
                    l = () => (null != a ? a().then(o) : Promise.resolve(o(() => null)));
                return (r.loadableGenerated && ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({ ...r, loader: l }) : (delete r.webpack, delete r.modules, s(n, r));
            }
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        2254: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "LoadableContext", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(8754),
                i = r._(n(7294)),
                o = i.default.createContext(null);
        },
        8976: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return h;
                    },
                });
            let r = n(8754),
                i = r._(n(7294)),
                o = n(2254),
                s = [],
                a = [],
                l = !1;
            function u(e) {
                let t = e(),
                    n = { loading: !0, loaded: null, error: null };
                return (
                    (n.promise = t
                        .then((e) => ((n.loading = !1), (n.loaded = e), e))
                        .catch((e) => {
                            throw ((n.loading = !1), (n.error = e), e);
                        })),
                    n
                );
            }
            class c {
                promise() {
                    return this._res.promise;
                }
                retry() {
                    this._clearTimeouts(), (this._res = this._loadFn(this._opts.loader)), (this._state = { pastDelay: !1, timedOut: !1 });
                    let { _res: e, _opts: t } = this;
                    e.loading &&
                        ("number" == typeof t.delay &&
                            (0 === t.delay
                                ? (this._state.pastDelay = !0)
                                : (this._delay = setTimeout(() => {
                                      this._update({ pastDelay: !0 });
                                  }, t.delay))),
                        "number" == typeof t.timeout &&
                            (this._timeout = setTimeout(() => {
                                this._update({ timedOut: !0 });
                            }, t.timeout))),
                        this._res.promise
                            .then(() => {
                                this._update({}), this._clearTimeouts();
                            })
                            .catch((e) => {
                                this._update({}), this._clearTimeouts();
                            }),
                        this._update({});
                }
                _update(e) {
                    (this._state = { ...this._state, error: this._res.error, loaded: this._res.loaded, loading: this._res.loading, ...e }), this._callbacks.forEach((e) => e());
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout);
                }
                getCurrentValue() {
                    return this._state;
                }
                subscribe(e) {
                    return (
                        this._callbacks.add(e),
                        () => {
                            this._callbacks.delete(e);
                        }
                    );
                }
                constructor(e, t) {
                    (this._loadFn = e), (this._opts = t), (this._callbacks = new Set()), (this._delay = null), (this._timeout = null), this.retry();
                }
            }
            function d(e) {
                return (function (e, t) {
                    let n = Object.assign({ loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null }, t),
                        r = null;
                    function s() {
                        if (!r) {
                            let t = new c(e, n);
                            r = { getCurrentValue: t.getCurrentValue.bind(t), subscribe: t.subscribe.bind(t), retry: t.retry.bind(t), promise: t.promise.bind(t) };
                        }
                        return r.promise();
                    }
                    if (!l) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e &&
                            a.push((t) => {
                                for (let n of e) if (-1 !== t.indexOf(n)) return s();
                            });
                    }
                    function u(e, t) {
                        !(function () {
                            s();
                            let e = i.default.useContext(o.LoadableContext);
                            e &&
                                Array.isArray(n.modules) &&
                                n.modules.forEach((t) => {
                                    e(t);
                                });
                        })();
                        let a = i.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                        return (
                            i.default.useImperativeHandle(t, () => ({ retry: r.retry }), []),
                            i.default.useMemo(() => {
                                var t;
                                return a.loading || a.error
                                    ? i.default.createElement(n.loading, { isLoading: a.loading, pastDelay: a.pastDelay, timedOut: a.timedOut, error: a.error, retry: r.retry })
                                    : a.loaded
                                    ? i.default.createElement((t = a.loaded) && t.default ? t.default : t, e)
                                    : null;
                            }, [e, a])
                        );
                    }
                    return (u.preload = () => s()), (u.displayName = "LoadableComponent"), i.default.forwardRef(u);
                })(u, e);
            }
            function p(e, t) {
                let n = [];
                for (; e.length; ) {
                    let r = e.pop();
                    n.push(r(t));
                }
                return Promise.all(n).then(() => {
                    if (e.length) return p(e, t);
                });
            }
            (d.preloadAll = () =>
                new Promise((e, t) => {
                    p(s).then(e, t);
                })),
                (d.preloadReady = (e) => (
                    void 0 === e && (e = []),
                    new Promise((t) => {
                        let n = () => ((l = !0), t());
                        p(a, e).then(n, n);
                    })
                )),
                (window.__NEXT_PRELOADREADY = d.preloadReady);
            let h = d;
        },
        9578: function (e, t, n) {
            var r = n(3454);
            n(2350);
            var i = n(7294),
                o = i && "object" == typeof i && "default" in i ? i : { default: i };
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var a = void 0 !== r && r.env && !0,
                l = function (e) {
                    return "[object String]" === Object.prototype.toString.call(e);
                },
                u = (function () {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.name,
                            r = void 0 === n ? "stylesheet" : n,
                            i = t.optimizeForSpeed,
                            o = void 0 === i ? a : i;
                        c(l(r), "`name` must be a string"),
                            (this._name = r),
                            (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
                            c("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"),
                            (this._optimizeForSpeed = o),
                            (this._serverSheet = void 0),
                            (this._tags = []),
                            (this._injected = !1),
                            (this._rulesCount = 0);
                        var s = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = s ? s.getAttribute("content") : null;
                    }
                    var t,
                        n = e.prototype;
                    return (
                        (n.setOptimizeForSpeed = function (e) {
                            c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
                                c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"),
                                this.flush(),
                                (this._optimizeForSpeed = e),
                                this.inject();
                        }),
                        (n.isOptimizeForSpeed = function () {
                            return this._optimizeForSpeed;
                        }),
                        (n.inject = function () {
                            var e = this;
                            if ((c(!this._injected, "sheet already injected"), (this._injected = !0), this._optimizeForSpeed)) {
                                (this._tags[0] = this.makeStyleTag(this._name)),
                                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                                    this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), (this._injected = !0));
                                return;
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function (t, n) {
                                    return "number" == typeof n ? (e._serverSheet.cssRules[n] = { cssText: t }) : e._serverSheet.cssRules.push({ cssText: t }), n;
                                },
                                deleteRule: function (t) {
                                    e._serverSheet.cssRules[t] = null;
                                },
                            };
                        }),
                        (n.getSheetForTag = function (e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                        }),
                        (n.getSheet = function () {
                            return this.getSheetForTag(this._tags[this._tags.length - 1]);
                        }),
                        (n.insertRule = function (e, t) {
                            if ((c(l(e), "`insertRule` accepts only strings"), this._optimizeForSpeed)) {
                                var n = this.getSheet();
                                "number" != typeof t && (t = n.cssRules.length);
                                try {
                                    n.insertRule(e, t);
                                } catch (t) {
                                    return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1;
                                }
                            } else {
                                var r = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, r));
                            }
                            return this._rulesCount++;
                        }),
                        (n.replaceRule = function (e, t) {
                            if (this._optimizeForSpeed) {
                                var n = this.getSheet();
                                if ((t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e])) return e;
                                n.deleteRule(e);
                                try {
                                    n.insertRule(t, e);
                                } catch (r) {
                                    a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e);
                                }
                            } else {
                                var r = this._tags[e];
                                c(r, "old rule at index `" + e + "` not found"), (r.textContent = t);
                            }
                            return e;
                        }),
                        (n.deleteRule = function (e) {
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), (this._tags[e] = null);
                            }
                        }),
                        (n.flush = function () {
                            (this._injected = !1),
                                (this._rulesCount = 0),
                                this._tags.forEach(function (e) {
                                    return e && e.parentNode.removeChild(e);
                                }),
                                (this._tags = []);
                        }),
                        (n.cssRules = function () {
                            var e = this;
                            return this._tags.reduce(function (t, n) {
                                return (
                                    n
                                        ? (t = t.concat(
                                              Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                                                  return t.cssText === e._deletedRulePlaceholder ? null : t;
                                              })
                                          ))
                                        : t.push(null),
                                    t
                                );
                            }, []);
                        }),
                        (n.makeStyleTag = function (e, t, n) {
                            t && c(l(t), "makeStyleTag accepts only strings as second parameter");
                            var r = document.createElement("style");
                            this._nonce && r.setAttribute("nonce", this._nonce), (r.type = "text/css"), r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                            var i = document.head || document.getElementsByTagName("head")[0];
                            return n ? i.insertBefore(r, n) : i.appendChild(r), r;
                        }),
                        s(e.prototype, [
                            {
                                key: "length",
                                get: function () {
                                    return this._rulesCount;
                                },
                            },
                        ]),
                        t && s(e, t),
                        e
                    );
                })();
            function c(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".");
            }
            var d = function (e) {
                    for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
                    return t >>> 0;
                },
                p = {};
            function h(e, t) {
                if (!t) return "jsx-" + e;
                var n = String(t),
                    r = e + n;
                return p[r] || (p[r] = "jsx-" + d(e + "-" + n)), p[r];
            }
            function f(e, t) {
                var n = e + t;
                return p[n] || (p[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), p[n];
            }
            var m = (function () {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.styleSheet,
                            r = void 0 === n ? null : n,
                            i = t.optimizeForSpeed,
                            o = void 0 !== i && i;
                        (this._sheet = r || new u({ name: "styled-jsx", optimizeForSpeed: o })),
                            this._sheet.inject(),
                            r && "boolean" == typeof o && (this._sheet.setOptimizeForSpeed(o), (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                            (this._fromServer = void 0),
                            (this._indices = {}),
                            (this._instancesCounts = {});
                    }
                    var t = e.prototype;
                    return (
                        (t.add = function (e) {
                            var t = this;
                            void 0 === this._optimizeForSpeed && ((this._optimizeForSpeed = Array.isArray(e.children)), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                                this._fromServer ||
                                    ((this._fromServer = this.selectFromServer()),
                                    (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                                        return (e[t] = 0), e;
                                    }, {})));
                            var n = this.getIdAndRules(e),
                                r = n.styleId,
                                i = n.rules;
                            if (r in this._instancesCounts) {
                                this._instancesCounts[r] += 1;
                                return;
                            }
                            var o = i
                                .map(function (e) {
                                    return t._sheet.insertRule(e);
                                })
                                .filter(function (e) {
                                    return -1 !== e;
                                });
                            (this._indices[r] = o), (this._instancesCounts[r] = 1);
                        }),
                        (t.remove = function (e) {
                            var t = this,
                                n = this.getIdAndRules(e).styleId;
                            if (
                                ((function (e, t) {
                                    if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                                })(n in this._instancesCounts, "styleId: `" + n + "` not found"),
                                (this._instancesCounts[n] -= 1),
                                this._instancesCounts[n] < 1)
                            ) {
                                var r = this._fromServer && this._fromServer[n];
                                r
                                    ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                                    : (this._indices[n].forEach(function (e) {
                                          return t._sheet.deleteRule(e);
                                      }),
                                      delete this._indices[n]),
                                    delete this._instancesCounts[n];
                            }
                        }),
                        (t.update = function (e, t) {
                            this.add(t), this.remove(e);
                        }),
                        (t.flush = function () {
                            this._sheet.flush(), this._sheet.inject(), (this._fromServer = void 0), (this._indices = {}), (this._instancesCounts = {});
                        }),
                        (t.cssRules = function () {
                            var e = this,
                                t = this._fromServer
                                    ? Object.keys(this._fromServer).map(function (t) {
                                          return [t, e._fromServer[t]];
                                      })
                                    : [],
                                n = this._sheet.cssRules();
                            return t.concat(
                                Object.keys(this._indices)
                                    .map(function (t) {
                                        return [
                                            t,
                                            e._indices[t]
                                                .map(function (e) {
                                                    return n[e].cssText;
                                                })
                                                .join(e._optimizeForSpeed ? "" : "\n"),
                                        ];
                                    })
                                    .filter(function (e) {
                                        return !!e[1];
                                    })
                            );
                        }),
                        (t.styles = function (e) {
                            var t, n;
                            return (
                                (t = this.cssRules()),
                                void 0 === (n = e) && (n = {}),
                                t.map(function (e) {
                                    var t = e[0],
                                        r = e[1];
                                    return o.default.createElement("style", { id: "__" + t, key: "__" + t, nonce: n.nonce ? n.nonce : void 0, dangerouslySetInnerHTML: { __html: r } });
                                })
                            );
                        }),
                        (t.getIdAndRules = function (e) {
                            var t = e.children,
                                n = e.dynamic,
                                r = e.id;
                            if (n) {
                                var i = h(r, n);
                                return {
                                    styleId: i,
                                    rules: Array.isArray(t)
                                        ? t.map(function (e) {
                                              return f(i, e);
                                          })
                                        : [f(i, t)],
                                };
                            }
                            return { styleId: h(r), rules: Array.isArray(t) ? t : [t] };
                        }),
                        (t.selectFromServer = function () {
                            return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
                                return (e[t.id.slice(2)] = t), e;
                            }, {});
                        }),
                        e
                    );
                })(),
                g = i.createContext(null);
            g.displayName = "StyleSheetContext";
            var v = o.default.useInsertionEffect || o.default.useLayoutEffect,
                y = new m();
            function A(e) {
                var t = y || i.useContext(g);
                return (
                    t &&
                        v(
                            function () {
                                return (
                                    t.add(e),
                                    function () {
                                        t.remove(e);
                                    }
                                );
                            },
                            [e.id, String(e.dynamic)]
                        ),
                    null
                );
            }
            (A.dynamic = function (e) {
                return e
                    .map(function (e) {
                        return h(e[0], e[1]);
                    })
                    .join(" ");
            }),
                (t.style = A);
        },
        6465: function (e, t, n) {
            "use strict";
            e.exports = n(9578).style;
        },
        7663: function (e) {
            !(function () {
                var t = {
                        229: function (e) {
                            var t,
                                n,
                                r,
                                i = (e.exports = {});
                            function o() {
                                throw Error("setTimeout has not been defined");
                            }
                            function s() {
                                throw Error("clearTimeout has not been defined");
                            }
                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                                try {
                                    return t(e, 0);
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0);
                                    } catch (n) {
                                        return t.call(this, e, 0);
                                    }
                                }
                            }
                            !(function () {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : o;
                                } catch (e) {
                                    t = o;
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : s;
                                } catch (e) {
                                    n = s;
                                }
                            })();
                            var l = [],
                                u = !1,
                                c = -1;
                            function d() {
                                u && r && ((u = !1), r.length ? (l = r.concat(l)) : (c = -1), l.length && p());
                            }
                            function p() {
                                if (!u) {
                                    var e = a(d);
                                    u = !0;
                                    for (var t = l.length; t; ) {
                                        for (r = l, l = []; ++c < t; ) r && r[c].run();
                                        (c = -1), (t = l.length);
                                    }
                                    (r = null),
                                        (u = !1),
                                        (function (e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                                            try {
                                                n(e);
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e);
                                                } catch (t) {
                                                    return n.call(this, e);
                                                }
                                            }
                                        })(e);
                                }
                            }
                            function h(e, t) {
                                (this.fun = e), (this.array = t);
                            }
                            function f() {}
                            (i.nextTick = function (e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                l.push(new h(e, t)), 1 !== l.length || u || a(p);
                            }),
                                (h.prototype.run = function () {
                                    this.fun.apply(null, this.array);
                                }),
                                (i.title = "browser"),
                                (i.browser = !0),
                                (i.env = {}),
                                (i.argv = []),
                                (i.version = ""),
                                (i.versions = {}),
                                (i.on = f),
                                (i.addListener = f),
                                (i.once = f),
                                (i.off = f),
                                (i.removeListener = f),
                                (i.removeAllListeners = f),
                                (i.emit = f),
                                (i.prependListener = f),
                                (i.prependOnceListener = f),
                                (i.listeners = function (e) {
                                    return [];
                                }),
                                (i.binding = function (e) {
                                    throw Error("process.binding is not supported");
                                }),
                                (i.cwd = function () {
                                    return "/";
                                }),
                                (i.chdir = function (e) {
                                    throw Error("process.chdir is not supported");
                                }),
                                (i.umask = function () {
                                    return 0;
                                });
                        },
                    },
                    n = {};
                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = (n[e] = { exports: {} }),
                        s = !0;
                    try {
                        t[e](o, o.exports, r), (s = !1);
                    } finally {
                        s && delete n[e];
                    }
                    return o.exports;
                }
                r.ab = "//";
                var i = r(229);
                e.exports = i;
            })();
        },
        5152: function (e, t, n) {
            e.exports = n(5677);
        },
        1163: function (e, t, n) {
            e.exports = n(6885);
        },
        590: function (e, t, n) {
            "use strict";
            let r;
            function i(e) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function o(e, t, n) {
                var r;
                return (
                    (r = (function (e, t) {
                        if ("object" !== i(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" !== i(r)) return r;
                            throw TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" === i(r) ? r : String(r)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
                    e
                );
            }
            n.d(t, {
                Z: function () {
                    return eB;
                },
            });
            var s,
                a = n(7294);
            let l = /^[a-z0-9]+(-[a-z0-9]+)*$/,
                u = (e, t, n, r = "") => {
                    let i = e.split(":");
                    if ("@" === e.slice(0, 1)) {
                        if (i.length < 2 || i.length > 3) return null;
                        r = i.shift().slice(1);
                    }
                    if (i.length > 3 || !i.length) return null;
                    if (i.length > 1) {
                        let e = i.pop(),
                            n = i.pop(),
                            o = { provider: i.length > 0 ? i[0] : r, prefix: n, name: e };
                        return t && !c(o) ? null : o;
                    }
                    let o = i[0],
                        s = o.split("-");
                    if (s.length > 1) {
                        let e = { provider: r, prefix: s.shift(), name: s.join("-") };
                        return t && !c(e) ? null : e;
                    }
                    if (n && "" === r) {
                        let e = { provider: r, prefix: "", name: o };
                        return t && !c(e, n) ? null : e;
                    }
                    return null;
                },
                c = (e, t) => !!e && !!(("" === e.provider || e.provider.match(l)) && ((t && "" === e.prefix) || e.prefix.match(l)) && e.name.match(l)),
                d = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
                p = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
                h = Object.freeze({ ...d, ...p }),
                f = Object.freeze({ ...h, body: "", hidden: !1 });
            function m(e, t) {
                let n = (function (e, t) {
                    let n = {};
                    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
                    let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
                    return r && (n.rotate = r), n;
                })(e, t);
                for (let r in f) r in p ? r in e && !(r in n) && (n[r] = p[r]) : r in t ? (n[r] = t[r]) : r in e && (n[r] = e[r]);
                return n;
            }
            function g(e, t) {
                let n = [];
                if ("object" != typeof e || "object" != typeof e.icons) return n;
                e.not_found instanceof Array &&
                    e.not_found.forEach((e) => {
                        t(e, null), n.push(e);
                    });
                let r = (function (e, t) {
                    let n = e.icons,
                        r = e.aliases || Object.create(null),
                        i = Object.create(null);
                    return (
                        Object.keys(n)
                            .concat(Object.keys(r))
                            .forEach(function e(t) {
                                if (n[t]) return (i[t] = []);
                                if (!(t in i)) {
                                    i[t] = null;
                                    let n = r[t] && r[t].parent,
                                        o = n && e(n);
                                    o && (i[t] = [n].concat(o));
                                }
                                return i[t];
                            }),
                        i
                    );
                })(e);
                for (let i in r) {
                    let o = r[i];
                    o &&
                        (t(
                            i,
                            (function (e, t, n) {
                                let r = e.icons,
                                    i = e.aliases || Object.create(null),
                                    o = {};
                                function s(e) {
                                    o = m(r[e] || i[e], o);
                                }
                                return s(t), n.forEach(s), m(e, o);
                            })(e, i, o)
                        ),
                        n.push(i));
                }
                return n;
            }
            let v = { provider: "", aliases: {}, not_found: {}, ...d };
            function y(e, t) {
                for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
                return !0;
            }
            function A(e) {
                if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !y(e, v)) return null;
                let t = e.icons;
                for (let e in t) {
                    let n = t[e];
                    if (!e.match(l) || "string" != typeof n.body || !y(n, f)) return null;
                }
                let n = e.aliases || Object.create(null);
                for (let e in n) {
                    let r = n[e],
                        i = r.parent;
                    if (!e.match(l) || "string" != typeof i || (!t[i] && !n[i]) || !y(r, f)) return null;
                }
                return e;
            }
            let b = Object.create(null);
            function w(e, t) {
                let n = b[e] || (b[e] = Object.create(null));
                return n[t] || (n[t] = { provider: e, prefix: t, icons: Object.create(null), missing: new Set() });
            }
            function E(e, t) {
                return A(t)
                    ? g(t, (t, n) => {
                          n ? (e.icons[t] = n) : e.missing.add(t);
                      })
                    : [];
            }
            let _ = !1;
            function S(e) {
                return "boolean" == typeof e && (_ = e), _;
            }
            let x = Object.freeze({ width: null, height: null }),
                T = Object.freeze({ ...x, ...p }),
                C = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                O = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
            function L(e, t, n) {
                if (1 === t) return e;
                if (((n = n || 100), "number" == typeof e)) return Math.ceil(e * t * n) / n;
                if ("string" != typeof e) return e;
                let r = e.split(C);
                if (null === r || !r.length) return e;
                let i = [],
                    o = r.shift(),
                    s = O.test(o);
                for (;;) {
                    if (s) {
                        let e = parseFloat(o);
                        isNaN(e) ? i.push(o) : i.push(Math.ceil(e * t * n) / n);
                    } else i.push(o);
                    if (void 0 === (o = r.shift())) return i.join("");
                    s = !s;
                }
            }
            let P = (e) => "unset" === e || "undefined" === e || "none" === e,
                M = /\sid="(\S+)"/g,
                j = "IconifyId" + Date.now().toString(16) + ((16777216 * Math.random()) | 0).toString(16),
                k = 0,
                R = Object.create(null);
            function D(e) {
                return R[e] || R[""];
            }
            function I(e) {
                let t;
                if ("string" == typeof e.resources) t = [e.resources];
                else if (!((t = e.resources) instanceof Array) || !t.length) return null;
                let n = { resources: t, path: e.path || "/", maxURL: e.maxURL || 500, rotate: e.rotate || 750, timeout: e.timeout || 5e3, random: !0 === e.random, index: e.index || 0, dataAfterTimeout: !1 !== e.dataAfterTimeout };
                return n;
            }
            let N = Object.create(null),
                F = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                B = [];
            for (; F.length > 0; ) 1 === F.length ? B.push(F.shift()) : Math.random() > 0.5 ? B.push(F.shift()) : B.push(F.pop());
            N[""] = I({ resources: ["https://api.iconify.design"].concat(B) });
            let z = (() => {
                    let e;
                    try {
                        if (((e = fetch), "function" == typeof e)) return e;
                    } catch (e) {}
                })(),
                U = (e, t, n) => {
                    let r = [],
                        i = (function (e, t) {
                            let n;
                            let r = N[e];
                            if (!r) return 0;
                            if (r.maxURL) {
                                let e = 0;
                                r.resources.forEach((t) => {
                                    e = Math.max(e, t.length);
                                }),
                                    (n = r.maxURL - e - r.path.length - (t + ".json?icons=").length);
                            } else n = 0;
                            return n;
                        })(e, t),
                        o = "icons",
                        s = { type: o, provider: e, prefix: t, icons: [] },
                        a = 0;
                    return (
                        n.forEach((n, l) => {
                            (a += n.length + 1) >= i && l > 0 && (r.push(s), (s = { type: o, provider: e, prefix: t, icons: [] }), (a = n.length)), s.icons.push(n);
                        }),
                        r.push(s),
                        r
                    );
                },
                W = (e, t, n) => {
                    if (!z) {
                        n("abort", 424);
                        return;
                    }
                    let r = (function (e) {
                        if ("string" == typeof e) {
                            let t = N[e];
                            if (t) return t.path;
                        }
                        return "/";
                    })(t.provider);
                    switch (t.type) {
                        case "icons": {
                            let e = t.prefix,
                                n = t.icons,
                                i = n.join(","),
                                o = new URLSearchParams({ icons: i });
                            r += e + ".json?" + o.toString();
                            break;
                        }
                        case "custom": {
                            let e = t.uri;
                            r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                            break;
                        }
                        default:
                            n("abort", 400);
                            return;
                    }
                    let i = 503;
                    z(e + r)
                        .then((e) => {
                            let t = e.status;
                            if (200 !== t) {
                                setTimeout(() => {
                                    n(404 === t ? "abort" : "next", t);
                                });
                                return;
                            }
                            return (i = 501), e.json();
                        })
                        .then((e) => {
                            if ("object" != typeof e || null === e) {
                                setTimeout(() => {
                                    404 === e ? n("abort", e) : n("next", i);
                                });
                                return;
                            }
                            setTimeout(() => {
                                n("success", e);
                            });
                        })
                        .catch(() => {
                            n("next", i);
                        });
                };
            function H(e, t) {
                e.forEach((e) => {
                    let n = e.loaderCallbacks;
                    n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
                });
            }
            let Y = 0;
            var V = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
            function X(e) {
                let t = { ...V, ...e },
                    n = [];
                function r() {
                    n = n.filter((e) => "pending" === e().status);
                }
                return {
                    query: function (e, i, o) {
                        let s = (function (e, t, n, r) {
                            let i, o;
                            let s = e.resources.length,
                                a = e.random ? Math.floor(Math.random() * s) : e.index;
                            if (e.random) {
                                let t = e.resources.slice(0);
                                for (i = []; t.length > 1; ) {
                                    let e = Math.floor(Math.random() * t.length);
                                    i.push(t[e]), (t = t.slice(0, e).concat(t.slice(e + 1)));
                                }
                                i = i.concat(t);
                            } else i = e.resources.slice(a).concat(e.resources.slice(0, a));
                            let l = Date.now(),
                                u = "pending",
                                c = 0,
                                d = null,
                                p = [],
                                h = [];
                            function f() {
                                d && (clearTimeout(d), (d = null));
                            }
                            function m() {
                                "pending" === u && (u = "aborted"),
                                    f(),
                                    p.forEach((e) => {
                                        "pending" === e.status && (e.status = "aborted");
                                    }),
                                    (p = []);
                            }
                            function g(e, t) {
                                t && (h = []), "function" == typeof e && h.push(e);
                            }
                            function v() {
                                (u = "failed"),
                                    h.forEach((e) => {
                                        e(void 0, o);
                                    });
                            }
                            function y() {
                                p.forEach((e) => {
                                    "pending" === e.status && (e.status = "aborted");
                                }),
                                    (p = []);
                            }
                            return (
                                "function" == typeof r && h.push(r),
                                setTimeout(function r() {
                                    if ("pending" !== u) return;
                                    f();
                                    let s = i.shift();
                                    if (void 0 === s) {
                                        if (p.length) {
                                            d = setTimeout(() => {
                                                f(), "pending" === u && (y(), v());
                                            }, e.timeout);
                                            return;
                                        }
                                        v();
                                        return;
                                    }
                                    let a = {
                                        status: "pending",
                                        resource: s,
                                        callback: (t, n) => {
                                            !(function (t, n, s) {
                                                let a = "success" !== n;
                                                switch (((p = p.filter((e) => e !== t)), u)) {
                                                    case "pending":
                                                        break;
                                                    case "failed":
                                                        if (a || !e.dataAfterTimeout) return;
                                                        break;
                                                    default:
                                                        return;
                                                }
                                                if ("abort" === n) {
                                                    (o = s), v();
                                                    return;
                                                }
                                                if (a) {
                                                    (o = s), p.length || (i.length ? r() : v());
                                                    return;
                                                }
                                                if ((f(), y(), !e.random)) {
                                                    let n = e.resources.indexOf(t.resource);
                                                    -1 !== n && n !== e.index && (e.index = n);
                                                }
                                                (u = "completed"),
                                                    h.forEach((e) => {
                                                        e(s);
                                                    });
                                            })(a, t, n);
                                        },
                                    };
                                    p.push(a), c++, (d = setTimeout(r, e.rotate)), n(s, t, a.callback);
                                }),
                                function () {
                                    return { startTime: l, payload: t, status: u, queriesSent: c, queriesPending: p.length, subscribe: g, abort: m };
                                }
                            );
                        })(t, e, i, (e, t) => {
                            r(), o && o(e, t);
                        });
                        return n.push(s), s;
                    },
                    find: function (e) {
                        return n.find((t) => e(t)) || null;
                    },
                    setIndex: (e) => {
                        t.index = e;
                    },
                    getIndex: () => t.index,
                    cleanup: r,
                };
            }
            let Q = Object.create(null),
                $ = "iconify2",
                J = "iconify",
                G = J + "-count",
                Z = J + "-version";
            function q(e, t) {
                try {
                    return e.getItem(t);
                } catch (e) {}
            }
            function K(e, t, n) {
                try {
                    return e.setItem(t, n), !0;
                } catch (e) {}
            }
            function ee(e, t) {
                try {
                    e.removeItem(t);
                } catch (e) {}
            }
            function et(e, t) {
                return K(e, G, t.toString());
            }
            function en(e) {
                return parseInt(q(e, G)) || 0;
            }
            let er = { local: !0, session: !0 },
                ei = { local: new Set(), session: new Set() },
                eo = !1,
                es = "undefined" == typeof window ? {} : window;
            function ea(e) {
                let t = e + "Storage";
                try {
                    if (es && es[t] && "number" == typeof es[t].length) return es[t];
                } catch (e) {}
                er[e] = !1;
            }
            function el(e, t) {
                let n = ea(e);
                if (!n) return;
                let r = q(n, Z);
                if (r !== $) {
                    if (r) {
                        let e = en(n);
                        for (let t = 0; t < e; t++) ee(n, J + t.toString());
                    }
                    K(n, Z, $), et(n, 0);
                    return;
                }
                let i = Math.floor(Date.now() / 36e5) - 168,
                    o = (e) => {
                        let r = J + e.toString(),
                            o = q(n, r);
                        if ("string" == typeof o) {
                            try {
                                let n = JSON.parse(o);
                                if ("object" == typeof n && "number" == typeof n.cached && n.cached > i && "string" == typeof n.provider && "object" == typeof n.data && "string" == typeof n.data.prefix && t(n, e)) return !0;
                            } catch (e) {}
                            ee(n, r);
                        }
                    },
                    s = en(n);
                for (let t = s - 1; t >= 0; t--) o(t) || (t === s - 1 ? et(n, --s) : ei[e].add(t));
            }
            function eu() {
                if (!eo)
                    for (let e in ((eo = !0), er))
                        el(e, (e) => {
                            let t = e.data,
                                n = e.provider,
                                r = t.prefix,
                                i = w(n, r);
                            if (!E(i, t).length) return !1;
                            let o = t.lastModified || -1;
                            return (i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, o) : o), !0;
                        });
            }
            function ec() {}
            let ed = (e, t) => {
                    let n, r;
                    let i = (function (e, t = !0, n = !1) {
                            let r = [];
                            return (
                                e.forEach((e) => {
                                    let i = "string" == typeof e ? u(e, t, n) : e;
                                    i && r.push(i);
                                }),
                                r
                            );
                        })(e, !0, S()),
                        o = (function (e) {
                            let t = { loaded: [], missing: [], pending: [] },
                                n = Object.create(null);
                            e.sort((e, t) => (e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name)));
                            let r = { provider: "", prefix: "", name: "" };
                            return (
                                e.forEach((e) => {
                                    if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
                                    r = e;
                                    let i = e.provider,
                                        o = e.prefix,
                                        s = e.name,
                                        a = n[i] || (n[i] = Object.create(null)),
                                        l = a[o] || (a[o] = w(i, o));
                                    (s in l.icons ? t.loaded : "" === o || l.missing.has(s) ? t.missing : t.pending).push({ provider: i, prefix: o, name: s });
                                }),
                                t
                            );
                        })(i);
                    if (!o.pending.length) {
                        let e = !0;
                        return (
                            t &&
                                setTimeout(() => {
                                    e && t(o.loaded, o.missing, o.pending, ec);
                                }),
                            () => {
                                e = !1;
                            }
                        );
                    }
                    let s = Object.create(null),
                        a = [];
                    return (
                        o.pending.forEach((e) => {
                            let { provider: t, prefix: i } = e;
                            if (i === r && t === n) return;
                            (n = t), (r = i), a.push(w(t, i));
                            let o = s[t] || (s[t] = Object.create(null));
                            o[i] || (o[i] = []);
                        }),
                        o.pending.forEach((e) => {
                            let { provider: t, prefix: n, name: r } = e,
                                i = w(t, n),
                                o = i.pendingIcons || (i.pendingIcons = new Set());
                            o.has(r) || (o.add(r), s[t][n].push(r));
                        }),
                        a.forEach((e) => {
                            let { provider: t, prefix: n } = e;
                            if (s[t][n].length) {
                                var r, i;
                                (r = e),
                                    (i = s[t][n]),
                                    r.iconsToLoad ? (r.iconsToLoad = r.iconsToLoad.concat(i).sort()) : (r.iconsToLoad = i),
                                    r.iconsQueueFlag ||
                                        ((r.iconsQueueFlag = !0),
                                        setTimeout(() => {
                                            let e;
                                            r.iconsQueueFlag = !1;
                                            let { provider: t, prefix: n } = r,
                                                i = r.iconsToLoad;
                                            if ((delete r.iconsToLoad, !i || !(e = D(t)))) return;
                                            let o = e.prepare(t, n, i);
                                            o.forEach((e) => {
                                                !(function (e, t, n) {
                                                    let r, i;
                                                    if ("string" == typeof e) {
                                                        let t = D(e);
                                                        if (!t) return n(void 0, 424);
                                                        i = t.send;
                                                        let o = (function (e) {
                                                            if (!Q[e]) {
                                                                let t = N[e];
                                                                if (!t) return;
                                                                let n = X(t);
                                                                Q[e] = { config: t, redundancy: n };
                                                            }
                                                            return Q[e];
                                                        })(e);
                                                        o && (r = o.redundancy);
                                                    } else {
                                                        let t = I(e);
                                                        if (t) {
                                                            r = X(t);
                                                            let n = e.resources ? e.resources[0] : "",
                                                                o = D(n);
                                                            o && (i = o.send);
                                                        }
                                                    }
                                                    r && i ? r.query(t, i, n)().abort : n(void 0, 424);
                                                })(t, e, (t) => {
                                                    var n;
                                                    if ("object" != typeof t)
                                                        e.icons.forEach((e) => {
                                                            r.missing.add(e);
                                                        });
                                                    else
                                                        try {
                                                            let e = E(r, t);
                                                            if (!e.length) return;
                                                            let n = r.pendingIcons;
                                                            n &&
                                                                e.forEach((e) => {
                                                                    n.delete(e);
                                                                }),
                                                                (function (e, t) {
                                                                    function n(n) {
                                                                        let r, i;
                                                                        if (!er[n] || !(r = ea(n))) return;
                                                                        let o = ei[n];
                                                                        if (o.size) o.delete((i = Array.from(o).shift()));
                                                                        else if (((i = en(r)), !et(r, i + 1))) return;
                                                                        let s = { cached: Math.floor(Date.now() / 36e5), provider: e.provider, data: t };
                                                                        return K(r, J + i.toString(), JSON.stringify(s));
                                                                    }
                                                                    eo || eu(),
                                                                        (!t.lastModified ||
                                                                            (function (e, t) {
                                                                                let n = e.lastModifiedCached;
                                                                                if (n && n >= t) return n === t;
                                                                                if (((e.lastModifiedCached = t), n))
                                                                                    for (let n in er)
                                                                                        el(n, (n) => {
                                                                                            let r = n.data;
                                                                                            return n.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t;
                                                                                        });
                                                                                return !0;
                                                                            })(e, t.lastModified)) &&
                                                                            Object.keys(t.icons).length &&
                                                                            (t.not_found && ((t = Object.assign({}, t)), delete t.not_found), n("local") || n("session"));
                                                                })(r, t);
                                                        } catch (e) {
                                                            console.error(e);
                                                        }
                                                    (n = r).iconsLoaderFlag ||
                                                        ((n.iconsLoaderFlag = !0),
                                                        setTimeout(() => {
                                                            var e;
                                                            (n.iconsLoaderFlag = !1),
                                                                (e = n).pendingCallbacksFlag ||
                                                                    ((e.pendingCallbacksFlag = !0),
                                                                    setTimeout(() => {
                                                                        e.pendingCallbacksFlag = !1;
                                                                        let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                                                        if (!t.length) return;
                                                                        let n = !1,
                                                                            r = e.provider,
                                                                            i = e.prefix;
                                                                        t.forEach((t) => {
                                                                            let o = t.icons,
                                                                                s = o.pending.length;
                                                                            (o.pending = o.pending.filter((t) => {
                                                                                if (t.prefix !== i) return !0;
                                                                                let s = t.name;
                                                                                if (e.icons[s]) o.loaded.push({ provider: r, prefix: i, name: s });
                                                                                else {
                                                                                    if (!e.missing.has(s)) return (n = !0), !0;
                                                                                    o.missing.push({ provider: r, prefix: i, name: s });
                                                                                }
                                                                                return !1;
                                                                            })),
                                                                                o.pending.length !== s && (n || H([e], t.id), t.callback(o.loaded.slice(0), o.missing.slice(0), o.pending.slice(0), t.abort));
                                                                        });
                                                                    }));
                                                        }));
                                                });
                                            });
                                        }));
                            }
                        }),
                        t
                            ? (function (e, t, n) {
                                  let r = Y++,
                                      i = H.bind(null, n, r);
                                  if (!t.pending.length) return i;
                                  let o = { id: r, icons: t, callback: e, abort: i };
                                  return (
                                      n.forEach((e) => {
                                          (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o);
                                      }),
                                      i
                                  );
                              })(t, o, a)
                            : ec
                    );
                },
                ep = /[\s,]+/,
                eh = { ...T, inline: !1 },
                ef = { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-hidden": !0, role: "img" },
                em = { display: "inline-block" },
                eg = { backgroundColor: "currentColor" },
                ev = { backgroundColor: "transparent" },
                ey = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
                eA = { WebkitMask: eg, mask: eg, background: ev };
            for (let e in eA) {
                let t = eA[e];
                for (let n in ey) t[e + n] = ey[n];
            }
            let eb = { ...eh, inline: !0 };
            function ew(e) {
                return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
            }
            let eE = (e, t, n, i) => {
                let o = n ? eb : eh,
                    s = (function (e, t) {
                        let n = { ...e };
                        for (let e in t) {
                            let r = t[e],
                                i = typeof r;
                            e in x ? (null === r || (r && ("string" === i || "number" === i))) && (n[e] = r) : i === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r);
                        }
                        return n;
                    })(o, t),
                    l = t.mode || "svg",
                    u = {},
                    c = t.style || {},
                    d = { ...("svg" === l ? ef : {}), ref: i };
                for (let e in t) {
                    let n = t[e];
                    if (void 0 !== n)
                        switch (e) {
                            case "icon":
                            case "style":
                            case "children":
                            case "onLoad":
                            case "mode":
                            case "_ref":
                            case "_inline":
                                break;
                            case "inline":
                            case "hFlip":
                            case "vFlip":
                                s[e] = !0 === n || "true" === n || 1 === n;
                                break;
                            case "flip":
                                "string" == typeof n &&
                                    (function (e, t) {
                                        t.split(ep).forEach((t) => {
                                            let n = t.trim();
                                            switch (n) {
                                                case "horizontal":
                                                    e.hFlip = !0;
                                                    break;
                                                case "vertical":
                                                    e.vFlip = !0;
                                            }
                                        });
                                    })(s, n);
                                break;
                            case "color":
                                u.color = n;
                                break;
                            case "rotate":
                                "string" == typeof n
                                    ? (s[e] = (function (e, t = 0) {
                                          let n = e.replace(/^-?[0-9.]*/, "");
                                          function r(e) {
                                              for (; e < 0; ) e += 4;
                                              return e % 4;
                                          }
                                          if ("" === n) {
                                              let t = parseInt(e);
                                              return isNaN(t) ? 0 : r(t);
                                          }
                                          if (n !== e) {
                                              let t = 0;
                                              switch (n) {
                                                  case "%":
                                                      t = 25;
                                                      break;
                                                  case "deg":
                                                      t = 90;
                                              }
                                              if (t) {
                                                  let i = parseFloat(e.slice(0, e.length - n.length));
                                                  return isNaN(i) ? 0 : (i /= t) % 1 == 0 ? r(i) : 0;
                                              }
                                          }
                                          return t;
                                      })(n))
                                    : "number" == typeof n && (s[e] = n);
                                break;
                            case "ariaHidden":
                            case "aria-hidden":
                                !0 !== n && "true" !== n && delete d["aria-hidden"];
                                break;
                            default:
                                void 0 === o[e] && (d[e] = n);
                        }
                }
                let p = (function (e, t) {
                        let n, r;
                        let i = { ...h, ...e },
                            o = { ...T, ...t },
                            s = { left: i.left, top: i.top, width: i.width, height: i.height },
                            a = i.body;
                        [i, o].forEach((e) => {
                            let t;
                            let n = [],
                                r = e.hFlip,
                                i = e.vFlip,
                                o = e.rotate;
                            switch (
                                (r
                                    ? i
                                        ? (o += 2)
                                        : (n.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), n.push("scale(-1 1)"), (s.top = s.left = 0))
                                    : i && (n.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), n.push("scale(1 -1)"), (s.top = s.left = 0)),
                                o < 0 && (o -= 4 * Math.floor(o / 4)),
                                (o %= 4))
                            ) {
                                case 1:
                                    n.unshift("rotate(90 " + (t = s.height / 2 + s.top).toString() + " " + t.toString() + ")");
                                    break;
                                case 2:
                                    n.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
                                    break;
                                case 3:
                                    n.unshift("rotate(-90 " + (t = s.width / 2 + s.left).toString() + " " + t.toString() + ")");
                            }
                            o % 2 == 1 && (s.left !== s.top && ((t = s.left), (s.left = s.top), (s.top = t)), s.width !== s.height && ((t = s.width), (s.width = s.height), (s.height = t))),
                                n.length && (a = '<g transform="' + n.join(" ") + '">' + a + "</g>");
                        });
                        let l = o.width,
                            u = o.height,
                            c = s.width,
                            d = s.height;
                        null === l ? (n = L((r = null === u ? "1em" : "auto" === u ? d : u), c / d)) : ((n = "auto" === l ? c : l), (r = null === u ? L(n, d / c) : "auto" === u ? d : u));
                        let p = {},
                            f = (e, t) => {
                                P(t) || (p[e] = t.toString());
                            };
                        return f("width", n), f("height", r), (p.viewBox = s.left.toString() + " " + s.top.toString() + " " + c.toString() + " " + d.toString()), { attributes: p, body: a };
                    })(e, s),
                    f = p.attributes;
                if ((s.inline && (u.verticalAlign = "-0.125em"), "svg" === l)) {
                    var m;
                    (d.style = { ...u, ...c }), Object.assign(d, f);
                    let e = 0,
                        n = t.id;
                    return (
                        "string" == typeof n && (n = n.replace(/-/g, "_")),
                        (d.dangerouslySetInnerHTML = {
                            __html:
                                ((m = (function (e, t = j) {
                                    let n;
                                    let r = [];
                                    for (; (n = M.exec(e)); ) r.push(n[1]);
                                    if (!r.length) return e;
                                    let i = "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
                                    return (
                                        r.forEach((n) => {
                                            let r = "function" == typeof t ? t(n) : t + (k++).toString(),
                                                o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                            e = e.replace(RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"), "$1" + r + i + "$3");
                                        }),
                                        (e = e.replace(RegExp(i, "g"), ""))
                                    );
                                })(p.body, n ? () => n + "ID" + e++ : "iconifyReact")),
                                void 0 === r &&
                                    (function () {
                                        try {
                                            r = window.trustedTypes.createPolicy("iconify", { createHTML: (e) => e });
                                        } catch (e) {
                                            r = null;
                                        }
                                    })(),
                                r ? r.createHTML(m) : m),
                        }),
                        a.createElement("svg", d)
                    );
                }
                let { body: g, width: v, height: y } = e,
                    A = "mask" === l || ("bg" !== l && -1 !== g.indexOf("currentColor")),
                    b = (function (e, t) {
                        let n = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                        for (let e in t) n += " " + e + '="' + t[e] + '"';
                        return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
                    })(g, { ...f, width: v + "", height: y + "" });
                return (
                    (d.style = {
                        ...u,
                        "--svg": 'url("data:image/svg+xml,' + b.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                        width: ew(f.width),
                        height: ew(f.height),
                        ...em,
                        ...(A ? eg : ev),
                        ...c,
                    }),
                    a.createElement("span", d)
                );
            };
            if ((S(!0), (R[""] = { prepare: U, send: W }), "undefined" != typeof document && "undefined" != typeof window)) {
                eu();
                let e = window;
                if (void 0 !== e.IconifyPreload) {
                    let t = e.IconifyPreload,
                        n = "Invalid IconifyPreload syntax.";
                    "object" == typeof t &&
                        null !== t &&
                        (t instanceof Array ? t : [t]).forEach((e) => {
                            try {
                                ("object" != typeof e ||
                                    null === e ||
                                    e instanceof Array ||
                                    "object" != typeof e.icons ||
                                    "string" != typeof e.prefix ||
                                    !(function (e, t) {
                                        if ("object" != typeof e) return !1;
                                        if (("string" != typeof t && (t = e.provider || ""), _ && !t && !e.prefix)) {
                                            let t = !1;
                                            return (
                                                A(e) &&
                                                    ((e.prefix = ""),
                                                    g(e, (e, n) => {
                                                        n &&
                                                            (function (e, t) {
                                                                let n = u(e, !0, _);
                                                                if (!n) return !1;
                                                                let r = w(n.provider, n.prefix);
                                                                return (function (e, t, n) {
                                                                    try {
                                                                        if ("string" == typeof n.body) return (e.icons[t] = { ...n }), !0;
                                                                    } catch (e) {}
                                                                    return !1;
                                                                })(r, n.name, t);
                                                            })(e, n) &&
                                                            (t = !0);
                                                    })),
                                                t
                                            );
                                        }
                                        let n = e.prefix;
                                        if (!c({ provider: t, prefix: n, name: "a" })) return !1;
                                        let r = w(t, n);
                                        return !!E(r, e);
                                    })(e)) &&
                                    console.error(n);
                            } catch (e) {
                                console.error(n);
                            }
                        });
                }
                if (void 0 !== e.IconifyProviders) {
                    let t = e.IconifyProviders;
                    if ("object" == typeof t && null !== t)
                        for (let e in t) {
                            let n = "IconifyProviders[" + e + "] is invalid.";
                            try {
                                let r = t[e];
                                if ("object" != typeof r || !r || void 0 === r.resources) continue;
                                !(function (e, t) {
                                    let n = I(t);
                                    return null !== n && ((N[e] = n), !0);
                                })(e, r) && console.error(n);
                            } catch (e) {
                                console.error(n);
                            }
                        }
                }
            }
            class e_ extends a.Component {
                constructor(e) {
                    super(e), (this.state = { icon: null });
                }
                _abortLoading() {
                    this._loading && (this._loading.abort(), (this._loading = null));
                }
                _setData(e) {
                    this.state.icon !== e && this.setState({ icon: e });
                }
                _checkIcon(e) {
                    let t;
                    let n = this.state,
                        r = this.props.icon;
                    if ("object" == typeof r && null !== r && "string" == typeof r.body) {
                        (this._icon = ""), this._abortLoading(), (e || null === n.icon) && this._setData({ data: r });
                        return;
                    }
                    if ("string" != typeof r || null === (t = u(r, !1, !0))) {
                        this._abortLoading(), this._setData(null);
                        return;
                    }
                    let i = (function (e) {
                        let t = "string" == typeof e ? u(e, !0, _) : e;
                        if (t) {
                            let e = w(t.provider, t.prefix),
                                n = t.name;
                            return e.icons[n] || (e.missing.has(n) ? null : void 0);
                        }
                    })(t);
                    if (!i) {
                        (this._loading && this._loading.name === r) || (this._abortLoading(), (this._icon = ""), this._setData(null), null !== i && (this._loading = { name: r, abort: ed([t], this._checkIcon.bind(this, !1)) }));
                        return;
                    }
                    if (this._icon !== r || null === n.icon) {
                        this._abortLoading(), (this._icon = r);
                        let e = ["iconify"];
                        "" !== t.prefix && e.push("iconify--" + t.prefix), "" !== t.provider && e.push("iconify--" + t.provider), this._setData({ data: i, classes: e }), this.props.onLoad && this.props.onLoad(r);
                    }
                }
                componentDidMount() {
                    this._checkIcon(!1);
                }
                componentDidUpdate(e) {
                    e.icon !== this.props.icon && this._checkIcon(!0);
                }
                componentWillUnmount() {
                    this._abortLoading();
                }
                render() {
                    let e = this.props,
                        t = this.state.icon;
                    if (null === t) return e.children ? e.children : a.createElement("span", {});
                    let n = e;
                    return t.classes && (n = { ...e, className: ("string" == typeof e.className ? e.className + " " : "") + t.classes.join(" ") }), eE({ ...h, ...t.data }, n, e._inline, e._ref);
                }
            }
            let eS = a.forwardRef(function (e, t) {
                let n = { ...e, _ref: t, _inline: !1 };
                return a.createElement(e_, n);
            });
            function ex() {
                return (ex = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            a.forwardRef(function (e, t) {
                let n = { ...e, _ref: t, _inline: !0 };
                return a.createElement(e_, n);
            });
            let eT = (e) => {
                    switch (e) {
                        case "stacked":
                        default:
                            return "rhap_stacked";
                        case "stacked-reverse":
                            return "rhap_stacked-reverse";
                        case "horizontal":
                            return "rhap_horizontal";
                        case "horizontal-reverse":
                            return "rhap_horizontal-reverse";
                    }
                },
                eC = (e) => (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX),
                eO = (e) => (e > 9 ? e.toString() : `0${e}`),
                eL = (e, t, n) => {
                    if (!isFinite(e)) return null;
                    let r = Math.floor(e / 60),
                        i = eO(r),
                        o = eO(Math.floor(e % 60)),
                        s = eO(Math.floor(r % 60)),
                        a = `${i}:${o}`,
                        l = `${Math.floor(r / 60)}:${s}:${o}`;
                    return "auto" === n ? (t >= 3600 ? l : a) : "mm:ss" === n ? a : "hh:mm:ss" === n ? l : void 0;
                };
            function eP(e, t) {
                let n = !1;
                return (r) => {
                    n || (e(r), (n = !0), setTimeout(() => (n = !1), t));
                };
            }
            class eM extends a.Component {
                constructor() {
                    super(...arguments),
                        o(this, "audio", void 0),
                        o(this, "timeOnMouseMove", 0),
                        o(this, "hasAddedAudioEventListener", !1),
                        o(this, "downloadProgressAnimationTimer", void 0),
                        o(this, "state", { isDraggingProgress: !1, currentTimePos: "0%", hasDownloadProgressAnimation: !1, downloadProgressArr: [], waitingForSeekCallback: !1 }),
                        o(this, "getCurrentProgress", (e) => {
                            let { audio: t, progressBar: n } = this.props,
                                r = 0 !== t.src.indexOf("blob:") && void 0 === this.props.srcDuration;
                            if (r && (!t.src || !isFinite(t.currentTime) || !n.current)) return { currentTime: 0, currentTimePos: "0%" };
                            let i = n.current.getBoundingClientRect(),
                                o = i.width,
                                s = eC(e) - i.left;
                            s < 0 ? (s = 0) : s > o && (s = o);
                            let a = this.getDuration(),
                                l = (a * s) / o;
                            return { currentTime: l, currentTimePos: `${((s / o) * 100).toFixed(2)}%` };
                        }),
                        o(this, "handleContextMenu", (e) => {
                            e.preventDefault();
                        }),
                        o(this, "handleMouseDownOrTouchStartProgressBar", (e) => {
                            e.stopPropagation();
                            let { currentTime: t, currentTimePos: n } = this.getCurrentProgress(e.nativeEvent);
                            isFinite(t) &&
                                ((this.timeOnMouseMove = t),
                                this.setState({ isDraggingProgress: !0, currentTimePos: n }),
                                e.nativeEvent instanceof MouseEvent
                                    ? (window.addEventListener("mousemove", this.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", this.handleWindowMouseOrTouchUp))
                                    : (window.addEventListener("touchmove", this.handleWindowMouseOrTouchMove), window.addEventListener("touchend", this.handleWindowMouseOrTouchUp)));
                        }),
                        o(this, "handleWindowMouseOrTouchMove", (e) => {
                            e instanceof MouseEvent && e.preventDefault(), e.stopPropagation();
                            let t = window.getSelection();
                            t && "Range" === t.type && t.empty();
                            let { isDraggingProgress: n } = this.state;
                            if (n) {
                                let { currentTime: t, currentTimePos: n } = this.getCurrentProgress(e);
                                (this.timeOnMouseMove = t), this.setState({ currentTimePos: n });
                            }
                        }),
                        o(this, "handleWindowMouseOrTouchUp", (e) => {
                            e.stopPropagation();
                            let t = this.timeOnMouseMove,
                                { audio: n, onChangeCurrentTimeError: r, onSeek: i } = this.props;
                            if (i)
                                this.setState({ isDraggingProgress: !1, waitingForSeekCallback: !0 }, () => {
                                    i(n, t).then(
                                        () => this.setState({ waitingForSeekCallback: !1 }),
                                        (e) => {
                                            throw Error(e);
                                        }
                                    );
                                });
                            else {
                                let e = { isDraggingProgress: !1 };
                                n.readyState !== n.HAVE_NOTHING && n.readyState !== n.HAVE_METADATA && isFinite(t) ? (n.currentTime = t) : ((e.currentTimePos = "0%"), r && r()), this.setState(e);
                            }
                            e instanceof MouseEvent
                                ? (window.removeEventListener("mousemove", this.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", this.handleWindowMouseOrTouchUp))
                                : (window.removeEventListener("touchmove", this.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", this.handleWindowMouseOrTouchUp));
                        }),
                        o(
                            this,
                            "handleAudioTimeUpdate",
                            eP((e) => {
                                let { isDraggingProgress: t } = this.state,
                                    n = e.target;
                                if (t || !0 === this.state.waitingForSeekCallback) return;
                                let { currentTime: r } = n,
                                    i = this.getDuration();
                                this.setState({ currentTimePos: `${((r / i) * 100 || 0).toFixed(2)}%` });
                            }, this.props.progressUpdateInterval)
                        ),
                        o(this, "handleAudioDownloadProgressUpdate", (e) => {
                            let t = e.target,
                                n = this.getDuration(),
                                r = [];
                            for (let e = 0; e < t.buffered.length; e++) {
                                let i = t.buffered.start(e),
                                    o = t.buffered.end(e);
                                r.push({ left: `${Math.round((100 / n) * i) || 0}%`, width: `${Math.round((100 / n) * (o - i)) || 0}%` });
                            }
                            clearTimeout(this.downloadProgressAnimationTimer),
                                this.setState({ downloadProgressArr: r, hasDownloadProgressAnimation: !0 }),
                                (this.downloadProgressAnimationTimer = setTimeout(() => {
                                    this.setState({ hasDownloadProgressAnimation: !1 });
                                }, 200));
                        });
                }
                getDuration() {
                    let { audio: e, srcDuration: t } = this.props;
                    return void 0 === t ? e.duration : t;
                }
                componentDidUpdate() {
                    let { audio: e } = this.props;
                    e &&
                        !this.hasAddedAudioEventListener &&
                        ((this.audio = e), (this.hasAddedAudioEventListener = !0), e.addEventListener("timeupdate", this.handleAudioTimeUpdate), e.addEventListener("progress", this.handleAudioDownloadProgressUpdate));
                }
                componentWillUnmount() {
                    this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioTimeUpdate), this.audio.removeEventListener("progress", this.handleAudioDownloadProgressUpdate)),
                        clearTimeout(this.downloadProgressAnimationTimer);
                }
                render() {
                    let { showDownloadProgress: e, showFilledProgress: t, progressBar: n, i18nProgressBar: r } = this.props,
                        { currentTimePos: i, downloadProgressArr: o, hasDownloadProgressAnimation: s } = this.state;
                    return a.createElement(
                        "div",
                        {
                            className: "rhap_progress-container",
                            ref: n,
                            "aria-label": r,
                            role: "progressbar",
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": Number(i.split("%")[0]),
                            tabIndex: 0,
                            onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
                            onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
                            onContextMenu: this.handleContextMenu,
                        },
                        a.createElement(
                            "div",
                            { className: `rhap_progress-bar ${e ? "rhap_progress-bar-show-download" : ""}` },
                            a.createElement("div", { className: "rhap_progress-indicator", style: { left: i } }),
                            t && a.createElement("div", { className: "rhap_progress-filled", style: { width: i } }),
                            e &&
                                o.map((e, t) => {
                                    let { left: n, width: r } = e;
                                    return a.createElement("div", { key: t, className: "rhap_download-progress", style: { left: n, width: r, transitionDuration: s ? ".2s" : "0s" } });
                                })
                        )
                    );
                }
            }
            let ej = (e, t) => a.createElement(eM, ex({}, e, { progressBar: t }));
            var ek = (0, a.forwardRef)(ej);
            class eR extends a.PureComponent {
                constructor(e) {
                    super(e),
                        o(this, "audio", void 0),
                        o(this, "hasAddedAudioEventListener", !1),
                        o(this, "state", { currentTime: this.props.defaultCurrentTime }),
                        o(this, "handleAudioCurrentTimeChange", (e) => {
                            let t = e.target,
                                { isLeftTime: n, timeFormat: r, defaultCurrentTime: i } = this.props;
                            this.setState({ currentTime: eL(n ? t.duration - t.currentTime : t.currentTime, t.duration, r) || i });
                        }),
                        o(this, "addAudioEventListeners", () => {
                            let { audio: e } = this.props;
                            e &&
                                !this.hasAddedAudioEventListener &&
                                ((this.audio = e), (this.hasAddedAudioEventListener = !0), e.addEventListener("timeupdate", this.handleAudioCurrentTimeChange), e.addEventListener("loadedmetadata", this.handleAudioCurrentTimeChange));
                        });
                    let { audio: t, defaultCurrentTime: n, isLeftTime: r, timeFormat: i } = e,
                        s = n;
                    t && (s = eL(r ? t.duration - t.currentTime : t.currentTime, t.duration, i)), (this.state = { currentTime: s });
                }
                componentDidMount() {
                    this.addAudioEventListeners();
                }
                componentDidUpdate() {
                    this.addAudioEventListeners();
                }
                componentWillUnmount() {
                    this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("timeupdate", this.handleAudioCurrentTimeChange), this.audio.removeEventListener("loadedmetadata", this.handleAudioCurrentTimeChange));
                }
                render() {
                    return this.state.currentTime;
                }
            }
            class eD extends a.PureComponent {
                constructor(e) {
                    super(e),
                        o(this, "audio", void 0),
                        o(this, "hasAddedAudioEventListener", !1),
                        o(this, "state", { duration: this.props.audio ? eL(this.props.audio.duration, this.props.audio.duration, this.props.timeFormat) : this.props.defaultDuration }),
                        o(this, "handleAudioDurationChange", (e) => {
                            let t = e.target,
                                { timeFormat: n, defaultDuration: r } = this.props;
                            this.setState({ duration: eL(t.duration, t.duration, n) || r });
                        }),
                        o(this, "addAudioEventListeners", () => {
                            let { audio: e } = this.props;
                            e &&
                                !this.hasAddedAudioEventListener &&
                                ((this.audio = e), (this.hasAddedAudioEventListener = !0), e.addEventListener("durationchange", this.handleAudioDurationChange), e.addEventListener("abort", this.handleAudioDurationChange));
                        });
                    let { audio: t, timeFormat: n, defaultDuration: r } = e;
                    this.state = { duration: t ? eL(t.duration, t.duration, n) : r };
                }
                componentDidMount() {
                    this.addAudioEventListeners();
                }
                componentDidUpdate() {
                    this.addAudioEventListeners();
                }
                componentWillUnmount() {
                    this.audio && this.hasAddedAudioEventListener && (this.audio.removeEventListener("durationchange", this.handleAudioDurationChange), this.audio.removeEventListener("abort", this.handleAudioDurationChange));
                }
                render() {
                    return this.state.duration;
                }
            }
            class eI extends a.Component {
                constructor() {
                    super(...arguments),
                        o(this, "audio", void 0),
                        o(this, "hasAddedAudioEventListener", !1),
                        o(this, "volumeBar", (0, a.createRef)()),
                        o(this, "volumeAnimationTimer", 0),
                        o(this, "lastVolume", this.props.volume),
                        o(this, "state", { currentVolumePos: `${((this.lastVolume / 1) * 100 || 0).toFixed(2)}%`, hasVolumeAnimation: !1, isDraggingVolume: !1 }),
                        o(this, "getCurrentVolume", (e) => {
                            let t, n;
                            let { audio: r } = this.props;
                            if (!this.volumeBar.current) return { currentVolume: r.volume, currentVolumePos: this.state.currentVolumePos };
                            let i = this.volumeBar.current.getBoundingClientRect(),
                                o = i.width,
                                s = eC(e) - i.left;
                            return s < 0 ? ((t = 0), (n = "0%")) : s > i.width ? ((t = 1), (n = "100%")) : ((t = s / o), (n = `${(s / o) * 100}%`)), { currentVolume: t, currentVolumePos: n };
                        }),
                        o(this, "handleContextMenu", (e) => {
                            e.preventDefault();
                        }),
                        o(this, "handleClickVolumeButton", () => {
                            let { audio: e } = this.props;
                            e.volume > 0 ? ((this.lastVolume = e.volume), (e.volume = 0)) : (e.volume = this.lastVolume);
                        }),
                        o(this, "handleVolumnControlMouseOrTouchDown", (e) => {
                            e.stopPropagation();
                            let { audio: t } = this.props,
                                { currentVolume: n, currentVolumePos: r } = this.getCurrentVolume(e.nativeEvent);
                            (t.volume = n),
                                this.setState({ isDraggingVolume: !0, currentVolumePos: r }),
                                e.nativeEvent instanceof MouseEvent
                                    ? (window.addEventListener("mousemove", this.handleWindowMouseOrTouchMove), window.addEventListener("mouseup", this.handleWindowMouseOrTouchUp))
                                    : (window.addEventListener("touchmove", this.handleWindowMouseOrTouchMove), window.addEventListener("touchend", this.handleWindowMouseOrTouchUp));
                        }),
                        o(this, "handleWindowMouseOrTouchMove", (e) => {
                            e instanceof MouseEvent && e.preventDefault(), e.stopPropagation();
                            let { audio: t } = this.props,
                                n = window.getSelection();
                            n && "Range" === n.type && n.empty();
                            let { isDraggingVolume: r } = this.state;
                            if (r) {
                                let { currentVolume: n, currentVolumePos: r } = this.getCurrentVolume(e);
                                (t.volume = n), this.setState({ currentVolumePos: r });
                            }
                        }),
                        o(this, "handleWindowMouseOrTouchUp", (e) => {
                            e.stopPropagation(),
                                this.setState({ isDraggingVolume: !1 }),
                                e instanceof MouseEvent
                                    ? (window.removeEventListener("mousemove", this.handleWindowMouseOrTouchMove), window.removeEventListener("mouseup", this.handleWindowMouseOrTouchUp))
                                    : (window.removeEventListener("touchmove", this.handleWindowMouseOrTouchMove), window.removeEventListener("touchend", this.handleWindowMouseOrTouchUp));
                        }),
                        o(this, "handleAudioVolumeChange", (e) => {
                            let { isDraggingVolume: t } = this.state,
                                { volume: n } = e.target;
                            ((this.lastVolume > 0 && 0 === n) || (0 === this.lastVolume && n > 0)) && this.props.onMuteChange(),
                                (this.lastVolume = n),
                                t ||
                                    (this.setState({ hasVolumeAnimation: !0, currentVolumePos: `${((n / 1) * 100 || 0).toFixed(2)}%` }),
                                    clearTimeout(this.volumeAnimationTimer),
                                    (this.volumeAnimationTimer = setTimeout(() => {
                                        this.setState({ hasVolumeAnimation: !1 });
                                    }, 100)));
                        });
                }
                componentDidUpdate() {
                    let { audio: e } = this.props;
                    e && !this.hasAddedAudioEventListener && ((this.audio = e), (this.hasAddedAudioEventListener = !0), e.addEventListener("volumechange", this.handleAudioVolumeChange));
                }
                componentWillUnmount() {
                    this.audio && this.hasAddedAudioEventListener && this.audio.removeEventListener("volumechange", this.handleAudioVolumeChange), clearTimeout(this.volumeAnimationTimer);
                }
                render() {
                    let { audio: e, showFilledVolume: t, i18nVolumeControl: n } = this.props,
                        { currentVolumePos: r, hasVolumeAnimation: i } = this.state,
                        { volume: o } = e || {};
                    return a.createElement(
                        "div",
                        {
                            ref: this.volumeBar,
                            onMouseDown: this.handleVolumnControlMouseOrTouchDown,
                            onTouchStart: this.handleVolumnControlMouseOrTouchDown,
                            onContextMenu: this.handleContextMenu,
                            role: "progressbar",
                            "aria-label": n,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": Number((100 * o).toFixed(0)),
                            tabIndex: 0,
                            className: "rhap_volume-bar-area",
                        },
                        a.createElement(
                            "div",
                            { className: "rhap_volume-bar" },
                            a.createElement("div", { className: "rhap_volume-indicator", style: { left: r, transitionDuration: i ? ".1s" : "0s" } }),
                            t && a.createElement("div", { className: "rhap_volume-filled", style: { width: r } })
                        )
                    );
                }
            }
            let eN =
                (((s = {}).CURRENT_TIME = "CURRENT_TIME"),
                (s.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME"),
                (s.PROGRESS_BAR = "PROGRESS_BAR"),
                (s.DURATION = "DURATION"),
                (s.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS"),
                (s.MAIN_CONTROLS = "MAIN_CONTROLS"),
                (s.VOLUME_CONTROLS = "VOLUME_CONTROLS"),
                (s.LOOP = "LOOP"),
                (s.VOLUME = "VOLUME"),
                s);
            class eF extends a.Component {
                constructor() {
                    super(...arguments),
                        o(this, "audio", (0, a.createRef)()),
                        o(this, "progressBar", (0, a.createRef)()),
                        o(this, "container", (0, a.createRef)()),
                        o(this, "lastVolume", this.props.volume),
                        o(this, "listenTracker", void 0),
                        o(this, "volumeAnimationTimer", void 0),
                        o(this, "downloadProgressAnimationTimer", void 0),
                        o(this, "togglePlay", (e) => {
                            e.stopPropagation();
                            let t = this.audio.current;
                            (t.paused || t.ended) && t.src ? this.playAudioPromise() : t.paused || t.pause();
                        }),
                        o(this, "playAudioPromise", () => {
                            let e = this.audio.current.play();
                            e
                                ? e.then(null).catch((e) => {
                                      let { onPlayError: t } = this.props;
                                      t && t(Error(e));
                                  })
                                : this.forceUpdate();
                        }),
                        o(this, "isPlaying", () => {
                            let e = this.audio.current;
                            return !!e && !e.paused && !e.ended;
                        }),
                        o(this, "handlePlay", (e) => {
                            this.forceUpdate(), this.props.onPlay && this.props.onPlay(e);
                        }),
                        o(this, "handlePause", (e) => {
                            this.audio && (this.forceUpdate(), this.props.onPause && this.props.onPause(e));
                        }),
                        o(this, "handleEnded", (e) => {
                            this.audio && (this.forceUpdate(), this.props.onEnded && this.props.onEnded(e));
                        }),
                        o(this, "handleAbort", (e) => {
                            this.props.onAbort && this.props.onAbort(e);
                        }),
                        o(this, "handleClickVolumeButton", () => {
                            let e = this.audio.current;
                            e.volume > 0 ? ((this.lastVolume = e.volume), (e.volume = 0)) : (e.volume = this.lastVolume);
                        }),
                        o(this, "handleMuteChange", () => {
                            this.forceUpdate();
                        }),
                        o(this, "handleClickLoopButton", () => {
                            (this.audio.current.loop = !this.audio.current.loop), this.forceUpdate();
                        }),
                        o(this, "handleClickRewind", () => {
                            let { progressJumpSteps: e, progressJumpStep: t } = this.props,
                                n = e.backward || t;
                            this.setJumpTime(-n);
                        }),
                        o(this, "handleClickForward", () => {
                            let { progressJumpSteps: e, progressJumpStep: t } = this.props,
                                n = e.forward || t;
                            this.setJumpTime(n);
                        }),
                        o(this, "setJumpTime", (e) => {
                            let t = this.audio.current,
                                { duration: n, currentTime: r } = t;
                            if (t.readyState === t.HAVE_NOTHING || t.readyState === t.HAVE_METADATA || !isFinite(n) || !isFinite(r)) return this.props.onChangeCurrentTimeError && this.props.onChangeCurrentTimeError();
                            let i = r + e / 1e3;
                            i < 0 ? ((t.currentTime = 0), (i = 0)) : i > n ? ((t.currentTime = n), (i = n)) : (t.currentTime = i);
                        }),
                        o(this, "setJumpVolume", (e) => {
                            let t = this.audio.current.volume + e;
                            t < 0 ? (t = 0) : t > 1 && (t = 1), (this.audio.current.volume = t);
                        }),
                        o(this, "handleKeyDown", (e) => {
                            if (this.props.hasDefaultKeyBindings)
                                switch (e.key) {
                                    case " ":
                                        (e.target === this.container.current || e.target === this.progressBar.current) && (e.preventDefault(), this.togglePlay(e));
                                        break;
                                    case "ArrowLeft":
                                        this.handleClickRewind();
                                        break;
                                    case "ArrowRight":
                                        this.handleClickForward();
                                        break;
                                    case "ArrowUp":
                                        e.preventDefault(), this.setJumpVolume(this.props.volumeJumpStep);
                                        break;
                                    case "ArrowDown":
                                        e.preventDefault(), this.setJumpVolume(-this.props.volumeJumpStep);
                                        break;
                                    case "l":
                                        this.handleClickLoopButton();
                                        break;
                                    case "m":
                                        this.handleClickVolumeButton();
                                }
                        }),
                        o(this, "renderUIModules", (e) => e.map((e, t) => this.renderUIModule(e, t))),
                        o(this, "renderUIModule", (e, t) => {
                            let {
                                defaultCurrentTime: n,
                                progressUpdateInterval: r,
                                showDownloadProgress: i,
                                showFilledProgress: o,
                                showFilledVolume: s,
                                defaultDuration: l,
                                customIcons: u,
                                showSkipControls: c,
                                onClickPrevious: d,
                                onClickNext: p,
                                onChangeCurrentTimeError: h,
                                showJumpControls: f,
                                customAdditionalControls: m,
                                customVolumeControls: g,
                                muted: v,
                                timeFormat: y,
                                volume: A,
                                loop: b,
                                mse: w,
                                i18nAriaLabels: E,
                            } = this.props;
                            switch (e) {
                                case eN.CURRENT_TIME:
                                    return a.createElement(
                                        "div",
                                        { key: t, id: "rhap_current-time", className: "rhap_time rhap_current-time" },
                                        a.createElement(eR, { audio: this.audio.current, isLeftTime: !1, defaultCurrentTime: n, timeFormat: y })
                                    );
                                case eN.CURRENT_LEFT_TIME:
                                    return a.createElement(
                                        "div",
                                        { key: t, id: "rhap_current-left-time", className: "rhap_time rhap_current-left-time" },
                                        a.createElement(eR, { audio: this.audio.current, isLeftTime: !0, defaultCurrentTime: n, timeFormat: y })
                                    );
                                case eN.PROGRESS_BAR:
                                    return a.createElement(ek, {
                                        key: t,
                                        ref: this.progressBar,
                                        audio: this.audio.current,
                                        progressUpdateInterval: r,
                                        showDownloadProgress: i,
                                        showFilledProgress: o,
                                        onSeek: w && w.onSeek,
                                        onChangeCurrentTimeError: h,
                                        srcDuration: w && w.srcDuration,
                                        i18nProgressBar: E.progressControl,
                                    });
                                case eN.DURATION:
                                    return a.createElement(
                                        "div",
                                        { key: t, className: "rhap_time rhap_total-time" },
                                        w && w.srcDuration ? eL(w.srcDuration, w.srcDuration, this.props.timeFormat) : a.createElement(eD, { audio: this.audio.current, defaultDuration: l, timeFormat: y })
                                    );
                                case eN.ADDITIONAL_CONTROLS:
                                    return a.createElement("div", { key: t, className: "rhap_additional-controls" }, this.renderUIModules(m));
                                case eN.MAIN_CONTROLS: {
                                    let e;
                                    let n = this.isPlaying();
                                    return (
                                        (e = n ? (u.pause ? u.pause : a.createElement(eS, { icon: "mdi:pause-circle" })) : u.play ? u.play : a.createElement(eS, { icon: "mdi:play-circle" })),
                                        a.createElement(
                                            "div",
                                            { key: t, className: "rhap_main-controls" },
                                            c &&
                                                a.createElement(
                                                    "button",
                                                    { "aria-label": E.previous, className: "rhap_button-clear rhap_main-controls-button rhap_skip-button", type: "button", onClick: d },
                                                    u.previous ? u.previous : a.createElement(eS, { icon: "mdi:skip-previous" })
                                                ),
                                            f &&
                                                a.createElement(
                                                    "button",
                                                    { "aria-label": E.rewind, className: "rhap_button-clear rhap_main-controls-button rhap_rewind-button", type: "button", onClick: this.handleClickRewind },
                                                    u.rewind ? u.rewind : a.createElement(eS, { icon: "mdi:rewind" })
                                                ),
                                            a.createElement("button", { "aria-label": n ? E.pause : E.play, className: "rhap_button-clear rhap_main-controls-button rhap_play-pause-button", type: "button", onClick: this.togglePlay }, e),
                                            f &&
                                                a.createElement(
                                                    "button",
                                                    { "aria-label": E.forward, className: "rhap_button-clear rhap_main-controls-button rhap_forward-button", type: "button", onClick: this.handleClickForward },
                                                    u.forward ? u.forward : a.createElement(eS, { icon: "mdi:fast-forward" })
                                                ),
                                            c &&
                                                a.createElement(
                                                    "button",
                                                    { "aria-label": E.next, className: "rhap_button-clear rhap_main-controls-button rhap_skip-button", type: "button", onClick: p },
                                                    u.next ? u.next : a.createElement(eS, { icon: "mdi:skip-next" })
                                                )
                                        )
                                    );
                                }
                                case eN.VOLUME_CONTROLS:
                                    return a.createElement("div", { key: t, className: "rhap_volume-controls" }, this.renderUIModules(g));
                                case eN.LOOP: {
                                    let e;
                                    let n = this.audio.current ? this.audio.current.loop : b;
                                    return (
                                        (e = n ? (u.loop ? u.loop : a.createElement(eS, { icon: "mdi:repeat" })) : u.loopOff ? u.loopOff : a.createElement(eS, { icon: "mdi:repeat-off" })),
                                        a.createElement("button", { key: t, "aria-label": n ? E.loop : E.loopOff, className: "rhap_button-clear rhap_repeat-button", type: "button", onClick: this.handleClickLoopButton }, e)
                                    );
                                }
                                case eN.VOLUME: {
                                    let e;
                                    let { volume: n = v ? 0 : A } = this.audio.current || {};
                                    return (
                                        (e = n ? (u.volume ? u.volume : a.createElement(eS, { icon: "mdi:volume-high" })) : u.volume ? u.volumeMute : a.createElement(eS, { icon: "mdi:volume-mute" })),
                                        a.createElement(
                                            "div",
                                            { key: t, className: "rhap_volume-container" },
                                            a.createElement("button", { "aria-label": n ? E.volume : E.volumeMute, onClick: this.handleClickVolumeButton, type: "button", className: "rhap_button-clear rhap_volume-button" }, e),
                                            a.createElement(eI, { audio: this.audio.current, volume: n, onMuteChange: this.handleMuteChange, showFilledVolume: s, i18nVolumeControl: E.volumeControl })
                                        )
                                    );
                                }
                                default:
                                    if (!(0, a.isValidElement)(e)) return null;
                                    return e.key ? e : (0, a.cloneElement)(e, { key: t });
                            }
                        });
                }
                componentDidMount() {
                    this.forceUpdate();
                    let e = this.audio.current;
                    this.props.muted ? (e.volume = 0) : (e.volume = this.lastVolume),
                        e.addEventListener("error", (e) => {
                            this.props.onError && this.props.onError(e);
                        }),
                        e.addEventListener("canplay", (e) => {
                            this.props.onCanPlay && this.props.onCanPlay(e);
                        }),
                        e.addEventListener("canplaythrough", (e) => {
                            this.props.onCanPlayThrough && this.props.onCanPlayThrough(e);
                        }),
                        e.addEventListener("play", this.handlePlay),
                        e.addEventListener("abort", this.handleAbort),
                        e.addEventListener("ended", this.handleEnded),
                        e.addEventListener("playing", (e) => {
                            this.props.onPlaying && this.props.onPlaying(e);
                        }),
                        e.addEventListener("seeking", (e) => {
                            this.props.onSeeking && this.props.onSeeking(e);
                        }),
                        e.addEventListener("seeked", (e) => {
                            this.props.onSeeked && this.props.onSeeked(e);
                        }),
                        e.addEventListener("waiting", (e) => {
                            this.props.onWaiting && this.props.onWaiting(e);
                        }),
                        e.addEventListener("emptied", (e) => {
                            this.props.onEmptied && this.props.onEmptied(e);
                        }),
                        e.addEventListener("stalled", (e) => {
                            this.props.onStalled && this.props.onStalled(e);
                        }),
                        e.addEventListener("suspend", (e) => {
                            this.props.onSuspend && this.props.onSuspend(e);
                        }),
                        e.addEventListener("loadstart", (e) => {
                            this.props.onLoadStart && this.props.onLoadStart(e);
                        }),
                        e.addEventListener("loadedmetadata", (e) => {
                            this.props.onLoadedMetaData && this.props.onLoadedMetaData(e);
                        }),
                        e.addEventListener("loadeddata", (e) => {
                            this.props.onLoadedData && this.props.onLoadedData(e);
                        }),
                        e.addEventListener("pause", this.handlePause),
                        e.addEventListener(
                            "timeupdate",
                            eP((e) => {
                                this.props.onListen && this.props.onListen(e);
                            }, this.props.listenInterval)
                        ),
                        e.addEventListener("volumechange", (e) => {
                            this.props.onVolumeChange && this.props.onVolumeChange(e);
                        }),
                        e.addEventListener("encrypted", (e) => {
                            let { mse: t } = this.props;
                            t && t.onEcrypted && t.onEcrypted(e);
                        });
                }
                componentDidUpdate(e) {
                    let { src: t, autoPlayAfterSrcChange: n } = this.props;
                    e.src !== t && (n ? this.playAudioPromise() : this.forceUpdate());
                }
                render() {
                    let {
                            className: e,
                            src: t,
                            loop: n,
                            preload: r,
                            autoPlay: i,
                            crossOrigin: o,
                            mediaGroup: s,
                            header: l,
                            footer: u,
                            layout: c,
                            customProgressBarSection: d,
                            customControlsSection: p,
                            children: h,
                            style: f,
                            i18nAriaLabels: m,
                        } = this.props,
                        g = this.audio.current ? this.audio.current.loop : n,
                        v = this.isPlaying() ? "rhap_play-status--playing" : "rhap_play-status--paused";
                    return a.createElement(
                        "div",
                        { role: "group", tabIndex: 0, "aria-label": m.player, className: `rhap_container ${g ? "rhap_loop--on" : "rhap_loop--off"} ${v} ${e}`, onKeyDown: this.handleKeyDown, ref: this.container, style: f },
                        a.createElement("audio", { src: t, controls: !1, loop: g, autoPlay: i, preload: r, crossOrigin: o, mediaGroup: s, ref: this.audio }, h),
                        l && a.createElement("div", { className: "rhap_header" }, l),
                        a.createElement(
                            "div",
                            { className: `rhap_main ${eT(c)}` },
                            a.createElement("div", { className: "rhap_progress-section" }, this.renderUIModules(d)),
                            a.createElement("div", { className: "rhap_controls-section" }, this.renderUIModules(p))
                        ),
                        u && a.createElement("div", { className: "rhap_footer" }, u)
                    );
                }
            }
            o(eF, "defaultProps", {
                autoPlay: !1,
                autoPlayAfterSrcChange: !0,
                listenInterval: 1e3,
                progressJumpStep: 5e3,
                progressJumpSteps: {},
                volumeJumpStep: 0.1,
                loop: !1,
                muted: !1,
                preload: "auto",
                progressUpdateInterval: 20,
                defaultCurrentTime: "--:--",
                defaultDuration: "--:--",
                timeFormat: "auto",
                volume: 1,
                className: "",
                showJumpControls: !0,
                showSkipControls: !1,
                showDownloadProgress: !0,
                showFilledProgress: !0,
                showFilledVolume: !1,
                customIcons: {},
                customProgressBarSection: [eN.CURRENT_TIME, eN.PROGRESS_BAR, eN.DURATION],
                customControlsSection: [eN.ADDITIONAL_CONTROLS, eN.MAIN_CONTROLS, eN.VOLUME_CONTROLS],
                customAdditionalControls: [eN.LOOP],
                customVolumeControls: [eN.VOLUME],
                layout: "stacked",
                hasDefaultKeyBindings: !0,
                i18nAriaLabels: {
                    player: "Audio player",
                    progressControl: "Audio progress control",
                    volumeControl: "Volume control",
                    play: "Play",
                    pause: "Pause",
                    rewind: "Rewind",
                    forward: "Forward",
                    previous: "Previous",
                    next: "Skip",
                    loop: "Disable loop",
                    loopOff: "Enable loop",
                    volume: "Mute",
                    volumeMute: "Unmute",
                },
            });
            var eB = eF;
        },
        5459: function (e, t, n) {
            var r,
                i = n(3454);
            "undefined" != typeof self && self,
                (e.exports =
                    ((r = n(7294)),
                    (() => {
                        var e = {
                                7403: (e, t, n) => {
                                    "use strict";
                                    n.d(t, { default: () => T });
                                    var r = n(4087),
                                        i = n.n(r);
                                    let o = function (e) {
                                            return new RegExp(/<[a-z][\s\S]*>/i).test(e);
                                        },
                                        s = function (e, t) {
                                            return Math.floor(Math.random() * (t - e + 1)) + e;
                                        };
                                    var a = "TYPE_CHARACTER",
                                        l = "REMOVE_CHARACTER",
                                        u = "REMOVE_ALL",
                                        c = "REMOVE_LAST_VISIBLE_NODE",
                                        d = "PAUSE_FOR",
                                        p = "CALL_FUNCTION",
                                        h = "ADD_HTML_TAG_ELEMENT",
                                        f = "CHANGE_DELETE_SPEED",
                                        m = "CHANGE_DELAY",
                                        g = "CHANGE_CURSOR",
                                        v = "PASTE_STRING",
                                        y = "HTML_TAG";
                                    function A(e) {
                                        return (A =
                                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                                ? function (e) {
                                                      return typeof e;
                                                  }
                                                : function (e) {
                                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                                  })(e);
                                    }
                                    function b(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t &&
                                                (r = r.filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                                })),
                                                n.push.apply(n, r);
                                        }
                                        return n;
                                    }
                                    function w(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? b(Object(n), !0).forEach(function (t) {
                                                      S(e, t, n[t]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                : b(Object(n)).forEach(function (t) {
                                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                  });
                                        }
                                        return e;
                                    }
                                    function E(e) {
                                        return (
                                            (function (e) {
                                                if (Array.isArray(e)) return _(e);
                                            })(e) ||
                                            (function (e) {
                                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                            })(e) ||
                                            (function (e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return _(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        "Object" === n && e.constructor && (n = e.constructor.name),
                                                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                                                    );
                                                }
                                            })(e) ||
                                            (function () {
                                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })()
                                        );
                                    }
                                    function _(e, t) {
                                        (null == t || t > e.length) && (t = e.length);
                                        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                                        return r;
                                    }
                                    function S(e, t, n) {
                                        return (t = x(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                                    }
                                    function x(e) {
                                        var t = (function (e, t) {
                                            if ("object" !== A(e) || null === e) return e;
                                            var n = e[Symbol.toPrimitive];
                                            if (void 0 !== n) {
                                                var r = n.call(e, "string");
                                                if ("object" !== A(r)) return r;
                                                throw TypeError("@@toPrimitive must return a primitive value.");
                                            }
                                            return String(e);
                                        })(e);
                                        return "symbol" === A(t) ? t : String(t);
                                    }
                                    let T = (function () {
                                        var e;
                                        function t(e, n) {
                                            var A = this;
                                            if (
                                                ((function (e, t) {
                                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                                })(this, t),
                                                S(this, "state", {
                                                    cursorAnimation: null,
                                                    lastFrameTime: null,
                                                    pauseUntil: null,
                                                    eventQueue: [],
                                                    eventLoop: null,
                                                    eventLoopPaused: !1,
                                                    reverseCalledEvents: [],
                                                    calledEvents: [],
                                                    visibleNodes: [],
                                                    initialOptions: null,
                                                    elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") },
                                                }),
                                                S(this, "options", {
                                                    strings: null,
                                                    cursor: "|",
                                                    delay: "natural",
                                                    pauseFor: 1500,
                                                    deleteSpeed: "natural",
                                                    loop: !1,
                                                    autoStart: !1,
                                                    devMode: !1,
                                                    skipAddStyles: !1,
                                                    wrapperClassName: "Typewriter__wrapper",
                                                    cursorClassName: "Typewriter__cursor",
                                                    stringSplitter: null,
                                                    onCreateTextNode: null,
                                                    onRemoveNode: null,
                                                }),
                                                S(this, "setupWrapperElement", function () {
                                                    A.state.elements.container &&
                                                        ((A.state.elements.wrapper.className = A.options.wrapperClassName),
                                                        (A.state.elements.cursor.className = A.options.cursorClassName),
                                                        (A.state.elements.cursor.innerHTML = A.options.cursor),
                                                        (A.state.elements.container.innerHTML = ""),
                                                        A.state.elements.container.appendChild(A.state.elements.wrapper),
                                                        A.state.elements.container.appendChild(A.state.elements.cursor));
                                                }),
                                                S(this, "start", function () {
                                                    return (A.state.eventLoopPaused = !1), A.runEventLoop(), A;
                                                }),
                                                S(this, "pause", function () {
                                                    return (A.state.eventLoopPaused = !0), A;
                                                }),
                                                S(this, "stop", function () {
                                                    return A.state.eventLoop && ((0, r.cancel)(A.state.eventLoop), (A.state.eventLoop = null)), A;
                                                }),
                                                S(this, "pauseFor", function (e) {
                                                    return A.addEventToQueue(d, { ms: e }), A;
                                                }),
                                                S(this, "typeOutAllStrings", function () {
                                                    return "string" == typeof A.options.strings
                                                        ? (A.typeString(A.options.strings).pauseFor(A.options.pauseFor), A)
                                                        : (A.options.strings.forEach(function (e) {
                                                              A.typeString(e).pauseFor(A.options.pauseFor).deleteAll(A.options.deleteSpeed);
                                                          }),
                                                          A);
                                                }),
                                                S(this, "typeString", function (e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    if (o(e)) return A.typeOutHTMLString(e, t);
                                                    if (e) {
                                                        var n = (A.options || {}).stringSplitter,
                                                            r = "function" == typeof n ? n(e) : e.split("");
                                                        A.typeCharacters(r, t);
                                                    }
                                                    return A;
                                                }),
                                                S(this, "pasteString", function (e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    return o(e) ? A.typeOutHTMLString(e, t, !0) : (e && A.addEventToQueue(v, { character: e, node: t }), A);
                                                }),
                                                S(this, "typeOutHTMLString", function (e) {
                                                    var t,
                                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                        r = arguments.length > 2 ? arguments[2] : void 0,
                                                        i = (((t = document.createElement("div")).innerHTML = e), t.childNodes);
                                                    if (i.length > 0)
                                                        for (var o = 0; o < i.length; o++) {
                                                            var s = i[o],
                                                                a = s.innerHTML;
                                                            s && 3 !== s.nodeType
                                                                ? ((s.innerHTML = ""), A.addEventToQueue(h, { node: s, parentNode: n }), r ? A.pasteString(a, s) : A.typeString(a, s))
                                                                : s.textContent && (r ? A.pasteString(s.textContent, n) : A.typeString(s.textContent, n));
                                                        }
                                                    return A;
                                                }),
                                                S(this, "deleteAll", function () {
                                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                                    return A.addEventToQueue(u, { speed: e }), A;
                                                }),
                                                S(this, "changeDeleteSpeed", function (e) {
                                                    if (!e) throw Error("Must provide new delete speed");
                                                    return A.addEventToQueue(f, { speed: e }), A;
                                                }),
                                                S(this, "changeDelay", function (e) {
                                                    if (!e) throw Error("Must provide new delay");
                                                    return A.addEventToQueue(m, { delay: e }), A;
                                                }),
                                                S(this, "changeCursor", function (e) {
                                                    if (!e) throw Error("Must provide new cursor");
                                                    return A.addEventToQueue(g, { cursor: e }), A;
                                                }),
                                                S(this, "deleteChars", function (e) {
                                                    if (!e) throw Error("Must provide amount of characters to delete");
                                                    for (var t = 0; t < e; t++) A.addEventToQueue(l);
                                                    return A;
                                                }),
                                                S(this, "callFunction", function (e, t) {
                                                    if (!e || "function" != typeof e) throw Error("Callback must be a function");
                                                    return A.addEventToQueue(p, { cb: e, thisArg: t }), A;
                                                }),
                                                S(this, "typeCharacters", function (e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                                    return (
                                                        e.forEach(function (e) {
                                                            A.addEventToQueue(a, { character: e, node: t });
                                                        }),
                                                        A
                                                    );
                                                }),
                                                S(this, "removeCharacters", function (e) {
                                                    if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                                    return (
                                                        e.forEach(function () {
                                                            A.addEventToQueue(l);
                                                        }),
                                                        A
                                                    );
                                                }),
                                                S(this, "addEventToQueue", function (e, t) {
                                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                    return A.addEventToStateProperty(e, t, n, "eventQueue");
                                                }),
                                                S(this, "addReverseCalledEvent", function (e, t) {
                                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                    return A.options.loop ? A.addEventToStateProperty(e, t, n, "reverseCalledEvents") : A;
                                                }),
                                                S(this, "addEventToStateProperty", function (e, t) {
                                                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                                        i = { eventName: e, eventArgs: t || {} };
                                                    return (A.state[r] = n ? [i].concat(E(A.state[r])) : [].concat(E(A.state[r]), [i])), A;
                                                }),
                                                S(this, "runEventLoop", function () {
                                                    A.state.lastFrameTime || (A.state.lastFrameTime = Date.now());
                                                    var e = Date.now(),
                                                        t = e - A.state.lastFrameTime;
                                                    if (!A.state.eventQueue.length) {
                                                        if (!A.options.loop) return;
                                                        (A.state.eventQueue = E(A.state.calledEvents)), (A.state.calledEvents = []), (A.options = w({}, A.state.initialOptions));
                                                    }
                                                    if (((A.state.eventLoop = i()(A.runEventLoop)), !A.state.eventLoopPaused)) {
                                                        if (A.state.pauseUntil) {
                                                            if (e < A.state.pauseUntil) return;
                                                            A.state.pauseUntil = null;
                                                        }
                                                        var n,
                                                            r = E(A.state.eventQueue),
                                                            o = r.shift();
                                                        if (
                                                            !(
                                                                t <=
                                                                (n =
                                                                    o.eventName === c || o.eventName === l
                                                                        ? "natural" === A.options.deleteSpeed
                                                                            ? s(40, 80)
                                                                            : A.options.deleteSpeed
                                                                        : "natural" === A.options.delay
                                                                        ? s(120, 160)
                                                                        : A.options.delay)
                                                            )
                                                        ) {
                                                            var b = o.eventName,
                                                                _ = o.eventArgs;
                                                            switch ((A.logInDevMode({ currentEvent: o, state: A.state, delay: n }), b)) {
                                                                case v:
                                                                case a:
                                                                    var S = _.character,
                                                                        x = _.node,
                                                                        T = document.createTextNode(S),
                                                                        C = T;
                                                                    A.options.onCreateTextNode && "function" == typeof A.options.onCreateTextNode && (C = A.options.onCreateTextNode(S, T)),
                                                                        C && (x ? x.appendChild(C) : A.state.elements.wrapper.appendChild(C)),
                                                                        (A.state.visibleNodes = [].concat(E(A.state.visibleNodes), [{ type: "TEXT_NODE", character: S, node: C }]));
                                                                    break;
                                                                case l:
                                                                    r.unshift({ eventName: c, eventArgs: { removingCharacterNode: !0 } });
                                                                    break;
                                                                case d:
                                                                    var O = o.eventArgs.ms;
                                                                    A.state.pauseUntil = Date.now() + parseInt(O);
                                                                    break;
                                                                case p:
                                                                    var L = o.eventArgs,
                                                                        P = L.cb,
                                                                        M = L.thisArg;
                                                                    P.call(M, { elements: A.state.elements });
                                                                    break;
                                                                case h:
                                                                    var j = o.eventArgs,
                                                                        k = j.node,
                                                                        R = j.parentNode;
                                                                    R ? R.appendChild(k) : A.state.elements.wrapper.appendChild(k),
                                                                        (A.state.visibleNodes = [].concat(E(A.state.visibleNodes), [{ type: y, node: k, parentNode: R || A.state.elements.wrapper }]));
                                                                    break;
                                                                case u:
                                                                    var D = A.state.visibleNodes,
                                                                        I = _.speed,
                                                                        N = [];
                                                                    I && N.push({ eventName: f, eventArgs: { speed: I, temp: !0 } });
                                                                    for (var F = 0, B = D.length; F < B; F++) N.push({ eventName: c, eventArgs: { removingCharacterNode: !1 } });
                                                                    I && N.push({ eventName: f, eventArgs: { speed: A.options.deleteSpeed, temp: !0 } }), r.unshift.apply(r, N);
                                                                    break;
                                                                case c:
                                                                    var z = o.eventArgs.removingCharacterNode;
                                                                    if (A.state.visibleNodes.length) {
                                                                        var U = A.state.visibleNodes.pop(),
                                                                            W = U.type,
                                                                            H = U.node,
                                                                            Y = U.character;
                                                                        A.options.onRemoveNode && "function" == typeof A.options.onRemoveNode && A.options.onRemoveNode({ node: H, character: Y }),
                                                                            H && H.parentNode.removeChild(H),
                                                                            W === y && z && r.unshift({ eventName: c, eventArgs: {} });
                                                                    }
                                                                    break;
                                                                case f:
                                                                    A.options.deleteSpeed = o.eventArgs.speed;
                                                                    break;
                                                                case m:
                                                                    A.options.delay = o.eventArgs.delay;
                                                                    break;
                                                                case g:
                                                                    (A.options.cursor = o.eventArgs.cursor), (A.state.elements.cursor.innerHTML = o.eventArgs.cursor);
                                                            }
                                                            A.options.loop && (o.eventName === c || (o.eventArgs && o.eventArgs.temp) || (A.state.calledEvents = [].concat(E(A.state.calledEvents), [o]))),
                                                                (A.state.eventQueue = r),
                                                                (A.state.lastFrameTime = e);
                                                        }
                                                    }
                                                }),
                                                e)
                                            ) {
                                                if ("string" == typeof e) {
                                                    var b = document.querySelector(e);
                                                    if (!b) throw Error("Could not find container element");
                                                    this.state.elements.container = b;
                                                } else this.state.elements.container = e;
                                            }
                                            n && (this.options = w(w({}, this.options), n)), (this.state.initialOptions = w({}, this.options)), this.init();
                                        }
                                        return (
                                            (e = [
                                                {
                                                    key: "init",
                                                    value: function () {
                                                        var e;
                                                        this.setupWrapperElement(),
                                                            this.addEventToQueue(g, { cursor: this.options.cursor }, !0),
                                                            this.addEventToQueue(u, null, !0),
                                                            !window ||
                                                                window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                                                                this.options.skipAddStyles ||
                                                                ((e = document.createElement("style")).appendChild(
                                                                    document.createTextNode(
                                                                        ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"
                                                                    )
                                                                ),
                                                                document.head.appendChild(e),
                                                                (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                                                            !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                                                    },
                                                },
                                                {
                                                    key: "logInDevMode",
                                                    value: function (e) {
                                                        this.options.devMode && console.log(e);
                                                    },
                                                },
                                            ]),
                                            (function (e, t) {
                                                for (var n = 0; n < t.length; n++) {
                                                    var r = t[n];
                                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, x(r.key), r);
                                                }
                                            })(t.prototype, e),
                                            Object.defineProperty(t, "prototype", { writable: !1 }),
                                            t
                                        );
                                    })();
                                },
                                8552: (e, t, n) => {
                                    var r = n(852)(n(5639), "DataView");
                                    e.exports = r;
                                },
                                1989: (e, t, n) => {
                                    var r = n(1789),
                                        i = n(401),
                                        o = n(7667),
                                        s = n(1327),
                                        a = n(1866);
                                    function l(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (l.prototype.clear = r), (l.prototype.delete = i), (l.prototype.get = o), (l.prototype.has = s), (l.prototype.set = a), (e.exports = l);
                                },
                                8407: (e, t, n) => {
                                    var r = n(7040),
                                        i = n(4125),
                                        o = n(2117),
                                        s = n(7518),
                                        a = n(4705);
                                    function l(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (l.prototype.clear = r), (l.prototype.delete = i), (l.prototype.get = o), (l.prototype.has = s), (l.prototype.set = a), (e.exports = l);
                                },
                                7071: (e, t, n) => {
                                    var r = n(852)(n(5639), "Map");
                                    e.exports = r;
                                },
                                3369: (e, t, n) => {
                                    var r = n(4785),
                                        i = n(1285),
                                        o = n(6e3),
                                        s = n(9916),
                                        a = n(5265);
                                    function l(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (l.prototype.clear = r), (l.prototype.delete = i), (l.prototype.get = o), (l.prototype.has = s), (l.prototype.set = a), (e.exports = l);
                                },
                                3818: (e, t, n) => {
                                    var r = n(852)(n(5639), "Promise");
                                    e.exports = r;
                                },
                                8525: (e, t, n) => {
                                    var r = n(852)(n(5639), "Set");
                                    e.exports = r;
                                },
                                8668: (e, t, n) => {
                                    var r = n(3369),
                                        i = n(619),
                                        o = n(2385);
                                    function s(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
                                    }
                                    (s.prototype.add = s.prototype.push = i), (s.prototype.has = o), (e.exports = s);
                                },
                                6384: (e, t, n) => {
                                    var r = n(8407),
                                        i = n(7465),
                                        o = n(3779),
                                        s = n(7599),
                                        a = n(4758),
                                        l = n(4309);
                                    function u(e) {
                                        var t = (this.__data__ = new r(e));
                                        this.size = t.size;
                                    }
                                    (u.prototype.clear = i), (u.prototype.delete = o), (u.prototype.get = s), (u.prototype.has = a), (u.prototype.set = l), (e.exports = u);
                                },
                                2705: (e, t, n) => {
                                    var r = n(5639).Symbol;
                                    e.exports = r;
                                },
                                1149: (e, t, n) => {
                                    var r = n(5639).Uint8Array;
                                    e.exports = r;
                                },
                                577: (e, t, n) => {
                                    var r = n(852)(n(5639), "WeakMap");
                                    e.exports = r;
                                },
                                4963: (e) => {
                                    e.exports = function (e, t) {
                                        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                                            var s = e[n];
                                            t(s, n, e) && (o[i++] = s);
                                        }
                                        return o;
                                    };
                                },
                                4636: (e, t, n) => {
                                    var r = n(2545),
                                        i = n(5694),
                                        o = n(1469),
                                        s = n(4144),
                                        a = n(5776),
                                        l = n(6719),
                                        u = Object.prototype.hasOwnProperty;
                                    e.exports = function (e, t) {
                                        var n = o(e),
                                            c = !n && i(e),
                                            d = !n && !c && s(e),
                                            p = !n && !c && !d && l(e),
                                            h = n || c || d || p,
                                            f = h ? r(e.length, String) : [],
                                            m = f.length;
                                        for (var g in e) (!t && !u.call(e, g)) || (h && ("length" == g || (d && ("offset" == g || "parent" == g)) || (p && ("buffer" == g || "byteLength" == g || "byteOffset" == g)) || a(g, m))) || f.push(g);
                                        return f;
                                    };
                                },
                                2488: (e) => {
                                    e.exports = function (e, t) {
                                        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
                                        return e;
                                    };
                                },
                                2908: (e) => {
                                    e.exports = function (e, t) {
                                        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
                                        return !1;
                                    };
                                },
                                8470: (e, t, n) => {
                                    var r = n(7813);
                                    e.exports = function (e, t) {
                                        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
                                        return -1;
                                    };
                                },
                                8866: (e, t, n) => {
                                    var r = n(2488),
                                        i = n(1469);
                                    e.exports = function (e, t, n) {
                                        var o = t(e);
                                        return i(e) ? o : r(o, n(e));
                                    };
                                },
                                4239: (e, t, n) => {
                                    var r = n(2705),
                                        i = n(9607),
                                        o = n(2333),
                                        s = r ? r.toStringTag : void 0;
                                    e.exports = function (e) {
                                        return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : s && s in Object(e) ? i(e) : o(e);
                                    };
                                },
                                9454: (e, t, n) => {
                                    var r = n(4239),
                                        i = n(7005);
                                    e.exports = function (e) {
                                        return i(e) && "[object Arguments]" == r(e);
                                    };
                                },
                                939: (e, t, n) => {
                                    var r = n(2492),
                                        i = n(7005);
                                    e.exports = function e(t, n, o, s, a) {
                                        return t === n || (null != t && null != n && (i(t) || i(n)) ? r(t, n, o, s, e, a) : t != t && n != n);
                                    };
                                },
                                2492: (e, t, n) => {
                                    var r = n(6384),
                                        i = n(7114),
                                        o = n(8351),
                                        s = n(6096),
                                        a = n(4160),
                                        l = n(1469),
                                        u = n(4144),
                                        c = n(6719),
                                        d = "[object Arguments]",
                                        p = "[object Array]",
                                        h = "[object Object]",
                                        f = Object.prototype.hasOwnProperty;
                                    e.exports = function (e, t, n, m, g, v) {
                                        var y = l(e),
                                            A = l(t),
                                            b = y ? p : a(e),
                                            w = A ? p : a(t),
                                            E = (b = b == d ? h : b) == h,
                                            _ = (w = w == d ? h : w) == h,
                                            S = b == w;
                                        if (S && u(e)) {
                                            if (!u(t)) return !1;
                                            (y = !0), (E = !1);
                                        }
                                        if (S && !E) return v || (v = new r()), y || c(e) ? i(e, t, n, m, g, v) : o(e, t, b, n, m, g, v);
                                        if (!(1 & n)) {
                                            var x = E && f.call(e, "__wrapped__"),
                                                T = _ && f.call(t, "__wrapped__");
                                            if (x || T) {
                                                var C = x ? e.value() : e,
                                                    O = T ? t.value() : t;
                                                return v || (v = new r()), g(C, O, n, m, v);
                                            }
                                        }
                                        return !!S && (v || (v = new r()), s(e, t, n, m, g, v));
                                    };
                                },
                                8458: (e, t, n) => {
                                    var r = n(3560),
                                        i = n(5346),
                                        o = n(3218),
                                        s = n(346),
                                        a = /^\[object .+?Constructor\]$/,
                                        l = Object.prototype,
                                        u = Function.prototype.toString,
                                        c = l.hasOwnProperty,
                                        d = RegExp(
                                            "^" +
                                                u
                                                    .call(c)
                                                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                                                "$"
                                        );
                                    e.exports = function (e) {
                                        return !(!o(e) || i(e)) && (r(e) ? d : a).test(s(e));
                                    };
                                },
                                8749: (e, t, n) => {
                                    var r = n(4239),
                                        i = n(1780),
                                        o = n(7005),
                                        s = {};
                                    (s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s[
                                        "[object Uint16Array]"
                                    ] = s["[object Uint32Array]"] = !0),
                                        (s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s[
                                            "[object Map]"
                                        ] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1),
                                        (e.exports = function (e) {
                                            return o(e) && i(e.length) && !!s[r(e)];
                                        });
                                },
                                280: (e, t, n) => {
                                    var r = n(5726),
                                        i = n(6916),
                                        o = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        if (!r(e)) return i(e);
                                        var t = [];
                                        for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                                        return t;
                                    };
                                },
                                2545: (e) => {
                                    e.exports = function (e, t) {
                                        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                                        return r;
                                    };
                                },
                                1717: (e) => {
                                    e.exports = function (e) {
                                        return function (t) {
                                            return e(t);
                                        };
                                    };
                                },
                                4757: (e) => {
                                    e.exports = function (e, t) {
                                        return e.has(t);
                                    };
                                },
                                4429: (e, t, n) => {
                                    var r = n(5639)["__core-js_shared__"];
                                    e.exports = r;
                                },
                                7114: (e, t, n) => {
                                    var r = n(8668),
                                        i = n(2908),
                                        o = n(4757);
                                    e.exports = function (e, t, n, s, a, l) {
                                        var u = 1 & n,
                                            c = e.length,
                                            d = t.length;
                                        if (c != d && !(u && d > c)) return !1;
                                        var p = l.get(e),
                                            h = l.get(t);
                                        if (p && h) return p == t && h == e;
                                        var f = -1,
                                            m = !0,
                                            g = 2 & n ? new r() : void 0;
                                        for (l.set(e, t), l.set(t, e); ++f < c; ) {
                                            var v = e[f],
                                                y = t[f];
                                            if (s) var A = u ? s(y, v, f, t, e, l) : s(v, y, f, e, t, l);
                                            if (void 0 !== A) {
                                                if (A) continue;
                                                m = !1;
                                                break;
                                            }
                                            if (g) {
                                                if (
                                                    !i(t, function (e, t) {
                                                        if (!o(g, t) && (v === e || a(v, e, n, s, l))) return g.push(t);
                                                    })
                                                ) {
                                                    m = !1;
                                                    break;
                                                }
                                            } else if (v !== y && !a(v, y, n, s, l)) {
                                                m = !1;
                                                break;
                                            }
                                        }
                                        return l.delete(e), l.delete(t), m;
                                    };
                                },
                                8351: (e, t, n) => {
                                    var r = n(2705),
                                        i = n(1149),
                                        o = n(7813),
                                        s = n(7114),
                                        a = n(8776),
                                        l = n(1814),
                                        u = r ? r.prototype : void 0,
                                        c = u ? u.valueOf : void 0;
                                    e.exports = function (e, t, n, r, u, d, p) {
                                        switch (n) {
                                            case "[object DataView]":
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                (e = e.buffer), (t = t.buffer);
                                            case "[object ArrayBuffer]":
                                                return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
                                            case "[object Boolean]":
                                            case "[object Date]":
                                            case "[object Number]":
                                                return o(+e, +t);
                                            case "[object Error]":
                                                return e.name == t.name && e.message == t.message;
                                            case "[object RegExp]":
                                            case "[object String]":
                                                return e == t + "";
                                            case "[object Map]":
                                                var h = a;
                                            case "[object Set]":
                                                var f = 1 & r;
                                                if ((h || (h = l), e.size != t.size && !f)) break;
                                                var m = p.get(e);
                                                if (m) return m == t;
                                                (r |= 2), p.set(e, t);
                                                var g = s(h(e), h(t), r, u, d, p);
                                                return p.delete(e), g;
                                            case "[object Symbol]":
                                                if (c) return c.call(e) == c.call(t);
                                        }
                                        return !1;
                                    };
                                },
                                6096: (e, t, n) => {
                                    var r = n(8234),
                                        i = Object.prototype.hasOwnProperty;
                                    e.exports = function (e, t, n, o, s, a) {
                                        var l = 1 & n,
                                            u = r(e),
                                            c = u.length;
                                        if (c != r(t).length && !l) return !1;
                                        for (var d = c; d--; ) {
                                            var p = u[d];
                                            if (!(l ? p in t : i.call(t, p))) return !1;
                                        }
                                        var h = a.get(e),
                                            f = a.get(t);
                                        if (h && f) return h == t && f == e;
                                        var m = !0;
                                        a.set(e, t), a.set(t, e);
                                        for (var g = l; ++d < c; ) {
                                            var v = e[(p = u[d])],
                                                y = t[p];
                                            if (o) var A = l ? o(y, v, p, t, e, a) : o(v, y, p, e, t, a);
                                            if (!(void 0 === A ? v === y || s(v, y, n, o, a) : A)) {
                                                m = !1;
                                                break;
                                            }
                                            g || (g = "constructor" == p);
                                        }
                                        if (m && !g) {
                                            var b = e.constructor,
                                                w = t.constructor;
                                            b == w || !("constructor" in e) || !("constructor" in t) || ("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) || (m = !1);
                                        }
                                        return a.delete(e), a.delete(t), m;
                                    };
                                },
                                1957: (e, t, n) => {
                                    var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                                    e.exports = r;
                                },
                                8234: (e, t, n) => {
                                    var r = n(8866),
                                        i = n(9551),
                                        o = n(3674);
                                    e.exports = function (e) {
                                        return r(e, o, i);
                                    };
                                },
                                5050: (e, t, n) => {
                                    var r = n(7019);
                                    e.exports = function (e, t) {
                                        var n = e.__data__;
                                        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
                                    };
                                },
                                852: (e, t, n) => {
                                    var r = n(8458),
                                        i = n(7801);
                                    e.exports = function (e, t) {
                                        var n = i(e, t);
                                        return r(n) ? n : void 0;
                                    };
                                },
                                9607: (e, t, n) => {
                                    var r = n(2705),
                                        i = Object.prototype,
                                        o = i.hasOwnProperty,
                                        s = i.toString,
                                        a = r ? r.toStringTag : void 0;
                                    e.exports = function (e) {
                                        var t = o.call(e, a),
                                            n = e[a];
                                        try {
                                            e[a] = void 0;
                                            var r = !0;
                                        } catch (e) {}
                                        var i = s.call(e);
                                        return r && (t ? (e[a] = n) : delete e[a]), i;
                                    };
                                },
                                9551: (e, t, n) => {
                                    var r = n(4963),
                                        i = n(479),
                                        o = Object.prototype.propertyIsEnumerable,
                                        s = Object.getOwnPropertySymbols,
                                        a = s
                                            ? function (e) {
                                                  return null == e
                                                      ? []
                                                      : r(s((e = Object(e))), function (t) {
                                                            return o.call(e, t);
                                                        });
                                              }
                                            : i;
                                    e.exports = a;
                                },
                                4160: (e, t, n) => {
                                    var r = n(8552),
                                        i = n(7071),
                                        o = n(3818),
                                        s = n(8525),
                                        a = n(577),
                                        l = n(4239),
                                        u = n(346),
                                        c = "[object Map]",
                                        d = "[object Promise]",
                                        p = "[object Set]",
                                        h = "[object WeakMap]",
                                        f = "[object DataView]",
                                        m = u(r),
                                        g = u(i),
                                        v = u(o),
                                        y = u(s),
                                        A = u(a),
                                        b = l;
                                    ((r && b(new r(new ArrayBuffer(1))) != f) || (i && b(new i()) != c) || (o && b(o.resolve()) != d) || (s && b(new s()) != p) || (a && b(new a()) != h)) &&
                                        (b = function (e) {
                                            var t = l(e),
                                                n = "[object Object]" == t ? e.constructor : void 0,
                                                r = n ? u(n) : "";
                                            if (r)
                                                switch (r) {
                                                    case m:
                                                        return f;
                                                    case g:
                                                        return c;
                                                    case v:
                                                        return d;
                                                    case y:
                                                        return p;
                                                    case A:
                                                        return h;
                                                }
                                            return t;
                                        }),
                                        (e.exports = b);
                                },
                                7801: (e) => {
                                    e.exports = function (e, t) {
                                        return null == e ? void 0 : e[t];
                                    };
                                },
                                1789: (e, t, n) => {
                                    var r = n(4536);
                                    e.exports = function () {
                                        (this.__data__ = r ? r(null) : {}), (this.size = 0);
                                    };
                                },
                                401: (e) => {
                                    e.exports = function (e) {
                                        var t = this.has(e) && delete this.__data__[e];
                                        return (this.size -= t ? 1 : 0), t;
                                    };
                                },
                                7667: (e, t, n) => {
                                    var r = n(4536),
                                        i = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        var t = this.__data__;
                                        if (r) {
                                            var n = t[e];
                                            return "__lodash_hash_undefined__" === n ? void 0 : n;
                                        }
                                        return i.call(t, e) ? t[e] : void 0;
                                    };
                                },
                                1327: (e, t, n) => {
                                    var r = n(4536),
                                        i = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        var t = this.__data__;
                                        return r ? void 0 !== t[e] : i.call(t, e);
                                    };
                                },
                                1866: (e, t, n) => {
                                    var r = n(4536);
                                    e.exports = function (e, t) {
                                        var n = this.__data__;
                                        return (this.size += this.has(e) ? 0 : 1), (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t), this;
                                    };
                                },
                                5776: (e) => {
                                    var t = /^(?:0|[1-9]\d*)$/;
                                    e.exports = function (e, n) {
                                        var r = typeof e;
                                        return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || ("symbol" != r && t.test(e))) && e > -1 && e % 1 == 0 && e < n;
                                    };
                                },
                                7019: (e) => {
                                    e.exports = function (e) {
                                        var t = typeof e;
                                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
                                    };
                                },
                                5346: (e, t, n) => {
                                    var r,
                                        i = n(4429),
                                        o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
                                    e.exports = function (e) {
                                        return !!o && o in e;
                                    };
                                },
                                5726: (e) => {
                                    var t = Object.prototype;
                                    e.exports = function (e) {
                                        var n = e && e.constructor;
                                        return e === (("function" == typeof n && n.prototype) || t);
                                    };
                                },
                                7040: (e) => {
                                    e.exports = function () {
                                        (this.__data__ = []), (this.size = 0);
                                    };
                                },
                                4125: (e, t, n) => {
                                    var r = n(8470),
                                        i = Array.prototype.splice;
                                    e.exports = function (e) {
                                        var t = this.__data__,
                                            n = r(t, e);
                                        return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
                                    };
                                },
                                2117: (e, t, n) => {
                                    var r = n(8470);
                                    e.exports = function (e) {
                                        var t = this.__data__,
                                            n = r(t, e);
                                        return n < 0 ? void 0 : t[n][1];
                                    };
                                },
                                7518: (e, t, n) => {
                                    var r = n(8470);
                                    e.exports = function (e) {
                                        return r(this.__data__, e) > -1;
                                    };
                                },
                                4705: (e, t, n) => {
                                    var r = n(8470);
                                    e.exports = function (e, t) {
                                        var n = this.__data__,
                                            i = r(n, e);
                                        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
                                    };
                                },
                                4785: (e, t, n) => {
                                    var r = n(1989),
                                        i = n(8407),
                                        o = n(7071);
                                    e.exports = function () {
                                        (this.size = 0), (this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() });
                                    };
                                },
                                1285: (e, t, n) => {
                                    var r = n(5050);
                                    e.exports = function (e) {
                                        var t = r(this, e).delete(e);
                                        return (this.size -= t ? 1 : 0), t;
                                    };
                                },
                                6e3: (e, t, n) => {
                                    var r = n(5050);
                                    e.exports = function (e) {
                                        return r(this, e).get(e);
                                    };
                                },
                                9916: (e, t, n) => {
                                    var r = n(5050);
                                    e.exports = function (e) {
                                        return r(this, e).has(e);
                                    };
                                },
                                5265: (e, t, n) => {
                                    var r = n(5050);
                                    e.exports = function (e, t) {
                                        var n = r(this, e),
                                            i = n.size;
                                        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
                                    };
                                },
                                8776: (e) => {
                                    e.exports = function (e) {
                                        var t = -1,
                                            n = Array(e.size);
                                        return (
                                            e.forEach(function (e, r) {
                                                n[++t] = [r, e];
                                            }),
                                            n
                                        );
                                    };
                                },
                                4536: (e, t, n) => {
                                    var r = n(852)(Object, "create");
                                    e.exports = r;
                                },
                                6916: (e, t, n) => {
                                    var r = n(5569)(Object.keys, Object);
                                    e.exports = r;
                                },
                                1167: (e, t, n) => {
                                    e = n.nmd(e);
                                    var r = n(1957),
                                        i = t && !t.nodeType && t,
                                        o = i && e && !e.nodeType && e,
                                        s = o && o.exports === i && r.process,
                                        a = (function () {
                                            try {
                                                return (o && o.require && o.require("util").types) || (s && s.binding && s.binding("util"));
                                            } catch (e) {}
                                        })();
                                    e.exports = a;
                                },
                                2333: (e) => {
                                    var t = Object.prototype.toString;
                                    e.exports = function (e) {
                                        return t.call(e);
                                    };
                                },
                                5569: (e) => {
                                    e.exports = function (e, t) {
                                        return function (n) {
                                            return e(t(n));
                                        };
                                    };
                                },
                                5639: (e, t, n) => {
                                    var r = n(1957),
                                        i = "object" == typeof self && self && self.Object === Object && self,
                                        o = r || i || Function("return this")();
                                    e.exports = o;
                                },
                                619: (e) => {
                                    e.exports = function (e) {
                                        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
                                    };
                                },
                                2385: (e) => {
                                    e.exports = function (e) {
                                        return this.__data__.has(e);
                                    };
                                },
                                1814: (e) => {
                                    e.exports = function (e) {
                                        var t = -1,
                                            n = Array(e.size);
                                        return (
                                            e.forEach(function (e) {
                                                n[++t] = e;
                                            }),
                                            n
                                        );
                                    };
                                },
                                7465: (e, t, n) => {
                                    var r = n(8407);
                                    e.exports = function () {
                                        (this.__data__ = new r()), (this.size = 0);
                                    };
                                },
                                3779: (e) => {
                                    e.exports = function (e) {
                                        var t = this.__data__,
                                            n = t.delete(e);
                                        return (this.size = t.size), n;
                                    };
                                },
                                7599: (e) => {
                                    e.exports = function (e) {
                                        return this.__data__.get(e);
                                    };
                                },
                                4758: (e) => {
                                    e.exports = function (e) {
                                        return this.__data__.has(e);
                                    };
                                },
                                4309: (e, t, n) => {
                                    var r = n(8407),
                                        i = n(7071),
                                        o = n(3369);
                                    e.exports = function (e, t) {
                                        var n = this.__data__;
                                        if (n instanceof r) {
                                            var s = n.__data__;
                                            if (!i || s.length < 199) return s.push([e, t]), (this.size = ++n.size), this;
                                            n = this.__data__ = new o(s);
                                        }
                                        return n.set(e, t), (this.size = n.size), this;
                                    };
                                },
                                346: (e) => {
                                    var t = Function.prototype.toString;
                                    e.exports = function (e) {
                                        if (null != e) {
                                            try {
                                                return t.call(e);
                                            } catch (e) {}
                                            try {
                                                return e + "";
                                            } catch (e) {}
                                        }
                                        return "";
                                    };
                                },
                                7813: (e) => {
                                    e.exports = function (e, t) {
                                        return e === t || (e != e && t != t);
                                    };
                                },
                                5694: (e, t, n) => {
                                    var r = n(9454),
                                        i = n(7005),
                                        o = Object.prototype,
                                        s = o.hasOwnProperty,
                                        a = o.propertyIsEnumerable,
                                        l = r(
                                            (function () {
                                                return arguments;
                                            })()
                                        )
                                            ? r
                                            : function (e) {
                                                  return i(e) && s.call(e, "callee") && !a.call(e, "callee");
                                              };
                                    e.exports = l;
                                },
                                1469: (e) => {
                                    var t = Array.isArray;
                                    e.exports = t;
                                },
                                8612: (e, t, n) => {
                                    var r = n(3560),
                                        i = n(1780);
                                    e.exports = function (e) {
                                        return null != e && i(e.length) && !r(e);
                                    };
                                },
                                4144: (e, t, n) => {
                                    e = n.nmd(e);
                                    var r = n(5639),
                                        i = n(5062),
                                        o = t && !t.nodeType && t,
                                        s = o && e && !e.nodeType && e,
                                        a = s && s.exports === o ? r.Buffer : void 0,
                                        l = (a ? a.isBuffer : void 0) || i;
                                    e.exports = l;
                                },
                                8446: (e, t, n) => {
                                    var r = n(939);
                                    e.exports = function (e, t) {
                                        return r(e, t);
                                    };
                                },
                                3560: (e, t, n) => {
                                    var r = n(4239),
                                        i = n(3218);
                                    e.exports = function (e) {
                                        if (!i(e)) return !1;
                                        var t = r(e);
                                        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
                                    };
                                },
                                1780: (e) => {
                                    e.exports = function (e) {
                                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                                    };
                                },
                                3218: (e) => {
                                    e.exports = function (e) {
                                        var t = typeof e;
                                        return null != e && ("object" == t || "function" == t);
                                    };
                                },
                                7005: (e) => {
                                    e.exports = function (e) {
                                        return null != e && "object" == typeof e;
                                    };
                                },
                                6719: (e, t, n) => {
                                    var r = n(8749),
                                        i = n(1717),
                                        o = n(1167),
                                        s = o && o.isTypedArray,
                                        a = s ? i(s) : r;
                                    e.exports = a;
                                },
                                3674: (e, t, n) => {
                                    var r = n(4636),
                                        i = n(280),
                                        o = n(8612);
                                    e.exports = function (e) {
                                        return o(e) ? r(e) : i(e);
                                    };
                                },
                                479: (e) => {
                                    e.exports = function () {
                                        return [];
                                    };
                                },
                                5062: (e) => {
                                    e.exports = function () {
                                        return !1;
                                    };
                                },
                                75: function (e) {
                                    (function () {
                                        var t, n, r, o;
                                        "undefined" != typeof performance && null !== performance && performance.now
                                            ? (e.exports = function () {
                                                  return performance.now();
                                              })
                                            : null != i && i.hrtime
                                            ? ((e.exports = function () {
                                                  return (t() - o) / 1e6;
                                              }),
                                              (n = i.hrtime),
                                              (o =
                                                  (t = function () {
                                                      var e;
                                                      return 1e9 * (e = n())[0] + e[1];
                                                  })() -
                                                  1e9 * i.uptime()))
                                            : Date.now
                                            ? ((e.exports = function () {
                                                  return Date.now() - r;
                                              }),
                                              (r = Date.now()))
                                            : ((e.exports = function () {
                                                  return new Date().getTime() - r;
                                              }),
                                              (r = new Date().getTime()));
                                    }.call(this));
                                },
                                4087: (e, t, n) => {
                                    for (
                                        var r = n(75), i = "undefined" == typeof window ? n.g : window, o = ["moz", "webkit"], s = "AnimationFrame", a = i["request" + s], l = i["cancel" + s] || i["cancelRequest" + s], u = 0;
                                        !a && u < o.length;
                                        u++
                                    )
                                        (a = i[o[u] + "Request" + s]), (l = i[o[u] + "Cancel" + s] || i[o[u] + "CancelRequest" + s]);
                                    if (!a || !l) {
                                        var c = 0,
                                            d = 0,
                                            p = [];
                                        (a = function (e) {
                                            if (0 === p.length) {
                                                var t = r(),
                                                    n = Math.max(0, 16.666666666666668 - (t - c));
                                                (c = n + t),
                                                    setTimeout(function () {
                                                        var e = p.slice(0);
                                                        p.length = 0;
                                                        for (var t = 0; t < e.length; t++)
                                                            if (!e[t].cancelled)
                                                                try {
                                                                    e[t].callback(c);
                                                                } catch (e) {
                                                                    setTimeout(function () {
                                                                        throw e;
                                                                    }, 0);
                                                                }
                                                    }, Math.round(n));
                                            }
                                            return p.push({ handle: ++d, callback: e, cancelled: !1 }), d;
                                        }),
                                            (l = function (e) {
                                                for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0);
                                            });
                                    }
                                    (e.exports = function (e) {
                                        return a.call(i, e);
                                    }),
                                        (e.exports.cancel = function () {
                                            l.apply(i, arguments);
                                        }),
                                        (e.exports.polyfill = function (e) {
                                            e || (e = i), (e.requestAnimationFrame = a), (e.cancelAnimationFrame = l);
                                        });
                                },
                                8156: (e) => {
                                    "use strict";
                                    e.exports = r;
                                },
                            },
                            t = {};
                        function n(r) {
                            var i = t[r];
                            if (void 0 !== i) return i.exports;
                            var o = (t[r] = { id: r, loaded: !1, exports: {} });
                            return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
                        }
                        (n.n = (e) => {
                            var t = e && e.__esModule ? () => e.default : () => e;
                            return n.d(t, { a: t }), t;
                        }),
                            (n.d = (e, t) => {
                                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                            }),
                            (n.g = (function () {
                                if ("object" == typeof globalThis) return globalThis;
                                try {
                                    return this || Function("return this")();
                                } catch (e) {
                                    if ("object" == typeof window) return window;
                                }
                            })()),
                            (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                            (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
                        var o = {};
                        return (
                            (() => {
                                "use strict";
                                n.d(o, { default: () => h });
                                var e = n(8156),
                                    t = n.n(e),
                                    r = n(7403),
                                    i = n(8446),
                                    s = n.n(i);
                                function a(e) {
                                    return (a =
                                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                            ? function (e) {
                                                  return typeof e;
                                              }
                                            : function (e) {
                                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                              })(e);
                                }
                                function l(e, t) {
                                    return (l = Object.setPrototypeOf
                                        ? Object.setPrototypeOf.bind()
                                        : function (e, t) {
                                              return (e.__proto__ = t), e;
                                          })(e, t);
                                }
                                function u(e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }
                                function c(e) {
                                    return (c = Object.setPrototypeOf
                                        ? Object.getPrototypeOf.bind()
                                        : function (e) {
                                              return e.__proto__ || Object.getPrototypeOf(e);
                                          })(e);
                                }
                                function d(e) {
                                    var t = (function (e, t) {
                                        if ("object" !== a(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var r = n.call(e, "string");
                                            if ("object" !== a(r)) return r;
                                            throw TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return String(e);
                                    })(e);
                                    return "symbol" === a(t) ? t : String(t);
                                }
                                var p = (function (e) {
                                    !(function (e, t) {
                                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                                    })(p, e);
                                    var n,
                                        i,
                                        o =
                                            ((i = (function () {
                                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                                if ("function" == typeof Proxy) return !0;
                                                try {
                                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                                } catch (e) {
                                                    return !1;
                                                }
                                            })()),
                                            function () {
                                                var e,
                                                    t = c(p);
                                                if (i) {
                                                    var n = c(this).constructor;
                                                    e = Reflect.construct(t, arguments, n);
                                                } else e = t.apply(this, arguments);
                                                return (function (e, t) {
                                                    if (t && ("object" === a(t) || "function" == typeof t)) return t;
                                                    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                                    return u(e);
                                                })(this, e);
                                            });
                                    function p() {
                                        var e, t, n, r;
                                        !(function (e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                        })(this, p);
                                        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                                        return (
                                            (t = u((e = o.call.apply(o, [this].concat(s))))),
                                            (r = { instance: null }),
                                            (n = d((n = "state"))) in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r),
                                            e
                                        );
                                    }
                                    return (
                                        (n = [
                                            {
                                                key: "componentDidMount",
                                                value: function () {
                                                    var e = this,
                                                        t = new r.default(this.typewriter, this.props.options);
                                                    this.setState({ instance: t }, function () {
                                                        var n = e.props.onInit;
                                                        n && n(t);
                                                    });
                                                },
                                            },
                                            {
                                                key: "componentDidUpdate",
                                                value: function (e) {
                                                    s()(this.props.options, e.options) || this.setState({ instance: new r.default(this.typewriter, this.props.options) });
                                                },
                                            },
                                            {
                                                key: "componentWillUnmount",
                                                value: function () {
                                                    this.state.instance && this.state.instance.stop();
                                                },
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    var e = this,
                                                        n = this.props.component;
                                                    return t().createElement(n, {
                                                        ref: function (t) {
                                                            return (e.typewriter = t);
                                                        },
                                                        className: "Typewriter",
                                                        "data-testid": "typewriter-wrapper",
                                                    });
                                                },
                                            },
                                        ]),
                                        (function (e, t) {
                                            for (var n = 0; n < t.length; n++) {
                                                var r = t[n];
                                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, d(r.key), r);
                                            }
                                        })(p.prototype, n),
                                        Object.defineProperty(p, "prototype", { writable: !1 }),
                                        p
                                    );
                                })(e.Component);
                                p.defaultProps = { component: "div" };
                                let h = p;
                            })(),
                            o.default
                        );
                    })()));
        },
        689: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return $;
                },
            });
            var r,
                i,
                o,
                s,
                a,
                l,
                u,
                c,
                d = n(7294),
                p = n.t(d, 2);
            function h(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r;
                }
                let r = Error(
                    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t)
                        .map((e) => `"${e}"`)
                        .join(", ")}.`
                );
                throw (Error.captureStackTrace && Error.captureStackTrace(r, h), r);
            }
            function f(...e) {
                return Array.from(new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))))
                    .filter(Boolean)
                    .join(" ");
            }
            var m = (((r = m || {})[(r.None = 0)] = "None"), (r[(r.RenderStrategy = 1)] = "RenderStrategy"), (r[(r.Static = 2)] = "Static"), r),
                g = (((i = g || {})[(i.Unmount = 0)] = "Unmount"), (i[(i.Hidden = 1)] = "Hidden"), i);
            function v({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: o = !0, name: s }) {
                let a = A(t, e);
                if (o) return y(a, n, r, s);
                let l = null != i ? i : 0;
                if (2 & l) {
                    let { static: e = !1, ...t } = a;
                    if (e) return y(t, n, r, s);
                }
                if (1 & l) {
                    let { unmount: e = !0, ...t } = a;
                    return h(e ? 0 : 1, { 0: () => null, 1: () => y({ ...t, hidden: !0, style: { display: "none" } }, n, r, s) });
                }
                return y(a, n, r, s);
            }
            function y(e, t = {}, n, r) {
                let { as: i = n, children: o, refName: s = "ref", ...a } = E(e, ["unmount", "static"]),
                    l = void 0 !== e.ref ? { [s]: e.ref } : {},
                    u = "function" == typeof o ? o(t) : o;
                "className" in a && a.className && "function" == typeof a.className && (a.className = a.className(t));
                let c = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
                    e && (c["data-headlessui-state"] = n.join(" "));
                }
                if (i === d.Fragment && Object.keys(w(a)).length > 0) {
                    if (!(0, d.isValidElement)(u) || (Array.isArray(u) && u.length > 1))
                        throw Error(
                            [
                                'Passing props on "Fragment"!',
                                "",
                                `The current component <${r} /> is rendering a "Fragment".`,
                                "However we need to passthrough the following props:",
                                Object.keys(a).map((e) => `  - ${e}`).join(`
`),
                                "",
                                "You can apply a few solutions:",
                                ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(
                                    (e) => `  - ${e}`
                                ).join(`
`),
                            ].join(`
`)
                        );
                    let e = u.props,
                        t = "function" == typeof (null == e ? void 0 : e.className) ? (...t) => f(null == e ? void 0 : e.className(...t), a.className) : f(null == e ? void 0 : e.className, a.className);
                    return (0, d.cloneElement)(
                        u,
                        Object.assign(
                            {},
                            A(u.props, w(E(a, ["ref"]))),
                            c,
                            l,
                            (function (...e) {
                                return {
                                    ref: e.every((e) => null == e)
                                        ? void 0
                                        : (t) => {
                                              for (let n of e) null != n && ("function" == typeof n ? n(t) : (n.current = t));
                                          },
                                };
                            })(u.ref, l.ref),
                            t ? { className: t } : {}
                        )
                    );
                }
                return (0, d.createElement)(i, Object.assign({}, E(a, ["ref"]), i !== d.Fragment && l, i !== d.Fragment && c), u);
            }
            function A(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e) for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : (t[e] = r[e]);
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])));
                for (let e in n)
                    Object.assign(t, {
                        [e](t, ...r) {
                            for (let i of n[e]) {
                                if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                                i(t, ...r);
                            }
                        },
                    });
                return t;
            }
            function b(e) {
                var t;
                return Object.assign((0, d.forwardRef)(e), { displayName: null != (t = e.displayName) ? t : e.name });
            }
            function w(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t;
            }
            function E(e, t = []) {
                let n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n;
            }
            var _ = Object.defineProperty,
                S = (e, t, n) => (t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
                x = (e, t, n) => (S(e, "symbol" != typeof t ? t + "" : t, n), n);
            let T = new (class {
                    constructor() {
                        x(this, "current", this.detect()), x(this, "handoffState", "pending"), x(this, "currentId", 0);
                    }
                    set(e) {
                        this.current !== e && ((this.handoffState = "pending"), (this.currentId = 0), (this.current = e));
                    }
                    reset() {
                        this.set(this.detect());
                    }
                    nextId() {
                        return ++this.currentId;
                    }
                    get isServer() {
                        return "server" === this.current;
                    }
                    get isClient() {
                        return "client" === this.current;
                    }
                    detect() {
                        return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client";
                    }
                    handoff() {
                        "pending" === this.handoffState && (this.handoffState = "complete");
                    }
                    get isHandoffComplete() {
                        return "complete" === this.handoffState;
                    }
                })(),
                C = (e, t) => {
                    T.isServer ? (0, d.useEffect)(e, t) : (0, d.useLayoutEffect)(e, t);
                },
                O = function (e) {
                    let t;
                    let n =
                        ((t = (0, d.useRef)(e)),
                        C(() => {
                            t.current = e;
                        }, [e]),
                        t);
                    return d.useCallback((...e) => n.current(...e), [n]);
                },
                L = Symbol();
            function P(...e) {
                let t = (0, d.useRef)(e);
                (0, d.useEffect)(() => {
                    t.current = e;
                }, [e]);
                let n = O((e) => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : (n.current = e));
                });
                return e.every((e) => null == e || (null == e ? void 0 : e[L])) ? void 0 : n;
            }
            let M =
                null != (u = d.useId)
                    ? u
                    : function () {
                          let e = (function () {
                                  let e;
                                  let t =
                                          ((e = "undefined" == typeof document),
                                          (0, p.useSyncExternalStore)(
                                              () => () => {},
                                              () => !1,
                                              () => !e
                                          )),
                                      [n, r] = d.useState(T.isHandoffComplete);
                                  return (
                                      n && !1 === T.isHandoffComplete && r(!1),
                                      d.useEffect(() => {
                                          !0 !== n && r(!0);
                                      }, [n]),
                                      d.useEffect(() => T.handoff(), []),
                                      !t && n
                                  );
                              })(),
                              [t, n] = d.useState(e ? () => T.nextId() : null);
                          return (
                              C(() => {
                                  null === t && n(T.nextId());
                              }, [t]),
                              null != t ? "" + t : void 0
                          );
                      };
            var j =
                (((o = j || {}).Space = " "),
                (o.Enter = "Enter"),
                (o.Escape = "Escape"),
                (o.Backspace = "Backspace"),
                (o.Delete = "Delete"),
                (o.ArrowLeft = "ArrowLeft"),
                (o.ArrowUp = "ArrowUp"),
                (o.ArrowRight = "ArrowRight"),
                (o.ArrowDown = "ArrowDown"),
                (o.Home = "Home"),
                (o.End = "End"),
                (o.PageUp = "PageUp"),
                (o.PageDown = "PageDown"),
                (o.Tab = "Tab"),
                o);
            let k = (0, d.createContext)(null);
            k.displayName = "OpenClosedContext";
            var R = (((s = R || {})[(s.Open = 1)] = "Open"), (s[(s.Closed = 2)] = "Closed"), (s[(s.Closing = 4)] = "Closing"), (s[(s.Opening = 8)] = "Opening"), s);
            function D({ value: e, children: t }) {
                return d.createElement(k.Provider, { value: e }, t);
            }
            function I(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button";
            }
            let N =
                null != (c = d.startTransition)
                    ? c
                    : function (e) {
                          e();
                      };
            var F = (((a = F || {})[(a.Open = 0)] = "Open"), (a[(a.Closed = 1)] = "Closed"), a),
                B =
                    (((l = B || {})[(l.ToggleDisclosure = 0)] = "ToggleDisclosure"),
                    (l[(l.CloseDisclosure = 1)] = "CloseDisclosure"),
                    (l[(l.SetButtonId = 2)] = "SetButtonId"),
                    (l[(l.SetPanelId = 3)] = "SetPanelId"),
                    (l[(l.LinkPanel = 4)] = "LinkPanel"),
                    (l[(l.UnlinkPanel = 5)] = "UnlinkPanel"),
                    l);
            let z = {
                    0: (e) => ({ ...e, disclosureState: h(e.disclosureState, { 0: 1, 1: 0 }) }),
                    1: (e) => (1 === e.disclosureState ? e : { ...e, disclosureState: 1 }),
                    4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
                    5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
                    2: (e, t) => (e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId }),
                    3: (e, t) => (e.panelId === t.panelId ? e : { ...e, panelId: t.panelId }),
                },
                U = (0, d.createContext)(null);
            function W(e) {
                let t = (0, d.useContext)(U);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw (Error.captureStackTrace && Error.captureStackTrace(t, W), t);
                }
                return t;
            }
            U.displayName = "DisclosureContext";
            let H = (0, d.createContext)(null);
            H.displayName = "DisclosureAPIContext";
            let Y = (0, d.createContext)(null);
            function V(e, t) {
                return h(t.type, z, e, t);
            }
            Y.displayName = "DisclosurePanelContext";
            let X = d.Fragment,
                Q = m.RenderStrategy | m.Static,
                $ = Object.assign(
                    b(function (e, t) {
                        let { defaultOpen: n = !1, ...r } = e,
                            i = (0, d.useRef)(null),
                            o = P(
                                t,
                                (function (e, t = !0) {
                                    return Object.assign(e, { [L]: t });
                                })((e) => {
                                    i.current = e;
                                }, void 0 === e.as || e.as === d.Fragment)
                            ),
                            s = (0, d.useRef)(null),
                            a = (0, d.useRef)(null),
                            l = (0, d.useReducer)(V, { disclosureState: n ? 0 : 1, linkedPanel: !1, buttonRef: a, panelRef: s, buttonId: null, panelId: null }),
                            [{ disclosureState: u, buttonId: c }, p] = l,
                            f = O((e) => {
                                p({ type: 1 });
                                let t = T.isServer ? null : i instanceof Node ? i.ownerDocument : null != i && i.hasOwnProperty("current") && i.current instanceof Node ? i.current.ownerDocument : document;
                                if (!t || !c) return;
                                let n = e ? (e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(c)) : t.getElementById(c);
                                null == n || n.focus();
                            }),
                            m = (0, d.useMemo)(() => ({ close: f }), [f]),
                            g = (0, d.useMemo)(() => ({ open: 0 === u, close: f }), [u, f]);
                        return d.createElement(
                            U.Provider,
                            { value: l },
                            d.createElement(H.Provider, { value: m }, d.createElement(D, { value: h(u, { 0: R.Open, 1: R.Closed }) }, v({ ourProps: { ref: o }, theirProps: r, slot: g, defaultTag: X, name: "Disclosure" })))
                        );
                    }),
                    {
                        Button: b(function (e, t) {
                            let n = M(),
                                { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
                                [o, s] = W("Disclosure.Button"),
                                a = (0, d.useContext)(Y),
                                l = null !== a && a === o.panelId,
                                u = (0, d.useRef)(null),
                                c = P(u, t, l ? null : o.buttonRef);
                            (0, d.useEffect)(() => {
                                if (!l)
                                    return (
                                        s({ type: 2, buttonId: r }),
                                        () => {
                                            s({ type: 2, buttonId: null });
                                        }
                                    );
                            }, [r, s, l]);
                            let p = O((e) => {
                                    var t;
                                    if (l) {
                                        if (1 === o.disclosureState) return;
                                        switch (e.key) {
                                            case j.Space:
                                            case j.Enter:
                                                e.preventDefault(), e.stopPropagation(), s({ type: 0 }), null == (t = o.buttonRef.current) || t.focus();
                                        }
                                    } else
                                        switch (e.key) {
                                            case j.Space:
                                            case j.Enter:
                                                e.preventDefault(), e.stopPropagation(), s({ type: 0 });
                                        }
                                }),
                                h = O((e) => {
                                    e.key === j.Space && e.preventDefault();
                                }),
                                f = O((t) => {
                                    var n;
                                    (function (e) {
                                        let t = e.parentElement,
                                            n = null;
                                        for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
                                        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                        return (
                                            !(
                                                r &&
                                                (function (e) {
                                                    if (!e) return !1;
                                                    let t = e.previousElementSibling;
                                                    for (; null !== t; ) {
                                                        if (t instanceof HTMLLegendElement) return !1;
                                                        t = t.previousElementSibling;
                                                    }
                                                    return !0;
                                                })(n)
                                            ) && r
                                        );
                                    })(t.currentTarget) ||
                                        e.disabled ||
                                        (l ? (s({ type: 0 }), null == (n = o.buttonRef.current) || n.focus()) : s({ type: 0 }));
                                }),
                                m = (0, d.useMemo)(() => ({ open: 0 === o.disclosureState }), [o]),
                                g = (function (e, t) {
                                    let [n, r] = (0, d.useState)(() => I(e));
                                    return (
                                        C(() => {
                                            r(I(e));
                                        }, [e.type, e.as]),
                                        C(() => {
                                            n || (t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button"));
                                        }, [n, t]),
                                        n
                                    );
                                })(e, u);
                            return v({
                                ourProps: l
                                    ? { ref: c, type: g, onKeyDown: p, onClick: f }
                                    : { ref: c, id: r, type: g, "aria-expanded": 0 === o.disclosureState, "aria-controls": o.linkedPanel ? o.panelId : void 0, onKeyDown: p, onKeyUp: h, onClick: f },
                                theirProps: i,
                                slot: m,
                                defaultTag: "button",
                                name: "Disclosure.Button",
                            });
                        }),
                        Panel: b(function (e, t) {
                            let n = M(),
                                { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
                                [o, s] = W("Disclosure.Panel"),
                                { close: a } = (function e(t) {
                                    let n = (0, d.useContext)(H);
                                    if (null === n) {
                                        let n = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
                                        throw (Error.captureStackTrace && Error.captureStackTrace(n, e), n);
                                    }
                                    return n;
                                })("Disclosure.Panel"),
                                l = P(t, o.panelRef, (e) => {
                                    N(() => s({ type: e ? 4 : 5 }));
                                });
                            (0, d.useEffect)(
                                () => (
                                    s({ type: 3, panelId: r }),
                                    () => {
                                        s({ type: 3, panelId: null });
                                    }
                                ),
                                [r, s]
                            );
                            let u = (0, d.useContext)(k),
                                c = null !== u ? (u & R.Open) === R.Open : 0 === o.disclosureState,
                                p = (0, d.useMemo)(() => ({ open: 0 === o.disclosureState, close: a }), [o, a]);
                            return d.createElement(Y.Provider, { value: o.panelId }, v({ ourProps: { ref: l, id: r }, theirProps: i, slot: p, defaultTag: "div", features: Q, visible: c, name: "Disclosure.Panel" }));
                        }),
                    }
                );
        },
        1562: function (e, t, n) {
            "use strict";
            function r(e) {
                let t,
                    n,
                    r,
                    i = (e && e.colors) || ["#D61C59", "#E7D84B", "#1B8798"],
                    o = e && e.element,
                    s = o || document.body,
                    a = window.innerWidth,
                    l = window.innerHeight,
                    u = { x: a / 2, y: a / 2 },
                    c = { x: a / 2, y: a / 2 },
                    d = [],
                    p = [],
                    h = window.matchMedia("(prefers-reduced-motion: reduce)");
                function f() {
                    if (h.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    (n = (t = document.createElement("canvas")).getContext("2d")),
                        (t.style.top = "0px"),
                        (t.style.left = "0px"),
                        (t.style.pointerEvents = "none"),
                        o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), s.appendChild(t), (t.width = a), (t.height = l)),
                        (n.font = "21px serif"),
                        (n.textBaseline = "middle"),
                        (n.textAlign = "center"),
                        i.forEach((e) => {
                            let t = n.measureText("*"),
                                r = document.createElement("canvas"),
                                i = r.getContext("2d");
                            (r.width = t.width),
                                (r.height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent),
                                (i.fillStyle = e),
                                (i.textAlign = "center"),
                                (i.font = "21px serif"),
                                (i.textBaseline = "middle"),
                                i.fillText("*", r.width / 2, t.actualBoundingBoxAscent),
                                p.push(r);
                        }),
                        s.addEventListener("mousemove", v),
                        s.addEventListener("touchmove", g, { passive: !0 }),
                        s.addEventListener("touchstart", g, { passive: !0 }),
                        window.addEventListener("resize", m),
                        (function e() {
                            (function () {
                                if (0 != d.length) {
                                    n.clearRect(0, 0, a, l);
                                    for (let e = 0; e < d.length; e++) d[e].update(n);
                                    for (let e = d.length - 1; e >= 0; e--) d[e].lifeSpan < 0 && d.splice(e, 1);
                                    0 == d.length && n.clearRect(0, 0, a, l);
                                }
                            })(),
                                (r = requestAnimationFrame(e));
                        })();
                }
                function m(e) {
                    (a = window.innerWidth), (l = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = a), (t.height = l));
                }
                function g(e) {
                    if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) y(e.touches[t].clientX, e.touches[t].clientY, p[Math.floor(Math.random() * p.length)]);
                }
                function v(e) {
                    window.requestAnimationFrame(() => {
                        if (o) {
                            let t = s.getBoundingClientRect();
                            (u.x = e.clientX - t.left), (u.y = e.clientY - t.top);
                        } else (u.x = e.clientX), (u.y = e.clientY);
                        Math.hypot(u.x - c.x, u.y - c.y) > 1.5 && (y(u.x, u.y, p[Math.floor(Math.random() * i.length)]), (c.x = u.x), (c.y = u.y));
                    });
                }
                function y(e, t, n) {
                    d.push(new b(e, t, n));
                }
                function A() {
                    t.remove(), cancelAnimationFrame(r), s.removeEventListener("mousemove", v), s.removeEventListener("touchmove", g), s.removeEventListener("touchstart", g), window.addEventListener("resize", m);
                }
                function b(e, t, n) {
                    let r = Math.floor(30 * Math.random() + 60);
                    (this.initialLifeSpan = r),
                        (this.lifeSpan = r),
                        (this.velocity = { x: (0.5 > Math.random() ? -1 : 1) * (Math.random() / 2), y: 0.7 * Math.random() + 0.9 }),
                        (this.position = { x: e, y: t }),
                        (this.canv = n),
                        (this.update = function (e) {
                            (this.position.x += this.velocity.x), (this.position.y += this.velocity.y), this.lifeSpan--, (this.velocity.y += 0.02);
                            let t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                            e.drawImage(this.canv, this.position.x - (this.canv.width / 2) * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t);
                        });
                }
                return (
                    (h.onchange = () => {
                        h.matches ? A() : f();
                    }),
                    f(),
                    { destroy: A }
                );
            }
            function i(e) {
                let t,
                    n,
                    r,
                    i = e && e.element,
                    o = i || document.body,
                    s = window.innerWidth,
                    a = window.innerHeight,
                    l = { x: s / 2, y: s / 2 },
                    u = [],
                    c = e?.particles || 15,
                    d = e?.rate || 0.4,
                    p =
                        e?.baseImageSrc ||
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==",
                    h = !1,
                    f = new Image();
                f.src = p;
                let m = window.matchMedia("(prefers-reduced-motion: reduce)");
                function g() {
                    if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    (n = (t = document.createElement("canvas")).getContext("2d")),
                        (t.style.top = "0px"),
                        (t.style.left = "0px"),
                        (t.style.pointerEvents = "none"),
                        i ? ((t.style.position = "absolute"), o.appendChild(t), (t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = s), (t.height = a)),
                        o.addEventListener("mousemove", y),
                        window.addEventListener("resize", v),
                        (function e() {
                            let t, i;
                            n.clearRect(0, 0, s, a),
                                (t = l.x),
                                (i = l.y),
                                u.forEach(function (e, r, o) {
                                    let s = o[r + 1] || o[0];
                                    (e.position.x = t), (e.position.y = i), e.move(n), (t += (s.position.x - e.position.x) * d), (i += (s.position.y - e.position.y) * d);
                                }),
                                (r = requestAnimationFrame(e));
                        })();
                }
                function v(e) {
                    (s = window.innerWidth), (a = window.innerHeight), i ? ((t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.width = s), (t.height = a));
                }
                function y(e) {
                    var t, n;
                    if (i) {
                        let t = o.getBoundingClientRect();
                        (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
                    } else (l.x = e.clientX), (l.y = e.clientY);
                    if (!1 === h) {
                        h = !0;
                        for (let e = 0; e < c; e++) (t = l.x), (n = l.y), u.push(new b(t, n, f));
                    }
                }
                function A() {
                    t.remove(), cancelAnimationFrame(r), o.removeEventListener("mousemove", y), window.addEventListener("resize", v);
                }
                function b(e, t, n) {
                    (this.position = { x: e, y: t }),
                        (this.image = n),
                        (this.move = function (e) {
                            e.drawImage(this.image, this.position.x, this.position.y);
                        });
                }
                return (
                    (m.onchange = () => {
                        m.matches ? A() : g();
                    }),
                    g(),
                    { destroy: A }
                );
            }
            function o(e) {
                let t,
                    n,
                    r = e && e.element,
                    i = r || document.body,
                    o = window.innerWidth,
                    s = window.innerHeight,
                    a = { x: o / 2, y: o / 2 },
                    l = new (function (e, t, n, r) {
                        (this.position = { x: e, y: t }),
                            (this.width = n),
                            (this.lag = r),
                            (this.moveTowards = function (e, t, n) {
                                (this.position.x += (e - this.position.x) / this.lag),
                                    (this.position.y += (t - this.position.y) / this.lag),
                                    (n.fillStyle = u),
                                    n.beginPath(),
                                    n.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI),
                                    n.fill(),
                                    n.closePath();
                            });
                    })(o / 2, s / 2, 10, 10),
                    u = e?.color || "#323232a6",
                    c = window.matchMedia("(prefers-reduced-motion: reduce)");
                function d() {
                    if (c.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    (n = (t = document.createElement("canvas")).getContext("2d")),
                        (t.style.top = "0px"),
                        (t.style.left = "0px"),
                        (t.style.pointerEvents = "none"),
                        r ? ((t.style.position = "absolute"), i.appendChild(t), (t.width = i.clientWidth), (t.height = i.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = o), (t.height = s)),
                        i.addEventListener("mousemove", h),
                        window.addEventListener("resize", p),
                        f();
                }
                function p(e) {
                    (o = window.innerWidth), (s = window.innerHeight), r ? ((t.width = i.clientWidth), (t.height = i.clientHeight)) : ((t.width = o), (t.height = s));
                }
                function h(e) {
                    if (r) {
                        let t = i.getBoundingClientRect();
                        (a.x = e.clientX - t.left), (a.y = e.clientY - t.top);
                    } else (a.x = e.clientX), (a.y = e.clientY);
                }
                function f() {
                    n.clearRect(0, 0, o, s), l.moveTowards(a.x, a.y, n), requestAnimationFrame(f);
                }
                function m() {
                    t.remove(), cancelAnimationFrame(f), i.removeEventListener("mousemove", h), window.addEventListener("resize", p);
                }
                return (
                    (c.onchange = () => {
                        c.matches ? m() : d();
                    }),
                    d(),
                    { destroy: m }
                );
            }
            function s(e) {
                let t,
                    n,
                    r,
                    i = e && e.element,
                    o = i || document.body,
                    s = e && e.randomDelay,
                    a = (e && e.minDelay) || 5,
                    l = (e && e.maxDelay) || 50,
                    u = window.innerWidth,
                    c = window.innerHeight,
                    d = { x: u / 2, y: u / 2 },
                    p = [],
                    h = new Image();
                e && e.image
                    ? (h.src = e.image)
                    : (h.src =
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==");
                let f = window.matchMedia("(prefers-reduced-motion: reduce)");
                function m() {
                    if (f.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
                    (n = (t = document.createElement("canvas")).getContext("2d")),
                        (t.style.top = "0px"),
                        (t.style.left = "0px"),
                        (t.style.pointerEvents = "none"),
                        i ? ((t.style.position = "absolute"), o.appendChild(t), (t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = u), (t.height = c)),
                        o.addEventListener("mousemove", w),
                        o.addEventListener("touchmove", v, { passive: !0 }),
                        o.addEventListener("touchstart", v, { passive: !0 }),
                        window.addEventListener("resize", g),
                        (function e() {
                            (function () {
                                if (0 != p.length) {
                                    n.clearRect(0, 0, u, c);
                                    for (let e = 0; e < p.length; e++) p[e].update(n);
                                    for (let e = p.length - 1; e >= 0; e--) p[e].lifeSpan < 0 && p.splice(e, 1);
                                    0 == p.length && n.clearRect(0, 0, u, c);
                                }
                            })(),
                                (r = requestAnimationFrame(e));
                        })();
                }
                function g(e) {
                    (u = window.innerWidth), (c = window.innerHeight), i ? ((t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.width = u), (t.height = c));
                }
                function v(e) {
                    if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) E(e.touches[t].clientX, e.touches[t].clientY, h);
                }
                f.onchange = () => {
                    f.matches ? _() : m();
                };
                let y = () => Math.floor(Math.random() * (l - a + 1)) + a,
                    A = Date.now(),
                    b = y();
                function w(e) {
                    if (s) {
                        if (A + b > Date.now()) return;
                        (A = Date.now()), (b = y());
                    }
                    if (i) {
                        let t = o.getBoundingClientRect();
                        (d.x = e.clientX - t.left), (d.y = e.clientY - t.top);
                    } else (d.x = e.clientX), (d.y = e.clientY);
                    E(d.x, d.y, h);
                }
                function E(e, t, n) {
                    p.push(new S(e, t, n));
                }
                function _() {
                    t.remove(), cancelAnimationFrame(r), o.removeEventListener("mousemove", w), o.removeEventListener("touchmove", v), o.removeEventListener("touchstart", v), window.addEventListener("resize", g);
                }
                function S(e, t, n) {
                    (this.initialLifeSpan = 40),
                        (this.lifeSpan = 40),
                        (this.position = { x: e, y: t }),
                        (this.image = n),
                        (this.update = function (e) {
                            this.lifeSpan--;
                            let t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                            (e.globalAlpha = t), e.drawImage(this.image, this.position.x, this.position.y);
                        });
                }
                return m(), { destroy: _ };
            }
            n.d(t, {
                $N: function () {
                    return s;
                },
                Y2: function () {
                    return o;
                },
                f4: function () {
                    return r;
                },
                n8: function () {
                    return i;
                },
            });
        },
        6825: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return u;
                },
            });
            var r = n(7294);
            "function" == typeof SuppressedError && SuppressedError;
            let i = (e, t, n, r) => {
                    e.style.transition = `${t} ${n}ms ${r}`;
                },
                o = (e, t, n) => Math.min(Math.max(e, t), n);
            class s {
                constructor(e, t) {
                    (this.glareAngle = 0),
                        (this.glareOpacity = 0),
                        (this.calculateGlareSize = (e) => {
                            let { width: t, height: n } = e,
                                r = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2));
                            return { width: r, height: r };
                        }),
                        (this.setSize = (e) => {
                            let t = this.calculateGlareSize(e);
                            (this.glareEl.style.width = `${t.width}px`), (this.glareEl.style.height = `${t.height}px`);
                        }),
                        (this.update = (e, t, n, r) => {
                            this.updateAngle(e, t.glareReverse), this.updateOpacity(e, t, n, r);
                        }),
                        (this.updateAngle = (e, t) => {
                            let { xPercentage: n, yPercentage: r } = e;
                            this.glareAngle = (n ? Math.atan2(r, -n) * (180 / Math.PI) : 0) - (t ? 180 : 0);
                        }),
                        (this.updateOpacity = (e, t, n, r) => {
                            let { xPercentage: i, yPercentage: s } = e,
                                { glarePosition: a, glareReverse: l, glareMaxOpacity: u } = t,
                                c = n ? -1 : 1,
                                d = r ? -1 : 1,
                                p = l ? -1 : 1,
                                h = 0;
                            switch (a) {
                                case "top":
                                    h = -i * c * p;
                                    break;
                                case "right":
                                    h = s * d * p;
                                    break;
                                case "bottom":
                                case void 0:
                                    h = i * c * p;
                                    break;
                                case "left":
                                    h = -s * d * p;
                                    break;
                                case "all":
                                    h = Math.hypot(i, s);
                            }
                            let f = o(h, 0, 100);
                            this.glareOpacity = (f * u) / 100;
                        }),
                        (this.render = (e) => {
                            let { glareColor: t } = e;
                            (this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`),
                                (this.glareEl.style.opacity = this.glareOpacity.toString()),
                                (this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`);
                        }),
                        (this.glareWrapperEl = document.createElement("div")),
                        (this.glareEl = document.createElement("div")),
                        this.glareWrapperEl.appendChild(this.glareEl),
                        (this.glareWrapperEl.className = "glare-wrapper"),
                        (this.glareEl.className = "glare");
                    let n = this.calculateGlareSize(e),
                        r = { position: "absolute", top: "50%", left: "50%", transformOrigin: "0% 0%", pointerEvents: "none", width: `${n.width}px`, height: `${n.height}px` };
                    Object.assign(this.glareWrapperEl.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: t,
                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        pointerEvents: "none",
                    }),
                        Object.assign(this.glareEl.style, r);
                }
            }
            class a {
                constructor() {
                    (this.glareAngle = 0),
                        (this.glareOpacity = 0),
                        (this.tiltAngleX = 0),
                        (this.tiltAngleY = 0),
                        (this.tiltAngleXPercentage = 0),
                        (this.tiltAngleYPercentage = 0),
                        (this.update = (e, t) => {
                            this.updateTilt(e, t), this.updateTiltManualInput(e, t), this.updateTiltReverse(t), this.updateTiltLimits(t);
                        }),
                        (this.updateTilt = (e, t) => {
                            let { xPercentage: n, yPercentage: r } = e,
                                { tiltMaxAngleX: i, tiltMaxAngleY: o } = t;
                            (this.tiltAngleX = (n * i) / 100), (this.tiltAngleY = -(((r * o) / 100) * 1));
                        }),
                        (this.updateTiltManualInput = (e, t) => {
                            let { tiltAngleXManual: n, tiltAngleYManual: r, tiltMaxAngleX: i, tiltMaxAngleY: o } = t;
                            (null !== n || null !== r) && ((this.tiltAngleX = null !== n ? n : 0), (this.tiltAngleY = null !== r ? r : 0), (e.xPercentage = (100 * this.tiltAngleX) / i), (e.yPercentage = (100 * this.tiltAngleY) / o));
                        }),
                        (this.updateTiltReverse = (e) => {
                            let t = e.tiltReverse ? -1 : 1;
                            (this.tiltAngleX = t * this.tiltAngleX), (this.tiltAngleY = t * this.tiltAngleY);
                        }),
                        (this.updateTiltLimits = (e) => {
                            let { tiltAxis: t } = e;
                            (this.tiltAngleX = o(this.tiltAngleX, -90, 90)), (this.tiltAngleY = o(this.tiltAngleY, -90, 90)), t && ((this.tiltAngleX = "x" === t ? this.tiltAngleX : 0), (this.tiltAngleY = "y" === t ? this.tiltAngleY : 0));
                        }),
                        (this.updateTiltAnglesPercentage = (e) => {
                            let { tiltMaxAngleX: t, tiltMaxAngleY: n } = e;
                            (this.tiltAngleXPercentage = (this.tiltAngleX / t) * 100), (this.tiltAngleYPercentage = (this.tiltAngleY / n) * 100);
                        }),
                        (this.render = (e) => {
                            e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
                        });
                }
            }
            let l = Object.assign(
                Object.assign(
                    { scale: 1, perspective: 1e3, flipVertically: !1, flipHorizontally: !1, reset: !0, transitionEasing: "cubic-bezier(.03,.98,.52,.99)", transitionSpeed: 400, trackOnWindow: !1, gyroscope: !1 },
                    { tiltEnable: !0, tiltReverse: !1, tiltAngleXInitial: 0, tiltAngleYInitial: 0, tiltMaxAngleX: 20, tiltMaxAngleY: 20, tiltAxis: void 0, tiltAngleXManual: null, tiltAngleYManual: null }
                ),
                { glareEnable: !1, glareMaxOpacity: 0.7, glareColor: "#ffffff", glarePosition: "bottom", glareReverse: !1, glareBorderRadius: "0" }
            );
            class u extends r.PureComponent {
                constructor() {
                    super(...arguments),
                        (this.wrapperEl = { node: null, size: { width: 0, height: 0, left: 0, top: 0 }, clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 }, updateAnimationId: null, scale: 1 }),
                        (this.tilt = null),
                        (this.glare = null),
                        (this.addDeviceOrientationEventListener = () => {
                            var e, t, n, r;
                            return (
                                (e = this),
                                (t = void 0),
                                (n = void 0),
                                (r = function* () {
                                    if (!window.DeviceOrientationEvent) return;
                                    let e = DeviceOrientationEvent.requestPermission;
                                    "function" == typeof e ? "granted" === (yield e()) && window.addEventListener("deviceorientation", this.onMove) : window.addEventListener("deviceorientation", this.onMove);
                                }),
                                new (n || (n = Promise))(function (i, o) {
                                    function s(e) {
                                        try {
                                            l(r.next(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function a(e) {
                                        try {
                                            l(r.throw(e));
                                        } catch (e) {
                                            o(e);
                                        }
                                    }
                                    function l(e) {
                                        var t;
                                        e.done
                                            ? i(e.value)
                                            : ((t = e.value) instanceof n
                                                  ? t
                                                  : new n(function (e) {
                                                        e(t);
                                                    })
                                              ).then(s, a);
                                    }
                                    l((r = r.apply(e, t || [])).next());
                                })
                            );
                        }),
                        (this.setSize = () => {
                            this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size);
                        }),
                        (this.mainLoop = (e) => {
                            null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                                this.processInput(e),
                                this.update(e.type),
                                (this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame));
                        }),
                        (this.onEnter = (e) => {
                            let { onEnter: t } = this.props;
                            this.setSize(), (this.wrapperEl.node.style.willChange = "transform"), this.setTransitions(), t && t(e.type);
                        }),
                        (this.onMove = (e) => {
                            this.mainLoop(e), this.emitOnMove(e);
                        }),
                        (this.onLeave = (e) => {
                            let { onLeave: t } = this.props;
                            if ((this.setTransitions(), t && t(e.type), this.props.reset)) {
                                let e = new CustomEvent("autoreset");
                                this.onMove(e);
                            }
                        }),
                        (this.processInput = (e) => {
                            let { scale: t } = this.props;
                            switch (e.type) {
                                case "mousemove":
                                    (this.wrapperEl.clientPosition.x = e.pageX), (this.wrapperEl.clientPosition.y = e.pageY), (this.wrapperEl.scale = t);
                                    break;
                                case "touchmove":
                                    (this.wrapperEl.clientPosition.x = e.touches[0].pageX), (this.wrapperEl.clientPosition.y = e.touches[0].pageY), (this.wrapperEl.scale = t);
                                    break;
                                case "deviceorientation":
                                    this.processInputDeviceOrientation(e), (this.wrapperEl.scale = t);
                                    break;
                                case "autoreset":
                                    let { tiltAngleXInitial: n, tiltAngleYInitial: r, tiltMaxAngleX: i, tiltMaxAngleY: s } = this.props;
                                    (this.wrapperEl.clientPosition.xPercentage = o((n / i) * 100, -100, 100)), (this.wrapperEl.clientPosition.yPercentage = o((r / s) * 100, -100, 100)), (this.wrapperEl.scale = 1);
                            }
                        }),
                        (this.processInputDeviceOrientation = (e) => {
                            if (!e.gamma || !e.beta || !this.props.gyroscope) return;
                            let { tiltMaxAngleX: t, tiltMaxAngleY: n } = this.props,
                                r = e.gamma;
                            (this.wrapperEl.clientPosition.xPercentage = (e.beta / t) * 100),
                                (this.wrapperEl.clientPosition.yPercentage = (r / n) * 100),
                                (this.wrapperEl.clientPosition.xPercentage = o(this.wrapperEl.clientPosition.xPercentage, -100, 100)),
                                (this.wrapperEl.clientPosition.yPercentage = o(this.wrapperEl.clientPosition.yPercentage, -100, 100));
                        }),
                        (this.update = (e) => {
                            let { tiltEnable: t, flipVertically: n, flipHorizontally: r } = this.props;
                            "autoreset" !== e && "deviceorientation" !== e && "propChange" !== e && this.updateClientInput(),
                                t && this.tilt.update(this.wrapperEl.clientPosition, this.props),
                                this.updateFlip(),
                                this.tilt.updateTiltAnglesPercentage(this.props),
                                this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, n, r);
                        }),
                        (this.updateClientInput = () => {
                            let e, t;
                            let { trackOnWindow: n } = this.props;
                            if (n) {
                                let { x: n, y: r } = this.wrapperEl.clientPosition;
                                (e = (r / window.innerHeight) * 200 - 100), (t = (n / window.innerWidth) * 200 - 100);
                            } else {
                                let {
                                    size: { width: n, height: r, left: i, top: o },
                                    clientPosition: { x: s, y: a },
                                } = this.wrapperEl;
                                (e = ((a - o) / r) * 200 - 100), (t = ((s - i) / n) * 200 - 100);
                            }
                            (this.wrapperEl.clientPosition.xPercentage = o(e, -100, 100)), (this.wrapperEl.clientPosition.yPercentage = o(t, -100, 100));
                        }),
                        (this.updateFlip = () => {
                            let { flipVertically: e, flipHorizontally: t } = this.props;
                            e && ((this.tilt.tiltAngleX += 180), (this.tilt.tiltAngleY *= -1)), t && (this.tilt.tiltAngleY += 180);
                        }),
                        (this.renderFrame = () => {
                            this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props);
                        });
                }
                componentDidMount() {
                    if (((this.tilt = new a()), this.initGlare(), this.addEventListeners(), "undefined" == typeof CustomEvent)) return;
                    let e = new CustomEvent("autoreset");
                    this.mainLoop(e);
                    let t = new CustomEvent("initial");
                    this.emitOnMove(t);
                }
                componentWillUnmount() {
                    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners();
                }
                componentDidUpdate() {
                    let e = new CustomEvent("propChange");
                    this.mainLoop(e), this.emitOnMove(e);
                }
                addEventListeners() {
                    let { trackOnWindow: e, gyroscope: t } = this.props;
                    window.addEventListener("resize", this.setSize),
                        e &&
                            (window.addEventListener("mouseenter", this.onEnter),
                            window.addEventListener("mousemove", this.onMove),
                            window.addEventListener("mouseout", this.onLeave),
                            window.addEventListener("touchstart", this.onEnter),
                            window.addEventListener("touchmove", this.onMove),
                            window.addEventListener("touchend", this.onLeave)),
                        t && this.addDeviceOrientationEventListener();
                }
                removeEventListeners() {
                    let { trackOnWindow: e, gyroscope: t } = this.props;
                    window.removeEventListener("resize", this.setSize),
                        e &&
                            (window.removeEventListener("mouseenter", this.onEnter),
                            window.removeEventListener("mousemove", this.onMove),
                            window.removeEventListener("mouseout", this.onLeave),
                            window.removeEventListener("touchstart", this.onEnter),
                            window.removeEventListener("touchmove", this.onMove),
                            window.removeEventListener("touchend", this.onLeave)),
                        t && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove);
                }
                setWrapperElSize() {
                    let e = this.wrapperEl.node.getBoundingClientRect();
                    (this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth),
                        (this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight),
                        (this.wrapperEl.size.left = e.left + window.scrollX),
                        (this.wrapperEl.size.top = e.top + window.scrollY);
                }
                initGlare() {
                    let { glareEnable: e, glareBorderRadius: t } = this.props;
                    e && ((this.glare = new s(this.wrapperEl.size, t)), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
                }
                emitOnMove(e) {
                    let { onMove: t } = this.props;
                    if (!t) return;
                    let n = 0,
                        r = 0;
                    this.glare && ((n = this.glare.glareAngle), (r = this.glare.glareOpacity)),
                        t({
                            tiltAngleX: this.tilt.tiltAngleX,
                            tiltAngleY: this.tilt.tiltAngleY,
                            tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
                            tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
                            glareAngle: n,
                            glareOpacity: r,
                            eventType: e.type,
                        });
                }
                resetWrapperElTransform() {
                    this.wrapperEl.node.style.transform = "";
                }
                renderPerspective() {
                    let { perspective: e } = this.props;
                    this.wrapperEl.node.style.transform += `perspective(${e}px) `;
                }
                renderScale() {
                    let { scale: e } = this.wrapperEl;
                    this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`;
                }
                setTransitions() {
                    let { transitionSpeed: e, transitionEasing: t } = this.props;
                    i(this.wrapperEl.node, "all", e, t), this.glare && i(this.glare.glareEl, "opacity", e, t);
                }
                render() {
                    let { children: e, className: t, style: n } = this.props;
                    return r.createElement(
                        "div",
                        {
                            ref: (e) => (this.wrapperEl.node = e),
                            onMouseEnter: this.onEnter,
                            onMouseMove: this.onMove,
                            onMouseLeave: this.onLeave,
                            onTouchStart: this.onEnter,
                            onTouchMove: this.onMove,
                            onTouchEnd: this.onLeave,
                            className: t,
                            style: n,
                        },
                        e
                    );
                }
            }
            u.defaultProps = l;
        },
    },
]);
