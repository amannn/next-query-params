import config from '../../cypress.json';

const {baseUrl} = config;

beforeEach(() => {
    cy.visit('/shallow-false');
});

it('calls getServerSideProps on each query param change', () => {
    cy.get('label:contains("Name:") input').type('a');
    cy.get('span').should('have.text', 'a');
    cy.url().should('equal', `${baseUrl}shallow-false?name=a`);
});
