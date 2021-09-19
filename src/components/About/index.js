import avatar from '../../assets/img/avatar.png';
import resume from '../../assets/pdf/Muhammad_Syazwan_Hosen_Resume.pdf';

function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container container grid'>
        <img src={avatar} alt='' className='about__img' />

        <div className='about__data'>
          <p className='about__description'>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </p>

          <div className='about__info'>
            <div>
              <span className='about__info-title'>02+</span>
              <span className='about__info-name'>
                Years <br />
                experience
              </span>
            </div>

            <div>
              <span className='about__info-title'>02+</span>
              <span className='about__info-name'>
                Completed <br />
                projects
              </span>
            </div>

            <div>
              <span className='about__info-title'>02+</span>
              <span className='about__info-name'>
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className='about__buttons'>
            {/* <!--==================== Change your CV ====================--> */}
            <a download='' href={resume} className='button button--flex'>
              Download CV <i className='uil uil-download-alt button__icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
