import './commands';
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-testid' });

before(() => {
  if (!Cypress.env('SKIP_METAMASK_SETUP')) {
    cy.setupMetamask();
  }
});
