import React from 'react'
function Pricing() {
    return ( 
       <div className='container mb-5' >
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3'>Unbeatable pricing</h1>
                <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            </div>
             <div className='col-2'>
                
            </div>
             <div className='col-6 mt-3'>
                <div className='row text-center'>
                    <div className='col p-2 border'>
                      <h1 className='mb-3 fs-2'>&#x20B9; 0</h1>  
                      <p>Free equity delivery <br/>direct mutual funds</p>
                    </div>
                      <div className='col p-2 border'>
                      <h1 className='mb-3'>&#x20B9; 20</h1>  
                      <p>Intraday and F&0</p>
                    </div>
                </div>
                <a href="" style={{textDecoration:"none"}}> See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Pricing;