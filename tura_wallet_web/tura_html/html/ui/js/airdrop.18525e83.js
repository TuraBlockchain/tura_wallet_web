(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["airdrop"], {
    "00cb": function (e, t, n) {
    }, "0624": function (e) {
        e.exports = JSON.parse('{"abi":[{"inputs":[{"internalType":"address[]","name":"Recipients","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"airdropForImportantPerson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"Recipients","type":"address[]"}],"name":"donate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_mainToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferOut","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdropValues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')
    }, "189c": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "post-motion"}, [n("div", {staticClass: "content"}, [n("Field", {
                    attrs: {
                        autosize: "",
                        type: "textarea",
                        label: "Referrer's Account / 推荐人地址：",
                        placeholder: "TS-G2U3-GSPS-56C2-HHBNX"
                    }, model: {
                        value: e.recommendAdd, callback: function (t) {
                            e.recommendAdd = t
                        }, expression: "recommendAdd"
                    }
                }), n("Field", {
                    attrs: {
                        autosize: "",
                        type: "textarea",
                        label: "Referal Account / 被推荐人地址：",
                        placeholder: "TS-62L8-3W9P-BFL7-EFRHV"
                    }, model: {
                        value: e.donationAdd, callback: function (t) {
                            e.donationAdd = t
                        }, expression: "donationAdd"
                    }
                }), n("Button", {
                    staticStyle: {margin: "10px 0"},
                    attrs: {type: "info", disabled: e.disabled},
                    on: {click: e.handlerSubmit}
                }, [e._v(" Submit / 提 交 ")])], 1)])
            }, r = [], i = n("1da1"), s = (n("bda7"), n("5e46")), o = (n("da3c"), n("0b33")), d = (n("66b9"), n("b650")),
            u = (n("be7f"), n("565f")), c = (n("96cf"), n("fa7d")), p = n("12b8"),
            l = (n("65e0"), n("99e5"), n("0329"), n("ea7a")), m = (n("0624"), {
                data: function () {
                    return {
                        recommendAdd: "",
                        donationAdd: "",
                        disabled: !1,
                        vote: this.$contractAddress.vote,
                        iecConst: "",
                        donationContractAdd: this.$contractAddress.conadd,
                        donationConst: "",
                        isadid: !1
                    }
                }, components: {Field: u["a"], Button: d["a"], Tab: o["a"], Tabs: s["a"]}, created: function () {
                    Object(c["c"])("walletaccount")
                }, methods: {
                    handlerSubmit: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n, a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (null !== Object(c["c"])("walletaccount")) {
                                            t.next = 3;
                                            break
                                        }
                                        return e.$toast({message: "Link the wallet / 请链接钱包"}), t.abrupt("return");
                                    case 3:
                                        if ("" !== e.recommendAdd) {
                                            t.next = 6;
                                            break
                                        }
                                        return e.$toast({message: "enter recommender address / 请输入推荐人地址"}), t.abrupt("return");
                                    case 6:
                                        if (n = /^TS-[A-Za-z0-9]/, n.test(e.recommendAdd)) {
                                            t.next = 10;
                                            break
                                        }
                                        return e.$toast({message: "Check input recommender address format / 请检查推荐人地址格式"}), t.abrupt("return");
                                    case 10:
                                        if ("" !== e.donationAdd) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.$toast({message: "enter Referee address / 请输入被推荐人地址"}), t.abrupt("return");
                                    case 13:
                                        if (n = /^TS-[A-Za-z0-9]/, n.test(e.donationAdd)) {
                                            t.next = 17;
                                            break
                                        }
                                        return e.$toast({message: "Check input Referee address format / 请检查被推荐人地址格式"}), t.abrupt("return");
                                    case 17:
                                        return t.next = 19, e.recommendAddTrue();
                                    case 19:
                                        if (t.sent) {
                                            t.next = 22;
                                            break
                                        }
                                        return e.$$toast({message: "The recommender does not exist / 推荐人不存在"}), t.abrupt("return");
                                    case 22:
                                        return t.next = 24, e.addisHave();
                                    case 24:
                                        if (!t.sent) {
                                            t.next = 27;
                                            break
                                        }
                                        return e.$toast({message: "Referral already exists / 被推荐人已存在"}), t.abrupt("return");
                                    case 27:
                                        e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(c["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(l.abi, e.donationContractAdd, {from: e.myaddress}), a = e, a.donationConst.methods.setPeth(a.recommendAdd, a.donationAdd).send().on("transactionHash", (function (e) {
                                            a.hash = e, r = a.$toast({
                                                duration: 0,
                                                message: "Trading, please do not exit / 交易正在打包，请勿退出"
                                            })
                                        })).on("receipt", (function (e) {
                                            e.transactionHash == a.hash && (r.close(), a.$toast({message: "Submitted successfully / 提交成功"}), a.donationAdd = "")
                                        })).on("error", (function (e, t) {
                                            r.close(), a.$toast({message: "Submit failed, try again later / 提交失败,稍后再试"})
                                        }));
                                    case 33:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, isDid: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(c["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(l.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.IsSave(e.myaddress).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, e.isadid = n, t.abrupt("return", n);
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, addisHave: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(c["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(l.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.PethIsSave(e.donationAdd).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, t.abrupt("return", n);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, recommendAddTrue: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(c["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(l.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.PethIsSave(e.recommendAdd).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, t.abrupt("return", n);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, connectMetaMask: function () {
                        p["a"].connectMetaMask().then((function (e) {
                            Object(c["c"])("walletaccount")
                        }))
                    }
                }
            }), y = m, b = (n("c98e"), n("2877")), h = Object(b["a"])(y, a, r, !1, null, "5549e7d6", null);
        t["default"] = h.exports
    }, 2333: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "airdrop-wrap"}, [n("div", {staticClass: "introduce-wrap"}, [e.isairdropnoexpire ? e._e() : n("div", {staticStyle: {"margin-left": "30px"}}, [n("h2", [e._v("Deadline of the period：")]), n("h3", {staticStyle: {margin: "5px 15px 0"}}, [e._v(" " + e._s(e.formatDateTime(1e3 * e.airdropdetailendtime) || "--") + " ")]), n("h2", {staticStyle: {margin: "8px 0"}}, [e._v("Airdrop number：")]), n("h3", {staticStyle: {margin: "5px 15px 0"}}, [e._v(" " + e._s(e.airdropCoinNumber || 0) + " ")]), n("h2", {staticStyle: {margin: "8px 0"}}, [e._v("Total number of airdrops：")]), n("h3", {staticStyle: {margin: "5px 15px 0"}}, [e._v(" " + e._s(e.airdropCoinTatol || 0) + " ")]), n("h2", {staticStyle: {margin: "8px 0"}}, [e._v("Airdropped quantity：")]), n("h3", {staticStyle: {margin: "5px 15px 0"}}, [e._v(" " + e._s(e.hasairdropNumber || 0) + " ")])]), n("div", {staticStyle: {margin: "20px 0 50px"}}, [n("el-button", {
                    staticStyle: {"margin-left": "30px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.receiveAirdrop}
                }, [e._v("Receive Airdrop")])], 1), e.isadmin && e.isairdropnoexpire ? n("div", {staticStyle: {"margin-bottom": "70px"}}, [n("el-form", {
                    ref: "form",
                    attrs: {"label-width": "140px"}
                }, [n("el-form-item", {attrs: {label: "Expire Date:"}}, [n("el-input", {
                    attrs: {
                        placeholder: "Please input the Expire Date",
                        maxlength: "“45"
                    }, model: {
                        value: e.expireDate, callback: function (t) {
                            e.expireDate = t
                        }, expression: "expireDate"
                    }
                })], 1), n("el-form-item", {attrs: {label: "Number of airdrops:"}}, [n("el-input", {
                    attrs: {
                        placeholder: "Please input the Number of airdrops",
                        maxlength: "“45"
                    }, model: {
                        value: e.receiveNum, callback: function (t) {
                            e.receiveNum = t
                        }, expression: "receiveNum"
                    }
                })], 1), n("el-form-item", {attrs: {label: "Airdrop Total:"}}, [n("el-input", {
                    attrs: {
                        placeholder: "Please input the Airdrop Total",
                        maxlength: "“45"
                    }, model: {
                        value: e.airdropTotal, callback: function (t) {
                            e.airdropTotal = t
                        }, expression: "airdropTotal"
                    }
                })], 1)], 1), e.isAuthedSuccess ? n("el-button", {
                    staticStyle: {"margin-left": "30px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.setExpiredTime}
                }, [e._v("Set Config")]) : n("el-button", {
                    staticStyle: {"margin-left": "30px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.handlerToAuth}
                }, [e._v("Authorize")])], 1) : e._e()])])
            }, r = [], i = n("1da1"), s = n("5530"), o = (n("96cf"), n("2f62")), d = n("fa7d"), u = n("12b8"),
            c = n("65e0"), p = n("99e5"), l = n("854b"), m = n("30f3"), y = {
                data: function () {
                    return {
                        disabled: !0,
                        isadmin: !1,
                        receiveId: "",
                        iectokenAuthed: "",
                        isAuthedSuccess: !1,
                        iecTokenContract: this.$contractAddress.iecToken,
                        iecConst: "",
                        expireDate: "",
                        airdropTotal: "",
                        receiveNum: "",
                        onlyairdropContractAdd: this.$contractAddress.onlyairdropContractAdd,
                        onlyairdropConst: "",
                        isairdropnoexpire: !1,
                        airdropdetailendtime: "",
                        airdropCoinNumber: "",
                        airdropCoinTatol: "",
                        hasairdropNumber: ""
                    }
                }, computed: Object(s["a"])({}, Object(o["c"])("login", ["walletaccount"])), activated: function () {
                    this.disabled = !Object(d["c"])("walletaccount"), Object(d["c"])("walletaccount") && (this.handlerIsAdmin(), this.getreceiveId(), this.isAuthed())
                }, methods: {
                    formatDateTime: d["b"], isAuthed: function () {
                        var e = this;
                        this.connectMetaMask(), Object(d["c"])("walletaccount") ? this.web3 = this.$web3js.getWeb3() : this.web3 = new p("https://mainnet.infura.io/v3/a1fb8b522ffc46d38c505a38cb073e73"), this.myaddress = Object(d["c"])("walletaccount") ? Object(d["c"])("walletaccount") : "0xE91d5D70b07071f85568c15ABfEda2B3466A2705", this.iectokenAuthed = new this.web3.eth.Contract(l.abi, this.iecTokenContract, {from: this.myaddress});
                        var t = this;
                        t.iectokenAuthed.methods.allowance(t.myaddress, t.onlyairdropContractAdd).call({from: t.myaddress}).then((function (t) {
                            t > 0 && (e.isAuthedSuccess = !0)
                        }))
                    }, handlerIsAdmin: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), Object(d["c"])("walletaccount") ? e.web3 = e.$web3js.getWeb3() : e.web3 = new p("https://mainnet.infura.io/v3/a1fb8b522ffc46d38c505a38cb073e73"), e.myaddress = Object(d["c"])("walletaccount") ? Object(d["c"])("walletaccount") : "0xE91d5D70b07071f85568c15ABfEda2B3466A2705", e.iecConst = new e.web3.eth.Contract(m.abi, e.onlyairdropContractAdd, {from: e.myaddress}), t.next = 6, e.iecConst.methods.admin(e.myaddress).call();
                                    case 6:
                                        if (!t.sent) {
                                            t.next = 8;
                                            break
                                        }
                                        e.isadmin = !0;
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getreceiveId: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), Object(d["c"])("walletaccount") ? e.web3 = e.$web3js.getWeb3() : e.web3 = new p("https://mainnet.infura.io/v3/a1fb8b522ffc46d38c505a38cb073e73"), e.myaddress = Object(d["c"])("walletaccount") ? Object(d["c"])("walletaccount") : "0xE91d5D70b07071f85568c15ABfEda2B3466A2705", e.iecConst = new e.web3.eth.Contract(m.abi, e.onlyairdropContractAdd, {from: e.myaddress}), t.next = 6, e.iecConst.methods.id().call();
                                    case 6:
                                        n = t.sent, e.receiveId = n, e.getairdropdetail(e.receiveId);
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getairdropdetail: function (e) {
                        var t = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function n() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return t.connectMetaMask(), Object(d["c"])("walletaccount") ? t.web3 = t.$web3js.getWeb3() : t.web3 = new p("https://mainnet.infura.io/v3/a1fb8b522ffc46d38c505a38cb073e73"), t.myaddress = Object(d["c"])("walletaccount") ? Object(d["c"])("walletaccount") : "0xE91d5D70b07071f85568c15ABfEda2B3466A2705", t.iecConst = new t.web3.eth.Contract(m.abi, t.onlyairdropContractAdd, {from: t.myaddress}), n.next = 6, t.iecConst.methods.airdropMap(e).call();
                                    case 6:
                                        return a = n.sent, t.airdropdetailendtime = a.endTime, r = (new Date).getTime(), r > 1e3 * t.airdropdetailendtime && (t.isairdropnoexpire = !0), n.next = 12, c["a"].movePointLeft(a.airdropCoinNumber, 18);
                                    case 12:
                                        return t.airdropCoinNumber = n.sent, n.next = 15, c["a"].movePointLeft(a.airdropCoinTatol, 18);
                                    case 15:
                                        return t.airdropCoinTatol = n.sent, n.next = 18, c["a"].movePointLeft(a.hasairdropNumber, 18);
                                    case 18:
                                        t.hasairdropNumber = n.sent;
                                    case 19:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, receiveAirdrop: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n, a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.onlyairdropConst = new e.web3.eth.Contract(m.abi, e.onlyairdropContractAdd, {from: e.myaddress}), n = e, n.onlyairdropConst.methods.receiveAirdrop(n.receiveId).send().on("transactionHash", (function (e) {
                                            n.hash = e, a = n.$toast({
                                                duration: 0,
                                                message: "In transaction, please wait patiently"
                                            })
                                        })).on("receipt", (function (e) {
                                            e.transactionHash == n.hash && (a.close(), n.$toast({message: "Receive Donation is successful"}), n.donationAdd = "", n.getreceiveId(), n.$store.dispatch("ActionRouterKey"))
                                        })).on("error", (function (e, t) {
                                            a.close(), n.$toast({message: "Receive Donation failed, try later"})
                                        }));
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, setExpiredTime: function () {
                        if (this.isAuthed(), this.isAuthedSuccess) {
                            if ("" == this.expireDate) return void this.$toast({message: "expire Date cannot be empty"});
                            if ("" == this.receiveNum) return void this.$toast({message: "Quantity received cannot be empty"});
                            if ("" == this.airdropTotal) return void this.$toast({message: "Airdrop total cannot be empty"});
                            this.setconfigInfo()
                        } else this.handlerToAuth()
                    }, setconfigInfo: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n, a, r, i, s, o;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.onlyairdropConst = new e.web3.eth.Contract(m.abi, e.onlyairdropContractAdd, {from: e.myaddress}), n = e, r = 24 * n.expireDate * 60 * 60, i = r, t.next = 9, c["a"].movePointRight(n.receiveNum, 18);
                                    case 9:
                                        return s = t.sent, t.next = 12, c["a"].movePointRight(n.airdropTotal, 18);
                                    case 12:
                                        o = t.sent, n.onlyairdropConst.methods.newAirDrop(i, s, o).send().on("transactionHash", (function (e) {
                                            n.hash = e, a = n.$toast({
                                                duration: 0,
                                                message: "In transaction, please wait patiently"
                                            })
                                        })).on("receipt", (function (e) {
                                            e.transactionHash == n.hash && (a.close(), n.$toast({message: "Set successfully"})), n.getreceiveId(), n.$store.dispatch("ActionRouterKey"), n.expireDate = "", n.airdropTotal = "", n.receiveNum = ""
                                        })).on("error", (function (e, t) {
                                            a.close(), n.$toast({message: "Set failed, try later"})
                                        }));
                                    case 14:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, handlerToAuth: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n, a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.iectokenAuthed = new e.web3.eth.Contract(l.abi, e.iecTokenContract, {from: e.myaddress}), t.next = 6, c["a"].movePointRight(99999999, 18);
                                    case 6:
                                        e.amount = t.sent, n = e, n.iectokenAuthed.methods.approve(n.onlyairdropContractAdd, n.amount).send({from: n.myaddress}).on("transactionHash", (function (e) {
                                            a = n.$toast({
                                                duration: 0,
                                                message: "In transaction, please wait patiently"
                                            }), n.hash = e
                                        })).on("receipt", (function (e) {
                                            e.transactionHash == n.hash && (a.close(), n.$toast({message: "Authorization is successful, fill in the configuration information and submit"}), n.isAuthedSuccess = !0)
                                        })).on("error", (function (e, t) {
                                            a.close(), n.$message({message: "Failed authorization", type: "success"})
                                        }));
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, connectMetaMask: function () {
                        u["a"].connectMetaMask().then((function (e) {
                            Object(d["c"])("walletaccount")
                        }))
                    }
                }
            }, b = y, h = (n("6dc6"), n("2877")), f = Object(h["a"])(b, a, r, !1, null, "13f1e681", null);
        t["default"] = f.exports
    }, "30f3": function (e) {
        e.exports = JSON.parse('{"abi":[{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"delAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"lec","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyStop","type":"event"},{"inputs":[{"internalType":"uint256","name":"endTime_","type":"uint256"},{"internalType":"uint256","name":"airdropCoinNumber_","type":"uint256"},{"internalType":"uint256","name":"airdropCoinTatol_","type":"uint256"}],"name":"newAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endTime_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"airdropCoiNumber_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"airdropCoinTatol_","type":"uint256"}],"name":"newAirDropEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"receiveAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenTransferOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"userReceiveAirdrop","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"airdropMap","outputs":[{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"airdropCoinNumber","type":"uint256"},{"internalType":"uint256","name":"airdropCoinTatol","type":"uint256"},{"internalType":"uint256","name":"hasairdropNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"airdropUserMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')
    }, "6dc6": function (e, t, n) {
        "use strict";
        n("818f")
    }, "818f": function (e, t, n) {
    }, "854b": function (e) {
        e.exports = JSON.parse('{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_publicWareHouse","type":"address"}],"name":"setPublicWareHouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_publicWelfareFund","type":"address"}],"name":"setPublicWelfareFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_uniSwap","type":"address"}],"name":"setUniSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferToPublicWareHouse","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferToPublicWelfareFund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferToUniSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"upDateAddressNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"isexist","type":"bool"}],"name":"upDateIsExist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAddressNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicWareHouse","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicWelfareFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniSwap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}')
    }, b80e: function (e, t, n) {
    }, c98e: function (e, t, n) {
        "use strict";
        n("b80e")
    }, da14: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("div", {staticClass: "airdrop-wrap"}, [n("div", {staticClass: "introduce-wrap"}, [n("div", {
                    staticClass: "test",
                    staticStyle: {"margin-bottom": "15px"}
                }, [n("el-button", {
                    staticStyle: {margin: "0 0 0 60px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.linkClick}
                }, [e._v(" Generate PETH Wallet / 创建PETH钱包 ")])], 1), n("div", {staticStyle: {margin: "0 0 0 40px"}}, [n("el-form", {
                    ref: "form",
                    attrs: {"label-width": "360px"}
                }, [n("el-form-item", {attrs: {label: "Referrer's PETH Account ID / 推荐人PETH钱包地址:"}}, [n("el-input", {
                    attrs: {
                        placeholder: "Enter / 输入, eg / 如：TS-G2U3-GSPS-56C2-HHBNX",
                        maxlength: "45"
                    }, model: {
                        value: e.recommendAdd, callback: function (t) {
                            e.recommendAdd = t
                        }, expression: "recommendAdd"
                    }
                })], 1)], 1), n("el-form", {
                    ref: "form",
                    attrs: {"label-width": "360px"}
                }, [n("el-form-item", {attrs: {label: "Referal PETH Account ID / 被推荐人PETH钱包地址:"}}, [n("el-input", {
                    attrs: {
                        placeholder: "Enter / 输入, eg / 如：TS-62L8-3W9P-BFL7-EFRHV",
                        maxlength: "45"
                    }, model: {
                        value: e.donationAdd, callback: function (t) {
                            e.donationAdd = t
                        }, expression: "donationAdd"
                    }
                })], 1)], 1), n("el-button", {
                    staticStyle: {margin: "0 0 0 40px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.handlerSubmit}
                }, [e._v("Submit / 提 交")])], 1)])]), n("div", {staticClass: "text"}, [n("span", {
                    staticStyle: {cursor: "pointer"},
                    on: {click: e.linktg}
                }, [n("img", {
                    attrs: {
                        height: "40",
                        width: "60",
                        src: "https://img1.baidu.com/it/u=2206889379,1803849433&fm=253&app=138&size=w931&n=0&f=PNG&fmt=auto?sec=1660669200&t=87bd241587766dbf5b87d198b2dfd145"
                    }
                })]), n("span", {
                    staticStyle: {cursor: "pointer", margin: "0 10px"},
                    on: {click: e.linktwitter}
                }, [n("img", {
                    attrs: {
                        height: "40",
                        width: "60",
                        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.sj33.cn%2Fuploads%2Fallimg%2F201402%2F7-14022h15130d7.png&refer=http%3A%2F%2Fimg.sj33.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663318378&t=228724459b0321c4855b358033cb547a",
                        alt: ""
                    }
                })]), e._m(0)]), n("div", {staticClass: "text"}, [e._m(1), n("el-button", {
                    staticStyle: {margin: "10px 0 10px 20px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.getPeth}
                }, [e._v("Claim PETH / 领取PETH")]), n("br"), e._m(2), e._m(3), e._m(4), e._m(5), e._m(6)], 1), n("div", {staticClass: "text"}, [e._m(7), n("el-button", {
                    staticStyle: {margin: "10px 0 10px 20px"},
                    attrs: {type: "primary", disabled: e.disabled},
                    on: {click: e.getPeth}
                }, [e._v("Claim PETH / 领取PETH")]), n("br"), e._m(8), e._m(9), e._m(10), e._m(11), e._m(12)], 1), e._m(13), e._m(14)])
            }, r = [function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("a", {attrs: {href: "mailto: peth.world@gmail.com"}}, [n("span", {staticStyle: {cursor: "pointer"}}, [n("img", {
                    attrs: {
                        height: "40",
                        width: "50",
                        src: "https://img2.baidu.com/it/u=1414991663,2821019745&fm=253&fmt=auto&app=138&f=JPEG?w=430&h=431",
                        alt: ""
                    }
                })])])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" A）How to get Ethereum hardfork coin-PETH? "), n("br"), e._v(" The easiest way is to buy a PETH NFT on Opensea, and the ETH address for receiving the forked coins will be recorded. Those purchased before September 1st can receive 10,000 times of Ether in PETH at the time of the fork, and after September 1st, a loss of 90% is 1,000 times of Ether in PETH "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" B） How to pre-mine PETH from September 1st to September 15th? "), n("br"), e._v(" Purchased NFT before September 1st or uploaded a PETH address and the snapshot balance on September 1st was greater than 1ether, or entered the whitelist of PETH addresses. "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" C) How to get rewards through referral mining? "), n("br"), e._v(" By recommending qualified pre-mining addresses, you will receive an additional 30% reward for the amount of mining, and an additional 15% reward for re-referrals."), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" Referrer's PETH address TSxxxx is required, and the community will reward 30% of the pre-mined quantity and 15% to the referrer. Referee's PETH address TSxxxx , this address is the only address for receiving the forked coins. "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" The referrer relationship is on the chain, and you can get 30% and 15% of the community extra reward of the following secondary mining. The conditions for participating in pre-mining are that the 0901 snapshot is greater than 1 ether, or the PETH address that has entered the whitelist. "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" All PETH addresses participating in pre-mining must have a referrer and must have uploaded the PETH address on Ethereum. "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" A）如何领PETH分叉币？ "), n("br"), n("h4", [e._v(" 最简单的办法就是在Opensea上购买一个指定NFT，领取分叉币的ETH地址就被记下来了。9月1日之前购买的就可以在分叉的时候领取一万倍的PETH，9月1日之后损失90%也就是1000倍的PETH。 ")])])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" B）如何在9月1日至9月15日预挖PETH？ "), n("br"), e._v(" 9月1日前购买NFT或者上传过PETH地址并且9月1日快照余额大于1ether，或者进入白名单的PETH地址。 "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" C）如何通过推荐挖矿获得奖励？ "), n("br"), n("h4", [e._v("通过推荐合格的预挖地址，获得挖矿数量的额外30%奖励，再次推荐的额外15%奖励。")])])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" 推荐人PETH地址 TSxxxx 必填，社区额外奖励预挖数量的30%，15%给推荐人。 被推荐人的PETH地址 TSxxxx ，这个地址是分叉币领取的唯一地址。 "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" 推荐人关系上链，可以获得下面二级挖矿的30%15%的社区额外奖励。 参与预挖的条件是0901快照大于1ether，或者进入白名单的PETH地址。 "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("h4", [e._v(" 所有参与预挖的PETH地址必须有推荐人，必须在以太坊上传过PETH地址。 "), n("br")])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "text"}, [n("h4", [e._v("People's Ethereum AKA Peth is an Ethereum hard fork. By signing and uploading the Peth address, Ethereum users can get 10K forked coins(PETH) per ETH before September 1, and 1K after September 1. The fork is expected to happen on September 19.")]), n("h4", [e._v("Bound users will also get the right to pre-mine from September 1st to September 19th, provided that the account balance is greater than 1 ether at the time of the snapshot on September 1st. They can participate in mining with their mobile phones."), n("br")]), n("h4", [e._v("Before signing, you need to generate a Peth address first, and you only have one chance to sign. "), n("br")]), n("h4", [e._v("PETH Introduction "), n("br")]), n("h4", [e._v("PETH is 3rd generation of Ethereum(ETH3) which solves the performance bottleneck ultimately. PETH allows everyone in the world to participate the network from the mobile devices. PETH is people’s Ethereum. It is for everyone. "), n("br")]), n("h4", [e._v("Technical Roadmap. "), n("br")]), n("h4", [e._v("Phase 1: PETH Whitepaper release "), n("br")]), n("h4", [e._v("Phase 2: Implementation of POCS to empower mobile users and launch of TestNet to get the mining start"), n("br")]), n("h4", [e._v("Phase 3: MainNet launch for miners"), n("br")]), n("h4", [e._v("Phase 4: Validators Network Lanuch to allow community to join the network"), n("br")]), n("h4", [e._v("Phase 5: Ledgers Network Lanuch to enable highly decentralized ledger data storage to achieve the highest security."), n("br")]), n("h4", [e._v("Phase 6: PETH becomes a community driven protocol. PETH councile is responsible for the day to day management."), n("br")]), n("h4", [e._v("Phase 7: Consensus swarm Launch to solve the performance issue ultimately. More networks adopt PETH technology as their underlying Lay 0 solutions."), n("br")])])
            }, function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "text"}, [n("h4", [e._v("People's Ethereum AKA Peth 是一个以太坊硬分叉。通过签署和上传Peth地址，以太坊用户可以在9月1日之前每ETH获得10K分叉币（PETH），9月1日之后可以获得1K分叉币，预计分叉时间为9月19日。")]), n("h4", [e._v("绑定用户也将获得在 9 月 1 日至 9 月 19 日期间预挖的权利，前提是在 9 月 1 日快照时账户余额大于 1 个以太币。他们可以通过手机参与挖矿。 "), n("br")]), n("h4", [e._v("绑定前需要先生成一个Peth地址，并且只有一次签名的机会。 "), n("br")]), n("h4", [e._v(" PETH简介 "), n("br")]), n("h4", [e._v("PETH是第三代以太坊（ETH3），最终解决了性能瓶颈。 PETH 允许世界上的每个人通过移动设备参与网络。 PETH是人们的以太坊。它适合所有人。 "), n("br")]), n("h4", [e._v("技术路线图 "), n("br")]), n("h4", [e._v("第一阶段：PETH 白皮书发布 "), n("br")]), n("h4", [e._v("第二阶段：实施 POCS 赋能移动用户并启动测试网以启动挖矿 "), n("br")]), n("h4", [e._v("第三阶段：矿工主网启动 "), n("br")]), n("h4", [e._v(" 第四阶段：验证网启动 允许社区加入网络 "), n("br")]), n("h4", [e._v("第五阶段：账本网 实现高度去中心化的账本数据存储，以实现最高的安全性。 "), n("br")]), n("h4", [e._v("第六阶段：PETH 成为社区驱动的协议。 PETH 委员会负责日常管理。 "), n("br")]), n("h4", [e._v(" 第七阶段：swarm协议最终解决性能问题。更多的网络采用 PETH 技术作为其底层的 Lay 0 解决方案。 "), n("br")])])
            }], i = n("1da1"), s = n("5530"), o = (n("96cf"), n("2f62")), d = n("fa7d"), u = n("12b8"),
            c = (n("65e0"), n("99e5"), n("0329"), n("ea7a")), p = (n("0624"), {
                data: function () {
                    return {
                        recommendAdd: "",
                        donationAdd: "",
                        disabled: !1,
                        formAirdrop: {airdropAdd: "", airdropNum: ""},
                        airdropAddArr: [],
                        tokenAirDropAddr: "",
                        tokenAirDropAddrArr: [],
                        vote: this.$contractAddress.vote,
                        iecConst: "",
                        donationContractAdd: this.$contractAddress.conadd,
                        donationConst: "",
                        isadid: !1,
                        airdropConst: ""
                    }
                }, computed: Object(s["a"])({}, Object(o["c"])("login", ["walletaccount"])), created: function () {
                    null !== Object(d["c"])("walletaccount") && this.isDid()
                }, methods: {
                    linkClick: function () {
                        window.open("http://peth.world:6876/classic.html")
                    }, linktg: function () {
                        window.open("https://t.me/petheth3")
                    }, linktwitter: function () {
                        window.open("https://twitter.com/@PETH_ETH3")
                    }, linekEmail: function () {
                        window.open("http://peth.world@gmail.com")
                    }, getPeth: function () {
                        window.open("https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/8602975470637798075332173524007230701702998853774010736953099543206491686560")
                    }, handlerSubmit: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n, a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (null !== Object(d["c"])("walletaccount")) {
                                            t.next = 3;
                                            break
                                        }
                                        return e.$message({
                                            message: "Please link the wallet / 请链接钱包",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 3:
                                        if ("" != e.recommendAdd) {
                                            t.next = 6;
                                            break
                                        }
                                        return e.$message({
                                            message: "Please enter recommender address / 请输入推荐人地址",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 6:
                                        if (n = /^TS-[A-Za-z0-9]/, n.test(e.recommendAdd)) {
                                            t.next = 10;
                                            break
                                        }
                                        return e.$message({
                                            message: "Check input recommender address format / 请检查推荐人地址格式",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 10:
                                        if ("" != e.donationAdd) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.$message({
                                            message: "Please enter Referee address / 请输入被推荐人地址",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 13:
                                        if (n = /^TS-[A-Za-z0-9]/, n.test(e.donationAdd)) {
                                            t.next = 17;
                                            break
                                        }
                                        return e.$message({
                                            message: "Check input Referee address format / 请检查被推荐人地址格式",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 17:
                                        return t.next = 19, e.recommendAddTrue();
                                    case 19:
                                        if (t.sent) {
                                            t.next = 22;
                                            break
                                        }
                                        return e.$message({
                                            message: "The recommender does not exist / 推荐人不存在",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 22:
                                        return t.next = 24, e.addisHave();
                                    case 24:
                                        if (!t.sent) {
                                            t.next = 27;
                                            break
                                        }
                                        return e.$message({
                                            message: "Referral already exists / 被推荐人已存在",
                                            type: "warning"
                                        }), t.abrupt("return");
                                    case 27:
                                        e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(c.abi, e.donationContractAdd, {from: e.myaddress}), a = e, a.donationConst.methods.setPeth(a.recommendAdd, a.donationAdd).send().on("transactionHash", (function (e) {
                                            a.hash = e, r = a.$message({
                                                duration: 0,
                                                message: "Trading, please do not exit / 交易正在打包，请勿退出"
                                            })
                                        })).on("receipt", (function (e) {
                                            e.transactionHash == a.hash && (r.close(), a.$message({
                                                message: "Submitted successfully / 提交成功",
                                                type: "success"
                                            }), a.donationAdd = "")
                                        })).on("error", (function (e, t) {
                                            r.close(), a.$message({
                                                message: "Submit failed, try again later / 提交失败,稍后再试",
                                                type: "warning"
                                            })
                                        }));
                                    case 33:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, isDid: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(c.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.IsSave(e.myaddress).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, e.isadid = n, t.abrupt("return", n);
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, addisHave: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(c.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.PethIsSave(e.donationAdd).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, t.abrupt("return", n);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, recommendAddTrue: function () {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.connectMetaMask(), e.web3 = e.$web3js.getWeb3(), e.myaddress = Object(d["c"])("walletaccount"), e.donationConst = new e.web3.eth.Contract(c.abi, e.donationContractAdd, {from: e.myaddress}), t.next = 6, e.donationConst.methods.PethIsSave(e.recommendAdd).call({from: e.myaddress});
                                    case 6:
                                        return n = t.sent, t.abrupt("return", n);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, connectMetaMask: function () {
                        u["a"].connectMetaMask().then((function (e) {
                            Object(d["c"])("walletaccount")
                        }))
                    }
                }
            }), l = p, m = (n("e8dd"), n("2877")), y = Object(m["a"])(l, a, r, !1, null, "6d2b4bc4", null);
        t["default"] = y.exports
    }, e8dd: function (e, t, n) {
        "use strict";
        n("00cb")
    }, ea7a: function (e) {
        e.exports = JSON.parse('{"abi":[{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"A_peth_address","type":"string"},{"internalType":"string","name":"B_peth_address","type":"string"}],"name":"setPeth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"peth_address","type":"string"}],"name":"setPethIsSave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUserslen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"PethIsSave","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"a_peth","type":"string"},{"internalType":"string","name":"b_peth","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"}]}')
    }
}]);
//# sourceMappingURL=airdrop.18525e83.js.map