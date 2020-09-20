import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Gym from './Gym'
import { initialGyms } from '../gyms';
import { additionalGyms } from '../gyms';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gyms: initialGyms
    };
    this.loadAdditionalGyms = this.loadAdditionalGyms.bind(this);
  }

  loadAdditionalGyms() {
    var currentGyms = { ...this.state.gyms };
    var newGyms = Object.assign(currentGyms, additionalGyms);
    this.setState({ gyms: newGyms });
  }


  render() {
    return (
      <div className="App">
        <Header text="Asia's Gym" />
        <h2 className="page-header bg-success text-white p-3 mb-2">Our Equipments</h2>
        <div className="gyms">
          {
            Object
              .keys(this.state.gyms)
              .map(key => <Gym key={key} meta={this.state.gyms[key]} />)
          }
        </div>
        <div className="add-gyms"><button onClick={this.loadAdditionalGyms} className="btn btn-success">Show more</button></div>
        <div className="row">
        <div id="contact" className="container card col-lg-3">
          <h2 class="fontsH">About Us</h2>
          <p class="fontsP">Welcome to Asia's Gym, your number one source for all things [product]. We're dedicated to providing 
            you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], 
            [store characteristic 3].<br/><br/>
            Founded in [year] by [founder name], Asia's Gym has come a long way from its beginnings in [starting location].
             When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to start their own business.<br/><br/>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<br/><br/>
            Sincerely,<br/>
            [founder name]</p>
        </div>

          <div id="contact" className="container card col-lg-3">
            <h2>Contact Us</h2>
            <form action="#">

              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.."/>
    
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <input type="submit" value="Submit"/>

            </form>
          </div>

          <div id="contact" className="container card col-lg-3">
          <iframe width="auto" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=ABIL%20HOUSE,%20RANGE%20HILL%20CORNER,%20GANESHKHIND%20ROAD%20pune+(ABIL%20GROUP)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
          <a href='https://embedmaps.org/'>embed google maps wordpress</a> 
          <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=b76f8ca917c734de84f1c02804c1fd2400f118c2'></script>
          <h2 id="cd">Contact Details</h2>
          <p>Mobile No. : +915544988998</p>
          <p>Email : asia'sgym@gmail.com</p>
          <p>Website : www.asia'sgym.com</p>
          </div>
          </div>
        <div className="container-fluid">
  <footer class="footer-distributed">
    

<div class="footer-left">
  <h3>About<span>Asia's Gym</span></h3>

  <p class="footer-links">
    <a href="#">Home</a>
    |
    <a href="#">Blog</a>
    |
    <a href="#">About</a>
    |
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">© 2019 Asia's Gym Pvt. Ltd.</p>
</div>

<div class="footer-center">
  <div>
    <i class="fa fa-map-marker"></i>
      <p><span>Plot No, 2, Ganeshkhind Rd, Pune, Maharashtra 411007, India</span></p>
  </div>
  <div>
    <i class="fa fa-phone"></i>
    <p>+91 22-27782183</p>
  </div>
  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="#">asia'sgym.com</a></p>
  </div>
</div>
<div class="footer-right">
  <p class="footer-company-about">
    <span>About the Club</span>
    Asia's Gym ensures comprehensive approach followed by certified fitness trainers and nutritional counselors for the overall well-being and health of the members.</p>
  <div class="footer-icons">
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-instagram"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-youtube"></i></a>
  </div>
</div>
</footer>
        </div>
        </div>
    );
  }
}

export default App;
