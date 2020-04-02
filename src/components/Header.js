import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div>Website</div>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/AboutUs"> About Us </Link></li>
                <li><Link to="/Products"> Products </Link></li>
                <li><Link to="/ContactUs"> Contact Us </Link></li>
            </ul>
        </>
    )
}

export default Header