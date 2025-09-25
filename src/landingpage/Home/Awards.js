import React from 'react'

function Awards () {
    return ( 
         <div className='container'>
            <div className='row'>
                <div className='col-6'>
                     <img src="media/images/largestBroker.svg" alt="largestBroker"></img>
                </div>
                 <div className='col-6 mt-5'>
                   <h1>Largest stock broker in India</h1>
                   <p>2+ million Zerodha clients contribute to over 15% of all volumes in India by trading and investing in:</p>
                  <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                             <li>
                                <p>Stocks & IPOs</p>
                            </li>
                             <li>
                                <p>Stocks & IPOs</p>
                            </li>
                        </ul>
                    </div>
                     <div className='col-6'>
                         <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                             <li>
                                <p>Stocks & IPOs</p>
                            </li>
                             <li>
                                <p>Stocks & IPOs</p>
                            </li>
                        </ul>
                    </div>
                            <img src="media/images/pressLogos.png" style={{width:"90%"}}></img>
                  </div>
                </div>
            </div>
         </div>
     );
}

export default Awards;