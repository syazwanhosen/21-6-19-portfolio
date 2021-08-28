import testimonial1 from '../../assets/img/testimonial1.jpg';
import testimonial2 from '../../assets/img/testimonial2.jpg';
import testimonial3 from '../../assets/img/testimonial3.jpg';

function Testimonial() {
  return (
    <section className='testimonial section'>
      <h2 className='section__title'>Testimonial</h2>
      <span className='section__subtitle'>My client saying</span>

      <div className='testimonial__container container swiper-container'>
        <div className='swiper-wrapper'>
          {/* <!--=============== TESTIMONIAL 1 ===============--> */}
          <div className='testimonial__content swiper-slide'>
            <div className='testimonial__data'>
              <div className='testimonial__header'>
                <img src={testimonial1} alt='' className='testimonial__img' />

                <div>
                  <h3 className='testimonial__name'>Sara Smith</h3>
                  <span className='testimonial__client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
              </div>
            </div>

            <p className='testimonial__description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>

          {/* <!--=============== TESTIMONIAL 2 ===============--> */}
          <div className='testimonial__content swiper-slide'>
            <div className='testimonial__data'>
              <div className='testimonial__header'>
                <img src={testimonial2} alt='' className='testimonial__img' />

                <div>
                  <h3 className='testimonial__name'>Matt Robinson</h3>
                  <span className='testimonial__client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
              </div>
            </div>

            <p className='testimonial__description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>

          {/* <!--=============== TESTIMONIAL 3 ===============--> */}
          <div className='testimonial__content swiper-slide'>
            <div className='testimonial__data'>
              <div className='testimonial__header'>
                <img src={testimonial3} alt='' className='testimonial__img' />

                <div>
                  <h3 className='testimonial__name'>Raul Harris</h3>
                  <span className='testimonial__client'>Client</span>
                </div>
              </div>

              <div>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
                <i className='uil uil-star testimonial__icon-star'></i>
              </div>
            </div>

            <p className='testimonial__description'>
              I get a good impression, I carry out my project with all the
              possible quality and attention and support 24 hours a day.
            </p>
          </div>
        </div>
        <div className='swiper-pagination swiper-pagination-testimonial'></div>
      </div>
    </section>
  );
}

export default Testimonial;
