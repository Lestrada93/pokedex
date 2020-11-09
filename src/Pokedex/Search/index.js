import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './Search.scss';

/**
 * Search
 * @param {Function} setPokemonId
 * @param {Function} setShowError
 * @returns {*}
 * @constructor
 */
function Search({ t, setPokemonId, setShowError }) {
  function searchPokemon(e) {
    if (e.key === 'Enter') {
      setPokemonId(e.target.value);
    }
  }
  function validateError(e) {
    if (e.target.value === '') {
      setShowError(false);
    }
  }
  return (
    <div className="search__wrapper">
      <input
        type="search"
        placeholder={t('SEARCH_BY_NAME')}
        className="search"
        onChange={validateError}
        onKeyDown={searchPokemon}
      />
    </div>
  );
}

Search.propTypes = {
  t: PropTypes.func,
  setPokemonId: PropTypes.func,
  setShowError: PropTypes.func,
};

Search.defaultProps = {
  t: () => {},
  setPokemonId: () => {},
  setShowError: () => {},
};

export default withTranslation()(Search);
