import React, { Component } from 'react'
import contentData from '../data/contentData'

class AboutUs extends Component{
    render(){
        return(
            <>
                <h1>AboutUs Page</h1>
                {
                    contentData.AboutUs.map( item => {
                        return (
                            <>
                                <p> About Us Content: { item.content }</p>
                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default AboutUs