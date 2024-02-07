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
      <section  className="paralax-mf bg-image  route" style={{ backgroundImage: 'url(img/newHero.jpg)' }}>
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div  className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <CardProjects projects={projects}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Blog