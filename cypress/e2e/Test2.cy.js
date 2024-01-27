//Below command is used for cypress code completion
/// <reference types="Cypress" /> 

describe('Test ', ()=> 
{
    it('and automate checkboxes in cypress', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //checking single checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //uncheking a checkbox
        cy.wait(2000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //checking multitple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')
    })

    it('static dropdown using select command with cypress', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option1').should('have.value', 'option1')
    })

    it('dynamic dropdowns using each command', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#autocomplete").type('United')
        
        cy.get('.ui-menu-item div').each(($ele, index, $list) =>
        {
            if($ele.text()==='United Arab Emirates')
            {
                $ele.click()
            }
        })
        cy.get("#autocomplete").should('have.value', 'United Arab Emirates')
    })

    it('visible and invisible elements using assertions in cypress', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})