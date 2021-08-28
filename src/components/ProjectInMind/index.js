import message from '../../assets/img/message.svg';

function ProjectInMind() {
  return (
    <section className='project section'>
      <div className='project__bg'>
        <div className='project__container container grid'>
          <div className='project__data'>
            <h2 className='project__title'>You have a new project</h2>
            <p className='project__description'>
              Contact me now and get a 30% discount on your new project.
            </p>
            <a href='#contact' className='button button--flex button--white'>
              Contact Me
              <i className='uil uil-message button__icon'></i>
            </a>
          </div>

          <img src={message} alt='' className='project__img' />
        </div>
      </div>
    </section>
  );
}

export default ProjectInMind;
