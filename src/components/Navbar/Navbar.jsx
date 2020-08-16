import React from 'react';
import {navData} from './navData';
import {NavbarItem} from './NavbarItem';

export const Navbar = () => (
  <nav className="header__navigation">
    <ul className="header__navigation-list list list--reset">
      {navData.map((nav, index) => (
        <NavbarItem key={index} href={nav.href} title={nav.title}/>
      ))}
    </ul>
  </nav>
);