import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Card from './Card';
import Pagination from './Pagination';
import Detail from './Detail';
import Search from './Search';
import ApiConnection from '../Core/Pokedex/ApiConection';
import Logo from '../assets/images/logo-pokemon.png';
import './Pokedex.scss';

const api = new ApiConnection();

/**
 * Pokedex
 * @description Main component for Pokedex
 * @param {Function} t
 * @returns {*}
 * @constructor
 */
function Pokedex({ t }) {
  const [pokemons, setPokemons] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [total, setTotal] = useState(null);
  const [showError, setShowError] = useState(false);

  async function fetchData(offset = 0) {
    const response = await api.getList(offset);
    setTotal(response.count);
    setPokemons(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function getPokemonInfo(id) {
    const response = await api.getPokemonDetail(id);
    if (Object.keys(response).length > 0) {
      setPokemonDetails(response);
      setShowDetail(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  }

  useEffect(() => {
    if (pokemonId) {
      getPokemonInfo(pokemonId);
    }
  }, [pokemonId]);

  useEffect(() => {
    if (!showDetail) {
      setPokemonId(null);
    }
  }, [showDetail]);

  return (
    <div className="pokedex" data-module="pokedex">
      <div className="pokedex__image-wrapper">
        <img src={Logo} alt="Pokemon" />
      </div>
      <Search
        setPokemonId={setPokemonId}
        setShowError={setShowError}
      />
      {
        showError
          ? (
            <div className="pokedex__not-found">
              <span className="pokedex__not-found__text">{t('NOT_FOUND')}</span>
            </div>
          )
          : null
      }
      <div className="pokedex__grid">
        {
              pokemons.map((pokemon) => (
                <Card
                  {...pokemon}
                  setPokemonId={setPokemonId}
                  key={pokemon.id}
                />
              ))
          }
      </div>
      {
            total
              ? (
                <Pagination
                  limit={api.getLimit()}
                  count={total}
                  paginationCb={fetchData}
                />
              )
              : null
        }
      <Detail
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        details={pokemonDetails}
      />
    </div>
  );
}

Pokedex.propTypes = {
  t: PropTypes.func,
};

Pokedex.defaultProps = {
  t: () => {},
};

export default withTranslation()(Pokedex);
