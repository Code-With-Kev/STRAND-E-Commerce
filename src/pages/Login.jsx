import React from 'react'

const Login = () => {
  return (
    <div className='register'>
        <div className="register__wrapper">
            <h1 className="register__title">LOGIN</h1>
            <form action="" className="login__form">
                <input type="email" placeholder="Email" className="register__form--input" />
                <input type="password" placeholder="Password" className="register__form--input" />
                <div className="button-container">
                    <button className="add-button add-button--long">LOGIN</button>
                </div>
            </form>

            <a className="login__link" href="">Don't remember your password?</a>
            <a className="login__link" href="">Create an account</a>
        </div>
    </div>
  )
}

export default Login