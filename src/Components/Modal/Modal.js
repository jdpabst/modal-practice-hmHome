import { useState } from "react";
import "./Modal.css";

function Modal({ children, setPopUp }) {
 const [isClosing, setIsClosing] = useState(false);

 function handleClosePopUp() {
  setIsClosing(true);
  setTimeout(() => {
   setPopUp(false);
  }, 250); // Match the duration of the slideOut animation
 }


 return (

  <div className='main-container'>
   <div className={`content-container ${isClosing ? 'slide-out' : ''}`}>
    <img onClick={handleClosePopUp} className='x-icon' src='/assets/x.svg' />
    {children}
   </div>
  </div>

 )

}

export default Modal;