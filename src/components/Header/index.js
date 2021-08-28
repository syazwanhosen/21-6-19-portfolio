import { useEffect } from 'react';
function Header() {
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link');

  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu className
    navMenu.classList.remove('show-menu');
  }
  navLink.forEach((n) => n.addEventListener('click', linkAction));

  useEffect(() => {
    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
        } else {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  }, []);

  useEffect(() => {
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  }, []);

  useEffect(() => {
    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById('header');
      if (this.scrollY >= 80) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
      let scrollTop = document.getElementById('scroll-top');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
      else scrollTop.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollTop);

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
      );
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }, []);

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          Syazwan.
        </a>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>

            <li className='nav__item'>
              <a href='#qualification' className='nav__link'>
                <i class='uil uil-graduation-cap nav__icon'></i>Qualification
              </a>
            </li>

            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact Me
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__close' id='nav-close'></i>
        </div>

        <div className='nav__btns'>
          {/* <!-- Theme change button --> */}
          <i className='uil uil-moon change-theme' id='theme-button'></i>

          <div className='nav__toggle' id='nav-toggle'>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
