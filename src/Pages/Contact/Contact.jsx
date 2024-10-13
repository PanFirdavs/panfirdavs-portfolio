
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";


const Contact = () => {
    return (
      <section className="contact" data-page="contact">
  
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
  
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.080393837659!2d69.2334027!3d41.3167368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b00259dec93%3A0x5ee9e90ddeac647f!2sProlog%20Academy!5e0!3m2!1sen!2sus!4v1701688608381!5m2!1sen!2sus"
              width="400" height="300" loading="lazy" title="Google Map"></iframe>
          </figure>
        </section>

        
  
        <section className="contact-form">
  
          <h3 className="h3 form-title">Contact Form</h3>
  
          <form action="#" className="form" data-form>
  
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
  
              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>
  
            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
  
            <button className="form-btn" type="submit" data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
  
          </form>
  
        </section>


        <section>

          <div className="flex justify-center gap-5 mt-10">
            <a href="https://github.com/PanFirdavs">
              <FaGithub  className="fill-white text-[36px] cursor-pointer hover:fill-[#f59e0b] transition-all duration-300 hover:scale-110"/>
            </a>
          
            <a href="https://gitlab.com/PanFirdavs">
              <FaGitlab  className="fill-white text-[36px] cursor-pointer hover:fill-[#f59e0b] transition-all duration-300 hover:scale-110" />
            </a>   
          
            <a href="https://t.me/firdavs_developer">
              <FaTelegram className="fill-white text-[36px] cursor-pointer hover:fill-[#f59e0b] transition-all duration-300 hover:scale-110" />
            </a>

            <a href="https://www.linkedin.com/in/firdavs-panoyev">
              <FaLinkedin className="fill-white text-[36px] cursor-pointer hover:fill-[#f59e0b] transition-all duration-300 hover:scale-110"/>
            </a>



          </div>

        </section>
  
      </section>
    );
  };
  
  export default Contact;