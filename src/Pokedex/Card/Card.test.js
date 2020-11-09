import React from 'react';
import { create } from 'react-test-renderer';
import Card from '.';

describe('Card component', () => {
  test('Snapshot With data', () => {
    const card = create(<Card
      id="1"
      name="Pikachu"
      setPokemonId={() => {}}
    />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});
