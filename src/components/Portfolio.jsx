import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';
const Portfolio = () => {
    const projects = [
        {
            id: 1,
            name: 'Clinic History app',
            description: 'App Electron React Mongo',
            img: 'img/work-1.jpg',
            date: '20/08/22',
            blog: '#',
            repo: 'https://github.com/carlos8788/electron-reactVite-mongo'
        },
        {
            id: 2,
            name: 'Consultorio online',
            description: 'Web App Django',
            img: 'img/work-2.jpg',
            date: '30/05/23',
            blog: '#',
            repo: 'https://github.com/carlos8788/django_consultorio'
        },
        {
            id: 3,
            name: 'Database fake Airline',
            description: 'Database SQL ',
            img: 'img/work-3.jpg',
            date: '18/02/23',
            blog: '#',
            repo: 'https://github.com/carlos8788/script_sql'
        },
        {
            id: 4,
            name: 'Mini Market',
            description: 'App Tkinter-SQLite',
            img: 'img/work-4.jpg',
            date: '17/12/22',
            blog: '#',
            repo: 'https://github.com/carlos8788/tpUnsaU-master'
        },
        {
            id: 5,
            name: 'E-commerce express',
            description: 'App web Express/Bootstrap',
            img: 'img/work-5.jpg',
            date: '12/10/22',
            blog: '#',
            repo: 'https://github.com/carlos8788/TPFinalBackEndCoderHouse'
        },
        {
            id: 6,
            name: 'Portfolio',
            description: 'App web React Django',
            img: 'img/work-6.jpg',
            date: '16/06/23',
            blog: '#',
            repo: '#'
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
                    {projects.map(project => {
                        return (
                            <div className="col-md-4" key={project.id}>
                                <div className="work-box">
                                    <a href={project.img} data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img src={project.img} alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">{project.name}</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">{project.description}</span> - <span className="w-date">{project.date}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <OverlayTrigger
                                                        trigger={['hover', 'focus']}
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="github-popover">
                                                                <Popover.Body>Blog</Popover.Body>
                                                            </Popover>
                                                        }
                                                    >
                                                        <a href={project.blog} className='mx-1'> <span className="bi bi-folder2-open"></span></a>
                                                    </OverlayTrigger>

                                                    <OverlayTrigger
                                                        trigger="hover"
                                                        placement="top"
                                                        overlay={
                                                            <Popover id="github-popover">
                                                                <Popover.Body>GitHub Repo</Popover.Body>
                                                            </Popover>
                                                        }
                                                    >
                                                        <a href={project.repo}>
                                                            <span className="bi bi-github"></span>
                                                        </a>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default Portfolio