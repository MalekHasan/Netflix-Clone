import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from './ModalMovie';
import  Button  from 'react-bootstrap/Button';

export default function Movie(props) {
const [show,setShow]=useState(false);
function  handleShow(){
  setShow(true)
} 
function  handleClose(){
  setShow(false)
} 
let movieDetailes=props.item;
  return (
<>
<Col key={props.index}>
          <Card >
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/`+movieDetailes.poster_path} />
            <Card.Body>
              <Card.Title>{movieDetailes.title}</Card.Title>
              <Card.Text>
                {movieDetailes.overview.split(" ").slice(0,20).join(" ")}
              </Card.Text>
              <Button variant="primary" onClick={()=>{
                handleShow();
                console.log(props.item)
              }}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
                <ModalMovie show={show} handleClose={handleClose} item={movieDetailes}/>
</>  )
}
