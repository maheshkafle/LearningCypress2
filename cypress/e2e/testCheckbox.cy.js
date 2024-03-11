describe('Test ', ()=>
{
    it('checkboxes', ()=> 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').click().should('be.checked')
        cy.wait(3000)
        cy.get('#checkBoxOption1').click().should('not.be.checked')
        cy.wait(3000)
        cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
    })


    it('radiobuttons', ()=> 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        cy.get('fieldset input[value="radio2"]').check().should('be.checked')
    })

    it(' window alerts', ()=> 
    {   
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        cy.get('#name').type('Kaleeswaran Gunasekaran')
        const expectedAlertMsg = 'Hello Kaleeswaran Gunasekaran, share this practice page and share your knowledge'
        cy.get("#alertbtn").click()
        cy.on('window:alert', (str)=>
        {        
            expect(str).to.be.equal(expectedAlertMsg)
        })

    })

    it(' window confirm', ()=> 
    {
        const expectedConfirmMsg = 'Hello , Are you sure you want to confirm?'
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(3000)
        cy.get("#confirmbtn").click()
        cy.on('window:confirm', (str)=>
        {   
            expect(str).to.be.equal(expectedConfirmMsg)
        })

    })

    it(' Static dropdown', ()=> 
    {
        cy.viewport(1366,768)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
    })

    it(' Dynamic dropdown', ()=> 
    {
        cy.viewport(1366,768)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#autocomplete").type('united')
        cy.get('.ui-menu-item div').each((el)=>
        {
            const text = el.text()
            if(text==="United Arab Emirates")
            {
                cy.wrap(el).click()
            }
        })
        cy.get("#autocomplete").should('have.value', 'United Arab Emirates')
    
    })

    it(' Visibility of webelements', ()=> 
    {
        cy.viewport(1366,768)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').should('be.visible').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').should('be.visible').click()
        cy.get('#displayed-text').should('be.visible')
    })


    it.only(' open tabs and windows', ()=> 
    {
        cy.viewport(1366,768)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', ()=>{
            cy.go('back')
        })
    })
    
})