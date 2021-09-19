import { useState } from 'react';

function Qualification() {
  const [isActive, setIsActive] = useState(true);

  const handleToggle1 = () => setIsActive(true);
  const handleToggle2 = () => setIsActive(false);

  return (
    <section className='qualification section' id='qualification'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={`qualification__button button--flex ${
              isActive && 'qualification__active'
            }`}
            data-target='#education'
            onClick={handleToggle1}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${
              !isActive && 'qualification__active'
            }`}
            data-target='#work'
            onClick={handleToggle2}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Work
          </div>
        </div>

        <div className='qualification__sections'>
          {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
          {isActive ? (
            <div
              className='qualification__content qualification__active'
              data-content
              id='education'
            >
              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>
                    Diploma in Information Technology
                  </h3>
                  <span className='qualification__subtitle'>
                    International Islamic College
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2014 - 2019
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className='qualification__data'>
                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>
                    Bachelor of Computer Science
                  </h3>
                  <span className='qualification__subtitle'>
                    International Islamic University Malaysia
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2021 - Now
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // {/* <!--=============== QUALIFICATION CONTENT 2 ===============--> */}
            <div
              className={`qualification__content ${
                !isActive && 'qualification__active'
              }`}
              data-content
              id='work'
            >
              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className='qualification__data'>
                <div>
                  <h3 className='qualification__title'>
                    Junior Software Engineer
                  </h3>
                  <span className='qualification__subtitle'>
                    Ciraxes Consultancy & Services
                  </span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2019-2021
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className='qualification__data'>
                <div></div>

                <div className='qualification__time'>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>

                <div>
                  <h3 className='qualification__title'>ReactJS Developer</h3>
                  <span className='qualification__subtitle'>Collabera Inc</span>
                  <div className='qualification__calendar'>
                    <i className='uil uil-calendar-alt'></i>
                    2021-Now
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
