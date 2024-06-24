import { useRef, useState } from "react";
import useClickAway from "../../hooks/UseClickAway";
import "./Modal.css";

function Modal({ children, setPopUp }) {
 const [isClosing, setIsClosing] = useState(false);
 const popUpRef = useRef(null);


 useClickAway(popUpRef, handleClosePopUp);

 function handleClosePopUp() {
  setIsClosing(true);
  setTimeout(() => {
   setPopUp(false);
  }, 250); // Match the duration of the slideOut animation
 }


 return (

  <div className='main-container'>
   <div ref={popUpRef} className={`content-container ${isClosing ? 'slide-out' : ''}`}>
    <img onClick={handleClosePopUp} className='x-icon' src='/assets/x.svg' alt='close-icon' />
    {children}
   </div>
  </div>

 )

}

export default Modal;