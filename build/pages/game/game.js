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
                            paddingTop: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-section"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center"
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
                            marginRight: "5px"
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
                                "display-section"
                            ]
                        ],
                        {
                            width: "85%",
                            height: "45px",
                            backgroundColor: "#ffffff",
                            borderRadius: "15px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "display-text"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "message-section"
                            ]
                        ],
                        {
                            width: "90%",
                            height: "35px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "message-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#000000",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "keypad"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "keypad-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "key"
                            ]
                        ],
                        {
                            width: "52px",
                            height: "42px",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "6px",
                            marginRight: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "key-text"
                            ]
                        ],
                        {
                            fontSize: "19px",
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "clear-key"
                            ]
                        ],
                        {
                            backgroundColor: "#a5d6a7"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "submit-key"
                            ]
                        ],
                        {
                            backgroundColor: "#a5d6a7"
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
                        private: {
                            min: 0,
                            max: 50,
                            chances: 30,
                            input: '',
                            message: '请输入数字',
                            targetNumber: 0,
                            gameOver: false
                        },
                        onInit () {
                            this.min = Number(this.min);
                            this.max = Number(this.max);
                            this.chances = Number(this.chances);
                            this.targetNumber = Math.floor(Math.random() * (this.max + 1));
                            this.gameOver = false;
                            this.input = '';
                            this.message = '请输入数字';
                        },
                        pressKey (key) {
                            if (this.gameOver) return;
                            if (this.input.length < 4) this.input = this.input + key;
                        },
                        clearInput () {
                            if (this.gameOver) return;
                            this.input = '';
                        },
                        checkGuess () {
                            if (this.gameOver) return;
                            if ('' === this.input) {
                                this.message = '请输入数字';
                                return;
                            }
                            const guess = Number(this.input);
                            if (guess < this.min || guess > this.max) {
                                this.message = `请输入${this.min}~${this.max}之间的数字`;
                                this.input = '';
                                return;
                            }
                            if (guess === this.targetNumber) {
                                this.message = '恭喜你猜对了！';
                                this.gameOver = true;
                            } else if (guess < this.targetNumber) {
                                this.chances = this.chances - 1;
                                if (this.chances <= 0) {
                                    this.message = `游戏结束！正确答案是${this.targetNumber}`;
                                    this.gameOver = true;
                                } else {
                                    this.message = '小了';
                                    this.input = '';
                                }
                            } else {
                                this.chances = this.chances - 1;
                                if (this.chances <= 0) {
                                    this.message = `游戏结束！正确答案是${this.targetNumber}`;
                                    this.gameOver = true;
                                } else {
                                    this.message = '大了';
                                    this.input = '';
                                }
                            }
                        },
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
                                    "info-section"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-label"
                                        ],
                                        value: "范围:"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-value"
                                        ],
                                        value: function() {
                                            return _vm_.min + "~" + _vm_.max;
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "info-section"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-label"
                                        ],
                                        value: "剩余:"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "info-value"
                                        ],
                                        value: function() {
                                            return _vm_.chances + "次";
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "display-section"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "display-text"
                                    ],
                                    value: function() {
                                        return _vm_.input;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "message-section"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "message-text"
                                    ],
                                    value: function() {
                                        return _vm_.message;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "keypad"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "keypad-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("7", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "7"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("8", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "8"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("9", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "9"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "keypad-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("4", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "4"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("5", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "5"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("6", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "6"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "keypad-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("1", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "1"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("2", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "2"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("3", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "3"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "keypad-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key",
                                            "clear-key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.clearInput(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "C"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.pressKey("0", evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "0"
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "key",
                                            "submit-key"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.checkGuess(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "key-text"
                                            ],
                                            value: "确定"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGdhbWVcXGdhbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/njJzmlbDmuLjmiI8vd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL+eMnOaVsOa4uOaIjy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly/njJzmlbDmuLjmiI8vc3JjL3BhZ2VzL2dhbWUvZ2FtZS51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4wXCI7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLWxhYmVsXCI+6IyD5Zu0OjwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdmFsdWVcIj57eyBtaW4gfX1+e3sgbWF4IH19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tbGFiZWxcIj7liankvZk6PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IGNoYW5jZXMgfX3mrKE8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImRpc3BsYXktc2VjdGlvblwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImRpc3BsYXktdGV4dFwiPnt7IGlucHV0IH19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2VjdGlvblwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2UtdGV4dFwiPnt7IG1lc3NhZ2UgfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwia2V5cGFkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJrZXlwYWQtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJwcmVzc0tleSgnNycpXCI+PHRleHQgY2xhc3M9XCJrZXktdGV4dFwiPjc8L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJwcmVzc0tleSgnOCcpXCI+PHRleHQgY2xhc3M9XCJrZXktdGV4dFwiPjg8L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiIG9uY2xpY2s9XCJwcmVzc0tleSgnOScpXCI+PHRleHQgY2xhc3M9XCJrZXktdGV4dFwiPjk8L3RleHQ+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwia2V5cGFkLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwicHJlc3NLZXkoJzQnKVwiPjx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj40PC90ZXh0PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwicHJlc3NLZXkoJzUnKVwiPjx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj41PC90ZXh0PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwicHJlc3NLZXkoJzYnKVwiPjx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj42PC90ZXh0PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImtleXBhZC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cInByZXNzS2V5KCcxJylcIj48dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+MTwvdGV4dD48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cInByZXNzS2V5KCcyJylcIj48dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+MjwvdGV4dD48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCIgb25jbGljaz1cInByZXNzS2V5KCczJylcIj48dGV4dCBjbGFzcz1cImtleS10ZXh0XCI+MzwvdGV4dD48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJrZXlwYWQtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtleSBjbGVhci1rZXlcIiBvbmNsaWNrPVwiY2xlYXJJbnB1dFwiPjx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj5DPC90ZXh0PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIiBvbmNsaWNrPVwicHJlc3NLZXkoJzAnKVwiPjx0ZXh0IGNsYXNzPVwia2V5LXRleHRcIj4wPC90ZXh0PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXkgc3VibWl0LWtleVwiIG9uY2xpY2s9XCJjaGVja0d1ZXNzXCI+PHRleHQgY2xhc3M9XCJrZXktdGV4dFwiPuehruWumjwvdGV4dD48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmFjay1idG5cIiBvbmNsaWNrPVwiZ29CYWNrXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiYmFjay10ZXh0XCI+6L+U5ZuePC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByaXZhdGU6IHtcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDUwLFxyXG4gICAgICBjaGFuY2VzOiAzMCxcclxuICAgICAgaW5wdXQ6ICcnLFxyXG4gICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5pWw5a2XJyxcclxuICAgICAgdGFyZ2V0TnVtYmVyOiAwLFxyXG4gICAgICBnYW1lT3ZlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubWluID0gTnVtYmVyKHRoaXMubWluKVxyXG4gICAgICB0aGlzLm1heCA9IE51bWJlcih0aGlzLm1heClcclxuICAgICAgdGhpcy5jaGFuY2VzID0gTnVtYmVyKHRoaXMuY2hhbmNlcylcclxuICAgICAgdGhpcy50YXJnZXROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXggKyAxKSlcclxuICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlXHJcbiAgICAgIHRoaXMuaW5wdXQgPSAnJ1xyXG4gICAgICB0aGlzLm1lc3NhZ2UgPSAn6K+36L6T5YWl5pWw5a2XJ1xyXG4gICAgfSxcclxuICAgIHByZXNzS2V5KGtleSkge1xyXG4gICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgIGlmICh0aGlzLmlucHV0Lmxlbmd0aCA8IDQpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dCArIGtleVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbnB1dCgpIHtcclxuICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVyblxyXG4gICAgICB0aGlzLmlucHV0ID0gJydcclxuICAgIH0sXHJcbiAgICBjaGVja0d1ZXNzKCkge1xyXG4gICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgIGlmICh0aGlzLmlucHV0ID09PSAnJykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICfor7fovpPlhaXmlbDlrZcnXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGd1ZXNzID0gTnVtYmVyKHRoaXMuaW5wdXQpXHJcblxyXG4gICAgICBpZiAoZ3Vlc3MgPCB0aGlzLm1pbiB8fCBndWVzcyA+IHRoaXMubWF4KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYOivt+i+k+WFpSR7dGhpcy5taW59fiR7dGhpcy5tYXh95LmL6Ze055qE5pWw5a2XYFxyXG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJ1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ3Vlc3MgPT09IHRoaXMudGFyZ2V0TnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ+aBreWWnOS9oOeMnOWvueS6hu+8gSdcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZVxyXG4gICAgICB9IGVsc2UgaWYgKGd1ZXNzIDwgdGhpcy50YXJnZXROdW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNoYW5jZXMgPSB0aGlzLmNoYW5jZXMgLSAxXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmNlcyA8PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBg5ri45oiP57uT5p2f77yB5q2j56Gu562U5qGI5pivJHt0aGlzLnRhcmdldE51bWJlcn1gXHJcbiAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAn5bCP5LqGJ1xyXG4gICAgICAgICAgdGhpcy5pbnB1dCA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2hhbmNlcyA9IHRoaXMuY2hhbmNlcyAtIDFcclxuICAgICAgICBpZiAodGhpcy5jaGFuY2VzIDw9IDApIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGDmuLjmiI/nu5PmnZ/vvIHmraPnoa7nrZTmoYjmmK8ke3RoaXMudGFyZ2V0TnVtYmVyfWBcclxuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICflpKfkuoYnXHJcbiAgICAgICAgICB0aGlzLmlucHV0ID0gJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKClcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXNlY3Rpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8tcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjYTVkNmE3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZS1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5rZXlwYWQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmtleXBhZC1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmtleSB7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmtleS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuY2xlYXIta2V5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWQ2YTc7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0LWtleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkNmE3O1xyXG4gIH1cclxuXHJcbiAgLmJhY2stYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWQ2YTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJhY2stdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsIm1pbiIsIm1heCIsImNoYW5jZXMiLCJpbnB1dCIsIm1lc3NhZ2UiLCJ0YXJnZXROdW1iZXIiLCJnYW1lT3ZlciIsIm9uSW5pdCIsIk51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInByZXNzS2V5Iiwia2V5IiwibGVuZ3RoIiwiY2xlYXJJbnB1dCIsImNoZWNrR3Vlc3MiLCJndWVzcyIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNxRHpCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFcEI7d0JBQ2JHLFNBQVM7NEJBQ1BDLEtBQUs7NEJBQ0xDLEtBQUs7NEJBQ0xDLFNBQVM7NEJBQ1RDLE9BQU87NEJBQ1BDLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLFVBQVU7d0JBQ1o7d0JBQ0FDOzRCQUNFLElBQUksQ0FBQ1AsR0FBRyxHQUFHUSxPQUFPLElBQUksQ0FBQ1IsR0FBRzs0QkFDMUIsSUFBSSxDQUFDQyxHQUFHLEdBQUdPLE9BQU8sSUFBSSxDQUFDUCxHQUFHOzRCQUMxQixJQUFJLENBQUNDLE9BQU8sR0FBR00sT0FBTyxJQUFJLENBQUNOLE9BQU87NEJBQ2xDLElBQUksQ0FBQ0csWUFBWSxHQUFHSSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTSxLQUFJLENBQUNWLEdBQUcsR0FBRzs0QkFDM0QsSUFBSSxDQUFDSyxRQUFRLEdBQUc7NEJBQ2hCLElBQUksQ0FBQ0gsS0FBSyxHQUFHOzRCQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHO3dCQUNqQjt3QkFDQVEsVUFBU0MsR0FBRzs0QkFDVixJQUFJLElBQUksQ0FBQ1AsUUFBUSxFQUFFOzRCQUNuQixJQUFJLElBQUksQ0FBQ0gsS0FBSyxDQUFDVyxNQUFNLEdBQUcsR0FDdEIsSUFBSSxDQUFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLEdBQUdVO3dCQUU5Qjt3QkFDQUU7NEJBQ0UsSUFBSSxJQUFJLENBQUNULFFBQVEsRUFBRTs0QkFDbkIsSUFBSSxDQUFDSCxLQUFLLEdBQUc7d0JBQ2Y7d0JBQ0FhOzRCQUNFLElBQUksSUFBSSxDQUFDVixRQUFRLEVBQUU7NEJBQ25CLElBQUksQUFBZSxPQUFmLElBQUksQ0FBQ0gsS0FBSyxFQUFTO2dDQUNyQixJQUFJLENBQUNDLE9BQU8sR0FBRztnQ0FDZjs0QkFDRjs0QkFFQSxNQUFNYSxRQUFRVCxPQUFPLElBQUksQ0FBQ0wsS0FBSzs0QkFFL0IsSUFBSWMsUUFBUSxJQUFJLENBQUNqQixHQUFHLElBQUlpQixRQUFRLElBQUksQ0FBQ2hCLEdBQUcsRUFBRTtnQ0FDeEMsSUFBSSxDQUFDRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDSixHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztnQ0FDaEQsSUFBSSxDQUFDRSxLQUFLLEdBQUc7Z0NBQ2I7NEJBQ0Y7NEJBRUEsSUFBSWMsVUFBVSxJQUFJLENBQUNaLFlBQVksRUFBRTtnQ0FDL0IsSUFBSSxDQUFDRCxPQUFPLEdBQUc7Z0NBQ2YsSUFBSSxDQUFDRSxRQUFRLEdBQUc7NEJBQ2xCLE9BQU8sSUFBSVcsUUFBUSxJQUFJLENBQUNaLFlBQVksRUFBRTtnQ0FDcEMsSUFBSSxDQUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLEdBQUc7Z0NBQzlCLElBQUksSUFBSSxDQUFDQSxPQUFPLElBQUksR0FBRztvQ0FDckIsSUFBSSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxZQUFZLEVBQUU7b0NBQy9DLElBQUksQ0FBQ0MsUUFBUSxHQUFHO2dDQUNsQixPQUFPO29DQUNMLElBQUksQ0FBQ0YsT0FBTyxHQUFHO29DQUNmLElBQUksQ0FBQ0QsS0FBSyxHQUFHO2dDQUNmOzRCQUNGLE9BQU87Z0NBQ0wsSUFBSSxDQUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLEdBQUc7Z0NBQzlCLElBQUksSUFBSSxDQUFDQSxPQUFPLElBQUksR0FBRztvQ0FDckIsSUFBSSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxZQUFZLEVBQUU7b0NBQy9DLElBQUksQ0FBQ0MsUUFBUSxHQUFHO2dDQUNsQixPQUFPO29DQUNMLElBQUksQ0FBQ0YsT0FBTyxHQUFHO29DQUNmLElBQUksQ0FBQ0QsS0FBSyxHQUFHO2dDQUNmOzRCQUNGO3dCQUNGO3dCQUNBZTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUNiO29CQUNGIn0=