import React from 'react'

const Register = () => {
  return (
    <div className="register">
        <div className="register__wrapper">
            <h1 className="register__title">REGISTER</h1>
            <form action="" className="register__form">
                <div className="register__form--input-wrapper"><input type="text" placeholder="First Name" className="register__form--input" /></div>
                <div className="register__form--input-wrapper"><input type="text" placeholder="Last Name" className="register__form--input" /></div>
                <div className="register__form--input-wrapper"><input type="text" placeholder="Username" className="register__form--input" /></div>
                <div className="register__form--input-wrapper"><input type="email" placeholder="Email" className="register__form--input" /></div>
                <div className="register__form--input-wrapper"><input type="password" placeholder="Password" className="register__form--input" /></div>
                <div className="register__form--input-wrapper"><input type="password" placeholder="Confirm Password" className="register__form--input" /></div>
                <div className="register__form--agreement-wrapper">
                    <span className="register__form--agreement">By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                </div>
                <div className="button-container">
                    <button className="add-button add-button--long">CREATE ACCOUNT</button>
                </div>
                
            </form>
        </div>

    </div>
  )
}

export default Register