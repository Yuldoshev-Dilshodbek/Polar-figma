import React from 'react'
import './footer.css'
import footerLogoImg from '../assets/image/logo.png'
import faceImg from '../assets/image/facebook.svg'
import tweImg from '../assets/image/twitter.svg'
import instaImg from '../assets/image/instagram.svg'
import linkImg from '../assets/image/linkedin.svg'
import cardpImg from '../assets/image/ppp.svg'
import mastercardImg from '../assets/image/mastercard.svg'
import visacardImg from '../assets/image/visacard.svg'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
          <div className="container footer__container">
          <img src={footerLogoImg} alt="logo img" />
            <div className="footer__flex">
              <div className="footer__card">
                <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
                <h6>Fllow Us</h6>
                <div>
                  <a href="#">
                    <img src={faceImg} alt="facebook img" />
                  </a>
                  <a href="#">
                    <img src={tweImg} alt="twittier img" />
                  </a>
                  <a href="#">
                    <img src={instaImg} alt="instagram img" />
                  </a>
                  <a href="#">
                    <img src={linkImg} alt="linkedin img" />
                  </a>
                </div>
              </div>
              <div className="footer__card-one">
                <ol>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ol>
              </div>
              <div className="footer__card-two">
                <ol>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Search Terms</a></li>
                  <li><a href="#"></a>Order & Return</li>
                </ol>
              </div>
              <div className="footer__card-three">
                <h4>Newsletter</h4>
                <form className="subscription-form">
                    <input type="email" placeholder="Your Email" className="email-input" />
                    <button type="submit" className="subscribe-button">Subscribe</button>
                </form>
                <div>
                  <a href="#">
                    <img src={cardpImg} alt="card p img" />
                  </a>
                  <a href="#">
                    <img src={mastercardImg} alt="master card img" />
                  </a>
                  <a href="#">
                    <img src={visacardImg} alt="visa card img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer