import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const City = ({ city, remove, fetchData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (city && !city.info) {
      fetchData(city);
    }
  }, []);
  if (city.info) {
    setData([
      {
        type: 'Температура',
        value: city.info.main.temp + ' ˚C'
      },
      {
        type: 'Скорость ветра',
        value: city.info.wind.speed + ' м/с'
      },
      {
        type: 'Состояние неба',
        value: city.info.weather[0].description
      },
      {
        type: 'Давление',
        value: city.info.main.pressure + ' КПа'
      },
      {
        type: 'Влажность',
        value: city.info.main.humidity + ' %'
      }
    ]);
  }
  if (data.length === 0) {
    return (
      <div>
        {city.name ? <span>{city.name}</span> : <span></span>}
        LOADING
        <button type="button" onClick={remove}>
          Remove
        </button>
      </div>
    );
  }
  const weatherData = data.map(data => (
    <li key={data.type}>
      <div className="alert alert-dark d-flex">
        <div>{data.type}</div>
        <div className="ml-auto">{data.value}</div>
      </div>
    </li>
  ));
  return (
    <ul className="weather-list__li">
      {weatherData}
      <button type="button" onClick={remove}>
        Remove
      </button>
    </ul>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    info: PropTypes.object.isRequired
  }).isRequired,
  remove: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default City;

/*

  if (city.info) {
    const icon = city.info.data.weather[0].icon;
    return (
      <div className="col col-6">
        <div className="d-flex flex-row align-items-center">
          <h4 className="p-2">{this.props.serverInfo.data.name}</h4>
          <h4 className="p-2 ml-auto">
            {this.props.serverInfo.data.main.temp}˚C
          </h4>
          <img
            className="p-2 ml-auto"
            alt="icon"
            src={`https://openweathermap.org/img/wn/${icon}.png`}
          />
        </div>
        <button type="button" onClick={() => remove(city)}>
          Remove
        </button>
        <WeatherPack serverInfo={this.props.serverInfo.data} />
      </div>
    );
  }
  return (
    <button type="button" onClick={() => remove(city)}>
      Remove
    </button>
  );
  */

/*
 <div className="container-fluid" style={{ paddingRight: 0 }}>
        <div className="inputForm" id="form1">
          <form onSubmit={handleSubmit}>
            <div
              className="d-flex justify-content-end"
              style={{ paddingTop: 20, paddingBottom: 15 }}
            >
              <h3 className="p-2">Город </h3>
              <input
                type="text"
                className="p-2 textbox"
                style={{ marginLeft: 10 }}
                value={this.props.newCityValue}
                onChange={this.handleChange}
              />
              <input
                className="p-2 btn btn-primary"
                type="submit"
                value="Добавить в избранное"
                style={{ marginLeft: 10 }}
              />
            </div>
          </form>
        </div>
        <div className="row">
          {this.props.items.map((favCity, i = 0) => {
            i++;
            return [
              <MiniCityInfo key={i} serverInfo={favCity} />,
              i % 2 === 0 && <div key={-i} className="w-100" />
            ];
          })}
        </div>
      </div>
      <p className="App-intro">Here will be</p>
      <p>
        My name is: {name} {surname}, {age}
      </p>
      */
