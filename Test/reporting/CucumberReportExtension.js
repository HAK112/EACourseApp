"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var mkdirp_1 = require("mkdirp");
var report = require("cucumber-html-reporter");
var Cucumber = require('cucumber');
var CucumberReportExtension = /** @class */ (function () {
    function CucumberReportExtension() {
        var _this = this;
        this.jsonDir = process.cwd() + "/reports/json";
        this.htmlDir = process.cwd() + "/reports/html";
        this.jsonFile = this.jsonDir + "/cucumber_report.json";
        this.cucumberReporterOptions = {
            theme: "bootstrap",
            jsonFile: this.jsonFile,
            output: this.htmlDir + "/cucumber_reporter.html",
            reportSuiteAsScenarios: true,
            metadata: {
                "App Version": "0.0.1",
                "Test Environment": "Testing",
                "Browser": "Chrome  59.0.945",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };
        this.JsonFormatter = new Cucumber.JsonFormatter({
            log: function (jLog) {
                _this.CreateReportFile(_this.jsonDir, _this.jsonFile, jLog);
                _this.GenerateCucumberReport(_this.cucumberReporterOptions);
            }
        });
    }
    CucumberReportExtension.prototype.CreateReportFile = function (dirName, fileName, fileContent) {
        //Check if the directory exist
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
        try {
            fs.writeFileSync(fileName, fileContent);
        }
        catch (message) {
            console.log("Failed to create File/Directory :" + message);
        }
    };
    CucumberReportExtension.prototype.GenerateCucumberReport = function (cucumberReportOption) {
        report.generate(cucumberReportOption);
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
exports.JsonFormatter = new CucumberReportExtension().JsonFormatter;
//# sourceMappingURL=CucumberReportExtension.js.map