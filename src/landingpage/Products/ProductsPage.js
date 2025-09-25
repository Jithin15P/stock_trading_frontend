import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Hero from './Hero';
import Universe from './Universe'
function ProductsPage() {
    return ( 
        <>
        <Hero></Hero>
        <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        ></LeftSection>
        <RightSection
         imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        ></RightSection>
        <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        ></LeftSection>
        <RightSection
         imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore=""
        ></RightSection>
        <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        ></LeftSection>
        <h3 className='text-center text-muted mt-5'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h3>
        <Universe></Universe>
        </>
    
     );
}

export default ProductsPage;