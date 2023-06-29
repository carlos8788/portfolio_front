import React from 'react'

const Aside = () => {
    return (
        <>
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <aside className="col-3 aside pt-5 ps-5">
                        
                        <p className='text-white h3'>
                            Datos personales
                        </p>
                        <div className="aside__underline"></div>
                        <p className='text-white mb-4 fs-4 mt-3' ><span className='fw-bold d-block'>Nombre:</span>
                            Luis Carlos Pérez González
                        </p>
                        <p className='text-white mb-4 fs-4' ><span className='fw-bold d-block'>Dirección:</span>
                            Salta Cap. Salta, Argentina
                            CP 4400
                        </p>
                        <p className='text-white mb-4 fs-4' ><span className='fw-bold d-block'>Teléfono:</span>
                            +5493876294668
                        </p>
                        <p className='text-white mb-4 fs-4' ><span className='fw-bold d-block'>e-mail:</span>
                            carlos8788@gmail.com
                        </p>
                        <p className='text-white mb-4 fs-4' ><span className='fw-bold d-block '>LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/carlos8788"> <span className='fw-bold aside__a'>@carlos8788</span> </a>
                        </p>
                        <p className='text-white mb-4 fs-4' ><span className='fw-bold d-block '>GitHub:</span>
                            <a href="https://www.github.com/carlos8788"> <span className='fw-bold  aside__a'>#carlos8788</span> </a>
                        </p>
                        <p className='text-white h3 mt-5'>
                            Pasatiempos
                        </p>
                        <div className="aside__underline"></div>
                        <p className='text-white mt-2 fs-4' >
                            Videojuegos
                        </p>
                        <p className='text-white mt-4 fs-4' >
                            Cantar y tocar la guitarra
                        </p>
                        <p className='text-white mt-4 fs-4' >
                            Jugar al fútbol
                        </p>

                        <p className='text-white h3 mt-5 '>
                            Canal de YouTube  <i className="h3 bi-youtube mx-2 " ></i>
                        </p>
                        <div className="aside__underline"></div>

                        <a href="https://www.youtube.com/channel/UCha7oR79ruIat2t5VDzacoQ"> <span className=' mt-4 fs-4 aside__a'>@luisDev8788</span> </a>
                        
                        <p className='text-white h3 mt-5 '>
                            Idiomas  
                        </p>
                        <div className="aside__underline"></div>
                        <p className='text-white mt-4 fs-4' >
                            Español nativo
                        </p>
                        <p className='text-white mt-4 fs-4' >
                           Inglés A2
                        </p>

                    </aside>
                    <main class="col">

                    </main>
                </div>
            </div>

        </>
    )
}

export default Aside