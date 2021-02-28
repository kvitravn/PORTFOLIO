import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import styled from "styled-components";

import about from '../img/about.jpg'

const About = styled.section`
  .about__container {
    row-gap: 2rem;
  }

  .about__data {
    text-align: center;
  }

  .about__description {
    margin-bottom: var(--mb-4);
  }

  .about__img {
    width: 150px;
    border-radius: .5rem;
    margin: 0 auto;
  }

  .about__information {
    margin-bottom: var(--mb-4);
  }

  .about__information-title {
    font-size: var(--h3);
    color: var(--first-color-dark);
    margin-bottom: var(--mb-2);
  }

  .about__information-data {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    margin-bottom: var(--mb-3);
  }

  .about__information-icon {
    font-size: 1.5rem;
    color: var(--first-color);
    margin-right: var(--mb-4);
  }

  .about__information-subtitle {
    display: block;
    font-weight: var(--font-semi-bold);
  }

  .about__information-subtitle-small {
    font-size: var(--small);
  }
`

export default function AboutComponent() {
    return (
        <>
            <BrowserRouter>
                <About className="about section" id="about">
                    <h2 className="section-title">
                        Quem sou eu
                    </h2>
                    <span className="section-subtitle">Sobre mim</span>

                    <div className="about__container bd-grid">
                        <div className="about__data">
                            <p className="about__description">
                                Eu tenho 20 anos e foco em desenvolvimento backend usando Node e a
                                stack JavaScript/TypeScript e trabalho também com frameworks de frontend.
                                Abaixo tu vai ver mais sobre as tecnologias
                                que eu trabalho.
                            </p>
                            <img src={about} alt="G.Toledo" className="about__img"/>
                        </div>

                        <div>
                            <div className="about__information">
                                <h3 className="about__information-title">Informações</h3>
                                <div className="about__information-data">
                                    <i className='bx bx-user about__information-icon'/>
                                    <span>
                                    G. Toledo
                                </span>
                                </div>
                                <div className="about__information-data">
                                    <i className='bx bx-phone about__information-icon'/>
                                    <span>
                                    +55 (11) 98688-2668
                                </span>
                                </div>
                                <div className="about__information-data">
                                    <i className='bx bx-envelope about__information-icon'/>
                                    <span>
                                    gustta00@icloud.com
                                </span>
                                </div>
                            </div>

                            <div className="about__information">
                                <h3 className="about__information-title">Experiência</h3>

                                <div className="about__information-data">
                                    <i className='bx bxl-javascript about__information-icon'/>
                                    <div>
                                    <span className="about__information-subtitle">
                                        +1 Ano Desenvolvedor JavaScript
                                    </span>
                                        <span className="about__information-subtitle-small">
                                        Proficiência
                                    </span>
                                    </div>
                                </div>

                                <div className="about__information-data">
                                    <i className='bx bx-briefcase about__information-icon'/>
                                    <div>
                                    <span className="about__information-subtitle">
                                        Analista Programador
                                    </span>
                                        <span className="about__information-subtitle-small">
                                        Atuação Profissional
                                    </span>
                                    </div>
                                </div>

                                <div className="about__information-data">
                                    <i className='bx bx-medal about__information-icon'/>
                                    <div>
                                    <span className="about__information-subtitle">
                                        Diversos Projetos
                                    </span>
                                        <span className="about__information-subtitle-small">
                                        Completados
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </About>
            </BrowserRouter>
        </>
    )
}
