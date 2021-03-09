import React from 'react';

import Page from 'src/components/Page';
import Content from 'src/containers/Content';
import './style.scss';

const Home = () => (
  <Page>
    <div className="cover">

      <img
        className="cover__image"
        src="https://images.pexels.com/photos/6147251/pexels-photo-6147251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />

    </div>
    <Content />
  </Page>
);

export default Home;
