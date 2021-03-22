import React from 'react';

import Page from 'src/components/Page';
import Content from 'src/containers/Content';
import './style.scss';

const Home = () => (
  <Page>
    {/* <div className="cover">

      <img
        className="cover__image"
        src="https://images.pexels.com/photos/6147251/pexels-photo-6147251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />

    </div> */}
    <div className="slider">
      <figure>
        <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        {/* <img src="https://images.pexels.com/photos/6147251/pexels-photo-6147251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /> */}
        <img src="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      </figure>
    </div>
    <Content />
  </Page>
);

export default Home;
