import Modal from '../Modal/Modal';
import './SignInModal.css';

function SignInModal({ setPopUp }) {

 return (
  <Modal setPopUp={setPopUp}>
   <div className='signin-modal-container'>

    <div className='inner-signin-container'>

     <h1>Sign in</h1>

     <p>Become a Member — you'll enjoy exclusive deals, offers, invites and rewards.</p>

     <section className='sign-in-input email-input-container'>
      <p>Email *</p>
      <input />
     </section>

     <section className='sign-in-input password-input-container'>
      <p>Password *</p>
      <input />
      <h1 className='pass-show cursor-hover'>SHOW</h1>
     </section>

     <section className='signin-helps-container'>
      <div className='checkbox-container'>
       <input type='checkbox' />
       <p>Remember me</p>
      </div>
      <p className='custom-p-styling-forgotpass cursor-hover'>Forgot password?</p>
     </section>

     <section className='button-container'>
      <button className='signin-bttn'>Sign in</button>
      <button className='member-bttn'>Become a member</button>
     </section>

     <p className='membership-signin cursor-hover'>H&M Membership</p>

    </div>
   </div>
  </Modal>
 )
}

export default SignInModal