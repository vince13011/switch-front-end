import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const About = ({
  thumbnail,
  title,
}) => (
  <>
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Lorem ipsum.</p>
      </div>
    </article>
    <p>
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quidem similique atque
      optio adipisci asperiores vero ducimus
      rem incidunt aut enim et commodi modi
      corporis, est culpa libero ipsa. Sequi.
    </p>
  </>

);

About.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default About;
