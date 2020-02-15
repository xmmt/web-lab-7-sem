import PropsType from 'prop-types';

export const WeatherPropTypes = PropsType.exact({
  isFetching: PropsType.bool.isRequired,
  properties: PropsType.arrayOf(
    PropsType.exact({
      type: PropsType.string.isRequired,
      value: PropsType.string.isRequired
    }).isRequired
  )
});

export const CoordsPropTypes = PropsType.exact({
  latitude: PropsType.number.isRequired,
  longitude: PropsType.number.isRequired
});

export const CityPropTypes = PropsType.shape({
  name: PropsType.string.isRequired,
  weather: WeatherPropTypes.isRequired,
  coords: CoordsPropTypes.isRequired
});
