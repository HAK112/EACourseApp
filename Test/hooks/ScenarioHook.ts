import { defineSupportCode } from 'cucumber'
import { browser } from "protractor";
import { config } from "../steps/config";
import { JsonFormatter } from "../reporting/CucumberReportExtension";

defineSupportCode(({ registerHandler, registerListener,setDefaultTimeout }) => {
    setDefaultTimeout(50000);
    registerHandler('BeforeFeature', async () => {
        console.log("Executing before feature !!");
    });

    registerHandler('BeforeScenario', async () => {
        await browser.get(config.baseUrl);
    });

    registerHandler('AfterStep', async () => {
        console.log("Step executed")
    });

    registerHandler('AfterScenario', async () => {
        console.log("Scenario executed !!");
    });

    registerHandler('AfterFeature', async () => {
        console.log("Executing After feature !!");
    });
    registerHandler('StepResult', async (StepResult) => {
        console.log("Executing After feature !!");
      if(StepResult.isFailed()){
           return browser.takeScreenshot().then((screenshot) => {
               var decodeImage = new Buffer(screenshot, "base64");
               StepResult.attachments.push({
                   data: decodeImage.toString('base64'),
                   mimeType: 'image/png'

               });
           });
        }
    });
    registerListener(JsonFormatter);
    

});
