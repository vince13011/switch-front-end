import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from 'src/containers/AppHeader';
import './style.scss';

const Page = ({ children }) => (
  <>
    <AppHeader />
    <main className="page">
      {children}
    </main>
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
