import config from '../../cypress.json';

const {baseUrl} = config;

beforeEach(() => {
    cy.visit('/shallow-true');
});

it('calls getServerSideProps on each query param change', () => {
    cy.get('label:contains("Name:") input').type('a');
    cy.get('span').should('have.text', '');
    cy.url().should('equal', `${baseUrl}shallow-true?name=a`);
});
