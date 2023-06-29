import React from 'react'

const Aside = () => {
    return (
        <>
            <div class="container-fluid h-100">
                <div class="row h-100">
                    <aside className="col-3 bg-danger vh-100">
                        <h1>Hola mundo</h1>
                        <p className='text-white h3'>
                            Datos personales
                        </p>
                        <div className="aside__underline"></div>
                        <p className='text-white mb-5'><span className='fw-bold d-block'>Nombre:</span>
                            Luis Carlos Pérez González
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