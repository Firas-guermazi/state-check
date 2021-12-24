import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';

export default class Profile extends Component {
   constructor(props) {
       super(props)
   }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image}/>
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

