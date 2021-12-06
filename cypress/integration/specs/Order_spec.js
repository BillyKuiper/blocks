
describe('add items in shoppingcart + try place order no account', () => {
        it('Has elements', () => {
            cy.visit('http://localhost:8080')
            cy.wait(500);
            cy.get('.row')
                .next()
                .contains('Add to Shoppingcart')
                .click()
            cy.wait(500);
            cy.contains('Add to Shoppingcart').click()
            cy.get('nav')
                .get('.shoppingcart')
                .click()
            cy.wait(555);
            cy.contains('Coal')

            cy.get('table[id="cart"]')
                .contains('199.98')
            cy.contains('Checkout').click();
            cy.wait(555);
            cy.contains('Click here to login').click();
        })
    });

describe('add items in shoppingcart + try place order with account', () => {
    it('Has elements', () => {
        cy.visit('http://localhost:8080')
        cy.wait(500);
        cy.get('.row')
            .next()
            .contains('Add to Shoppingcart')
            .click()
        cy.wait(500);
        cy.contains('Add to Shoppingcart').click()
        cy.get('nav')
            .get('.shoppingcart')
            .click()
        cy.wait(555);
        cy.contains('Coal')

        cy.get('table[id="cart"]')
            .contains('199.98')
        cy.contains('Checkout').click();
        cy.wait(555);
        cy.contains('Click here to login').click();

        cy.contains('Login').click();
        cy.get('.form-group').first().type('billy.kuiper@hotmail.com')
            .next().type('test')
            .next().click();
        cy.contains('billy.kuiper@hotmail.com');
        cy.contains('Logout');

        cy.get('nav')
            .get('.shoppingcart')
            .click();
        cy.wait(555);
        cy.get('table[id="cart"]')
            .contains('199.98')
        cy.contains('Checkout').click();
        cy.wait(555);
        cy.contains('Confirm Order').click();
        cy.wait(555);
        cy.get('button').contains('Order').click();
        cy.contains('Your order has been placed!');
        cy.wait(5000);
        cy.contains('Welcome to the homepage!');
    })
});
