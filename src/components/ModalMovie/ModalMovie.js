import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalMovie(props) {
    return (

        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.title}</Modal.Title>
            </Modal.Header>
            <img src={props.movie.poster_path} alt={props.movie.title} />
            <Modal.Body>{props.movie.overview}</Modal.Body>
            <form>
                <label>Add Comment<input type="text" /></label>
            </form>
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