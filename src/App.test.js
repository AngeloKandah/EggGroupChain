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
  const testCases = [
    [0, 0, 0, 'exist'],
    [1, 2, 0, 'exist'],
    [0, 0, 1, 'exist'],
    [4, 11, 1, 'exist'],
  ];
  testCases.forEach(([startEggGroup, finalEggGroup, generation, result]) => {
    it(`handles ${startEggGroup} ${finalEggGroup} ${generation}`, () => {
      mount(
        <EggRoutes
          startEggGroup={startEggGroup}
          finalEggGroup={finalEggGroup}
          generation={generation}
        />
      );
      cy.get('[data-cy=eggRoutes]').should(result);
    });
  });
});

describe('SoloBox', () => {
  const testCases = [
    [0, 0, 'exist'],
    [11, 1, 'exist'],
    [0, 1, 'exist'],
    [5, 0, 'exist'],
  ];
  testCases.forEach(([groupIndex, generationIndex, result]) => {
    it(`handles ${groupIndex} ${generationIndex}`, () => {
      mount(
        <SoloBox groupIndex={groupIndex} generationIndex={generationIndex} />
      );
      cy.get(`[data-cy=group${groupIndex}]`).should(result);
    });
  });
});

describe('ChainBox', () => {
  it('renders the ChainBox', () => {
    mount(<ChainBox group1Index={0} group2Index={1} generationIndex={0} />);
    cy.get('[data-cy=chainBox]').should('exist');
  });
});

describe('Chain', () => {
  const positives = [
    [0, 0, 0, 'exist'],
    [5, 13, 0, 'exist'],
    [0, 0, 1, 'exist'],
    [3, 9, 1, 'exist'],
  ];
  positives.forEach(([startEggGroup, finalEggGroup, generation, result]) => {
    it(`handles ${startEggGroup} ${finalEggGroup} ${generation}`, () => {
      mount(
        <Chain
          startEggGroup={startEggGroup}
          finalEggGroup={finalEggGroup}
          generation={generation}
        />
      );
      cy.get('[data-cy=leftSidebar]').should(result);
      cy.get('[data-cy=rightSidebar]').should(result);
      cy.get('[data-cy=eggRoutes]').should(result);
    });
  });
  /* const negatives = [
    [0, -1, 0],
    [-1, 0, 0],
    [-1, -2, -1],
  ]; */
  /* negatives.forEach(([startEggGroup, finalEggGroup, generation]) => {
    it(`throws ${startEggGroup} ${finalEggGroup} ${generation}`, () => {
      expect(() =>
        mount(
          <Chain
            startEggGroup={startEggGroup}
            finalEggGroup={finalEggGroup}
            generation={generation}
          />
        )
      ).to.throw;
    });
  }); */
});
