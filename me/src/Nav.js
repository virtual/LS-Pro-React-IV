import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
             <nav className="navbar navbar-default navbar-static-top">
              <div className="container">
                <ul className="nav navbar-nav">
                  <li>
                    <a className="navbar-brand" href="#">
                      Me
                    </a>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/hobbies">Hobbies</Link>
                  </li>
                  <li>
                    <Link to="/media">Media</Link>
                  </li>
                </ul>
              </div>
            </nav>  
        );
    }
}

export default Nav;