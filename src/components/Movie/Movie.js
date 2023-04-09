import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>Add to Favorite</Button>
        </Card.Body>
      </Card>

      <ModalMovie show={show} movie={props.movie} handleClose={handleClose} />
    </>
  )
}
export default Movie;