import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selector';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={css.nav_container}>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
