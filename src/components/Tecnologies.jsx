import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        src: 'img/SQL_NoSQL.png',
        alt: 'sql_no_sql',
        description: 'Databases'
    },
    {
        src: 'img/python.png',
        alt: 'Python',
        description: 'Backend'
    },
    {
        src: 'img/java.png',
        alt: 'Java',
        description: 'Backend'
    },
    {
        src: 'img/tech-3.png',
        alt: 'CSS-JS-HTML',
        description: 'frontend'
    },

]

const Tecnologies = () => {
    return (
        <>
            <h1 className='title-a text-center'>Tecnologies</h1>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                className='row bg-light '
                centerMode={true}
                centerSlidePercentage={25}
                interval={3000}
                showArrows={false}
                showStatus={false}
                showIndicators={false}>
                {images.map(image => {
                    return (
                        <div>
                            <img src={image.src} alt={image.alt} className='d-block img-fluid' />
                        </div>
                    )
                })}
                {/* <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                    <img src="img/python.png" alt="Imagen 2" className='w-25' />
                </div>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                    <img src="img/java.png" alt="Imagen 3" style={{ width: '150px', height: '150px' }} />
                </div> */}
            </Carousel>
        </>

    )
}

export default Tecnologies