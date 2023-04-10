import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';


function ModalMovie(props) {
    const commentRef = useRef()

function submitHandler(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    // console.log("user comment is:",userComment)
    let newMovie={...props.movie, userComment}
    // console.log(newMovie);
    props.commentHandler(newMovie, newMovie.id);
}
async function addToFavHandler(e){
    e.preventDefault();
let url = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
// [title,release_date,poster_path];
let data = {
    title: props.movie.title,
    release_date:props.movie.release_date,
    poster_path:props.movie.poster_path,
    comment: props.movie.comment
}
 const response = await fetch (url,{
    method: "POST",
    headers: {
        "content-Type": "application/json"
    },
    body: JSON.stringify(data),
 })
 const recivedData = await response.json();
 console.log(11111,recivedData)
}
    return (

        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>
            </Modal.Header>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
            <Modal.Body>{props.movie.overview}</Modal.Body>
            <br/>
            <br/>
            {props.movie.comment? props.movie.comment: "No comment Added"}
            <br/>
            <Form>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="text" ref={commentRef} rows={3} />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={(e)=>addToFavHandler(e)} >
                    Submit
                </Button>

                <Button variant='primary' type='submit' onClick={(e)=>submitHandler(e)} >
                    Add to fav
                </Button>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    )
}
export default ModalMovie;