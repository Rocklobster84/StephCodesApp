import logo from '../assets/images/steph-logo.svg';
import github from '../assets/images/github-brands-solid.svg';
import linkedin from '../assets/images/linkedin-brands-solid.svg';
import behance from '../assets/images/behance-brands-solid.svg';
import steph from '../assets/images/steph-photo.jpg';
import signature from '../assets/images/signature.svg';

function HomeIntro() {
  
  return (
    <section id="intro">
      <div className="container-fluid">
        <div className="row nav-pad contain">
          <div className="col-lg col-sm logo">
            <img src={logo} alt="Logo" />
              <div className="social-block text-center">
                <a href='https://github.com/Rocklobster84' target="_blank" rel="noreferrer noopener">
                  <img src={github} alt="Github Logo" className='social'/>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/stephthomp/" target="_blank" rel="noreferrer noopener">
                  <img src={linkedin} alt="LinkedIn Logo" className='social'/>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.behance.net/stephrthompson" target="_blank" rel="noreferrer noopener">
                  <img src={behance} alt="Behance Logo" className='social'/>
                </a>
              </div>
          </div>
          <div className="col-sm col-lg">
          </div>
          <div className="col-sm col-lg" id="steph-nav" data-spy="scroll" data-target="#steph-nav" data-offset="0">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./photography.html">Photography</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pad-bottom contain" id="about">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="intro-content">
              <h1>Hi, I'm Stephanie</h1>

              <p className="intro-text">
                A passionate Full Stack Developer with 9+ years of experience with designing, building, and deploying web applications utilizing various technologies and programming languages. I am constantly striving to learn more and hone my craft. This has led to experience across a great number of technologies. I have a background in various industries including law, real estate, marketing, and information technology as well as being a graphic designer. This enables me to bring a unique perspective and high level of organization to any project I work on.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <img src={steph} alt="Photo of Stephanie Thompson" className="intro-photo mx-auto d-block" /> 
            <br />
            <img src={signature} alt="Stephanie Signature" className="signature mx-auto d-block"/>
            <br />
            <a className="btn btn-light btn-lg resume-button" href="../../assets/Stephanie-Thomspon-Resume.pdf" role="button"
            target="_blank"><i className="fas fa-file"></i>&nbsp; See My Resume</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HomeIntro;
