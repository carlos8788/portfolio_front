import { OverlayTrigger, Popover } from "react-bootstrap"

const CardProjects = ({ projects }) => {
    return (
        <>
            {projects.map(project => {
                return (
                    <div className="col-md-4 " key={project.id}>
                        <div className="work-box border border-primary">
                            <a href={project.url_capture} data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img src={project.url_capture} alt={project.name} className="img-fluid" />
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">{project.name}</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">{project.description}</span> - <span className="w-date">{project.date || 'No hay datos'}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="w-like">
                                            <OverlayTrigger
                                                trigger={['hover', 'focus']}
                                                placement="bottom"
                                                overlay={
                                                    <Popover id="github-popover">
                                                        <Popover.Body>Description</Popover.Body>
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
                                                <a href={project.url_repo} target='_blank' rel="noopener noreferrer">
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
        </>
    )
}

export default CardProjects