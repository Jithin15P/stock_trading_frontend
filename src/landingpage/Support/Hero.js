import React from 'react'
function Hero() {
    return ( 
        <section className='conatiner-fluid' id="supportHero">
            <div className=' p-2' id="supportWrapper">
                <h4>Support Portal </h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-2' >
                <div className='col-6 p-5 '>
                    <h1 className='fs-4 pb-3' style={{fontWeight:"400",paddingLeft:"95px"}}>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...               <i class="fa-solid fa-magnifying-glass"></i>'style={{ marginLeft:"95px"}}/><br/>
                    <div className='anchor'>
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a>
                        <a href="">Intraday margins</a>
                        <a href="">Kite user manual</a>
                    </div>
                    
                </div>
                <div className='col-6 p-5  '>
                    <h1 className='px-3'>Featured</h1>
                    <ol className='px-5'style={{lineHeight:"2em"}}>
                        <li><a href="">Surveillance measure on scrips - June 2025</a></li>
                        <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                    
                    </div>    
            </div>
        </section>
     );
}

export default Hero;