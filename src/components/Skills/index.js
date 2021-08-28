import { useState } from 'react';

function Skills() {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleToggle1 = () => setIsActive1(!isActive1);
  const handleToggle2 = () => setIsActive2(!isActive2);
  const handleToggle3 = () => setIsActive3(!isActive3);

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <div>
          {/* <!--=============== SKILLS 1 ===============--> */}
          <div className={`skills__content ${isActive1 && 'skills__open'}`}>
            <div className='skills__header' onClick={handleToggle1}>
              <i className='uil uil-brackets-curly skills__icon'></i>

              <div>
                <h1 className='skills__title'>Frontend developer</h1>
                <span className='skills__subtitle'>More than 4 years</span>
              </div>

              <i className='uil uil-angle-down skills__arrow'></i>
            </div>

            {isActive1 && (
              <div className='skills__list grid'>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>HTML</h3>
                    <span className='skills__number'>90%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__html'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>CSS</h3>
                    <span className='skills__number'>80%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__css'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>JavaScript</h3>
                    <span className='skills__number'>60%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__js'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>React</h3>
                    <span className='skills__number'>85%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__react'></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <!--=============== SKILLS 2 ===============--> */}
          <div className={`skills__content ${isActive2 && 'skills__open'}`}>
            <div className='skills__header' onClick={handleToggle2}>
              <i className='uil uil-server-network skills__icon'></i>

              <div>
                <h1 className='skills__title'>Backend developer</h1>
                <span className='skills__subtitle'>More than 2 years</span>
              </div>

              <i className='uil uil-angle-down skills__arrow'></i>
            </div>

            {isActive2 && (
              <div className='skills__list grid'>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>PHP</h3>
                    <span className='skills__number'>80%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__php'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Node Js</h3>
                    <span className='skills__number'>70%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__node'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Firebase</h3>
                    <span className='skills__number'>90%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__firebase'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Python</h3>
                    <span className='skills__number'>55%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__python'></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* <!--=============== SKILLS 3 ===============--> */}
          <div className={`skills__content ${isActive3 && 'skills__open'}`}>
            <div className='skills__header' onClick={handleToggle3}>
              <i className='uil uil-swatchbook skills__icon'></i>

              <div>
                <h1 className='skills__title'>Designer</h1>
                <span className='skills__subtitle'>More than 5 years</span>
              </div>

              <i className='uil uil-angle-down skills__arrow'></i>
            </div>

            {isActive3 && (
              <div className='skills__list grid'>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Figma</h3>
                    <span className='skills__number'>90%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__figma'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Sketch</h3>
                    <span className='skills__number'>85%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__sketch'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Photoshop</h3>
                    <span className='skills__number'>85%</span>
                  </div>
                  <div className='skills__bar'>
                    <span className='skills__percentage skills__photoshop'></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
