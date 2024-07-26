import React from 'react'
import './header.css'
import logoImg from '../assets/image/logo.png'


const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="container header__container">
                    <div className="logo">
                        <img src={logoImg} alt="logo img" />
                    </div>
                    <nav className='nav'>
                        <ol className='nav__list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ol>
                    </nav>
                    <div className="buttons">
                        <button className='buy__btn'>Buy Now</button>
                    </div>
                </div>
            </header>
        </div>
    )
}
    
export default Header