import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, Mail } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">


        <div className="footer--left">
            <h1 className="logo">STRAND.</h1>
            <p className="footer--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsam iusto laborum inventore sed sapiente consectetur ratione sunt molestiae, reiciendis officia! Consequuntur animi officiis architecto culpa repellat. Illum, nemo cumque.</p>
            <div className="footer--social-container">
                <div className="footer--social-icon">
                    <Facebook className='footer--icon'/>
                </div>
                <div className="footer--social-icon">
                    <Instagram className='footer--icon'/>
                </div>
                <div className="footer--social-icon">
                    <Twitter className='footer--icon'/>
                </div>
                <div className="footer--social-icon">
                    <Pinterest className='footer--icon'/>
                </div>
            </div>
        </div>


        <div className="footer--center">
            <h3 className="footer--title">Useful Links</h3>
            <ul className="footer--list">
                <li className="footer--list__list-item">Home</li>
                <li className="footer--list__list-item">Cart</li>
                <li className="footer--list__list-item">Leave-In Conditioners</li>
                <li className="footer--list__list-item">Oils</li>
                <li className="footer--list__list-item">Deep Conditioners</li>
                <li className="footer--list__list-item">My Account</li>
                <li className="footer--list__list-item">Order Tracking</li>
                <li className="footer--list__list-item">Wishlist</li>
                <li className="footer--list__list-item">Write A Review</li>
                <li className="footer--list__list-item">Terms</li>
            </ul>
        </div>


        <div className="footer--right">
            <h1 className="footer--title">Contact</h1>
            <div className="footer--contact">
                <div className="footer--contact__item"><Room className="footer--contact__icon" /> 8297 Theatre St. Chesterton, IN 46304</div>
                <div className="footer--contact__item"><Phone className="footer--contact__icon" /> +1 219-250-5760</div>
                <div className="footer--contact__item"><Mail className="footer--contact__icon" /> contact@strand.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="payment" alt="cards" />
            </div> 

        </div>
    </div>
  )
}

export default Footer