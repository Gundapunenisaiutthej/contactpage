import React from 'react'
import './Contactus.css'
// import sliders1 from './Images/sliders1.png'
const Address = [
{store: "store1",
 street: "123Street, New York, USA",
  mail:"info@example.com",
  Mobileno:"+01234567890",
},
{store:"store2",
  street:"123Street, New York, USA",
  mail:"info@example.com",
  Mobileno:"+01234567890",
},
]




const Contactus = () => {
  return (
    <div className="contact-us-page">
        <div class="d-flex flex-column bg-secondary align-items-center justify-content-center" style={{"min-height": "300px"}}>
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
            <div class="d-inline-flex">
                <p class="m-0"><a href="/">Home</a></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">Contact</p>
            </div>
        </div>

        
      <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">---Contact For Any Queries---</span></h2>
        </div>
        <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <div class="control-group">
                            <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" aria-invalid="false" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea class="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-5 mb-5">
                <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
                <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
             {Address.map((item)=>
           <div className="d-flex flex-column">
           <h5 className="font-weight-semi-bold mb-3 mt-3">{item.store}</h5>
           <p className="mb-2">
             <i className="fa fa-map-marker-alt text-dark mr-3"></i>{item.street}
           </p>
           <p className="mb-2">
             <i className="fa fa-envelope text-dark mr-3"></i>
             {item.mail}
           </p>
           <p className="mb-0">
             <i className="fa fa-phone-alt text-dark mr-3"></i>{item.Mobileno}
           </p>
         </div>
           )}
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Contactus