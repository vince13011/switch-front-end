import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from 'src/containers/AppHeader';
import Footer from 'src/components/Footer';
import './style.scss';

// main layout component;

const Page = ({ children }) => (
  <>
    <AppHeader />
    <main className="page">
      {children}
    </main>
    <Footer />

  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
