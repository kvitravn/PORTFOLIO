import React from 'react'

import styled from "styled-components";

const Formation = styled.section`
  .education__container {
    row-gap: 2rem;
  }
  
  .education__content {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
  }
  
  .education__year, .education__race {
    font-size: var(--h3);
    margin-bottom: .25rem;
  }

  .education__university {
    display: block;
    font-size: var(--h4);
  }

  .education__specialty {
    display: block;
    font-size: var(--small);
  }
  
  .education__year, .education__university {
    text-align: right;
  }
  
  .education__time {
    padding: 0 1rem;
    justify-self: center;
  }
  
  .education__rounder {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: var(--first-color);
    border-radius: 50%;
  }
  
  .education__rounder::before {
    content: '';
    position: absolute;
    transform: translate(-4px, -4px);
    width: 20px;
    height: 20px;
    border: 1px solid var(--first-color);
    border-radius: 50%;
  }
  
  .education__line {
    display: block;
    height: 90%;
    width: 2px;
    background-color: var(--first-color);
    transform: translate(5px, 4px);
  }
`

export default function FormationComponent() {
    return (
        <>
            <Formation className="education section" id="education">
                <h2 className="section-title">
                    Formação
                </h2>
                <span className="section-subtitle">Meus estudos</span>

                <div className="education__container bd-grid">
                    <div className="education__content">
                        <div>
                            <h3 className="education__year">
                               Julho 2020
                            </h3>
                            <span className="education__university">
                                University of Virginia
                            </span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"/>
                            <span className="education__line"/>
                        </div>

                        <div>
                            <h3 className="education__race">
                                Agile Meets Design Thinking
                            </h3>
                            <span className="education__specialty">Metodologias Ágeis</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">
                                2020
                            </h3>
                            <span className="education__university">
                                Udemy
                            </span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"/>
                            <span className="education__line"/>
                        </div>

                        <div>
                            <h3 className="education__race">
                                SQL Bootcamp
                            </h3>
                            <span className="education__specialty">Banco de Dados</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">2022
                            </h3>
                            <span className="education__university">
                                Faculdade de Tecnologia de São Paulo
                            </span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"/>
                            <span className="education__line"/>
                        </div>

                        <div>
                            <h3 className="education__race">
                                Curso Superior
                            </h3>
                            <span className="education__specialty">Análise e Desenvolvimento de Sistemas</span>
                        </div>
                    </div>
                </div>
            </Formation>
        </>
    )
}
