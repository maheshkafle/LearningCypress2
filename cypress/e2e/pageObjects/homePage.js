class HomePage 
{
    getFullName()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender()
    {
        return cy.get('select')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getNameField()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    getEntrepreneurStatus()
    {
        return cy.get('#inlineRadio3')
    }

    getShopNavbar()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage