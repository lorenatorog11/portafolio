import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';

class Cards extends Component{
  render(){
    return (
      <div>
        <Card className="cardProyects p-3 mb-4">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + `${this.props.src}`} />
          <Card.Body className="p-0 my-2 d-flex justify-content-center">
            <Card.Title className="m-auto">{this.props.name}</Card.Title>
            <Button className='btnVer m-auto' target='_black' href={this.props.href}>Ver</Button>          
          </Card.Body>
        </Card>
      </div>
    )  
  };
};

export default Cards;