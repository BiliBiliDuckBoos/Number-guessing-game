export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.0";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.0";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "container"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#e3f2fd",
                            paddingTop: "20px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            marginBottom: "25px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title-text"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mode-list"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "90%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mode-item"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "65px",
                            backgroundColor: "#ffffff",
                            borderRadius: "15px",
                            marginBottom: "15px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mode-name"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mode-desc"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#a5d6a7",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mode-chances"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#000000",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "about-btn"
                            ]
                        ],
                        {
                            width: "110px",
                            height: "38px",
                            backgroundColor: "#a5d6a7",
                            borderRadius: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "about-text"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#000000"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            gameModes: {
                                easy: {
                                    min: 0,
                                    max: 50,
                                    chances: 30
                                },
                                normal: {
                                    min: 0,
                                    max: 50,
                                    chances: 20
                                },
                                hard: {
                                    min: 0,
                                    max: 100,
                                    chances: 10
                                },
                                hell: {
                                    min: 0,
                                    max: 250,
                                    chances: 10
                                }
                            }
                        },
                        selectMode (mode) {
                            const modeConfig = this.gameModes[mode];
                            _system.default.push({
                                uri: 'pages/game',
                                params: {
                                    mode: mode,
                                    min: modeConfig.min,
                                    max: modeConfig.max,
                                    chances: modeConfig.chances
                                }
                            });
                        },
                        goToAbout () {
                            _system.default.push({
                                uri: 'pages/about'
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "container"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title-text"
                                    ],
                                    value: "猜数游戏"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "mode-list"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "mode-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectMode("easy", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-name"
                                        ],
                                        value: "简单模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-desc"
                                        ],
                                        value: "0~50"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-chances"
                                        ],
                                        value: "30次机会"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "mode-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectMode("normal", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-name"
                                        ],
                                        value: "普通模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-desc"
                                        ],
                                        value: "0~50"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-chances"
                                        ],
                                        value: "20次机会"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "mode-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectMode("hard", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-name"
                                        ],
                                        value: "困难模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-desc"
                                        ],
                                        value: "0~100"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-chances"
                                        ],
                                        value: "10次机会"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "mode-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectMode("hell", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-name"
                                        ],
                                        value: "地狱模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-desc"
                                        ],
                                        value: "0~250"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mode-chances"
                                        ],
                                        value: "10次机会"
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "about-btn"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.goToAbout(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "about-text"
                                    ],
                                    value: "关于"
                                }
                            }, [])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXHNlbGVjdC1tb2RlXFxzZWxlY3QtbW9kZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+eMnOaVsOa4uOaIjy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v54yc5pWw5ri45oiPL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+eMnOaVsOa4uOaIjy9zcmMvcGFnZXMvc2VsZWN0LW1vZGUvc2VsZWN0LW1vZGUudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4wXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZS10ZXh0XCI+54yc5pWw5ri45oiPPC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb2RlLWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RlLWl0ZW1cIiBvbmNsaWNrPVwic2VsZWN0TW9kZSgnZWFzeScpXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1uYW1lXCI+566A5Y2V5qih5byPPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vZGUtZGVzY1wiPjB+NTA8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1jaGFuY2VzXCI+MzDmrKHmnLrkvJo8L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RlLWl0ZW1cIiBvbmNsaWNrPVwic2VsZWN0TW9kZSgnbm9ybWFsJylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtb2RlLW5hbWVcIj7mma7pgJrmqKHlvI88L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1kZXNjXCI+MH41MDwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtb2RlLWNoYW5jZXNcIj4yMOasoeacuuS8mjwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGUtaXRlbVwiIG9uY2xpY2s9XCJzZWxlY3RNb2RlKCdoYXJkJylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtb2RlLW5hbWVcIj7lm7Dpmr7mqKHlvI88L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1kZXNjXCI+MH4xMDA8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1jaGFuY2VzXCI+MTDmrKHmnLrkvJo8L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RlLWl0ZW1cIiBvbmNsaWNrPVwic2VsZWN0TW9kZSgnaGVsbCcpXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kZS1uYW1lXCI+5Zyw54ux5qih5byPPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vZGUtZGVzY1wiPjB+MjUwPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1vZGUtY2hhbmNlc1wiPjEw5qyh5py65LyaPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFib3V0LWJ0blwiIG9uY2xpY2s9XCJnb1RvQWJvdXRcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiYWJvdXQtdGV4dFwiPuWFs+S6jjwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcml2YXRlOiB7XG4gICAgICBnYW1lTW9kZXM6IHtcbiAgICAgICAgZWFzeTogeyBtaW46IDAsIG1heDogNTAsIGNoYW5jZXM6IDMwIH0sXG4gICAgICAgIG5vcm1hbDogeyBtaW46IDAsIG1heDogNTAsIGNoYW5jZXM6IDIwIH0sXG4gICAgICAgIGhhcmQ6IHsgbWluOiAwLCBtYXg6IDEwMCwgY2hhbmNlczogMTAgfSxcbiAgICAgICAgaGVsbDogeyBtaW46IDAsIG1heDogMjUwLCBjaGFuY2VzOiAxMCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3RNb2RlKG1vZGUpIHtcbiAgICAgIGNvbnN0IG1vZGVDb25maWcgPSB0aGlzLmdhbWVNb2Rlc1ttb2RlXVxuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICB1cmk6ICdwYWdlcy9nYW1lJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICBtaW46IG1vZGVDb25maWcubWluLFxuICAgICAgICAgIG1heDogbW9kZUNvbmZpZy5tYXgsXG4gICAgICAgICAgY2hhbmNlczogbW9kZUNvbmZpZy5jaGFuY2VzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBnb1RvQWJvdXQoKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHVyaTogJ3BhZ2VzL2Fib3V0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG5cbiAgLnRpdGxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuXG4gIC5tb2RlLWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLm1vZGUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5tb2RlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5tb2RlLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI2E1ZDZhNztcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuICAubW9kZS1jaGFuY2VzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgLmFib3V0LWJ0biB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkNmE3O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmFib3V0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsImdhbWVNb2RlcyIsImVhc3kiLCJtaW4iLCJtYXgiLCJjaGFuY2VzIiwibm9ybWFsIiwiaGFyZCIsImhlbGwiLCJzZWxlY3RNb2RlIiwibW9kZSIsIm1vZGVDb25maWciLCJyb3V0ZXIiLCJwdXNoIiwidXJpIiwicGFyYW1zIiwiZ29Ub0Fib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNrQ3pCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFcEI7d0JBQ2JHLFNBQVM7NEJBQ1BDLFdBQVc7Z0NBQ1RDLE1BQU07b0NBQUVDLEtBQUs7b0NBQUdDLEtBQUs7b0NBQUlDLFNBQVM7Z0NBQUc7Z0NBQ3JDQyxRQUFRO29DQUFFSCxLQUFLO29DQUFHQyxLQUFLO29DQUFJQyxTQUFTO2dDQUFHO2dDQUN2Q0UsTUFBTTtvQ0FBRUosS0FBSztvQ0FBR0MsS0FBSztvQ0FBS0MsU0FBUztnQ0FBRztnQ0FDdENHLE1BQU07b0NBQUVMLEtBQUs7b0NBQUdDLEtBQUs7b0NBQUtDLFNBQVM7Z0NBQUc7NEJBQ3hDO3dCQUNGO3dCQUNBSSxZQUFXQyxJQUFJOzRCQUNiLE1BQU1DLGFBQWEsSUFBSSxDQUFDVixTQUFTLENBQUNTLEtBQUs7NEJBQ3ZDRSxRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FDVkMsS0FBSztnQ0FDTEMsUUFBUTtvQ0FDTkwsTUFBTUE7b0NBQ05QLEtBQUtRLFdBQVdSLEdBQUc7b0NBQ25CQyxLQUFLTyxXQUFXUCxHQUFHO29DQUNuQkMsU0FBU00sV0FBV04sT0FBTztnQ0FDN0I7NEJBQ0Y7d0JBQ0Y7d0JBQ0FXOzRCQUNFSixRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FDVkMsS0FBSzs0QkFDUDt3QkFDRjtvQkFDRiJ9