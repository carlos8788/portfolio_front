import { useEffect, useState } from "react"
import { dataApi } from "../helpers/api"
import CardProjects from "../components/CardProjects";

const Blog = () => {
  const [projects, setProjects] = useState([])

  async function fetchData() {
    try {
      const response = await dataApi();
      console.log(response)
      setProjects(response);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])




  return (

    <>
      <div className="bg-dark custom-padding-nav"></div>
      <div className="section-counter paralax-mf bg-image viewport-custom" style={{ backgroundImage: 'url(img/newHero.jpg)' }}>
        <div className="overlay-mf viewport-custom">
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

        </div>
      </div>
    </>

  )
}

export default Blog