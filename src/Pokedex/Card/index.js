import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

/**
 * Card
 * @description Card component to display the pokemon list in the main grid
 * @param {String} id
 * @param {String} name
 * @param {Function} setPokemonId
 * @returns {*}
 * @constructor
 */
function Card({ id, name, setPokemonId }) {
  return (
    <button
      type="button"
      data-qa={`click-open-detail-${name}`}
      className="card"
      onClick={() => setPokemonId(id)}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="PokeImage"
      />
      <h4 className="card__name">{name}</h4>
      <span className="card__id">{id}</span>
    </button>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  setPokemonId: PropTypes.func,
};

Card.defaultProps = {
  id: '',
  name: '',
  setPokemonId: () => {},
};

export default Card;
