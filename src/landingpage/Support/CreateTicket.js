import React from 'react'
function CreateTicket() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
            <h1 className='fs-4 text-muted mb-5' style={{fontWeight:"400"}}>To create a ticket, select a relavent topic </h1>
            <div className='row '>
            <div className='col-4 p-3 '>
                <h4 className='fs-5'style={{fontWeight:400}}>
                   <i className="fa-solid fa-circle-plus"></i> Account Opening
                </h4>
                <ul>
                <li><a href=""style={{textDecoration:"none"}}>Resident individual</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Minor</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Glossary</a></li>
                </ul>
            </div>
              <div className='col-4 p-3  '>
                <h4 className='fs-5'style={{fontWeight:400}}>
                   <i class="fa-solid fa-user"></i> Your Zerodha Account
                </h4>
                <ul>
                <li><a href=""style={{textDecoration:"none"}}>Your Profile</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Account modification</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Nomination</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Transfer and conversion of securities</a></li>
                </ul>
            </div>
              <div className='col-4 p-3  '>
                <h4 className='fs-5'style={{fontWeight:400}}>
                  <i class="fa-solid fa-chart-simple"></i> Kite
                </h4>
                <ul>
                <li><a href=""style={{textDecoration:"none"}}>IPO</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Trading FAQs</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Charts and orders</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Alerts and Nudges</a></li>
                <li><a href=""style={{textDecoration:"none"}}>General</a></li>
                </ul>
            </div>
            <div className='col-4 p-3 '>
                <h4 className='fs-5' style={{fontWeight:400}}>
                  <i class="fas fa-credit-card"></i> Funds
                </h4>
                <li><a href=""style={{textDecoration:"none"}}>Add money</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Withdraw money</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Add bank accounts</a></li>
                <li><a href=""style={{textDecoration:"none"}}>eMandates</a></li>
            </div>
            <div className='col-4 p-3 '>
                <h4 className='fs-5'style={{fontWeight:400}}>
                  <i class="fas fa-terminal"></i> Console
                </h4>
                <li><a href=""style={{textDecoration:"none"}}>Portfolio</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Corporate actions</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Funds statement</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Reports</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Profile</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Segments</a></li>
            </div>
            <div className='col-4 p-3 '>
                <h4 className='fs-5'style={{fontWeight:400}}>
                 <i class="fa-solid fa-coins"></i> Coin
                </h4>
                <li><a href=""style={{textDecoration:"none"}}>Mutual funds</a></li>
                <li><a href=""style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Features on Coin</a></li>
                <li><a href=""style={{textDecoration:"none"}}>Payments and Orders</a></li>
                <li><a href=""style={{textDecoration:"none"}}>General</a></li>
            </div>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;