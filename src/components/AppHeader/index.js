import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AppHeader = ({ onClick }) => (
  <header className="header">
    <button
      type="button"
      onClick={onClick}
    >--
    </button>
    <div>SWITCH</div>
    <div>panier</div>
  </header>
);

export default AppHeader;

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};
