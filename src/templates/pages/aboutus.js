import react from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Aboutu from '../../static/image/aboutu.jpg';
const About =()=>
{
  return  (
      <>
<Header/>
<About_us/>
<Footer/>
</>
    )
}
const About_us =()=>
{
    return(
    <div class="about">
    <div class="inner-section">
        <h1>About Us</h1>
        <p class="text">
        k shop is the ecommerce website designed and developed by the students of grade 11 as a ojt project under the supervision of the ojt supervisor
        </p>
        <div class="skills">
            <button><a href="/contact_us">Contact Us</a></button>
        </div>
    </div>
</div>
    )
}
export default About;