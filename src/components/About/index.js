/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Page from 'src/components/Page';
import './style.scss';

const About = () => (
  <Page>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="panel widget">
            <div className="half-float">
              <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" className="img-responsive" />
              <div className="half-float-bottom">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Image"
                  className="img-thumbnail img-circle thumb128"
                />
              </div>
              <div className="panel-body text-center">
                <h3 className="m0">Clark Kentman</h3>
                <p className="text-muted">Lead director</p>
                <p>Proin metus justo, commodo in ultrices at,
                  lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus
                  at, gravida vel purus.
                </p>
              </div>
              <div className="panel-body text-center bg-gray-dark">
                <div className="row row-table">
                  <div className="col-xs-4">
                    <h3 className="m0">400</h3>
                    <p className="m0">Photos</p>
                  </div>
                  <div className="col-xs-4">
                    <h3 className="m0">2000</h3>
                    <p className="m0">Likes</p>
                  </div>
                  <div className="col-xs-4">
                    <h3 className="m0">500</h3>
                    <p className="m0">Following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default About;
