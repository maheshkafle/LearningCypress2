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

    it('radio buttons', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').check().should('be.checked')
    })

    it('Alerts dialog', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type('Mahesh')
        cy.get('#alertbtn').click()
        Cypress.on('window:alert', (str) =>
        {
            expect(str).to.be.equal('Hello Mahesh, share this practice page and share your knowledge')
        })
    })

    it('Confirm dialog', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        Cypress.on('window:confirm', (str) =>
        {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Child tab with combination of cypress and jquery commands', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })

    it.only('Web tables with cypress using each command', ()=> 
    {
        cy.viewport(1280,800)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
        {
            const text= $el.text()
            if(text.includes('WebSecurity'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('20')
                })
            }
        })
    })

})