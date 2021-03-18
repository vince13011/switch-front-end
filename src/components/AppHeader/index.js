/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import {
  MdAccountCircle, MdShoppingCart, MdMenu, MdExitToApp, MdBuild, MdStore,
} from 'react-icons/md';
import './style.scss';

const AppHeader = ({
  onClick,
  categories,
  logged,
  count,
  name,
  logout,
  admin,

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
          <div className="header__project-title">SW<span className="header__project-title-i">IT</span>CH</div>
        </Link>

        <div className="header__buttons">
          {admin
            && (
              <Link to="/admin">
                <div>
                  {/* <MdAccountCircle color="#5221c6" /> */}
                  <MdStore className={"" + width > breakpoint ? "big-logo" : "logo"} color="#5221c6" />
                </div>
                {/* <div>{name}</div> */}
                {width > breakpoint ? (
                  <div className="header__buttons__btn--admin">Admin</div>
                ) : (
                  <div className="header__buttons__btn--admin" />
                )}
              </Link>
            )}
          <Link to="/panier">
            <div className="header__buttons-cart">

              <MdShoppingCart className={"" + width > breakpoint ? "big-logo" : "logo"} />
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
                  <MdAccountCircle className={'' + width > breakpoint ? 'big-logo' : 'logo'} />
                </div>
                {width > breakpoint ? (
                  <>
                    {/* <div>{name}</div> */}
                    <div className="header__buttons__btn">Mon Compte</div>
                  </>
                ) : (<div className="header__buttons__btn" />)}

              </Link>
              {/* <div><MdExitToApp
                className={"" + width > breakpoint ? "" : "logo logo-cart"}
                onClick={() => {
                  logout();
                }}
                cursor="pointer"
              />
              </div> */}
            </>
          )
            : (
              <Link to="/login">
                <div>
                  <MdAccountCircle className={'' + width > breakpoint ? 'big-logo' : 'logo'} />
                </div>
                {width > breakpoint ? (
                  <div className="header__buttons__btn">Connexion
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
};

export default AppHeader;

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
};
