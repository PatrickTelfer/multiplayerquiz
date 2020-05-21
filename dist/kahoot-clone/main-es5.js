(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isHost()\">\n    <div *ngIf=\"isQuestionState()\">\n        <mat-card>\n            <mat-card-title>\n                {{question?.question}}\n            </mat-card-title>\n            <mat-card-content>\n                <div class=\"gridContainer\">\n                    <div class=\"a\">\n                        {{question?.options[0]}}\n                    </div>\n                    <div class=\"b\">\n                        {{question?.options[1]}}\n                    </div>\n                    <div class=\"c\">\n                        {{question?.options[2]}}\n                    </div>\n                    <div class=\"d\">\n                        {{question?.options[3]}}\n                    </div>\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div *ngIf=\"isAnswerState()\">\n        <mat-card>\n            <mat-card-title>\n                {{question?.question}}\n            </mat-card-title>\n            <mat-card-content>\n                <div class=\"gridContainer\">\n                    <div [ngClass]=\"{'right': answer == 0, 'wrong': answer != 0}\">\n                        {{question?.options[0]}}\n                    </div>\n                    <div [ngClass]=\"{'right': answer == 1, 'wrong': answer != 1}\">\n                        {{question?.options[1]}}\n                    </div>\n                    <div [ngClass]=\"{'right': answer == 2, 'wrong': answer != 2}\">\n                        {{question?.options[2]}}\n                    </div>\n                    <div  [ngClass]=\"{'right': answer == 3, 'wrong': answer != 3}\">\n                        {{question?.options[3]}}\n                    </div>\n                </div>\n            </mat-card-content>\n            <mat-card-actions>\n                <button (click)=\"nextQuestion()\">Next Question</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n\n<div *ngIf=\"!isHost()\" class=\"width100 height100\">\n    <div *ngIf=\"isQuestionState()\" class=\"gridContainer\">\n        <button (click)=\"onAnswer(0)\" class=\"a\">A</button>\n        <button (click)=\"onAnswer(1)\" class=\"b\">B</button>\n        <button (click)=\"onAnswer(2)\" class=\"c\">C</button>\n        <button (click)=\"onAnswer(3)\" class=\"d\">D</button>\n    </div>\n\n    <div *ngIf=\"isAnswerState()\" class=\"gridContainer\">\n        <button disabled [ngClass]=\"{'right': answer == 0, 'wrong': answer != 0}\">A</button>\n        <button disabled [ngClass]=\"{'right': answer == 1, 'wrong': answer != 1}\">B</button>\n        <button disabled [ngClass]=\"{'right': answer == 2, 'wrong': answer != 2}\">C</button>\n        <button disabled [ngClass]=\"{'right': answer == 3, 'wrong': answer != 3}\">D</button>\n    </div>\n</div>\n<!-- \n<div *ngIf=\"isResultState() || isFinalState()\">\n    <mat-card>\n        <mat-card-header>\n            <span *ngIf=\"isResultState()\">Top 5 players!</span>\n            <span *ngIf=\"isFinalState()\">Game Over! Here are the winners</span>\n            \n        </mat-card-header>\n        <mat-card-content>\n            <ol>\n                <li *ngFor=\"let player of gameData.topPlayers\">\n                    <p>{{player.name}} has {{player.score}} points!</p>\n                </li>\n            </ol>\n        </mat-card-content>\n\n        <mat-card-actions *ngIf=\"isHost()\">\n            <button *ngIf=\"isResultState()\">Next Question</button>\n            <button *ngIf=\"isFinalState()\">End Game</button>\n        </mat-card-actions>\n    </mat-card>\n</div> --> \n\n<div *ngIf=\"isFinalState()\">\n    <h2>Game over!</h2>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/create-quiz/create-quiz.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hub/create-quiz/create-quiz.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHubCreateQuizCreateQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<form (ngSubmit)=\"onSubmit(quizForm)\" #quizForm=\"ngForm\">\n\n    <div class=\"container orange\">\n        <label for=\"quizTitle\">\n            QUIZ TITLE:\n        </label>\n        <input type=\"text\" name=\"quizTitle\" id=\"quizTitle\" required\n            [(ngModel)]=\"model.title\">\n    </div>\n\n    <ul>\n        <li *ngFor=\"let q of model.questions; index as i\">\n            <div class=\"container\">\n                <button (click)=\"removeItem(i)\" class=\"close\">\n                    X\n                </button>\n\n                <button (click)=\"increaseQuizLength()\" class=\"add\">\n                    +\n                </button>\n                <div class=\"form-group\">\n                    <label [for]=\"'question-' + i\">Enter a question</label>\n                    <input type=\"text\" [name]=\"'questionTitle-' + i\" [id]=\"'question-' + i\" required\n                        [(ngModel)]=\"q.question\">\n                </div>\n                \n                <fieldset class=\"options\">\n                    <legend>Options</legend>\n\n                    <!-- <div class=\"form-group\" *ngFor=\"let option of q.options; index as j\">\n                        <label [for]=\"'option-' + j + '-from-q-' + i\"></label>\n                        <input type=\"text\" [name]=\"'o-' + j + '-q-' + i\" [id]=\"'option-' + j + '-from-q-' + i\" required\n                            [(ngModel)]=\"option\">\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <label [for]=\"'a-' + i\">A</label>\n                        <input type=\"text\" [name]=\"'option1-' + i\" [id]=\"'a-' + i\" required\n                        [(ngModel)]=\"q.options[0]\">\n                    </div>\n    \n                    <div class=\"form-group\">\n                        <label [for]=\"'b-' + i\">B</label>\n                        <input type=\"text\" [name]=\"'option2-' + i\" [id]=\"'b-' + i\" required\n                        [(ngModel)]=\"q.options[1]\">\n                    </div>\n    \n                    <div class=\"form-group\">\n                        <label [for]=\"'c-' + i\">C</label>\n                        <input type=\"text\" [name]=\"'option3-' + i\" [id]=\"'c-' + i\" required\n                        [(ngModel)]=\"q.options[2]\">\n                    </div>\n    \n                    <div class=\"form-group\">\n                        <label [for]=\"'d-' + i\">D</label>\n                        <input type=\"text\" [name]=\"'option4-' + i\" [id]=\"'d-' + i\" required\n                        [(ngModel)]=\"q.options[3]\">\n                    </div>\n     \n                </fieldset>\n\n                <div class=\"answer\">\n                    <h3>select the answer</h3>\n                    <label [for]=\"'a-radio-' + i\">A</label>\n                    <input type=\"radio\" [name]=\"'a-' + i\" [id]=\"'a-radio-' + i\" required [(ngModel)]=\"q.answerIndex\"\n                        [value]=\"0\" [checked]=\"va\">\n\n                    <label [for]=\"'b-radio-' + i\">B</label>\n                    <input type=\"radio\"  [name]=\"'b-' + i\" [id]=\"'b-radio-' + i\" required [(ngModel)]=\"q.answerIndex\"\n                        [value]=\"1\">\n                        \n                    <label [for]=\"'c-radio-' + i\">C</label>\n                    <input type=\"radio\"  [name]=\"'c-' + i\" [id]=\"'c-radio-' + i\" required [(ngModel)]=\"q.answerIndex\"\n                        [value]=\"2\">\n\n                    <label [for]=\"'d-radio-' + i\">D</label>\n                    <input type=\"radio\"   [name]=\"'d-' + i\" [id]=\"'d-radio-' + i\" required [(ngModel)]=\"q.answerIndex\"\n                        [value]=\"3\">\n                </div>\n                \n            </div>\n        </li>\n    </ul>\n    <button type=\"submit\" class=\"submit-button\" [disabled]=\"!quizForm.form.valid\">SUBMIT</button>\n</form>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/hub.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hub/hub.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHubHubComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div>\n    <button (click)=\"createServer()\" >CREATE SERVER</button>\n    <button (click)=\"onGoToJoinServer()\" class=\"highlight\">JOIN SERVER</button>\n    <button routerLink=\"/quizzes\">VIEW QUIZZES</button>\n    <button routerLink=\"/createQuiz\">CREATE A QUIZ</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/join-server.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/join-server.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHubJoinServerJoinServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<form [formGroup]=\"joinForm\"\n    (ngSubmit)=\"onSubmit(joinForm.value)\">\n\n    <div>\n        <label for=\"s\">Enter a valid server ID</label>\n        <input id=\"s\" formControlName=\"serverId\" required>\n    </div>\n\n    <div>\n        <label for=\"n\">Enter a name</label>\n        <input id=\"n\" formControlName=\"name\" required>\n    </div>\n    \n    <button type=\"submit\">Join</button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/lobby/lobby.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/lobby/lobby.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHubJoinServerLobbyLobbyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>You are currently joined on server: {{currentServer}}</h2>\n\n<h3 *ngIf=\"isHost\">you are the host</h3>\n\n<div *ngIf=\"isHost\">\n    <label for=\"quizSelect\">select quiz</label>\n    <select id=\"quizSelect\" [(ngModel)]=\"selectedQuizId\">\n        <option *ngFor=\"let quiz of quizzes\"\n                [value]=\"quiz.id\">\n            {{quiz.title}}\n        </option>\n    </select>\n    <button (click)=\"startGame()\">START GAME</button>\n</div>\n\n<ul>\n    <ng-container *ngFor=\"let user of users\">\n        <li *ngIf=\"!user.isHost\">\n            <p>{{user.name}}</p>\n        </li>\n    </ng-container>\n</ul>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/quiz-list/quiz-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hub/quiz-list/quiz-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHubQuizListQuizListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>\n        QUIZZES\n    </h2>\n\n    <mat-card *ngFor=\"let quiz of quizzes\">\n        <mat-card-header>\n            <mat-card-title>\n                {{quiz.title}}\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <p>\n               Number of questions: {{quiz.questions.length}}\n            </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button (click)=\"editQuiz(quiz.id)\" mat-button>EDIT</button>\n            <button (click)=\"deleteQuiz(quiz.id)\" mat-button>DELETE</button>\n        </mat-card-actions>\n    </mat-card>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"topnav\">\n    <a routerLink=\"/\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact:\n            true}\">Home</a>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hub_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hub/quiz-list/quiz-list.component */
    "./src/app/hub/quiz-list/quiz-list.component.ts");
    /* harmony import */


    var _hub_hub_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hub/hub.component */
    "./src/app/hub/hub.component.ts");
    /* harmony import */


    var _hub_join_server_join_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hub/join-server/join-server.component */
    "./src/app/hub/join-server/join-server.component.ts");
    /* harmony import */


    var _hub_join_server_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hub/join-server/lobby/lobby.component */
    "./src/app/hub/join-server/lobby/lobby.component.ts");
    /* harmony import */


    var _hub_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hub/create-quiz/create-quiz.component */
    "./src/app/hub/create-quiz/create-quiz.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");

    const routes = [{
      path: 'quizzes',
      component: _hub_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"]
    }, {
      path: 'createQuiz',
      component: _hub_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_7__["CreateQuizComponent"]
    }, {
      path: 'edit/:id',
      component: _hub_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_7__["CreateQuizComponent"]
    }, {
      path: 'join',
      component: _hub_join_server_join_server_component__WEBPACK_IMPORTED_MODULE_5__["JoinServerComponent"]
    }, {
      path: '',
      component: _hub_hub_component__WEBPACK_IMPORTED_MODULE_4__["HubComponent"]
    }, {
      path: 'lobby',
      component: _hub_join_server_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_6__["LobbyComponent"]
    }, {
      path: 'game',
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'kahoot-clone';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hub_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hub/quiz-list/quiz-list.component */
    "./src/app/hub/quiz-list/quiz-list.component.ts");
    /* harmony import */


    var _hub_hub_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hub/hub.component */
    "./src/app/hub/hub.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _hub_join_server_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hub/join-server/lobby/lobby.component */
    "./src/app/hub/join-server/lobby/lobby.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _hub_join_server_join_server_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hub/join-server/join-server.component */
    "./src/app/hub/join-server/join-server.component.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _hub_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./hub/create-quiz/create-quiz.component */
    "./src/app/hub/create-quiz/create-quiz.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts"); // material 


    const config = {
      url: 'http://localhost:3000',
      options: {}
    };
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hub_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_5__["QuizListComponent"], _hub_hub_component__WEBPACK_IMPORTED_MODULE_6__["HubComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _hub_join_server_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_9__["LobbyComponent"], _hub_join_server_join_server_component__WEBPACK_IMPORTED_MODULE_11__["JoinServerComponent"], _hub_create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_13__["CreateQuizComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"].forRoot(config), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/game/game.component.css":
  /*!*****************************************!*\
    !*** ./src/app/game/game.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameGameComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.gridContainer {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 50% 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbutton {\r\n    box-shadow: none;\r\n    border-radius: 0px;\r\n    font-size: xx-large;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: white;\r\n}\r\n\r\nmat-card {\r\n    margin: 1em;\r\n}\r\n\r\nmat-card-content {\r\n    font-size: xx-large;\r\n    text-align: center;\r\n}\r\n\r\n.width100 {\r\n    width: 100%;\r\n}\r\n\r\n.height100 {\r\n    height: 100%;\r\n}\r\n\r\n.wrong {\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.right {\r\n    background-color:  lightgreen;\r\n}\r\n\r\nbutton:active {\r\n    background-color: white;\r\n}\r\n\r\n.a {\r\n    background-color: #FFC265;\r\n}\r\n\r\n.b {\r\n    background-color: #E8898B;\r\n}\r\n\r\n.c {\r\n    background-color: #EBEA8F;\r\n}\r\n\r\n.d {\r\n    background-color: #89CFE8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmdyaWRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi53aWR0aDEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlaWdodDEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi53cm9uZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMyNjU7XHJcbn1cclxuXHJcbi5iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODg5OEI7XHJcbn1cclxuXHJcbi5jIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVBOEY7XHJcbn1cclxuXHJcbi5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OUNGRTg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gamestate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gamestate.service */
    "./src/app/gamestate.service.ts");
    /* harmony import */


    var _host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../host.service */
    "./src/app/host.service.ts");

    let GameComponent = class GameComponent {
      constructor(gameStateService, hostService) {
        this.gameStateService = gameStateService;
        this.hostService = hostService;
      }

      ngOnInit() {
        // let pat = new Player('pat', 50);
        // let jen = new Player('jen', 30);
        // let players: Player[] = [pat, jen];
        // players.sort((a, b) => b.getScore() - a.getScore());
        //this.gameData = new GameData(GameState.Final, true, 'a', 0, players, 'what is the question?', ['idk', 'maybe', 'hmmm', 'xD']);
        this.stateSub = this.gameStateService.getStateUpdateListener().subscribe(state => {
          console.log("state updated to! ", state);
          this.gameState = state;
        });
        this.questionSub = this.gameStateService.getQuestionUpdateListener().subscribe(q => {
          console.log('new question!', q);
          this.question = q;
        });
        this.answerSub = this.gameStateService.getAnswerUpdateListener().subscribe(answer => {
          this.answer = answer;
        });
      }

      onAnswer(index) {
        console.log("answering, ", index);
        this.gameStateService.answerQuestion(index);
        this.gameState = 1
        /* Answer */
        ;
      }

      nextQuestion() {
        this.gameStateService.nextQuestion();
      }

      ngOnDestroy() {
        this.stateSub.unsubscribe();
        this.questionSub.unsubscribe();
        this.answerSub.unsubscribe();
      }

      isHost() {
        return this.hostService.isHost;
      }

      isQuestionState() {
        return this.gameState == 0
        /* Question */
        ;
      }

      isAnswerState() {
        return this.gameState == 1
        /* Answer */
        ;
      }

      isResultState() {
        return this.gameState == 2
        /* Result */
        ;
      }

      isFinalState() {
        return this.gameState == 3
        /* Final */
        ;
      }

    };

    GameComponent.ctorParameters = () => [{
      type: _gamestate_service__WEBPACK_IMPORTED_MODULE_2__["GamestateService"]
    }, {
      type: _host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"]
    }];

    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.css */
      "./src/app/game/game.component.css")).default]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/gamestate.service.ts":
  /*!**************************************!*\
    !*** ./src/app/gamestate.service.ts ***!
    \**************************************/

  /*! exports provided: GamestateService */

  /***/
  function srcAppGamestateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamestateService", function () {
      return GamestateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./host.service */
    "./src/app/host.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let GamestateService = class GamestateService {
      constructor(socket, hostService) {
        this.socket = socket;
        this.hostService = hostService; // private gameData: GameData

        this.questionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.answerUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.totalAnswered = 0;
        this.currentQuestionIndex = 0;
        this.socket.on('selectedquiz', quiz => {
          console.log('selectedquiz');
          this.quiz = quiz;
          this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
          console.log(this.currentQuestion);
          this.questionUpdate.next(this.currentQuestion);
        });
        this.socket.on('playerAnswer', () => {
          console.log('playerAnswer');
          this.totalAnswered++;

          if (this.hostService.isHost) {
            if (this.totalAnswered >= this.hostService.totalPlayers) {
              this.answerUpdate.next(this.currentQuestion.answerIndex);
              this.socket.emit('updateAnswerForAllPlayers', this.currentQuestion.answerIndex);
              this.currentQuestionIndex++;

              if (this.currentQuestionIndex < this.quiz.questions.length) {
                this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
              }

              this.totalAnswered = 0;
              this.socket.emit('allPlayersAnswered');
            }
          }
        });
        this.socket.on('updateAnswer', answer => {
          this.answerUpdate.next(answer);
        });
        this.socket.on('updateState', state => {
          if (state == "question") {
            this.answerUpdate.next(null);
            this.updateState(0
            /* Question */
            );
          } else if (state == "answer") {
            this.updateState(1
            /* Answer */
            );
          } else if (state == "result") {
            this.updateState(2
            /* Result */
            );
          } else if (state == "final") {
            this.updateState(3
            /* Final */
            );
          }
        });
      }

      nextQuestion() {
        this.questionUpdate.next(this.currentQuestion);

        if (this.currentQuestionIndex >= this.quiz.questions.length) {
          this.socket.emit("gameover");
        } else {
          this.socket.emit('nextquestion');
        }
      }

      updateState(gameState) {
        this.stateUpdate.next(gameState);
      }

      getQuestionUpdateListener() {
        return this.questionUpdate.asObservable();
      }

      getStateUpdateListener() {
        return this.stateUpdate.asObservable();
      }

      getAnswerUpdateListener() {
        return this.answerUpdate.asObservable();
      }

      answerQuestion(answer) {
        console.log(this.hostService.uniqueId);
        let answerData = {
          id: this.hostService.uniqueId,
          answerIndex: answer
        };
        this.socket.emit('answer', answerData);
      }

      updateQuestion() {
        const target = {};
        this.questionUpdate.next(Object.assign(this.currentQuestion, target));
      }

    };

    GamestateService.ctorParameters = () => [{
      type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
    }, {
      type: _host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"]
    }];

    GamestateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GamestateService);
    /***/
  },

  /***/
  "./src/app/host.service.ts":
  /*!*********************************!*\
    !*** ./src/app/host.service.ts ***!
    \*********************************/

  /*! exports provided: HostService */

  /***/
  function srcAppHostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HostService", function () {
      return HostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let HostService = class HostService {
      constructor(socket, UserService, router, http) {
        this.socket = socket;
        this.UserService = UserService;
        this.router = router;
        this.http = http;
        this.socket.on('uniqueId', id => {
          this.uniqueId = id;
        });
      }

      createRoom() {
        this.http.post('api/lobby', null).subscribe(room => {
          this.joinId = room.roomId;
          this.router.navigate(['/lobby']);
          const hostUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.joinId, "host", true);
          this.isHost = true;
          this.connected = true;
          this.socket.emit("user joined", hostUser);
          this.socket.on('users', users => {
            this.UserService.setUsers(users);
          });
          this.socket.on('startgameHost', totalPlayers => {
            this.totalPlayers = totalPlayers;
            this.router.navigate(['/game']);
          });
          this.socket.on('tellHostAnswer', answerData => {
            this.socket.emit('hostAnswer', answerData);
          });
        });
      }

      connect(user) {
        if (!this.connected) {
          this.joinId = user.joinId;
          this.isHost = false;
          this.socket.emit("user joined", user);
          this.connected = true;
          this.router.navigate(['/lobby']);
          this.socket.on('users', users => {
            this.UserService.setUsers(users);
          });
          this.socket.on('startgame', () => {
            this.router.navigate(['/game']);
          });
        }
      }

      startGame(selectedQuizId) {
        this.socket.emit('startgame', selectedQuizId);
      }

      getJoinId() {
        return this.joinId;
      }

    };

    HostService.ctorParameters = () => [{
      type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]
    }, {
      type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    HostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HostService);
    /***/
  },

  /***/
  "./src/app/hub/create-quiz/create-quiz.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/hub/create-quiz/create-quiz.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHubCreateQuizCreateQuizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.container {\r\n    background-color: white;\r\n    border: solid;\r\n    padding: 1em;\r\n    margin: 1em;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput {\r\n    border: dashed;\r\n    margin-left: 4px;\r\n    /* display: block; */\r\n}\r\n\r\n.form-group{\r\n    margin: 10px;\r\n}\r\n\r\n.options {\r\n    border: solid;\r\n    width: 50%;\r\n}\r\n\r\nbutton {\r\n    margin: 1vw;\r\n}\r\n\r\nbutton.close {\r\n    float: right;\r\n    color: white;\r\n    background-color: red;\r\n    font-size: 2em;\r\n}\r\n\r\nbutton.add {\r\n    float: right;\r\n    color: white;\r\n    background-color: green;\r\n    font-size: 2em;\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border-color: red;\r\n}\r\n\r\n.container.orange {\r\n    background-color:  orange;\r\n}\r\n\r\n.submit-button {\r\n    width: 50%;\r\n    color: white;\r\n    background-color: orange;\r\n    font-size: 2em;\r\n    margin: 1.5vw;\r\n}\r\n\r\n.submit-button:disabled {\r\n    background-color: grey;\r\n    opacity: 65%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9odWIvY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAvaHViL2NyZWF0ZS1xdWl6L2NyZWF0ZS1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyOiBkYXNoZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXZ3O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICBvcmFuZ2U7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMS41dnc7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBvcGFjaXR5OiA2NSU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/hub/create-quiz/create-quiz.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/hub/create-quiz/create-quiz.component.ts ***!
    \**********************************************************/

  /*! exports provided: CreateQuizComponent */

  /***/
  function srcAppHubCreateQuizCreateQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateQuizComponent", function () {
      return CreateQuizComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/quiz.service */
    "./src/app/quiz.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CreateQuizComponent = class CreateQuizComponent {
      constructor(quizService, route) {
        this.quizService = quizService;
        this.route = route;
        this.mode = "create";
      }

      ngOnInit() {
        this.model = {
          questions: [],
          title: ''
        };
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('id')) {
            this.mode = "edit";
            this.id = paramMap.get('id');
            this.quizService.getQuiz(this.id).subscribe(quizData => {
              this.model = {
                questions: quizData.questions,
                title: quizData.title
              };
            });
          } else {
            this.increaseQuizLength();
            console.log('create mode');
          }
        });
      }

      increaseQuizLength() {
        const q = {
          question: '',
          options: [],
          answerIndex: 0
        };
        this.model.questions.push(q);
      }

      decreaseQuizLength() {
        if (this.model.questions.length > 1) {
          this.model.questions.pop();
        }
      }

      removeItem(index) {
        if (this.model.questions.length > 1) {
          this.model.questions.splice(index, 1);
        }
      }

      onSubmit(quizForm) {
        if (quizForm.invalid) {
          return;
        }

        if (this.mode == "create") {
          this.quizService.saveQuizToServer(this.model);
        } else {
          const newQuiz = {
            id: this.id,
            title: this.model.title,
            questions: this.model.questions
          };
          this.quizService.updateQuiz(this.id, newQuiz);
        }

        console.log(this.model);
        alert('quiz change success!'); // quizForm.form.reset();
      }

    };

    CreateQuizComponent.ctorParameters = () => [{
      type: src_app_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    CreateQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-quiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-quiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/create-quiz/create-quiz.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-quiz.component.css */
      "./src/app/hub/create-quiz/create-quiz.component.css")).default]
    })], CreateQuizComponent);
    /***/
  },

  /***/
  "./src/app/hub/hub.component.css":
  /*!***************************************!*\
    !*** ./src/app/hub/hub.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppHubHubComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n    margin: 10vw auto;\r\n    padding: 4vw;\r\n    width: 75%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    background-color: white;\r\n    border-style: solid;\r\n    opacity: 50%;\r\n    -webkit-transition: linear 0.5s;\r\n    transition: linear 0.5s;\r\n}\r\n\r\ndiv:hover {\r\n    opacity: 1;\r\n}\r\n\r\nbutton {\r\n    padding: 1vw;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.highlight {\r\n    background-color: orange;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #454545;\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    button {\r\n        font-size: 3em;\r\n    }\r\n  }\r\n\r\nh1 {\r\n    font-size: 3em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9odWIvaHViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLCtCQUF1QjtJQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7RUFDRjs7QUFFRjtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiYXBwL2h1Yi9odWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBtYXJnaW46IDEwdncgYXV0bztcclxuICAgIHBhZGRpbmc6IDR2dztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBsaW5lYXIgMC41cztcclxufVxyXG5cclxuZGl2OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/hub/hub.component.ts":
  /*!**************************************!*\
    !*** ./src/app/hub/hub.component.ts ***!
    \**************************************/

  /*! exports provided: HubComponent */

  /***/
  function srcAppHubHubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HubComponent", function () {
      return HubComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../host.service */
    "./src/app/host.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let HubComponent = class HubComponent {
      constructor(HostService, router) {
        this.HostService = HostService;
        this.router = router;
      }

      ngOnInit() {}

      ngOnDestroy() {}

      onGoToJoinServer() {
        if (this.HostService.connected) {
          this.router.navigate(['/lobby']);
        } else {
          this.router.navigate(['/join']);
        }
      }

      createServer() {
        this.HostService.createRoom();
      }

    };

    HubComponent.ctorParameters = () => [{
      type: _host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    HubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hub',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hub.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/hub.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hub.component.css */
      "./src/app/hub/hub.component.css")).default]
    })], HubComponent);
    /***/
  },

  /***/
  "./src/app/hub/join-server/join-server.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/hub/join-server/join-server.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHubJoinServerJoinServerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\r\n    margin: 10vw auto;\r\n    padding: 4vw;\r\n    width: 75%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    background-color: white;\r\n    border-style: solid;\r\n    opacity: 75%;\r\n    -webkit-transition: linear 1s;\r\n    transition: linear 1s;\r\n}\r\n\r\nform:hover {\r\n    opacity: 1;\r\n}\r\n\r\ninput { \r\n    font-size: 2vw;\r\n    border: dashed;\r\n    display: block;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    font-size: 2vw;\r\n}\r\n\r\nbutton {\r\n    padding: 1vw;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #454545;\r\n}\r\n\r\n@media only screen and (min-width: 700px) {\r\n    button {\r\n        font-size: 4em;\r\n    }\r\n  }\r\n\r\ninput.ng-invalid.ng-touched {\r\n    border-color: red;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9odWIvam9pbi1zZXJ2ZXIvam9pbi1zZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsOEJBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBcUI7SUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7RUFDRjs7QUFFRjtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAvaHViL2pvaW4tc2VydmVyL2pvaW4tc2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIG1hcmdpbjogMTB2dyBhdXRvO1xyXG4gICAgcGFkZGluZzogNHZ3O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBsaW5lYXIgMXM7XHJcbn1cclxuXHJcbmZvcm06aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW5wdXQgeyBcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgYm9yZGVyOiBkYXNoZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTQ1NDU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/hub/join-server/join-server.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/hub/join-server/join-server.component.ts ***!
    \**********************************************************/

  /*! exports provided: JoinServerComponent */

  /***/
  function srcAppHubJoinServerJoinServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinServerComponent", function () {
      return JoinServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../host.service */
    "./src/app/host.service.ts");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let JoinServerComponent = class JoinServerComponent {
      constructor(HostService, formBuilder) {
        this.HostService = HostService;
        this.formBuilder = formBuilder;
        this.joinForm = this.formBuilder.group({
          name: '',
          serverId: ''
        });
      }

      ngOnInit() {}

      onSubmit(joinData) {
        this.name = joinData.name;
        this.serverId = joinData.serverId;

        if (this.name != '' && this.serverId != '') {
          const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.serverId, this.name, false);
          this.HostService.connect(user);
          this.joinForm.reset();
        }
      }

      join() {
        let name = prompt('enter a name');
        let user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.serverId, name, false);
        this.HostService.connect(user);
      }

    };

    JoinServerComponent.ctorParameters = () => [{
      type: _host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }];

    JoinServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-join-server',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./join-server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/join-server.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./join-server.component.css */
      "./src/app/hub/join-server/join-server.component.css")).default]
    })], JoinServerComponent);
    /***/
  },

  /***/
  "./src/app/hub/join-server/lobby/lobby.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/hub/join-server/lobby/lobby.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHubJoinServerLobbyLobbyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n    font-size: 2em;\r\n}\r\n\r\nli {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9odWIvam9pbi1zZXJ2ZXIvbG9iYnkvbG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC9odWIvam9pbi1zZXJ2ZXIvbG9iYnkvbG9iYnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hub/join-server/lobby/lobby.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/hub/join-server/lobby/lobby.component.ts ***!
    \**********************************************************/

  /*! exports provided: LobbyComponent */

  /***/
  function srcAppHubJoinServerLobbyLobbyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LobbyComponent", function () {
      return LobbyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../host.service */
    "./src/app/host.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var src_app_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/quiz.service */
    "./src/app/quiz.service.ts");

    let LobbyComponent = class LobbyComponent {
      constructor(userService, HostService, quizService) {
        this.userService = userService;
        this.HostService = HostService;
        this.quizService = quizService;
        this.users = [];
        this.quizzes = [];
      }

      ngOnInit() {
        this.currentServer = this.HostService.getJoinId();
        this.userService.getUsers(this.currentServer);
        this.userSub = this.userService.getUserUpdateListender().subscribe(users => {
          this.users = users;
        });
        this.isHost = this.HostService.isHost;

        if (this.isHost == true) {
          this.quizService.getQuizzes();
          this.quizSub = this.quizService.getQuizUpdateListener().subscribe(quizzes => {
            this.quizzes = quizzes;
          });
        }
      }

      ngOnDestroy() {
        this.userSub.unsubscribe();
      }

      startGame() {
        console.log('starting game!');

        if (this.selectedQuizId) {
          this.HostService.startGame(this.selectedQuizId);
        } else {
          alert('you must select a quiz');
        }
      }

    };

    LobbyComponent.ctorParameters = () => [{
      type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
    }, {
      type: _host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]
    }, {
      type: src_app_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]
    }];

    LobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lobby',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lobby.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/join-server/lobby/lobby.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lobby.component.css */
      "./src/app/hub/join-server/lobby/lobby.component.css")).default]
    })], LobbyComponent);
    /***/
  },

  /***/
  "./src/app/hub/quiz-list/quiz-list.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/hub/quiz-list/quiz-list.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHubQuizListQuizListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    padding: 1em;\r\n    margin: 1em;\r\n}\r\n\r\nmat-card {\r\n    margin-bottom: 1em;\r\n    max-width: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9odWIvcXVpei1saXN0L3F1aXotbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2h1Yi9xdWl6LWxpc3QvcXVpei1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hub/quiz-list/quiz-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hub/quiz-list/quiz-list.component.ts ***!
    \******************************************************/

  /*! exports provided: QuizListComponent */

  /***/
  function srcAppHubQuizListQuizListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizListComponent", function () {
      return QuizListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/quiz.service */
    "./src/app/quiz.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let QuizListComponent = class QuizListComponent {
      constructor(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.quizzes = [];
      }

      ngOnInit() {
        this.quizService.getQuizzes();
        this.quizSub = this.quizService.getQuizUpdateListener().subscribe(quizzes => {
          this.quizzes = quizzes;
        });
      }

      deleteQuiz(quizId) {
        this.quizService.deleteQuiz(quizId);
      }

      editQuiz(quizId) {
        this.router.navigate(['edit', quizId]);
      }

      ngOnDestroy() {
        this.quizSub.unsubscribe();
      }

    };

    QuizListComponent.ctorParameters = () => [{
      type: src_app_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    QuizListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hub/quiz-list/quiz-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz-list.component.css */
      "./src/app/hub/quiz-list/quiz-list.component.css")).default]
    })], QuizListComponent);
    /***/
  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class User {
      constructor(joinId, name, isHost) {
        this.joinId = joinId;
        this.name = name;
        this.isHost = isHost;
      }

    }
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Add a black background color to the top navigation */\r\n.topnav {\r\n    overflow: hidden;\r\n    width: 25%;\r\n  }\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 4vw;\r\n    background-color: #333;\r\n  }\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/* Add a color to the active/current link */\r\n.topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n.active {\r\n    font-size: 4em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQ7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBRUEsOENBQThDO0FBQzlDO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0FBR0EsdUNBQXVDO0FBQ3ZDO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUVBLDJDQUEyQztBQUMzQztJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFRjtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuLnRvcG5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavBarComponent = class NavBarComponent {
      constructor() {}

      ngOnInit() {}

    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/quiz.service.ts":
  /*!*********************************!*\
    !*** ./src/app/quiz.service.ts ***!
    \*********************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let QuizService = class QuizService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
        this.quizzes = [];
        this.quizzesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      saveQuizToServer(quiz) {
        this.http.post('api/quizzes', quiz).subscribe(response => {
          this.router.navigate(['quizzes']);
        });
      }

      getQuizUpdateListener() {
        return this.quizzesUpdated.asObservable();
      }

      getQuizzes() {
        this.http.get('api/quizzes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(quizData => {
          return quizData.quizzes.map(quiz => {
            return {
              title: quiz.title,
              questions: quiz.questions,
              id: quiz._id
            };
          });
        })).subscribe(transformedQuizzes => {
          this.quizzes = transformedQuizzes;
          this.quizzesUpdated.next([...this.quizzes]);
        });
      }

      getQuiz(id) {
        return this.http.get('api/quizzes/' + id);
      }

      updateQuiz(oldQuizId, newQuiz) {
        this.http.put('api/quizzes/' + oldQuizId, newQuiz).subscribe(response => {
          const updatedQuizzes = [...this.quizzes];
          const oldQuizIndex = updatedQuizzes.findIndex(q => q.id == oldQuizId);
          updatedQuizzes[oldQuizIndex] = newQuiz;
          this.quizzes = updatedQuizzes;
          this.quizzesUpdated.next([...this.quizzes]);
          this.router.navigate(['quizzes']);
        });
      }

      deleteQuiz(id) {
        this.http.delete('api/quizzes/' + id).subscribe(() => {
          const updatedQuizzes = this.quizzes.filter(quiz => quiz.id !== id);
          this.quizzes = updatedQuizzes;
          this.quizzesUpdated.next([...this.quizzes]);
        });
      }

    };

    QuizService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuizService);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let UserService = class UserService {
      constructor(http) {
        this.http = http;
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      getUsers(joinId) {
        this.http.get('api/users/' + joinId).subscribe(newUsers => {
          console.log("user service(new users): ", newUsers);
          this.users = newUsers;
          this.usersUpdated.next([...this.users]);
        });
      }

      setUsers(users) {
        this.users = users;
        this.usersUpdated.next([...this.users]);
      }

      getUserUpdateListender() {
        return this.usersUpdated.asObservable();
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Patrick Telfer\Desktop\Web\kahoot-clone\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map