//Below command is used for cypress code completion
/// <reference types="Cypress" /> 
import HomePage from "./pageObjects/homePage"

describe('My second Test Suite', 
()=>
{
    before( ()=>
    {
        //runs once before all the tests in the block
        cy.fixture('login').then( (data)=>
        {
            globalThis.data=data 
        })

    })

    it('My second Testcase', ()=>
    {   
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.wait(1000)
        homePage.getFullName().type(data.name)
        homePage.getGender().select(data.gender)
        homePage.getTwoWayDataBinding().should('have.value', data.name)
        homePage.getNameField().should('have.attr', 'minlength', '2')
        homePage. getEntrepreneurStatus().should('be.disabled')
        cy.wait(1000)
        homePage. getShopNavbar().click()
        globalThis.data.productName.forEach((el) => 
        {
            cy.selectProduct(el)
        });
    })
})  