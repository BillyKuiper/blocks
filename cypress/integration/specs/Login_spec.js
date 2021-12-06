
describe('Login test succes', () => {
        it('Has elements', () => {

            cy.visit('http://localhost:8080')
            cy.contains('Login').click();
            cy.get('.form-group').first().type('billy.kuiper@hotmail.com')
                .next().type('test')
                .next().click();
            cy.contains('billy.kuiper@hotmail.com');
            cy.contains('Logout');
        })
    });

describe('Login test fail', () => {
    it('Has elements', () => {

        cy.visit('http://localhost:8080')
        cy.contains('Login').click();
        cy.get('.form-group').first().type('test@test.nl')
            .next().type('ased')
            .next().click();
        cy.contains('Your password and email do not match');
    })
});

describe('Incomplete Login', () => {
    it('Has elements', () => {

        cy.visit('http://localhost:8080')
        cy.contains('Login').click();
        cy.get('.form-group').first()
            .next().type('ased')
            .next().click();
        cy.contains('Your password and email do not match');
    })

    it('Has elements', () => {

        cy.visit('http://localhost:8080')
        cy.contains('Login').click();
        cy.get('.form-group').first().type('efhuweusikjlfghn@siekngvs.nl')
            .next()
            .next().click();
        cy.contains('Your password and email do not match');
    })
});
