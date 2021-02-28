import React from "react";

import email from 'emailjs-com'
import styled from "styled-components";
import {ExternalLink} from "react-external-link";

const Contact = styled.section`
  .contact__container {
    row-gap: 3rem;
  }

  .contact__input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background-color: var(first--color-light);
    font-size: var(--normal);
    margin-bottom: 0.3rem;
    border-radius: 0.5rem;
  }

  .contact__input::placeholder {
    color: var(--first-color-dark);
    font-size: 1rem;
    font-family: var(--body-font);
    font-weight: var(--font-bold);
  }

  .contact__button {
    display: block;
    width: 100%;
    background-color: var(--first-color);
    color: var(--text-color);
    padding: 0.75rem 2.5rem;
    margin-left: auto;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: var(--first-color-dark);
      color: var(--first-color-light);
    }
  }

  .textarea {
    resize: none;
  }

  .contact__subtitle {
    font-size: var(--h3);
    color: var(--first-color-dark);
    margin-bottom: var(--mb-1);
  }

  .contact__icon {
    font-size: 3rem;
    color: var(--first-color);
    transition: 0.3s;
    width: 0;

    &:hover {
      color: var(--first-color-dark);
    }
  }

  .contact__text, .contact__icon {
    display: block;
    padding-left: 1rem;
  }

  .contact__section {
    margin-bottom: var(--mb-4);
  }
`

export default function ContactComponent() {

    function sendEmail(e) {
        e.preventDefault()

        email
            .sendForm(
                'gmail',
                'template_jv4ecgb',
                e.target,
                'user_eBOJQZLlcy10xwB3e5Lxr'
            )
            .then(() => {
                alert('Forms enviado! Responderei o mais rápido possível!')
            })
            .catch(() => {
                alert(
                    'Acho que deu ruim! Entra em contato, por favor, com o Dev pelo email ao lado que ele resolve!'
                )
            })

        e.target.reset()
    }

    return (
        <>
            <Contact className="contact section" id="contact">
                <h2 className="section-title">
                    Contato
                </h2>
                <span className="section-subtitle">Fale comigo</span>

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form" onSubmit={sendEmail}>
                        <div className="contact__inputs">
                            <input type="text" placeholder="Nome" className="contact__input"/>
                            <input type="mail" placeholder="Email" className="contact__input"/>
                        </div>

                        <textarea name="" id="" cols="0" rows="10"
                                  className="contact__input textarea" placeholder="Menssagem"/>

                        <input type="submit" className="button contact__button" value="Enviar"/>
                    </form>

                    <div className="contact__info">
                        <div className="contact__section">
                            <h3 className="contact__subtitle">
                                Messengers
                            </h3>

                            <ExternalLink className="contact__icon"
                                          href="https://api.whatsapp.com/send?phone=5511986882668">
                                <i className='bx bxl-whatsapp'/>
                            </ExternalLink>
                        </div>
                        <div className="contact__section">
                            <h3 className="contact__subtitle">
                                Email
                            </h3>
                            <span className="contact__text">gusttaa00@gmail.com</span>
                            <span className="contact__text">gustta00@icloud.com</span>
                        </div>
                        <div className="contact__section">
                            <h3 className="contact__subtitle">
                                Localização
                            </h3>
                            <span className="contact__text">São Paulo, Brazil</span>
                        </div>
                    </div>

                </div>
            </Contact>
        </>
    )
}
