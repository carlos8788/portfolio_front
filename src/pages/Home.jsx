import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Formulario from "../components/Formulario"
import Works from "../components/Works"
import Typewriter from 'typewriter-effect';
import Tecnologies from "../components/Tecnologies"
import Layout from "./Layout"


export const Home = () => {

  return (
    <Layout>
      <div>
        <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(img/newHero.jpg)` }}>

          <div className="overlay-itro"></div>
          <div className="hero-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Hello, world!</p>
                <h1 className="hero-title mb-4">I'm Luis Pérez</h1>
                <h3 className="m-2 text-white">
                  <Typewriter
                    options={{
                      strings: ['Developer', 'Freelancer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section id="main">

          <About />

          <Services />
          <Tecnologies />
          <Works />
          <Portfolio />

          <Formulario />
        </section>
      </div>
    </Layout>

  )
}

