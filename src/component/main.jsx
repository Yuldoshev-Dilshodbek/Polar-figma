import React from 'react'
import './main.css'
import creamImg from '../assets/image/cream.png'
import machineImg from '../assets/image/machine.jpg'
import coffieImg from '../assets/image/coffie.jpg'
import moneyImg from '../assets/image/money.jpg'
import freeImg from '../assets/image/free.jpg'
import creaamImg from '../assets/image/cream.svg'
import cabbageImg from '../assets/image/cream.svg'
// import cabbageImage from '../assets/image/cabbage.svg'
// import 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap';

const Main = () => {
  return (
    <div>
      <main>
        <div className="container main__container">
          <section className="section__one">
            <div className="section__one-hero__flex">
              <div className="hero">
                <p className='hero__sweet-p'>Sweet fun, full of milk.</p>
                <h2 className='hero__feel-h2'>Feel inside cold with our delicious <span>ice-cream.</span></h2>
                <p className='hero__some-p'>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
                <button className='hero__buy-btn'>Buy Now</button>
              </div>
              <div className='hero__img'>
                <img src={creamImg} alt="cream__img" />
              </div>
            </div>
          </section>
          <section className='section__two'>
            <div className="section__two-hero__flex">
              <div className="section__two-card">
                <div className="section__two-card__img">
                  <img src={machineImg} alt="machine img" />
                </div>
                <h5>Free Shipping</h5>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="section__two-card">
                <div className="section__two-card__img">
                  <img src={coffieImg} alt="coffie img" />
                </div>
                <h5>Quick Packaging</h5>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="section__two-card">
                <div className="section__two-card__img">
                  <img src={moneyImg} alt="$$ img" />
                </div>
                <h5>100% Money Back</h5>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="section__two-card">
                <div className="section__two-card__img">
                  <img src={freeImg} alt="free img" />
                </div>
                <h5>Fast Delivery</h5>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
            </div>
          </section>
          <section className='section__three'>
            <div className="section__three-flex">
              <div className="section__three-sugar">
                <h2>Brown Sugar Oatmea</h2>
                <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
                <button className='section__three-btn'>See Details</button>
              </div>
              <div className="section__three-cream">
                <img src={creaamImg} alt="cream img" />
              </div>
            </div>
          </section>
          <section className='section__four'>
            <div className="section__four-our">
              <div className="section__four-hero">
                <h2>Our Product</h2>
              </div>
              <nav className='section__four-nav'>
                <ol className='section__four-list'>
                  <li><a href="#">ICE CREAM</a></li>
                  <li><a href="#">CAYENNE CHOCOLATE</a></li>
                  <li><a href="#">CAKE BATTER</a></li>
                  <li><a href="#">CANDY CANE</a></li>
                  <li><a href="#">PLATTERS</a></li>
                  <li><a href="#">DESSERT</a></li>
                </ol>
              </nav>
            </div>
            <div className="section__four-flex">
              <div className="section__four-cabbage">
                <img src={cabbageImg} alt="cabbage img" />
              </div>
              <div className="section__four-price">
                <h3>Brown bread</h3>
                <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                <h5>$19.55 <span>$22.55</span></h5>
                <button className='section__four-btn'>Buy Now</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Main