import { browser, element, by, protractor, $$, $ } from 'protractor';
import { HomePage } from "./pages/HomePage";

describe("Going to write first test", () => {
    //Globally
    var homePage = new HomePage();

    it("should pass without any issue", async () => {
        //Open browser
        await homePage.OpenBrowser("http://localhost:8808/");

        //Get the headings
        await homePage.GetAllHeadings();

        //Click the first heading
        await homePage.ClickFirstHeading();
    });

    it("should not pass as the values are undefined", () => {

    })

    it("Without any expectation", () => {

    })



});




