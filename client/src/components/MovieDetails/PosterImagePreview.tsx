import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './MovieDetails.css';

interface IPosterImage {
    movieImage: string
}

const PosterImagePreview = ({movieImage}: IPosterImage) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <Modal className="modal" fullscreen={true} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton />
                <Modal.Body className="modal-body">
                    <img src={movieImage} alt="Movie poster" />
                </Modal.Body>
            </Modal>

            <div className="poster-wrapper" onClick={handleShow}>
                <img id="poster" src={movieImage} alt="Movie poster" />
                <div className="overlay">
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    <span> Preview</span>
                </div>
            </div>
        </>
     );
}
 
export default PosterImagePreview;
