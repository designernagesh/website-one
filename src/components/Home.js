import React, { Component } from 'react'
import contentData from '../data/contentData'
import { Card } from 'react-bootstrap'

class Home extends Component{
    
    render(){
        
        const abc = contentData.Home.map( (item) => {
            return (
                <>                    
                    <p>{ item.content }</p>
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/200/300" style={{ height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{ item.product1 }</Card.Title>
                        <Card.Text>
                        { item.product1Desc }
                        </Card.Text>
                        <a href={ item.productLink } className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go somewhere</a>
                    </Card.Body>
                    </Card>                                    
                </>
            )
        })

        return(
            <>
                <h1>Home Page</h1>
                
                { abc }
                
            </>
        )
    }
}

export default Home