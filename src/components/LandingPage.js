import React from 'react';
import mainImage from '../images/landingBg.jpg';
import coffee from '../images/coffee.jpg';
import cookies from '../images/cookies.jpg';
import tea from '../images/tea.jpg';
import { Link } from 'react-router-dom';
import {Flex, Image} from '@chakra-ui/react';

const LandingPage = () => {
    return (
        <>
            <Flex direction='column' align='center'>
                <img className='landing-image-main' src="https://images.unsplash.com/photo-1625574199327-6c8a521117d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='baking ingredients' />
                <Flex className='landing-product-link-card' direction='column' justify='center' align='center'>
                    <h2>Baking Made Easy</h2>
                    <Link to='/products'>
                        <button>GET STARTED</button>
                    </Link>
                </Flex>
            </Flex>
            <Flex direction='row' justify='space-around' align='center' wrap="wrap" h="100vh">
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
                </Flex>
        </>
    )
}

export default LandingPage;