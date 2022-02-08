describe('Base Cases for rendering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('renders Egg Chain Calculator', () => {
    cy.get('h1').contains('Egg Chain Calculator');
  });
  it('renders all dropdowns', () => {
    cy.get('[data-cy=dropdownGeneration]').should('exist');
    cy.get('[data-cy=dropdownEggGroup]')
      .should('exist')
      .should('have.length', 2);
  });
});

describe('Generation Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('starts on GenVIII', () => {
    cy.get('[data-cy=dropdownGeneration]')
      .children()
      .first()
      .contains('GenVIII');
  });
  it('has two options', () => {
    cy.get('[data-cy=dropdownGeneration]').children().should('have.length', 2);
  });
});

describe('Start Egg Group Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('has all egg group types', () => {
    cy.get('[data-cy=dropdownEggGroup]')
      .first()
      .children()
      .should('have.length', 15);
  });
  it('starts on Monster', () => {
    cy.get('[data-cy=dropdownEggGroup]').first().contains('Monster');
  });
  it('can be clicked and changed to Field', () => {
    cy.get('[data-cy=dropdownEggGroup]').first().select('Field');
  });
});

describe('Final Egg Group Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('has all egg group types', () => {
    cy.get('[data-cy=dropdownEggGroup]')
      .last()
      .children()
      .should('have.length', 15);
  });
  it('starts on Monster', () => {
    cy.get('[data-cy=dropdownEggGroup]').last().contains('Monster');
  });
  it('can be clicked and changed to Field', () => {
    cy.get('[data-cy=dropdownEggGroup]').last().select('Field');
  });
});

describe('Routes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('has two routes for Bug Monster', () => {
    cy.get('[data-cy=dropdownEggGroup]').first().select('Bug');
    cy.get('[data-cy=dropdownEggGroup]').last().select('Monster');
    cy.get('[data-cy=eggRoutes]').children().should('have.length', 2);
    cy.get('[data-cy=route1]').should('exist');
    cy.get('[data-cy=route2]').should('exist');
  });
  it('has eight routes for Mineral Dragon', () => {
    cy.get('[data-cy=dropdownEggGroup]').first().select('Mineral');
    cy.get('[data-cy=dropdownEggGroup]').last().select('Dragon');
    cy.get('[data-cy=eggRoutes]').children().should('have.length', 8);
    cy.get('[data-cy=route1]').should('exist');
    cy.get('[data-cy=route8]').should('exist');
  })
});
