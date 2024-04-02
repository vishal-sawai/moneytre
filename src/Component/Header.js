/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <li><NavLink className="mobileNav" exact to={to} activeClassName="active mobileNav">{children}</NavLink></li>
);

const DropdownItem = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown ${isOpen ? 'open' : ''}`}>
      <a className="mobileNav" onClick={toggleDropdown}><span style={{ cursor: "pointer" }}>{title}</span></a>
      <ul>
        {links.map((link, index) => <NavItem key={index} {...link} />)}
      </ul>
    </li>
  );
};

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const dropdownItems = [{
    title: "About us", links: [{ to: "/AboutUs", children: "About Us" }, { to: "/knowhetal", children: "Know Hetal" }, { to: "/whyus", children: "Why Us" },],
  },
  {
    title: "Information Pack",
    links: [
      { to: "/wallofappreciation", children: "Wall Of Appreciation" },
      { to: "/onboardadvisory", children: "Onboard Advisors" },
      { to: "/faqs", children: "FAQs" },
      { to: "/knowledge", children: "Knowledge" },
      { to: "/archives", children: "Archives" },
    ],
  },
  {
    title: "Products",
    links: [
      { to: "/product", children: "Product 1" },
      { to: "/product", children: "Product 2" },
      { to: "/product", children: "Product 3" },
      { to: "/product", children: "Product 4" },
      { to: "/product", children: "Product 5" },
    ],
  },
  ];

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><NavLink to="/">MONEYTRE</NavLink></h1>

        <nav id="navbar" className={`navbar ${showMenu ? 'navbar-mobile' : ''}`}>
          <ul>
            <NavItem to="/" children="Home" />
            {dropdownItems.map((item, index) => <DropdownItem key={index} {...item} />)}
            <NavItem to="/blogs" children="Blogs" />
            <NavItem to="/feedback" children="Feedback" />
            <NavItem to="/contactus" children="Contact Us" />
            <li ><NavLink to='/login' className="loginBtn btn-get-started scrollto m-3">Login</NavLink></li>
          </ul>
          <div className={`mobile-nav-toggle ${showMenu ? 'toggle-x' : ''}`} onClick={toggleMenu}>
            <i className={`bi ${showMenu ? 'bi-x' : 'bi-list'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;