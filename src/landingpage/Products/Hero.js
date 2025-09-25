import React from 'react'
function Hero() {
    return ( 
        <div className='container border-bottom pb-5'>
            <div className='text-center mt-5 p-3'>
                 <h1>Zerodha Products</h1>
                <h3 className='text-muted m-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our{" "} 
                    <a href="" style={{textDecoration:"none"}}>
                        investment offerings{" "}
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </a> 
                </p>
            </div>
           
        </div>
     );
}

export default Hero;