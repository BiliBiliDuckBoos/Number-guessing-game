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
                            justifyContent: "flex-start",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#e3f2fd",
                            paddingTop: "20px"
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
                                "content"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "85%",
                            marginBottom: "25px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-item"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            marginBottom: "18px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-label"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#000000",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-value"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#a5d6a7",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "support-section"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "support-text"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#000000",
                            textAlign: "center",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "payment-container"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "payment-image"
                            ]
                        ],
                        {
                            width: "80px",
                            height: "80px",
                            marginTop: "0",
                            marginRight: "10px",
                            marginBottom: "0",
                            marginLeft: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-btn"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "36px",
                            backgroundColor: "#a5d6a7",
                            borderRadius: "18px",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-text"
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
                        goBack () {
                            _system.default.back();
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
                                    value: "关于"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "content"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-label"
                                        ],
                                        value: "作者"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-value"
                                        ],
                                        value: "B站DuckBoos 李社海"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-label"
                                        ],
                                        value: "游戏版本"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-value"
                                        ],
                                        value: "1.0.0测试版"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "support-section"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "support-text"
                                        ],
                                        value: "-致力打造免费与优质软件-"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "support-text"
                                        ],
                                        value: "若您喜欢这款游戏，能否赞赏一下作者，给我点个关注也行啊 (≧o≦)"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "payment-container"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "payment-image"
                                            ],
                                            src: "/common/wx.png",
                                            style: {
                                                width: "80px",
                                                height: "80px"
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "payment-image"
                                            ],
                                            src: "/common/zfb.png",
                                            style: {
                                                width: "80px",
                                                height: "80px"
                                            }
                                        }
                                    }, [])
                                ])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "back-btn"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.goBack(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "back-text"
                                    ],
                                    value: "返回"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGFib3V0XFxhYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+eMnOaVsOa4uOaIjy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v54yc5pWw5ri45oiPL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+eMnOaVsOa4uOaIjy9zcmMvcGFnZXMvYWJvdXQvYWJvdXQudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4wXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZS10ZXh0XCI+5YWz5LqOPC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPuS9nOiAhTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXZhbHVlXCI+QuermUR1Y2tCb29zIOadjuekvua1tzwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tbGFiZWxcIj7muLjmiI/niYjmnKw8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPjEuMC4w5rWL6K+V54mIPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VwcG9ydC1zZWN0aW9uXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3VwcG9ydC10ZXh0XCI+LeiHtOWKm+aJk+mAoOWFjei0ueS4juS8mOi0qOi9r+S7ti08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic3VwcG9ydC10ZXh0XCI+6Iul5oKo5Zac5qyi6L+Z5qy+5ri45oiP77yM6IO95ZCm6LWe6LWP5LiA5LiL5L2c6ICF77yM57uZ5oiR54K55Liq5YWz5rOo5Lmf6KGM5ZWKICAgKOKJp2/iiaYpPC90ZXh0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJwYXltZW50LWltYWdlXCIgc3JjPVwiL2NvbW1vbi93eC5wbmdcIiBzdHlsZT1cIndpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XCI+PC9pbWFnZT5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJwYXltZW50LWltYWdlXCIgc3JjPVwiL2NvbW1vbi96ZmIucG5nXCIgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1wiPjwvaW1hZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJhY2stYnRuXCIgb25jbGljaz1cImdvQmFja1wiPlxuICAgICAgPHRleHQgY2xhc3M9XCJiYWNrLXRleHRcIj7ov5Tlm548L3RleHQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZ29CYWNrKCkge1xuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC50aXRsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC5pbmZvLWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuXG4gIC5pbmZvLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgLmluZm8tdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI2E1ZDZhNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5zdXBwb3J0LXNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLnBheW1lbnQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5wYXltZW50LWltYWdlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAuYmFjay1idG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDZhNztcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuYmFjay10ZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDOEJ6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBbUMsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXBCO3dCQUNiRzs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO29CQUNGIn0=