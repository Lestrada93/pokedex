import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import PaginationHelper from '../../Core/Pokedex/Pagination';
import './Pagination.scss';

/**
 * Pagination
 * @description Pagination component
 * @param {Function} paginationCb
 * @param {Number} limit
 * @param {Number} count
 * @returns {*}
 * @constructor
 */
function Pagination({
  t, paginationCb, limit, count,
}) {
  const helper = new PaginationHelper(count, limit);

  const [pagination, setPagination] = useState(helper.getPagesAvailable());
  const [activePage, setActivePage] = useState(helper.getActivePage());
  const [totalPages] = useState(helper.getTotalPages());

  function getPage(page) {
    helper.setActivePage(page);
    setPagination(helper.getPagesAvailable());
    setActivePage(helper.getActivePage());
    paginationCb((page * limit) - limit);
  }

  return (
    <div className="pagination" data-module="pagination">
      {
          activePage > 1
            ? (
              <button
                type="button"
                data-qa="page-prev"
                className="pagination__btn pagination__btn--arrow"
                onClick={() => getPage(activePage - 1)}
              >
                {t('PREV')}
              </button>
            )
            : null
      }
      {
          pagination.map((page) => (
            <button
              type="button"
              data-qa={`page-${page}`}
              className={`pagination__btn ${activePage === page ? 'pagination__btn--active' : ''}`}
              key={page}
              onClick={() => getPage(page)}
            >
              {page}
            </button>
          ))
      }
      {
          activePage + 1 <= totalPages
            ? (
              <button
                type="button"
                data-qa="page-next"
                className="pagination__btn pagination__btn--arrow"
                onClick={() => getPage(activePage + 1)}
              >
                {t('NEXT')}
              </button>
            )
            : null
      }
    </div>
  );
}

Pagination.propTypes = {
  t: PropTypes.func,
  paginationCb: PropTypes.func,
  limit: PropTypes.number,
  count: PropTypes.number,
};

Pagination.defaultProps = {
  t: () => {},
  paginationCb: () => {},
  limit: 50,
  count: 1000,
};

export default withTranslation()(Pagination);
