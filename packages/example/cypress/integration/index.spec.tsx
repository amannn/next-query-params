import config from '../../cypress.json';

const {baseUrl} = config;

beforeEach(() => {
  cy.visit('/');
});

function assertUrl(path = '') {
  cy.url().should('equal', baseUrl + path);
}

function assertRouterQuery(query: any) {
  cy.get('label:contains("Router query:") pre')
    .invoke('text')
    .should('equal', JSON.stringify(query, null, 2));
}

it('does not touch the url initially', () => {
  assertUrl();
  assertRouterQuery({});
});

it('can sync a string param', () => {
  cy.get('label:contains("Name:") input').type('a');
  assertUrl('?name=a');
  assertRouterQuery({name: 'a'});
});

it('can sync a boolean param', () => {
  cy.get('label:contains("Available:") input').click();
  assertUrl('?available=1');
  assertRouterQuery({available: '1'});
  cy.get('label:contains("Available:") input').click();
  assertUrl('?available=0');
  assertRouterQuery({available: '0'});
});

it('keeps track of hash links', () => {
  cy.get('label:contains("Available:") input').click();
  cy.contains('Hash link').click();
  assertUrl('?available=1#hash');
  cy.get('label:contains("Available:") input').click();
  assertUrl('?available=0#hash');
});
