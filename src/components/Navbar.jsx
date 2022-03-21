import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import '../sass/sass.css'

const Navbar = () => {
  return (
    <div className="container--navbar">
        <div className="navbar--wrapper">

            <div className="navbar--left">
                <span className="navbar--language">EN</span>
                <div className="search-bar">
                    <input classname="search-bar--input"/>
                    <Search style={{color:"#8E8D8A", fontSize:"16px"}} />
                </div>
            </div>

            <div className="navbar--center">
                <h1 className="logo">STRAND.</h1>
            </div>

            <div className="navbar--right">
                <div className="navbar--menu-item">REGISTER</div>
                <div className="navbar--menu-item">SIGN IN</div>
                <div className="navbar--menu-item">
                        <ShoppingCartOutlined style={{transform: "scale(1.5)"}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar