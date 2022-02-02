const { PokeFigure } = require('../../../src/components/figure');

describe('Base Cases for rendering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('renders Egg Chain Calculator', () => {
    cy.get('h1').contains('Egg Chain Calculator');
  });
  it('renders all dropdowns', () => {
    cy.get('[id=generationContainer]').children().should('have.length', 1);
    cy.get('[id=eggGroupContainer]').children().should('have.length', 2);
  });
});

describe('Generation Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('starts on GenVIII', () => {
    cy.get('[id=generationContainer]').children().first().contains('GenVIII');
  });
  it('has two options', () => {
    cy.get('[id=generationContainer]')
      .children()
      .first()
      .children()
      .should('have.length', 2);
  });
});

describe('Start Egg Group Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('has all egg group types', () => {
    cy.get('[id=eggGroupContainer]')
      .children()
      .first()
      .children()
      .should('have.length', 15);
  });
  it('starts on Monster', () => {
    cy.get('[id=eggGroupContainer]').children().first().contains('Monster');
  });
  it('can be clicked and changed to Field', () => {
    cy.get('[id=eggGroupContainer]').children().first().select('Field');
  });
});

describe('Final Egg Group Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('has all egg group types', () => {
    cy.get('[id=eggGroupContainer]')
      .children()
      .last()
      .children()
      .should('have.length', 15);
  });
  it('starts on Monster', () => {
    cy.get('[id=eggGroupContainer]').children().last().contains('Monster');
  });
  it('can be clicked and changed to Field', () => {
    cy.get('[id=eggGroupContainer]').children().last().select('Field');
  });
});
