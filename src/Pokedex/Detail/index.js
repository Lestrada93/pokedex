import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import Close from '../../assets/icons/cross-icon.svg';

import './Detail.scss';

/**
 * Detail
 * @description Detail component to display the information in a Modal screen
 * @param {Function} t
 * @param {Boolean} showDetail
 * @param {Function} setShowDetail
 * @param {Object} details
 * @returns {*}
 * @constructor
 */
function Detail({
  t, showDetail, setShowDetail, details,
}) {
  return (
    <>
      {
        showDetail
          ? (
            <div className="detail__wrapper" data-module="detail">
              <div className="detail">
                <button
                  type="button"
                  data-qa="close-detail"
                  className="detail__btn-close"
                  onClick={() => setShowDetail(false)}
                >
                  <img src={Close} alt="close" className="detail__btn-close__img" />
                </button>
                <div className="detail__img-container">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`}
                    alt="PokeImage"
                  />
                </div>
                <h1 className="detail__text detail__text--name">{details.name}</h1>
                <h5 className="detail__text">{`#${details.id}`}</h5>
                <div className="detail__specs">
                  <span className="detail__text detail__text--specs">
                    <strong>
                      {t('HEIGHT')}
                      :
                    </strong>
                    {details.height}
                  </span>
                  <span className="detail__text detail__text--specs">
                    <strong>
                      {t('WEIGHT')}
                      :
                    </strong>
                    {details.weight}
                  </span>
                  <span className="detail__text detail__text--specs">
                    <strong>
                      {t('EXPERIENCE')}
                      :
                    </strong>
                    {details.experience}
                  </span>
                  <span className="detail__text detail__text--specs">
                    <strong>
                      {t('TYPE')}
                      :
                    </strong>
                    {details.type}
                  </span>
                </div>
                <Chart
                  width="95%"
                  height="300px"
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={details.chartData}
                  options={{
                    title: t('STATISTICS'),
                    chartArea: { width: '50%' },
                    hAxis: {
                      title: t('LEVEL'),
                      minValue: 0,
                    },
                    vAxis: {
                      title: t('SKILL'),
                    },
                    legend: { position: 'none' },
                  }}
                />
              </div>
            </div>
          )
          : null
    }
    </>
  );
}

Detail.propTypes = {
  t: PropTypes.func,
  showDetail: PropTypes.bool,
  setShowDetail: PropTypes.func,
  details: PropTypes.object,
};

Detail.defaultProps = {
  t: () => {},
  showDetail: false,
  setShowDetail: () => {},
  details: {},
};

export default withTranslation()(Detail);
