


const About = () => {
    const skillsoft = [
        'Teamwork',
        'Leadership',
        'Time management',
        'Proactivity',
        'Business sense',
        'Effective communication',
    ]

    const myData = {
        name: 'Luis Pérez',
        profile: 'Full stack developer',
        email: 'carlos8788@gmail.com',
        phone: '+5493876294668'
    }
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src="img/profile.jpg" className="img-fluid rounded b-shadow-a" alt="profile" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                {
                                                    Object.entries(myData).map(([propiedad, valor], key) => {
                                                        return (<p key={key}>
                                                            <span className="title-s">{propiedad.toUpperCase()}: </span>
                                                            <span>{valor}</span>
                                                        </p>)

                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Skillsoft</p>
                                        <ul>
                                            {skillsoft.map((skill, key) => <li key={key} className="my-4">{skill}</li>)}
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p className="lead">
                                            I am a software and web application developer. I currently work with Python and Javascript.
                                            Using frameworks like Django, Vite, React, Next, Django-Rest-Framework, Express.
                                        </p>
                                        <p className="lead">
                                            I make CRUD apps with SQL or NO-SQL. MySQL, PostgreSQL, SQL Server, MongoDB.
                                        </p>
                                        <p className="lead">
                                            I like the development of web applications, especially doing the backend part, creating api's with Django or Express.
                                        </p>
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

export default About





