import React from 'react';
import about from './about.png'
import portfolio from './portfolio.jpg'
import contact from './contact.jpg'

const Body = () => {
    return (
        <div className="main">
            <div className="first">
                <img className='about' alt="" src={about}/>
            </div>
            <div>
                <img className='portfolio' alt="" src={portfolio}/>
            </div>
            <div className="third">
                <img className='contact' alt="" src={contact}/>
            </div>
        </div>
    )
}

export default Body