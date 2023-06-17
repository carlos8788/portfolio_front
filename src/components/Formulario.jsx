

const Formulario = () => {

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
                      <form action="" method="post" role="form" className="php-email-form">
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
                      To ask about my services or job offers, you can contact me by email, cell phone or leave me a message that will be answered shortly.
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt"></span> Salta, Argentina</li>
                        <li><span className="bi bi-phone"></span> +5493876294668</li>
                        <li><span className="bi bi-envelope"></span> carlos8788@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul className='d-flex justify-content-center gap-5'>
                        <li><a href=""><i className="bi bi-facebook h2"></i></a></li>
                        <li><a href=""><i className="bi bi-instagram h2"></i></a></li>
                        <li><a href=""><i className="bi bi-linkedin h2"></i></a></li>
                        <li><a href=""><i className="bi bi-github h2"></i></a></li>
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


