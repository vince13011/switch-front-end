import React from 'react';
import Page from 'src/components/Page';
import './style.scss';

const Account = ({user}) => (
  <Page>
    <div className="account__maincontainer">Bienvenue: {user.firstname}</div>
  </Page>
);

export default Account;
