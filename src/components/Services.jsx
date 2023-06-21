import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services-mf pt-5 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                Services
                            </h3>
                            <p className="subtitle-a">
                            My services as a developer
                            </p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Web maintenance</h2>
                                <p className="s-description text-center">
                                    Updates, software updates, backups, performance optimization, monitoring and troubleshooting. See that it works correctly and provides a good user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Web Development</h2>
                                <p className="s-description text-center">
                                    Full-stack development in web applications, data management, version control, deployment and hosting, testing and debugging. Using React, Django or Express
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Databases</h2>
                                <p className="s-description text-center">
                                    Create standardized SQL databases to optimize communication. Create NO-SQL databases and the necessary collections. Analyze the appropriate use for each case
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-binoculars"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Responsive Design</h2>
                                <p className="s-description text-center">
                                Responsive designs using CSS3, as well as frameworks like Tailwind CSS or Bootstrap 5. 
                                The good thing is that you can combine pure CSS with any framework. It is very useful
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-brightness-high"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">api design</h2>
                                <p className="s-description text-center">
                                    Make an api with a coherent design, create some descriptive endpoints. Be clear about its use, make clear documentation. Versioning, implementing security with tokens, certificates or others
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Services