import Modal from '../Modal/Modal';
import './SignInModal.css';

function SignInModal({ setPopUp }) {

 return (
  <Modal setPopUp={setPopUp}>
   <div className='signin-modal-container'>
    <h1>Sign in</h1>
    <p>Become a Member — you'll enjoy exclusive deals, offers, invites and rewards.</p>
    <section className='email-input-container'>
     <p>Email *</p>
     <input />
    </section>
    <section className='password-input-container'>
     <p>Password *</p>
     <input />
     <h1>SHOW</h1>
    </section>
    <section>
     <div>
      <input />
      <p>Remember me</p>
     </div>
     <p>Forgot password?</p>
    </section>
    <section>
     <button>Sign in</button>
     <button>Become a member</button>
    </section>
    <p>H&M Membership</p>
   </div>
  </Modal>
 )
}

export default SignInModal