import {

    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
    return (
        <>
       
        <div className="social-container">
        <h1>Contact me through</h1>
        <div className="link">
        <a href="https://www.facebook.com/nhatminh.tranle.7"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com/c/jamesqquick"
        className="insta social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </div>
        </div>

        </>
    )
}

export default Contact