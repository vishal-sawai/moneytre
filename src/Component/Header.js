import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><NavLink to="/">MONEYTRE</NavLink></h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>

            <li className="dropdown"><a href="#">
              <span>About us</span></a>
              <ul>
                <li><NavLink to="/AboutUs" activeClassName="active">About Us</NavLink></li>
                <li><NavLink to="/knowhetal" activeClassName="active">Know Hetal</NavLink></li>
                <li><NavLink to="/whyus" activeClassName="active">Why Us</NavLink></li>
              </ul>
            </li>

            <li className="dropdown"><a href="#">
              <span>Information Pack</span></a>
              <ul>
                <li><NavLink to="/wallofappreciation" activeClassName="active">Wall Of Appreciation</NavLink></li>
                <li><NavLink to="/onboardadvisory" activeClassName="active">Onboard Advisors</NavLink></li>
                <li><NavLink to="/faqs" activeClassName="active">FAQs</NavLink></li>
                <li><NavLink to="/knowledge" activeClassName="active">Knowledge</NavLink></li>
                <li><NavLink to="/archieves" activeClassName="active">Archives</NavLink></li>
              </ul>
            </li>

            <li className="dropdown"><a href="#"><span>Products</span></a>
              <ul>
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
                <li><a href="#">Product 4</a></li>
                <li><a href="#">Product 5</a></li>
              </ul>
            </li>

            <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
            <li><NavLink to="/feedback" activeClassName="active">FeedBack</NavLink></li>
            <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
    
            {/* <li><Link to="/login" className="login-link"><button className="btn-get-started scrollto">Login</button></Link></li> */}
       
            <li><NavLink to="/login" className="login-link"><button className="btn-get-started scrollto">Login</button></NavLink></li>
 
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </header>
  );
}

export default Header;
