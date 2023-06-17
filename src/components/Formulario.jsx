// import React from 'react'
import React, { useState } from 'react';

const Formulario = () => {


    // const [nombre, setNombre] = useState('');
    // const [email, setEmail] = useState('');
    // const [mensaje, setMensaje] = useState('');

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Aquí puedes agregar la lógica para enviar los datos del formulario

    //   // Resetear los campos después del envío
    //   setNombre('');
    //   setEmail('');
    //   setMensaje('');
    // };
    return (
      // <div classNameName="testimonials paralax-mf bg-image" style={{ backgroundImage: 'url(/img/newHero.jpg)' }}>
      //   <div classNameName="overlay-mf"></div>
      //   <div classNameName="container">
      //     <div classNameName="row">
      //       <div classNameName="col-md-12">

      //         <div classNameName="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
      //           <div classNameName="swiper-wrapper">
      //             <form onSubmit={handleSubmit} classNameName='row m-auto'>
      //             <h1 classNameName='text-white text-center'>Contáctame</h1>
      //               <div classNameName="mb-3">
      //                 <label htmlFor="nombre" classNameName="form-label text-white h5">Nombre</label>
      //                 <input
      //                   type="text"
      //                   classNameName="form-control "
      //                   id="nombre"
      //                   value={nombre}
      //                   onChange={(e) => setNombre(e.target.value)}
      //                   required
      //                 />
      //               </div>

      //               <div classNameName="mb-3">
      //                 <label htmlFor="email" classNameName="form-label text-white h5">Correo Electrónico</label>
      //                 <input
      //                   type="email"
      //                   classNameName="form-control"
      //                   id="email"
      //                   value={email}
      //                   onChange={(e) => setEmail(e.target.value)}
      //                   required
      //                 />
      //               </div>

      //               <div classNameName="mb-3">
      //                 <label htmlFor="mensaje" classNameName="form-label text-white h5">Mensaje</label>
      //                 <textarea
      //                   classNameName="form-control"
      //                   id="mensaje"
      //                   rows="6"
      //                   value={mensaje}
      //                   onChange={(e) => setMensaje(e.target.value)}
      //                   required
      //                 ></textarea>
      //               </div>

      //               <button type="submit" classNameName="btn btn-dark h6 col-3 m-auto my-5">Enviar</button>
      //             </form>

      //           </div>
                
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(/img/newHero.jpg)' }}>
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
                      <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                        <li><span className="bi bi-phone"></span> (617) 557-0089</li>
                        <li><span className="bi bi-envelope"></span> contact@example.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul className='d-flex justify-content-center gap-5'>
                        <li><a href=""><i className="bi bi-facebook h2"></i></a></li>
                        <li><a href=""><i className="bi bi-instagram h2"></i></a></li>
                        <li><a href=""><i className="bi bi-linkedin h2"></i></a></li>
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



{/* //   return (
    
//   );
// }

// export default Formulario; */}
