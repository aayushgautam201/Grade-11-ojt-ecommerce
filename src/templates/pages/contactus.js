import react from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
const Contact=()=>
{
  return  (
      <>
<Header/>
<div class="wrapper">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <header>Send us a Message</header>
    <form action="#">
      <div class="dbl-field">
        <div class="field">
          <input type="text" name="name" placeholder="Enter your name"/>
          <i class='fas fa-user'></i>
        </div>
        <div class="field">
          <input type="text" name="email" placeholder="Enter your email"/>
          <i class='fas fa-envelope'></i>
        </div>
      </div>
      <div class="dbl-field">
        <div class="field">
          <input type="text" name="phone" placeholder="Enter your phone"/>
          <i class='fas fa-phone-alt'></i>
        </div>
        <div class="field">
          <input type="text" name="website" placeholder="Enter your website"/>
          <i class='fas fa-globe'></i>
        </div>
      </div>
      <div class="message">
        <textarea placeholder="Write your message" name="message"></textarea>
      </div>
      <div class="button-area">
        <button type="submit">Send Message</button>
        <span></span>
      </div>
    </form>
  </div>
<Footer/>
</>
    )
}
export default Contact;