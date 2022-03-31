import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import '../sass/sass.css'

const Navbar = () => {
  return (
    <div className="container__navbar">
        <div className="navbar__wrapper">

            <div className="navbar__left">
                <span className="navbar__language">EN</span>
                <div className="search-bar">
                    <input placeholder="Search" className="search-bar__input"/>
                    <Search style={{color:"#8E8D8A", fontSize:"16px"}} />
                </div>
            </div>

            <div className="navbar__center">
                <h1 className="logo">STRAND.</h1>
            </div>

            <div className="navbar__right">
                <div className="navbar__menu-item">REGISTER</div>
                <div className="navbar__menu-item">SIGN IN</div>
                <div className="navbar__menu-item">
                        <ShoppingCartOutlined className="shopping"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar