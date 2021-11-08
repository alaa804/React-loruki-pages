import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./contact.css";
import phone from "../../img/phone.png";
import Email from "../../img/email.png";
import address from "../../img/address.png";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_btlhr2s",
        "template_3scdke9",
        formRef.current,
        "user_JcoCN8JCzXUimMTFHTGlJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // INIT SCROLL
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  });
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="container">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info" data-aos="fade-right">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +216 28 148 848
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              Progweb332@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Rue Souk Leghzal 8000 Tunisia,Nabeul
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button> {""}
            {done && <h5 className="msg"> email send Successfully!...</h5>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
