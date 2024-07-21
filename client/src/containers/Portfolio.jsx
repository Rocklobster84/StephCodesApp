import Cards from "../containers/Cards";

function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <div class="container-fluid">

          <div class="row contain">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="do-content text-center">
                <h2 class="portfolio-heading">My Portfolio</h2>
                  <p class="do-text"></p>
              </div>
            </div>
          </div>

          <div class="row contain">
            <Cards />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Portfolio;