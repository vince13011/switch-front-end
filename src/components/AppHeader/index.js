/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import {
  MdAccountCircle, MdShoppingCart, MdMenu, MdClose,
} from 'react-icons/md';
import './style.scss';

const AppHeader = ({
  onClick,
  categories,
  logged,
  count,
  name,
  logout,

}) => {
  // removing the text from cart and my account logos when 
  // mobile screen width < 768
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header className="header">
      <div className="header__main">
        <button
          className="header__button"
          type="button"
          onClick={onClick}
        >
          <MdMenu />
        </button>
        <Link
          to="/"
          className="header__logo"
        >
          <div>SWITCH</div>
        </Link>

        <div className="header__buttons">
          <Link to="/panier">
            <div>
              <MdShoppingCart className={"" + width > breakpoint ? "" : "logo logo-cart"} />
            </div>
            {/* ternary condition to remove text when screen width smaller than
            768px */}
            {width > breakpoint ? (
              <div className="header__buttons__btn">Panier ({count})
              </div>

            ) : (
              <div className="header__mobile-count">{count}</div>
            )}

          </Link>
          {logged ? (
            <>
              <Link to="/mon-compte">
                <div>
                  <MdAccountCircle className={'' + width > breakpoint ? '' : 'logo logo-account'} />
                </div>
                {width > breakpoint ? (
                  <>
                    <div>{name}</div>
                    <div className="header__buttons__btn">mon Compte</div>
                  </>
                ) : (<div className="header__buttons__btn" />)}

              </Link>
              <div><MdClose
                className={"" + width > breakpoint ? "" : "logo logo-cart"}
                onClick={() => {
                  logout();
                }}
                cursor="pointer"
              />
              </div>
            </>
          )
            : (
              <Link to="/login">
                <div>
                  <MdAccountCircle className={'' + width > breakpoint ? '' : 'logo logo-account'} />
                </div>
                {width > breakpoint ? (
                  <div className="header__buttons__btn">se connecter
                  </div>
                ) : (
                  <div className="header__buttons__btn" />
                )}
              </Link>

            )}

        </div>
      </div>
      <nav className="header__nav">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="header__nav__link"
            activeClassName="header__nav__link--active"
            exact
            to={`/categories/${category.title}`}
          >
            {category.title}

          </NavLink>
        ))}
      </nav>
    </header>
  );
}
export default AppHeader;

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};
