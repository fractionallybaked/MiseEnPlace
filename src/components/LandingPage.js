import React from 'react';
import mainImage from '../images/landingBg.jpg';
import coffee from '../images/coffee.jpg';
import cookies from '../images/cookies.jpg';
import tea from '../images/tea.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className='landing-main-container'>
                <img className='landing-image-main' src={mainImage} />
                <div className="landing-product-link-card">
                    <h2>Baking Made Easy</h2>
                    <Link to='/products'>
                        <button>VIEW PRODUCTS</button>
                    </Link>
                </div>
            </div>
            <div className='landing-product-types'>
                <div className="landing-product-card">
                    <div className="landing-inner-product-card">
                        <h2>Baked Goods</h2>
                        <Link to='/products/bakedgoods'>
                            <button>SHOP NOW</button>
                        </Link>
                    </div>
                    <img className="landing-product-img" src={cookies} />
                </div>
                <div className="landing-product-card">
                    <div className="landing-inner-product-card">
                        <h2>Coffee</h2>
                        <Link to='/products/beverages'>
                            <button>SHOP NOW</button>
                        </Link>
                    </div>
                    <img className="landing-product-img" src={coffee} />
                </div>
                <div className="landing-product-card">
                    <div className="landing-inner-product-card">
                        <h2>Tea</h2>
                        <Link to='/products/beverages'>
                            <button>SHOP NOW</button>
                        </Link>
                    </div>
                    <img className="landing-product-img" src={tea} />
                </div>
            </div>
        </>
    )
}

export default LandingPage;