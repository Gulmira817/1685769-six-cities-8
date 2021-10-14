import React from 'react';
import { Link } from 'react-router-dom';


function NavPage ():JSX.Element{

  return(
    <header>
      <nav className="header__nav">
        <Link to='/' title='/'>
          Main
        </Link>
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </a>
        </li>
        <Link to='/' title='/'>
             Sign out
        </Link>
      </nav>
    </header>
  );

}

export default NavPage;
