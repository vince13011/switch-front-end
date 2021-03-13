/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="contactForm">
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className="rowForm">
            <div className="col">
              <label htmlFor="name">Votre nom</label>
              <input
                type="text"
                name="name"
                id="name"
                ref={register({
                  required: { value: true, message: 'Veuillez entrer votre nom.' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less',
                  },
                })}
                placeholder="chuck norris"
              />
              {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            </div>
            <div className="col">
              <label htmlFor="email">Votre Email</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="xyz@exemple.com"
              />
              {errors.email && (
                <span className="errorMessage">Veuillez entrer une adresse valide.</span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="rowForm">
            <div className="col">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                name="subject"
                id="subject"
                ref={register({
                  required: { value: true, message: 'Veuillez entrer un sujet.' },
                  maxLength: {
                    value: 75,
                    message: 'Le sujet ne peut pas dépasser 75 caractères',
                  },
                })}
                className="form-control__formInput"
                placeholder="ex: suivre ma commande"
              />
            </div>
          </div>
          {/* Row 3 of form */}
          <div className="rowForm">
            <div className="col">
              <label htmlFor="message">Votre Message</label>
              <textarea
                rows={10}
                name="message"
                id="message"
                ref={register({
                  required: true,
                })}
                className="form-control__formInput"
                placeholder="Message"
              />
              {errors.message && <span className="errorMessage">Enter votre message</span>}
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Envoyer
          </button>
        </form>
        <ToastContainer />
      </div>
    </Page>
  );
};

export default ContactForm;
