import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'

import styled, {createGlobalStyle} from 'styled-components'

import HeaderComponent from './assets/components/headerComponent'
import HomeComponent from './assets/components/homeComponent'
import SkillComponent from './assets/components/skillsComponent'
import FormationComponent from './assets/components/formationComponent'
import AboutComponent from './assets/components/aboutComponent'
import ProjectsComponent from './assets/components/projectsComponent'
import ContactComponent from './assets/components/contactComponent'
import FooterComponent from './assets/components/footerComponent'

import ScrollScripts from './assets/js/scrollReveal'

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 3rem;
    --nav-width: 324px;

    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;

    --first-color: #110918;
    --first-color-dark: #4d296d;
    --first-color-darken: #8949c2;
    --first-color-light: #e7e6e8;
    --text-color: #b8b5ba;

    --h1: 2.5rem;
    --h2: 2rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1rem;

    --small: 0.8rem;
    --normal: 0.9rem;

    --mb-1: 0.5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 2.5rem;

    --z-fixed: 100;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: var(--header-height) 0 0 0;
    font-size: var(--normal);
    font-weight: var(--font-medium);
    font-family: 'Montserrat', sans-serif;
    background: var(--first-color-light);
    color: var(--first-color);
    line-height: 1.6rem;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  h3 {
    font-weight: var(--font-semi-bold);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .bd-grid {
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);
  }

  @media screen and (min-width: 768px) {
    :root {
      --h1: 2.25rem;
      --h2: 1.5rem;
      --h3: 1.25rem;
      --normal: 1rem;
      --small: 0.9rem;
      --smaller: 0.8;
    }

    .home__button {
      width: initial !important;
    }

    .nav__menu {
      width: var(--nav-width) !important;
    }
    
    .about__container, .skills__container, .works__container, .contact__container, .contact__inputs {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .about__data {
      text-align: initial !important;
    }
    
    .about__description {
      margin-bottom: var(--mb-5) !important;
    }
    
    .about__img {
      width: 220px !important;
    }
    
    .about__information {
      padding-left: 4rem !important;
    }
    
    .education__time {
      padding: 0 2rem !important;
    }
    
    .contact__inputs {
      display: grid !important;
      column-gap: 1rem !important;
    }
    
    .contact__info {
      padding-left: 3rem !important;
    }
    
    .footer {
      background: none !important;
    }
    
    .footer {
      background-color: var(--first-color) !important;
      padding: 3rem 0 !important;
      border-radius: 0.5rem !important;
    }
  }
  
  @media screen and (min-width: 1024px){
    body {
      margin: 0 !important;
      padding-left: var(--nav-width) !important;
      align-items: center;
    }
    
    .l-header {
      width: 0 !important;
    }
    
    .nav__toggle, .nav__logo, .nav__close {
      display: none !important;
    }
    
    .nav__menu {
      left: 0 !important;
    }
    
    .home__container {
      height: 100vh !important;
    }
    
    #about, #education, #footer {
      margin: 0 1rem;
    }

    .section {
      padding: 3rem 0 2rem !important;
    }
    
    .bd-grid {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
`

const Section = styled.div`
  .section {
    padding: 4rem 0 2rem;
  }

  .section-title {
    font-size: var(--h1);
    color: var(--first-color);
    margin-bottom: var(--mb-3);
    text-align: center;
  }

  .section-subtitle {
    display: block;
    font-size: var(--small);
    color: var(--first-color-dark);
    text-align: center;
    font-weight: var(--font-bold);
    margin-bottom: 0.25rem;
  }
`

const toTop = () => {
    document.documentElement.scrollTop = 0
}

export default function App() {
    useEffect(() => {
        const script = document.createElement('script')

        script.src = ScrollScripts('button-top')
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Section>
                    <HomeComponent/>
                    <AboutComponent/>
                    <SkillComponent/>
                    <FormationComponent/>
                    <ProjectsComponent/>
                    <ContactComponent/>
                    <FooterComponent/>
                </Section>
                <GlobalStyle/>
            </BrowserRouter>
        </>
    )
}
