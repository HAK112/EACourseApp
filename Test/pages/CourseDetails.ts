

import { BasePage, IdentificationType } from "./BasePage";

const Locators = {

    Duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//Duration"
    },
    courseHeading:{
        type:IdentificationType[IdentificationType.Xpath],
        value:"//h2"
    }

}


export class CourseDetailsPage extends BasePage{

    duration = this.ElementLocator(Locators.Duration);

    courseHeading = this.ElementLocator(Locators.courseHeading);

    ClickDuration(){
        this.duration.click();
    }

    async GetCourseHeading(){
        await this.courseHeading;
    }
}