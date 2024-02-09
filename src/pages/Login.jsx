import { login } from "../helpers/api";


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        login(data)
    }

    return (
        <>
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
                                                                    name="username"
                                                                    className="form-control"
                                                                    id="username"
                                                                    placeholder="Your username"
                                                                    // value={formData.nombre}
                                                                    // onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    name="password"
                                                                    id="password"
                                                                    placeholder="Your password"
                                                                    // value={formData.email}
                                                                    // onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 text-center my-3">
                                                            <div className="loading">Loading</div>
                                                            <div className="error-message"></div>
                                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                                        </div>
                                                        <div className="col-md-12 text-center">
                                                            <button type="submit" className="button button-a button-big button-rouded">
                                                                Login
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login