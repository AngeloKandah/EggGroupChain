import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import { Dropdown } from './components/dropdown';
import { Chain, EggRoutes, SoloBox, ChainBox } from './components/eggchain';

describe('Dropdown', () => {
  it('renders the dropdown with no entries', () => {
    mount(<Dropdown dropdownEntries={[]} />);
    cy.get('[data-cy=dropdownGeneration]').should('exist');
  });
  it('creates a dropdown of all supported Generations', () => {
    const generations = ['GenVIII', 'GenIV'];
    mount(<Dropdown dropdownEntries={generations} />);
    cy.get('[data-cy=dropdownGeneration]')
      .children()
      .should('have.length', generations.length);
  });
  it('creates a dropdown of all EggGroups', () => {
    const eggGroups = [
      'Monster',
      'Water1',
      'Bug',
      'Flying',
      'Field',
      'Fairy',
      'Grass',
      'Human-like',
      'Water3',
      'Mineral',
      'Amorphous',
      'Water2',
      'Ditto',
      'Dragon',
      'Undiscovered',
    ];
    mount(<Dropdown dropdownEntries={eggGroups} />);
    cy.get('[data-cy=dropdownEggGroup]')
      .children()
      .should('have.length', eggGroups.length);
  });
});

describe('EggRoutes', () => {
  it('renders the component', () => {
    mount(<EggRoutes startEggGroup={0} finalEggGroup={0} generation={0} />);
    cy.get('[data-cy=eggRoutes]').should('exist');
  });
  it('handles two different eggGroups', () => {
    mount(<EggRoutes startEggGroup={1} finalEggGroup={2} generation={0} />);
    cy.get('[data-cy=eggRoutes').should('exist');
  });
  it('handles different generation', () => {
    mount(<EggRoutes startEggGroup={0} finalEggGroup={0} generation={1} />);
    cy.get('[data-cy=eggRoutes').should('exist');
  });
  it('handles two different eggGroups and different generation', () => {
    mount(<EggRoutes startEggGroup={4} finalEggGroup={11} generation={1} />);
    cy.get('[data-cy=eggRoutes').should('exist');
  });
});

describe('SoloBox', () => {
  it('renders the SoloBox', () => {
    mount(<SoloBox groupIndex={0} generationIndex={0} />);
    cy.get('[data-cy=group0]').should('exist');
  });
  it('handles a different groupIndex and different generationIndex', () => {
    mount(<SoloBox groupIndex={11} generationIndex={1} />);
    cy.get('[data-cy=group11]').should('exist');
  });
});

describe('ChainBox', () => {
  it('renders the ChainBox', () => {
    mount(<ChainBox group1Index={0} group2Index={1} generationIndex={0} />);
    cy.get('[data-cy=chainBox]').should('exist');
  });
});

describe('Chain', () => {
  it('renders two SoloBox and EggRoutes', () => {
    mount(<Chain startEggGroup={0} finalEggGroup={0} generation={0} />);
    cy.get('[data-cy=leftSidebar]').should('exist');
    cy.get('[data-cy=rightSidebar]').should('exist');
    cy.get('[data-cy=eggRoutes]').should('exist');
  });
  it('renders two different SoloBox and EggRoutes', () => {
    mount(<Chain startEggGroup={5} finalEggGroup={13} generation={0} />);
    cy.get('[data-cy=leftSidebar]').should('exist');
    cy.get('[data-cy=rightSidebar]').should('exist');
    cy.get('[data-cy=eggRoutes]').should('exist');
  });
});
