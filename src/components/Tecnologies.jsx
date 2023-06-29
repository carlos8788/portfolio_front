import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';

SwiperCore.use([Autoplay]);

const images = [


    {
        img: 'img/tecnologies/springboot.png',
        alt: 'springboot'
    },
    {
        img: 'img/tecnologies/java.png',
        alt: 'java'
    },
    {
        img: 'img/tecnologies/python.png',
        alt: 'python'
    },
    {
        img: 'img/tecnologies/django.png',
        alt: 'django'
    },
    {
        img: 'img/tecnologies/javascript.png',
        alt: 'javascript'
    },
    {
        img: 'img/tecnologies/nodeJs.png',
        alt: 'nodeJs'
    },
    {
        img: 'img/tecnologies/expressJs.png',
        alt: 'expressJs'
    },
    {
        img: 'img/tecnologies/react.png',
        alt: 'react'
    },
    {
        img: 'img/tecnologies/electron.png',
        alt: 'electron'
    },
    {
        img: 'img/tecnologies/html.png',
        alt: 'html'
    },
    {
        img: 'img/tecnologies/css3.png',
        alt: 'css3'
    },
    {
        img: 'img/tecnologies/bootstrap.png',
        alt: 'bootstrap'
    },
    {
        img: 'img/tecnologies/tailwind.png',
        alt: 'tailwind'
    },
    {
        img: 'img/tecnologies/sql.png',
        alt: 'sql'
    },
    {
        img: 'img/tecnologies/MySQL.png',
        alt: 'MySQL'
    },
    {
        img: 'img/tecnologies/postgreSQL.png',
        alt: 'postgreSQL'
    },
    {
        img: 'img/tecnologies/ubuntu.png',
        alt: 'ubuntu'
    },
    {
        img: 'img/tecnologies/github.png',
        alt: 'github'
    },
    {
        img: 'img/tecnologies/docker.png',
        alt: 'docker'
    },


]

export default () => {
    return (
        <>
            <div className="container my-5 pb-5">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Tecnologies
                        </h3>
                        <p className="subtitle-a">
                            Frameworks and libraries
                        </p>
                        <div className="line-mf"></div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        576: {
                          slidesPerView: 3,
                        },
                        640:{
                            slidesPerView: 5
                        }
                      }}
                >
                    {images.map((image, index) => {

                        return <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <img src={image.img} alt={image.alt} className="img-fluid" style={{ height: '5rem' }} />

                            </div>
                        </SwiperSlide>
                    })}
                </Swiper >
            </div >

        </>

    );
};