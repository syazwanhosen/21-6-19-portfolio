import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Formik } from 'formik';
function ContactMe() {
  const { enqueueSnackbar } = useSnackbar();
  const [isDisabled, setIsDisabled] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);

    emailjs
      .sendForm(
        'service_e6fczqb',
        'template_x78hgss',
        event.target,
        'user_atgbFI85MoSUANqfbDG6W'
      )
      .then(
        (result) => {
          event.target.reset();
          enqueueSnackbar('Email has been send successfully', {
            variant: 'success',
          });
          setIsDisabled(false);
          console.log(result.text);
        },
        (error) => {
          enqueueSnackbar('Failed to send email', {
            variant: 'error',
          });
          setIsDisabled(false);
          console.warn(error.text);
        }
      );
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <span className='section__subtitle'>Get in touch</span>

      <div className='contact__container container grid'>
        <div>
          <div className='contact__information'>
            <i className='uil uil-phone contact__icon'></i>
            <div>
              <h3 className='contact__title'>Call Me</h3>
              <span className='contact__subtitle'>011-23453430</span>
            </div>
          </div>

          <div className='contact__information'>
            <i className='uil uil-envelope contact__icon'></i>
            <div>
              <h3 className='contact__title'>Email</h3>
              <span className='contact__subtitle'>syazwanhosen@gmail.com</span>
            </div>
          </div>

          <div className='contact__information'>
            <i className='uil uil-map-marker contact__icon'></i>
            <div>
              <h3 className='contact__title'>Location</h3>
              <span className='contact__subtitle'>
                Setapak, Kuala Lumpur, 53100
              </span>
            </div>
          </div>
        </div>

        <Formik
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required('Name is required'),
            email: Yup.string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            subject: Yup.string().max(255).required('Project is required'),
            message: Yup.string().max(255).required('Message is required'),
          })}
        >
          {({ errors, touched }) => {
            return (
              <form
                action=''
                className='contact__form grid'
                id='submitForm'
                onSubmit={handleSubmit}
              >
                <div className='contact__inputs grid'>
                  <div className='contact__content'>
                    <label for='' className='contact__label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='contact__input'
                      name='name'
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      required
                    />
                  </div>
                  <div className='contact__content'>
                    <label for='' className='contact__label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='contact__input'
                      name='email'
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      required
                    />
                  </div>
                </div>
                <div className='contact__content'>
                  <label for='' className='contact__label'>
                    Project
                  </label>
                  <input
                    type='text'
                    cols='0'
                    rows='7'
                    className='contact__input'
                    name='subject'
                    error={Boolean(touched.subject && errors.subject)}
                    helperText={touched.subject && errors.subject}
                    required
                  />
                </div>
                <div className='contact__content'>
                  <label for='' className='contact__label'>
                    Message
                  </label>
                  <textarea
                    name=''
                    id=''
                    cols='0'
                    rows='7'
                    className='contact__input'
                    name='message'
                    error={Boolean(touched.message && errors.message)}
                    helperText={touched.message && errors.message}
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    className='button button--flex'
                    style={{
                      fontSize: 'var(--normal-font-size)',
                      border: 'none',
                      padding: '1.25rem',
                      cursor: 'pointer',
                    }}
                    type='submit'
                    disabled={isDisabled}
                  >
                    Send Message
                    <i className='uil uil-message button__icon'></i>
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

export default ContactMe;
