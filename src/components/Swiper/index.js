import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import portfolio1 from '../../assets/img/portfolio1.jpg';
import portfolio2 from '../../assets/img/portfolio2.jpg';
import portfolio3 from '../../assets/img/portfolio3.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swipers() {
  /**
   * @param  {} first
   * @param  {} second
   * {@link other}
   */
  const arr = (first, second) => {
    return first + second;
  };

  arr(1, 2);

  return (
    <section className='portfolio section' id='portfolio'>
      <Swiper
        cssMode={true}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='portfolio__container container swiper-container'
      >
        <div className='swiper-wrapper'>
          <SwiperSlide>
            {/* <!--=============== PORTFOLIO 1 ===============--> */}
            <div className='portfolio__content grid swiper-slide'>
              <img src={portfolio1} alt='' className='portfolio__img' />

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Modern Website</h3>
                <p className='portfolio__description'>
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href='#'
                  className='button button--flex button--small portfolio__button'
                >
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <!--=============== PORTFOLIO 2 ===============--> */}
            <div className='portfolio__content grid swiper-slide'>
              <img src={portfolio2} alt='' className='portfolio__img' />

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Brand Design</h3>
                <p className='portfolio__description'>
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href='#'
                  className='button button--flex button--small portfolio__button'
                >
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <!--=============== PORTFOLIO 3 ===============--> */}
            <div className='portfolio__content grid swiper-slide'>
              <img src={portfolio3} alt='' className='portfolio__img' />

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Online store</h3>
                <p className='portfolio__description'>
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href='#'
                  className='button button--flex button--small portfolio__button'
                >
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className='swiper-button-next'>
          <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
        </div>
        <div className='swiper-button-prev'>
          <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
        </div>
        <div className='swiper-pagination'></div>
      </Swiper>
    </section>
  );
}

export default Swipers;
