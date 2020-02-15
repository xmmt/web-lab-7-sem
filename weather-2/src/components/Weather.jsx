import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather({ serverInfo }) {
  const data = [
    {
      type: 'Температура',
      value: serverInfo.main.temp + ' ˚C'
    },
    {
      type: 'Скорость ветра',
      value: serverInfo.wind.speed + ' м/с'
    },
    {
      type: 'Состояние неба',
      value: serverInfo.weather[0].description
    },
    {
      type: 'Давление',
      value: serverInfo.main.pressure + ' КПа'
    },
    {
      type: 'Влажность',
      value: serverInfo.main.humidity + ' %'
    }
  ];

  return (
    <ul style={{ listStyle: 'none', marginLeft: 0, paddingLeft: 0 }}>
      {data.map(data => (
        <li key={data.type}>
          <div className="alert alert-light d-flex">
            <div>{data.type}</div>
            <div className="ml-auto">{data.value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
