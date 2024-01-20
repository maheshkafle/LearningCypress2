/// <reference types="Cypress" />

describe('My First Test Suite', 
()=>
{
    it('My First Testcase', ()=>
    {   
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        //verify four products gets listed after searching with keyword 'ca'
        cy.get('.product:visible').should('have.length', 4) //way to select only visible elements in jquery by using :visible keyword
        //Parent child chaining to add product to the cart
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()   
    })
})  