//Below command is used for cypress code completion
/// <reference types="Cypress" /> 

describe('My First Test Suite', 
()=>
{
    it('My First Testcase', ()=>
    {   
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.viewport(1280,800)
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        //verify four products gets listed after searching with keyword 'ca'
        cy.get('.product:visible').should('have.length', 4) //way to select only visible elements in jquery by using :visible keyword
        //Parent child chaining to add product to the cart
        cy.get('.products').as('productLocator') //aliasing concept
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()   
        //Using text() method to click on products
        cy.get('@productLocator').find('.product').each(($ele, index, $list)=>
        {
            const text = $ele.find('.product-name').text()
            if(text.includes('Cashews'))
            {
              cy.wrap($ele).find('button').click()  //we need to wrap the ele to resolve the promise here
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
 
        //this is to print in logs
        cy.get('.brand').then((logoelement)=>
        {
            cy.log(logoelement.text())
        
        })
    })
})  