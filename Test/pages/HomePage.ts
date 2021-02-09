//import the class
import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";
import * as json from 'load-json-file' 
import { importExpr } from '@angular/compiler/src/output/output_ast';
import {ExcelUtil} from '../utilities/Excelutil';
const Locators = {
    heading: {
        type:IdentificationType[IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },

    headings: {
        type: IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    },
    searchText:{
        type: IdentificationType[IdentificationType.Css],
        value: "[class='form-control']"
    }
}


export class HomePage extends BasePage {

    //Selenium framework development course heading
    heading = this.ElementLocator(Locators.heading).element(by.xpath("//span[contains(text(),'4th')]"));


    //All heading                           
    headings = this.ElementLocator(Locators.headings);
    //Search text
    searchText= this.ElementLocator(Locators.searchText);

    //Open browser
    async OpenBrowser(url: string){
        await browser.get(url);
    }

    async GetAllHeadings(){
        await this.headings.getText().then((text) => {
            console.log("The heading is :" + text);
        });
    }

    async ClickFirstHeading(heading: string){
        console.log("Can I print the input value from StepDefinition, if yes, this is it" + heading);
        await this.heading.click();
    }
    async EnterDataInSearchFromJson(){
        json("Test\\steps\\Data.json").then((x) => {
            console.log(x);
        this.searchText.sendKeys((<any>x).SearchValue);
        });}
    async EnterDataInSearchFromExcel(){
       let sheet=<SearchData>ExcelUtil.ReadExcelSheet("Data.xlsx");
       console.log(sheet.SearchValue);

       this.searchText.sendKeys(sheet.SearchValue);
       browser.sleep(5000);
    }

}
interface SearchData{
    SearchValue:string,
    CourseTitle: string,
    Durations: string
}

