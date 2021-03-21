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
      <h1 className="about_title">À propos de nous</h1>
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
                  <h2 className="card-title">
                    Kevin Detournay
                  </h2>
                  <small className="text-muted">
                    Lead dev front & Product Owner
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
                  <h2 className="card-title">
                    Magomed Voraev
                  </h2>
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
                  <h2 className="card-title">
                    Vincent Giglio
                  </h2>
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
                  <h2 className="card-title">
                    Florent Gorski
                  </h2>
                  <small className="text-muted">
                    Git Master
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="card_text">
          De nos jours, afin d’exister sur le marché, les commerçants ont besoin
          d’une présence en ligne et donc forcément d’un site internet.
          Il est très facile de faire un site internet et très difficile de trouver
          une solution e-commerce qui correspond à 100% à son projet.

          C'est pour cela que nous lançons Switch, une solution e-commerce facile à
          gérer pour le client (commerçant)
          et rapide à implémenter pour le développeur.
          C’est une sorte de template très optimisé (utilisation des dernières technologies),
          pour un résultat unique et original.
        </p>
      </div>
    </div>
  </Page>
);

export default About;
