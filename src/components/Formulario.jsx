import  { useState } from 'react';
import Swal from 'sweetalert2'


const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('http://localhost:8000/api/contactos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire(
            'Message sent!',
            'Thanks!',
            'success'
          )
          setFormData({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: '',
          })
        } else {
          Swal.fire(
            'Message not sent!',
            'Error!',
            'error'
          )
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (

    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(img/newHero.jpg)' }}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>

                      <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="asunto"
                                id="subject"
                                placeholder="Subject"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="mensaje"
                                rows="5"
                                placeholder="Message"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        To ask about my services or job offers, you can contact me by email, cell phone or leave me a message that will be answered shortly.
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt"></span> Salta Capital, Salta, Argentina</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul className='d-flex justify-content-center gap-5'>
                        {/* <li><a href="https://www.facebook.com/luiscarlos.perez.88/" target='_blank'><i className="bi bi-facebook h2"></i></a></li> */}
                        <li><a href="https://www.instagram.com/luis_carlos8788/" target='_blank' rel="noopener noreferrer"><i className="bi bi-instagram h2"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/carlos8788/" target='_blank' rel="noopener noreferrer"><i className="bi bi-linkedin h2"></i></a></li>
                        <li><a href="https://github.com/carlos8788" target='_blank' rel="noopener noreferrer"><i className="bi bi-github h2"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formulario


