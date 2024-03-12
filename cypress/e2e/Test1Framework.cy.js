//Below command is used for cypress code completion
/// <reference types="Cypress" /> 

describe('Test1 ', ()=>
    {   
        before( ()=>
            {
                //runs once before all the tests in the block
                cy.fixture('login').then( (data)=>
                {
                   globalThis.data=data 
                })

            })
        
        it('Framework', ()=>
            {   
                cy.visit('https://rahulshettyacademy.com/angularpractice/')
                cy.get('input[name="name"]:nth-child(2)').type(data.name)
                cy.get('select').select(data.gender)
                cy.get(':nth-child(4) > .ng-untouched').should('have.value', data.name)
                cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
                cy.get('#inlineRadio3').should('be.disabled')
            })
    })  