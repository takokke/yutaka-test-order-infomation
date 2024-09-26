/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/kintone-env-dependent-char.ts":
/*!**********************************************!*\
  !*** ./src/ts/kintone-env-dependent-char.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kintone_rest_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kintone/rest-api-client */ "./node_modules/@kintone/rest-api-client/lib/src/index.browser.js");
/* harmony import */ var _kintone_rest_api_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kintone_rest_api_client__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


// リポジトリURL
// https://github.com/takokke/yutaka-test-order-infomation

(function () {
  'use strict';

  /* 定数の定義*/

  // 末尾に[縺]を入れる
  /* 関数の定義 */
  var replaceNonJISCharacters = function replaceNonJISCharacters(input) {
    var nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;

    // 置き換え文字を定義
    var replacementCharacter = '[縺]';
    return input.replace(nonJISRegex, replacementCharacter);
  };

  // 環境依存文字をチェックする関数
  var containsNonJISCharacters = function containsNonJISCharacters(input) {
    /* 定数の定義*/
    var nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;

    // \u0020-\u007E: 基本的なASCII文字（空白や記号を含む）
    // \u00A1-\u00DF: 半角カタカナとラテン文字の一部
    // \u3041-\u3093: ひらがな
    // \u30A1-\u30F6: カタカナ
    // \u30FB\: 
    // \u30FC\:「ー」（長音符）
    // \u4E00-\u9FA0: 漢字（CJK統合漢字）
    // \u3000-\u303F: 句読点などの日本語の記号
    // \uFF01: ！
    // \uFF02: "
    // \uFF03: #
    // …
    // \uFF5E: ～（波ダッシュ)
    // \uFF10-\uFF19: 全角の数字（０～９）
    // \uFF21-\uFF3A: 全角のアルファベット（大文字 A～Z）
    // \uFF41-\uFF5A: 全角のアルファベット（小文字 a～z）
    // \uFF5E: ～
    // \uFF61-\uFF9F: 半角カタカナ

    return nonJISRegex.test(input);
  };

  /* 型の定義 */

  // 参考記事
  // https://github.com/kintone/js-sdk/blob/main/packages/rest-api-client/docs/typescript.md

  // レコード詳細画面において、環境依存文字を含むフィールドを黄色にする
  // まずは、全種類のフィールドを取得する必要がある。
  kintone.events.on("app.record.detail.show", function (event) {
    try {
      var record = event.record;
      // フィールド名を配列で定義
      var fieldCodes = ['住所1', '住所2', '個人名_団体', '個人名_団体_フリガナ', '担当者_名', '担当者_名_フリガナ', '担当者_姓', '担当者_姓_フリガナ', '都道府県'];
      fieldCodes.forEach(function (fieldCode) {
        var _record$fieldCode;
        var fieldValue = (_record$fieldCode = record[fieldCode]) === null || _record$fieldCode === void 0 ? void 0 : _record$fieldCode.value;

        // console.log(`フィールド名: ${fieldCode}, 値: ${fieldValue}, 型: ${typeof fieldValue}`);

        if (fieldValue === null || typeof fieldValue !== 'string') {
          console.log("".concat(fieldCode, " \u306F\u5024\u304Cnull\u307E\u305F\u306F\u6587\u5B57\u5217\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
          return;
        }
        var containsNonJIS = containsNonJISCharacters(fieldValue);
        var containsSpecialChar = fieldValue.includes("[縺]");

        //console.log(`フィールド名: ${fieldCode}, Non-JIS: ${containsNonJIS}, 特殊文字: ${containsSpecialChar}`);

        if (containsNonJIS || containsSpecialChar) {
          var fieldElement = kintone.app.record.getFieldElement(fieldCode);
          if (fieldElement === null) {
            throw new Error("\u30D5\u30A3\u30FC\u30EB\u30C9 \"".concat(fieldCode, "\" \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"));
          }
          fieldElement.style.backgroundColor = 'yellow';
        }
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message);
      } else {
        console.error(err);
        alert("An unknown error occurred");
      }
    }
    return event;
  });
  // レコード一覧画面
  // 置き換えボタンを表示
  kintone.events.on("app.record.index.show", function (event) {
    if (document.getElementById('replace_button') !== null) {
      return false;
    }
    var button = document.createElement("button");
    button.id = "replace_button";
    button.innerHTML = '<span></span>環境依存文字を置換する';
    button.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _document$getElementB, client, APP_ID, getAllRecordsParams, getAllRecordsResp, nonJISRegex, targetRecords, updateRecords, updateAllRecordsParams, replaceButton;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            (_document$getElementB = document.getElementById("#replace_button")) === null || _document$getElementB === void 0 || _document$getElementB.classList.add("click");
            button.disabled = true;
            client = new _kintone_rest_api_client__WEBPACK_IMPORTED_MODULE_0__.KintoneRestAPIClient({});
            APP_ID = kintone.app.getId();
            if (!(APP_ID === null)) {
              _context.next = 7;
              break;
            }
            throw new Error("アプリIDが取得できませんでした。");
          case 7:
            getAllRecordsParams = {
              app: APP_ID
            };
            _context.next = 10;
            return client.record.getAllRecords(getAllRecordsParams);
          case 10:
            getAllRecordsResp = _context.sent;
            nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;
            _context.next = 14;
            return getAllRecordsResp.filter(function (record) {
              return nonJISRegex.test(record.住所1.value) || nonJISRegex.test(record.住所2.value) || nonJISRegex.test(record.個人名_団体.value) || nonJISRegex.test(record.個人名_団体_フリガナ.value) || nonJISRegex.test(record.担当者_名.value) || nonJISRegex.test(record.担当者_名_フリガナ.value) || nonJISRegex.test(record.担当者_姓.value) || nonJISRegex.test(record.担当者_姓_フリガナ.value) || nonJISRegex.test(record.都道府県.value);
            });
          case 14:
            targetRecords = _context.sent;
            console.log(targetRecords);
            updateRecords = []; // 更新する内容を作成
            targetRecords.forEach(function (record) {
              var updateRecord = {
                id: record.$id.value,
                record: {
                  住所1: {
                    value: replaceNonJISCharacters(record.住所1.value)
                  },
                  住所2: {
                    value: replaceNonJISCharacters(record.住所2.value)
                  },
                  個人名_団体: {
                    value: replaceNonJISCharacters(record.個人名_団体.value)
                  },
                  個人名_団体_フリガナ: {
                    value: replaceNonJISCharacters(record.個人名_団体_フリガナ.value)
                  },
                  担当者_名: {
                    value: replaceNonJISCharacters(record.担当者_名.value)
                  },
                  担当者_名_フリガナ: {
                    value: replaceNonJISCharacters(record.担当者_名_フリガナ.value)
                  },
                  担当者_姓: {
                    value: replaceNonJISCharacters(record.担当者_姓.value)
                  },
                  担当者_姓_フリガナ: {
                    value: replaceNonJISCharacters(record.担当者_姓_フリガナ.value)
                  },
                  都道府県: {
                    value: replaceNonJISCharacters(record.都道府県.value)
                  }
                }
              };
              updateRecords.push(updateRecord);
            });
            console.log(updateRecords);
            updateAllRecordsParams = {
              app: APP_ID,
              records: updateRecords
            };
            _context.next = 22;
            return client.record.updateAllRecords(updateAllRecordsParams);
          case 22:
            // ボタン要素を取得
            replaceButton = document.getElementById("replace_button"); // クラスを削除
            if (replaceButton) {
              replaceButton.classList.remove("click");
              // HTMLを更新
              replaceButton.innerHTML = "<span></span>環境依存文字を置換する";
            }
            button.disabled = false;
            alert("JIS非対応文字の置換が完了しました");
            location.reload();
            _context.next = 32;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](0);
            if (_context.t0 instanceof Error) {
              console.error(_context.t0);
              alert(_context.t0.message);
            } else {
              console.error(_context.t0);
              alert("An unknown error occurred");
            }
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 29]]);
    }));
    var headerMenuSpace = kintone.app.getHeaderMenuSpaceElement();
    headerMenuSpace === null || headerMenuSpace === void 0 || headerMenuSpace.appendChild(button);
    return event;
  });
})();

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"kintone-env-dependent-char": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyutaka_test_order_infomation"] = self["webpackChunkyutaka_test_order_infomation"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_kintone_rest-api-client_lib_src_index_browser_js"], () => (__webpack_require__("./src/ts/kintone-env-dependent-char.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=kintone-env-dependent-char.js.map