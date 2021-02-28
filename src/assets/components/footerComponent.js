import React from 'react'

import styled from 'styled-components'
import {ExternalLink} from 'react-external-link'

const Footer = styled.section`
  .footer {
    background-color: var(--first-color) !important;
    color: var(--first-color-light);
    text-align: center;
  }

  .footer__title {
    font-size: var(--h1);
    margin-bottom: var(--mb-2);
  }

  .footer__description {
    margin-bottom: var(--mb-2);
  }

  .footer__social {
    margin-bottom: 3rem;
  }

  .footer__link {
    display: inline-flex;
    background-color: var(--first-color-dark);
    font-size: 1.1rem;
    border-radius: 50%;
    padding: 0.4rem;
    margin: 0 var(--mb-1);
    transition: 0.3s;

    &:hover {
      background-color: var(--first-color-darken);
      color: var(--first-color-light);
    }
  }

  .footer__copy {
    font-size: var(--small);
    color: var(--first-color-light);
  }
`

export default function FooterComponent() {
    return (
        <>
            <Footer>
                <div className='footer section' id='footer'>
                    <div className='footer__container bd-grid'>
                        <h1 className='footer__title'>Kvitravn</h1>
                        <p className='footer__description'>
                            Prazer, Kvitravn! E esse é o meu portfolio
                        </p>

                        <div className='footer__social'>
                            <ExternalLink
                                href='https://www.linkedin.com/in/gustaf-toledo/'
                                className='footer__link'
                                target='_blank'
                            >
                                <i className='bx bxl-linkedin'/>
                            </ExternalLink>
                            <ExternalLink
                                href='https://github.com/kvitravn'
                                className='footer__link'
                                target='_blank'
                            >
                                <i className='bx bxl-github'/>
                            </ExternalLink>
                            <ExternalLink
                                href='https://twitter.com/GusttaToledo'
                                className='footer__link'
                                target='_blank'
                            >
                                <i className='bx bxl-twitter'/>
                            </ExternalLink>
                        </div>

                        <p className='footer__copy'>Todos os direitos reservados ©</p>
                    </div>
                </div>
            </Footer>
        </>
    )
}
