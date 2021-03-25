import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import Page from 'src/components/Page';
import 'react-toastify/dist/ReactToastify.min.css';
import './style.scss';

init('user_AwR2Hl44WRiKU4CyxjWAO');

const ContactForm = () => {
  const {
    register, errors, handleSubmit, reset,
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        'service_r75mfxx',
        'template_0ahzi8m',
        templateParams,
        'user_AwR2Hl44WRiKU4CyxjWAO',
      );

      reset(); 
      toastifySuccess();
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <Page>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12__text-center">
              <div className="contactForm">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className="row__formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        ref={register({
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less',
                          },
                        })}
                        placeholder="Name"
                      />
                      {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="errorMessage">Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className="row__formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="subject"
                        ref={register({
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters',
                          },
                        })}
                        className="form-control__formInput"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className="row__formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="message"
                        ref={register({
                          required: true,
                        })}
                        className="form-control__formInput"
                        placeholder="Message"
                      />
                      {errors.message && <span className="errorMessage">Please enter a message</span>}
                    </div>
                  </div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ContactForm;
