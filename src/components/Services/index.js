import { useState } from 'react';

function Services() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleOpen1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);

  const handleOpen2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const handleOpen3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>

      <div className='services__container container grid'>
        {/* <!--=============== SERVICES 1 ===============--> */}
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              Ui/Ux <br />
              Designer
            </h3>
          </div>
          <a
            className='
                button button--flex button--small button--link
                services__button
              '
            onClick={handleOpen1}
          >
            View More
            <i className='uil uil-arrow-right button__icon'></i>
          </a>

          <div className={`services__modal ${show1 && 'active-modal'}`}>
            <div className='services__modal-content'>
              <h4 className='services__modal-title'>
                Ui/Ux <br />
                Designer
              </h4>
              <i
                className='uil uil-times services__modal-close'
                onClick={handleClose1}
              ></i>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>Web page development.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--=============== SERVICES 2 ===============--> */}
        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>
              Frontend <br />
              Developer
            </h3>
          </div>

          <a
            className='
                button button--flex button--small button--link
                services__button
              '
            onClick={handleOpen2}
          >
            View More
            <i className='uil uil-arrow-right button__icon'></i>
          </a>

          <div className={`services__modal ${show2 && 'active-modal'}`}>
            <div className='services__modal-content'>
              <h4 className='services__modal-title'>
                Frontend <br />
                Developer
              </h4>
              <i
                className='uil uil-times services__modal-close'
                onClick={handleClose2}
              ></i>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>Web page development.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--=============== SERVICES 3 ===============--> */}
        <div className='services__content'>
          <div>
            <i className='uil uil-pen services__icon'></i>
            <h3 className='services__title'>
              Branding <br />
              Designer
            </h3>
          </div>

          <a
            className='
                button button--flex button--small button--link
                services__button
              '
            onClick={handleOpen3}
          >
            View More
            <i className='uil uil-arrow-right button__icon'></i>
          </a>

          <div className={`services__modal ${show3 && 'active-modal'}`}>
            <div className='services__modal-content'>
              <h4 className='services__modal-title'>
                Branding <br />
                Designer
              </h4>
              <i
                className='uil uil-times services__modal-close'
                onClick={handleClose3}
              ></i>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>Web page development.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
