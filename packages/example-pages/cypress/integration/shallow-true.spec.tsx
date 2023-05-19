import config from '../../cypress.json';

const {baseUrl} = config;

beforeEach(() => {
  cy.visit('/shallow-true');
});

it('does not call `getServerSideProps` on each query param change', () => {
  cy.get('label:contains("Name:") input').type('a');
  cy.get('pre').should('have.text', JSON.stringify({}, null, 2));
  cy.url().should('equal', `${baseUrl}shallow-true?name=a`);
});
