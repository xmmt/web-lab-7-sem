import React from 'react';
import PropTypes from 'prop-types';

export const Page = props => {
  const { year, photos, isFetching, getPhotos } = props;
  const onBtnClick = e => {
    getPhotos(+e.currentTarget.innerText);
  };
  return (
    <div>
      <div>
        <button type="button" onClick={onBtnClick}>
          2018
        </button>
        <button type="button" onClick={onBtnClick}>
          2017
        </button>
        <button type="button" onClick={onBtnClick}>
          2016
        </button>
        <button type="button" onClick={onBtnClick}>
          2015
        </button>
        <button type="button" onClick={onBtnClick}>
          2014
        </button>
      </div>
      <p>
        {photos.length} photos of {year} year
      </p>
      <h3>{year} year</h3>
      {isFetching ? <p>Загрузка...</p> : <p>{photos.length} photos.</p>}
    </div>
  );
};

Page.propTypes = {
  year: PropTypes.number.isRequired,
  // photos: PropTypes.shape([]).isRequired,
  // photos: PropTypes.arrayOf(PropTypes.string),
  photos: PropTypes.instanceOf(Array),
  isFetching: PropTypes.bool.isRequired,
  getPhotos: PropTypes.func.isRequired
};

Page.defaultProps = {
  photos: []
};

export default Page;
