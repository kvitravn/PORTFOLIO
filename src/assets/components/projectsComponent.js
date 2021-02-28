import React from 'react'

import styled from "styled-components";
import {ExternalLink} from "react-external-link";

import work1 from '../img/work1.jpg'
import work2 from '../img/work2.png'

const Projects = styled.section`
  .works__container {
    justify-items: center;
    row-gap: 2rem;
  }
  
  .works__img {
    position: relative;
    overflow: hidden;  
    border-radius: 0.5rem;
    height: 100%;
    background-color: var(first-color-darken);
    
    &:hover .works__data {
      bottom: 0;
    }
  }
  
  .works__data {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(77, 41, 109, 0.7);
    border-radius: 0.5rem;
    transition: 0.3s;
  }
  
  .works__link {
    display: inline-flex;
    font-size: 3rem;
    background-color: var(first-color-darken);
    color: var(--first-color-light);
    padding: 0.25rem;
    margin-bottom: var(--mb-2);
  }
  
  .works__title {
    font-size: var(--h2);
    color: var(--first-color-light) !important;
  }
  
`

export default function ProjectsComponent() {
    return (
        <>
            <Projects className="works section" id="works">
                <h2 className="section-title">
                    Projetos
                </h2>
                <span className="section-subtitle">Meu portfolio</span>

                <div className="works__container bd-grid">
                    <div className="works__img">
                        <img src={work1} alt=""/>

                        <div className="works__data">
                            <ExternalLink target="_blank" className="works__link" href="https://github.com/kvitravn/FATEC">
                                <i className='bx bx-link'/>
                            </ExternalLink>
                            <span className="works__title">FATEC Guarulhos</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work2} alt=""/>

                        <div className="works__data">
                            <ExternalLink target="_blank" className="works__link" href="https://github.com/kvitravn/NLWOmnistack-2">
                                <i className='bx bx-link'/>
                            </ExternalLink>
                            <span className="works__title">Proffy</span>
                        </div>
                    </div>
                </div>
            </Projects>
        </>
    )
}
