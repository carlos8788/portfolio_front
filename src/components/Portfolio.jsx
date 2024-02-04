import CardProjects from './CardProjects';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            name: 'Clinic History app',
            description: 'App Electron React Mongo',
            url_capture: 'img/work-1.jpg',
            date: '20/08/22',
            blog: '#',
            url_repo: 'https://github.com/carlos8788/electron-reactVite-mongo'
        },
        {
            id: 2,
            name: 'Consultorio online',
            description: 'Web App Django',
            url_capture: 'img/work-2.jpg',
            date: '30/05/23',
            blog: '#',
            url_repo: 'https://github.com/carlos8788/django_consultorio'
        },
        {
            id: 3,
            name: 'Database fake Airline',
            description: 'Database SQL ',
            url_capture: 'img/work-3.jpg',
            date: '18/02/23',
            blog: '#',
            url_repo: 'https://github.com/carlos8788/script_sql'
        },
        {
            id: 4,
            name: 'Mini Market',
            description: 'App Tkinter-SQLite',
            url_capture: 'img/work-4.jpg',
            date: '17/12/22',
            blog: '#',
            url_repo: 'https://github.com/carlos8788/tpUnsaU-master'
        },
        {
            id: 5,
            name: 'E-commerce express',
            description: 'App web Express/Bootstrap',
            url_capture: 'img/work-5.jpg',
            date: '12/10/22',
            blog: '#',
            url_repo: 'https://github.com/carlos8788/TPFinalBackEndCoderHouse'
        },
        {
            id: 6,
            name: 'Portfolio',
            description: 'App web React Django',
            url_capture: 'img/work-6.jpg',
            date: '16/06/23',
            blog: '#',
            url_repo: 'https://github.com/carlos8788?tab=repositories&q=portfolio&type=&language=&sort='
        }

    ]
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                Portfolio
                            </h3>
                            <p className="subtitle-a">
                                Some of my projects
                            </p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CardProjects projects={projects}/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio