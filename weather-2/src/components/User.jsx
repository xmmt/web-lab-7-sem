import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, surname, age }) => (
  <div>
    <p>
      Привет, {name}
      {surname}
      {age}!
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default User;
