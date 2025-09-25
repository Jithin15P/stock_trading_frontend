import React from 'react'
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}></img>
                </div>
                 <div className='col-6 p-3 mt-5'>
                     <h1>{productName}</h1>
                     <p>{productDescription}</p>
                     <a href={tryDemo}style={{textDecoration:"none"}}>TryDemo{""} <i class="fa-solid fa-arrow-right-long"></i></a>
                     <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>LearnMore{""} <i class="fa-solid fa-arrow-right-long"></i></a>
                     <div className='mt-3'>
                        <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg"></img>
                     </a>
                     <a href={appStore}>
                        <img src="media/images/appstoreBadge.svg"></img>
                     </a>
                     </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;