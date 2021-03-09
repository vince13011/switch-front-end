/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Page from 'src/components/Page';

import imgFlorent from 'src/assets/images/Florent.png';
import imgKevin from 'src/assets/images/Kevin.png';
import imgMagomed from 'src/assets/images/Magomed.png';
import imgVincent from 'src/assets/images/Vincent.png';

import './style.scss';

const About = () => (
  <Page>
    <div className="wrapper">
      <h1 className="about_title"> À propos de nous</h1>
      <div className="container">
        <div className="d-flex">
          <div className="card_profil">
            <div className="boxs project_widget">
              <div className="pw_img">
                <img
                  className="img-responsive"
                  src={imgKevin}
                  alt="avatar"
                />
              </div>
              <div className="pw_content">
                <div className="pw_header">
                  <h6 className="card-title">
                    Kevin Detournay
                  </h6>
                  <small className="text-muted">
                    Lead - dev - front & Product Owner
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="card_profil">
            <div className="boxs project_widget">
              <div className="pw_img">
                <img
                  className="img-responsive"
                  src={imgMagomed}
                  alt="avatar"
                />
              </div>
              <div className="pw_content">
                <div className="pw_header">
                  <h6 className="card-title">
                    Magomed Voraev
                  </h6>
                  <small className="text-muted">
                    Scrum Master
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="card_profil">
            <div className="boxs project_widget">
              <div className="pw_img">
                <img
                  className="img-responsive"
                  src={imgVincent}
                  alt="avatar"
                />
              </div>
              <div className="pw_content">
                <div className="pw_header">
                  <h6 className="card-title">
                    Vincent Giglio
                  </h6>
                  <small className="text-muted">
                    Lead - dev - back
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="card_profil">
            <div className="boxs project_widget">
              <div className="pw_img">
                <img
                  className="img-responsive"
                  src={imgFlorent}
                  alt="avatar"
                />
              </div>
              <div className="pw_content">
                <div className="pw_header">
                  <h6 className="card-title">
                    Florent Gorski
                  </h6>
                  <small className="text-muted">
                    Git Master
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="card_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed mattis nulla vitae diam cursus vestibulum.Sed ornare
        purus odio, in molestie lectus mollis quis.Duis pretium
        tortor ipsum, sed ultricies augue imperdiet quis.Nulla
        bibendum placerat sollicitudin.Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus.Aenean cursus ex nec dignissim tempus.
      </p>
    </div>
  </Page>
);

export default About;
