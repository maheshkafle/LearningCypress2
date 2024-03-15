//Below command is used for cypress code completion
/// <reference types="Cypress" /> 

import HomePage from "./pageObjects/homePage"
import ProductPage from "./pageObjects/productPage"
import CheckoutPage from "./pageObjects/checkoutPage"

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
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
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
        productPage.getCheckoutBtn().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each((el)=>
        {
            var resultText = el.text()
            var amount = resultText.split(" ")
            amount = amount[1].trim()
            sum = Number(sum) + Number(amount)
        }).then(()=>{
            cy.log(sum)
        })

        cy.get('h3 > strong').then((el)=>
        {
            var totalAmount = el.text()
            totalAmount = totalAmount.split(" ")
            totalAmount = totalAmount[1].trim()
            cy.log(totalAmount)
            expect(sum).to.be.eql(Number(totalAmount))
        })

        checkoutPage.getCheckoutBtn().click()
        checkoutPage.getCountryDropdown().type("united kingdom")
        checkoutPage.getSuggestedCountry().click()
        checkoutPage.getPurchaseBtn().click()
        checkoutPage.getSuccessDiv().then((el)=>{
            var msgSuccess  = el.text()
            cy.log(msgSuccess)
            expect(msgSuccess.includes('Success')).to.be.true
        })
       
    })
})  