class CheckoutPage 
{
    getCheckoutBtn()
    {
        return  cy.get(':nth-child(6) > :nth-child(5) > .btn')
    }

    getCountryDropdown()
    {
        return cy.get('#country')
    }

    getSuggestedCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getPurchaseBtn()
    {
        return cy.get('.ng-untouched > .btn')
    }

    getSuccessDiv()
    {
        return cy.get('.alert')
    }
}

export default CheckoutPage