import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, Mail } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">


        <div className="footer__left">
            <h1 className="logo">STRAND.</h1>
            <p className="footer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsam iusto laborum inventore sed sapiente consectetur ratione sunt molestiae, reiciendis officia! Consequuntur animi officiis architecto culpa repellat. Illum, nemo cumque.</p>
            <div className="footer__social-container">
                <div className="footer__social-icon">
                    <Facebook className='footer__icon'/>
                </div>
                <div className="footer__social-icon">
                    <Instagram className='footer__icon'/>
                </div>
                <div className="footer__social-icon">
                    <Twitter className='footer__icon'/>
                </div>
                <div className="footer__social-icon">
                    <Pinterest className='footer__icon'/>
                </div>
            </div>
        </div>


        <div className="footer__center">
            <h3 className="footer__title">Useful Links</h3>
            <ul className="footer__list">
                <li className="footer__list--list-item">Home</li>
                <li className="footer__list--list-item">Cart</li>
                <li className="footer__list--list-item">Leave-In Conditioners</li>
                <li className="footer__list--list-item">Oils</li>
                <li className="footer__list--list-item">Deep Conditioners</li>
                <li className="footer__list--list-item">My Account</li>
                <li className="footer__list--list-item">Order Tracking</li>
                <li className="footer__list--list-item">Wishlist</li>
                <li className="footer__list--list-item">Write A Review</li>
                <li className="footer__list--list-item">Terms</li>
            </ul>
        </div>


        <div className="footer__right">
            <h1 className="footer__title">Contact</h1>
            <div className="footer__contact">
                <div className="footer__contact--item"><Room className="footer__contact--icon" /> 8297 Theatre St. Chesterton, IN 46304</div>
                <div className="footer__contact--item"><Phone className="footer__contact--icon" /> +1 219-250-5760</div>
                <div className="footer__contact--item"><Mail className="footer__contact--icon" /> contact@strand.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="payment" alt="cards" />
            </div> 

        </div>
    </div>
  )
}

export default Footer