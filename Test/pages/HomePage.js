"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import the class
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var json = require("load-json-file");
var Excelutil_1 = require("../utilities/Excelutil");
var Locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },
    headings: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    },
    searchText: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "[class='form-control']"
    }
};
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Selenium framework development course heading
        _this.heading = _this.ElementLocator(Locators.heading).element(protractor_1.by.xpath("//span[contains(text(),'4th')]"));
        //All heading                           
        _this.headings = _this.ElementLocator(Locators.headings);
        //Search text
        _this.searchText = _this.ElementLocator(Locators.searchText);
        return _this;
    }
    //Open browser
    HomePage.prototype.OpenBrowser = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.GetAllHeadings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.headings.getText().then(function (text) {
                            console.log("The heading is :" + text);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ClickFirstHeading = function (heading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Can I print the input value from StepDefinition, if yes, this is it" + heading);
                        return [4 /*yield*/, this.heading.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.EnterDataInSearchFromJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                json("Test\\steps\\Data.json").then(function (x) {
                    console.log(x);
                    _this.searchText.sendKeys(x.SearchValue);
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.EnterDataInSearchFromExcel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = Excelutil_1.ExcelUtil.ReadExcelSheet("Data.xlsx");
                console.log(sheet.SearchValue);
                this.searchText.sendKeys(sheet.SearchValue);
                protractor_1.browser.sleep(5000);
                return [2 /*return*/];
            });
        });
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map