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
      <div className="contact">
        <div className="contactForm">
          <h1 className="h1">Nous envoyer un message</h1>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Row 1 of form */}
            <div className="formRow">
              <div className="row">
                <input
                  type="text"
                  name="name"
                  ref={register({
                    required: { value: true, message: 'Veuillez entrer votre nom, s\'il vous plaît.' },
                    maxLength: {
                      value: 30,
                      message: 'Veuillez utiliser 30 caractères ou moins',
                    },
                  })}
                  className="form-control"
                  placeholder="Chuck Norris"
                />
                {errors.name && <span className="errorMessage">{errors.name.message}</span>}
              </div>
              <div className="formRow">
                <div className="row">
                  <input
                    type="email"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control"
                    placeholder="xyz@xxx.com"
                  />
                  {errors.email && (
                    <span className="errorMessage">Entrer une adresse valide</span>
                  )}
                </div>
              </div>
            </div>
            {/* Row 2 of form */}
            <div className="formRow">
              <div className="row">
                <input
                  type="text"
                  name="subject"
                  ref={register({
                    required: { value: true, message: 'Veuillez entrer un sujet' },
                    maxLength: {
                      value: 75,
                      message: 'Le sujet ne peut pas dépasser 75 caractères',
                    },
                  })}
                  className="form-control"
                  placeholder="Sujet"
                />
              </div>
            </div>
            {/* Row 3 of form */}
            <div className="formRow">
              <div className="row">
                <textarea
                  rows={3}
                  name="message"
                  ref={register({
                    required: true,
                  })}
                  className="form-control"
                  placeholder="Message"
                />
                {errors.message && <span className="errorMessage">Veuillez saisir un message</span>}
              </div>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="infoForm">
        <h1 className="h1-info">Nous appeler</h1>
        <p className="p-number">04 03 90 03 92 </p>
        <p className="p-address"> 1 Bd Général de Gaulle, 7500 Paris</p>
        <div />
      </div>
      <ToastContainer />
    </Page>
  );
};

export default ContactForm;
