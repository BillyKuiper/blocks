
describe('Correct Flow', () => {
        it('Has elements', () => {
            cy.visit('http://localhost:8080')
            cy.contains('Customer Service')
                .click()
            cy.contains('Enter Chat').click()

            cy.get('.chatbox__message').type('1');
            cy.contains('Send Message').click();
            cy.wait(1000);
            cy.contains('1. Wat is de levertijd?');
            cy.get('.chatbox__message').type('1');
            cy.contains('Send Message').click();
            cy.contains('De levertijd kan varieren tussen 2 tot 5 dagen. Als dit langer duurt contacteer ons op blocksdotcom@gmail.com');
            cy.contains('Als u het keuzemenu opnieuw wilt doorlopen toets dan een 4');
            cy.get('.chatbox__message').type('4');
            cy.contains('Send Message').click();
        })
    });
