import PropsType from 'prop-types';

export const WeatherPropTypes = PropsType.arrayOf(
  PropsType.exact({
    type: PropsType.string.isRequired,
    value: PropsType.string.isRequired
  }).isRequired
);

export const LocationPropTypes = PropsType.exact({
  coords: PropsType.exact({
    latitude: PropsType.number.isRequired,
    longitude: PropsType.number.isRequired
  }).isRequired
});

export const CityPropTypes = PropsType.exact({
  uid: PropsType.string.isRequired,
  weather: WeatherPropTypes.isRequired,
  loading: PropsType.bool.isRequired,
  location: LocationPropTypes.isRequired
});
