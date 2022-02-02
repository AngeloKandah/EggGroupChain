import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders Egg Chain Calculator', () => {
  mount(<App />);
  cy.get('h1').contains('Egg Chain Calculator');
});
