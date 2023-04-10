import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ModalMovie(props) {


    return (

        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>
            </Modal.Header>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
            <Modal.Body>{props.movie.overview}</Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
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