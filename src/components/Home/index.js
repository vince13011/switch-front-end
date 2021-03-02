import React from 'react';

import Page from 'src/components/Page';
import Content from 'src/containers/Content';
import cover from 'src/assets/images/cover.jpg';

const Home = () => (
  <Page>
    <div className="cover">
      <img src={cover} alt=""/>
    </div>
    <Content />
  </Page>
);

export default Home;
