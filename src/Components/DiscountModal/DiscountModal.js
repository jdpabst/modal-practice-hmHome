import Modal from '../Modal/Modal';
import './DiscountModal.css';

function DiscountModal({ discount, paragraph, setPopUp }) {

 return (

  <Modal setPopUp={setPopUp}>
   <div className='discount-modal-container'>
    <h1>{discount} off</h1>
    <p>{paragraph}</p>
    <button className='bttn'>
     <h1>Sign up now</h1>
     <img src='/assets/right-arrow.svg' />
    </button>
   </div>
  </Modal>

 )
}

export default DiscountModal;