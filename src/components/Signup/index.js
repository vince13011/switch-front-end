import React from 'react';
import Field from 'src/components/Field';
import Page from 'src/components/Page';
import './style.scss';

const SignUp = () => (
  <Page>
    <h1 className="pagetitle">s'enregistrer </h1>
    <form>
      <Field />
    </form>
  </Page>
);

export default SignUp;
