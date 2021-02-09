import { defineSupportCode,TableDefinition } from 'cucumber'
import { HomePage } from "../pages/HomePage";
import { expect ,assert} from 'chai'
import { CourseDetailsPage } from "../pages/CourseDetails";
import { element } from 'protractor';

defineSupportCode(({Given, When, Then}) => {
    
    var homePage = new HomePage();
    var coursedetails = new CourseDetailsPage();

    Given(/^I navigate to application$/, async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
    });

    When(/^I get all the heading$/, async () => {
        await homePage.GetAllHeadings();
    });

    When(/^I click the '([^\"]*)' course$/, async (headingText) => {
        await homePage.ClickFirstHeading(headingText.toString());
    });

    Then(/^I should see '([^\"]*)' course in coursedetails page$/, async (course) => {
        expect(coursedetails.GetCourseHeading).to.be.not.null;
    });
    
    Then(/^I should see all course information in coursedetails page$/, async (table:TableDefinition) => {
        let localtable =[
            [ 'Selenium', '', '2' ],
            [ 'Java', '', '3' ]
        ]
        table.rows().forEach(element =>{
            console.log(element);

        });
        assert.deepEqual(localtable,table.rows(),"The DataSource is not correct");
});
    Given(/^I enter text in Search from external data Source$/, async () => {
        await homePage.EnterDataInSearchFromExcel();
        
    });

});