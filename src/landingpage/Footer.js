import React from 'react'
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
         <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.svg" style={{width:"50%"}}></img>
                    <p>&copy; 2010 - 2025,Not Zerodha Broking Ltd. All rights reserved.</p>
                    <a href='' className='px-2'><i class="fa-brands fa-instagram"></i></a>
                    <a href='' className='px-2'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='' className='px-2'><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <div className='col'>
                    <h5>Account</h5> 
                    <a>Minor demat account</a><br/>
                    <a>NRI demat account</a><br/>
                    <a>Commodity</a><br/>
                    <a>Dematerialisation</a><br/>
                    <a>Fund transfer</a><br/>
                    <a>MTF</a><br/>
                    <a>Referral program</a><br/>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <a>Contact us</a><br/>
                    <a>Support portal</a><br/>
                    <a>How to file a complaint?</a><br/>
                    <a>Status of your complaints</a><br/>
                    <a>Bulletin</a><br/>
                    <a>Circular</a><br/>
                    <a>Z-Connect blog</a><br/>
                    <a>Downloads</a><br/>
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <a>About</a><br/>
                    <a>Philosophy</a><br/>
                    <a>Press & media</a><br/>
                    <a>Careers</a><br/>
                    <a>Zerodha Cares (CSR)</a><br/>
                    <a>Zerodha.tech</a><br/>
                    <a>Open source</a><br/>
                </div>
                <div className='col'>
                    <h5>Quick links</h5> 
                    <a>Upcoming IPOs</a><br/>
                    <a>Brokerage charges</a><br/>
                    <a>Market holidays</a><br/>
                    <a>Economic calendar</a><br/>
                    <a>Calculators</a><br/>
                    <a>Markets</a><br/>
                    <a>Sectors</a><br/>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"12px"}}>
                <p >Not Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ88888831633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p >Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p >Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p > transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
            <div>
                <ul className='footer-links'>
                    <li>NSE</li>
                    <li>BSE </li>
                    <li>MCX </li>
                    <li>Terms & conditions</li>
                    <li>Policies & procedures </li>
                    <li>Privacy policy </li>
                    <li>Privacy policy</li>
                    <li>Disclosure </li>
                    <li>For investor's attention </li>
                    <li>Investor charter</li>
                </ul>
            </div>
         </div>
         </footer>
     );
}

export default Footer;