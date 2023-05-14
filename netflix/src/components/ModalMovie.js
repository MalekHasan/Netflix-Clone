import  axios  from 'axios';
import React from 'react'
import  {Image}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalMovie(props) {
  function moviesData(title,time,actors,description,imdbRating) {
    this.title=title;
    this.time=time;
    this.actors=actors;
    this.description=description;
    this.imdbRating=imdbRating;
    
  }
  // {
  //   "id": 2,
  //   "title": "fast furios",
  //   "time": "150 minute",
  //   "actors": "ahmad",
  //   "description": "ahmad",
  //   "imdbRating": "18"
  //   }

  const saveData = async (item)=>{
    let myMovie= new moviesData(props.item.title+''
      ,props.item.vote_count+''
      ,props.item.media_type+''
      ,props.item.overview+''
      ,props.item.vote_count+'');
    const url=await axios.post(`https://movie-app-cm0x.onrender.com/movie`,myMovie)

  }
  return (
<>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Image src={`https://image.tmdb.org/t/p/w500/`+props.item.poster_path} className='w-100'/>
          {props.item.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>  )
}
