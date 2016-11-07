import React, {Component, PropTypes} from 'react'
import logo from 'assets/img/weatherlogo.png'
import { Link } from 'react-router'

const TopBarComponent = (props) => (
  <div className="topbar">
    <h1 className="topbar__title">{props.page}</h1>
    <Link to='Home' className="topbar__logo-container"><img src={logo} className="topbar__logo" alt="logo"/></Link>
    <nav className="topbar__nav-container">
      <ul className="topbar__links">
        {props.page==='Settings' && <li className="topbar__link"><Link to='Home'><i className="icon icon-home3"></i></Link></li>}
        {props.page==='Widgets' && <li className="topbar__link"><Link to='Settings'><i className="icon icon-cog"></i></Link></li>}
      </ul>
    </nav>
  </div>
)

export default TopBarComponent;
