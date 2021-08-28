function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          <div>
            <h1 className='footer__title'>Syazwan</h1>
            <span className='footer__subtitle'>Frontend developer</span>
          </div>

          <ul className='footer__links'>
            <li>
              <a href='#about' className='footer__link'>
                About
              </a>
            </li>
            <li>
              <a href='#skills' className='footer__link'>
                Skills
              </a>
            </li>
            <li>
              <a href='#qualification' className='footer__link'>
                Qualification
              </a>
            </li>
            <li>
              <a href='#services' className='footer__link'>
                Services
              </a>
            </li>
          </ul>

          <div className='footer__socials'>
            <a
              href='https://www.linkedin.com/in/muhammad-syazwan-hosen-9a0a9221a/'
              target='_blank'
              className='footer__social'
            >
              <i className='uil uil-linkedin-alt'></i>
            </a>
            <a
              href='https://twitter.com/syazwanhosen'
              target='_blank'
              className='footer__social'
            >
              <i class='uil uil-twitter-alt'></i>
            </a>
            <a
              href='https://github.com/syazwanhosen'
              target='_blank'
              className='footer__social'
            >
              <i className='uil uil-github-alt'></i>
            </a>
          </div>
        </div>

        <p className='footer__copy'>
          Copyright &#169; 2021 Syazwan. Made with ❤️ in Malaysia
        </p>
      </div>
    </footer>
  );
}

export default Footer;
