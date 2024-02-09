
const Works = () => {
  return (
    <div className="section-counter paralax-mf bg-image mt-5" style={{ backgroundImage: 'url(img/newHero.jpg)' }}>

          <div className="overlay-mf"></div>
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="bi bi-check"></i></span>
                  </div>
                  <div className="counter-num">
                    <p data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1" className="counter purecounter"></p>
                    <span className="counter-text">WORKS COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
                  </div>
                  <div className="counter-num">
                    <p data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="counter purecounter"></p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="bi bi-people"></i></span>
                  </div>
                  <div className="counter-num">
                    <p data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="counter purecounter"></p>
                    <span className="counter-text">TOTAL CLIENTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Works