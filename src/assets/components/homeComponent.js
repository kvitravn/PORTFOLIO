import React from 'react'
import {Link} from "react-router-dom";

import {ExternalLink} from "react-external-link";
import styled from "styled-components";

import profile from "../img/profile.png";
import cv from "../img/cv/cv.pdf";

const Home = styled.section`
  .home__container {
    height: calc(100vh - var(--header-height));
    align-items: center;
  }

  .home__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    text-align: center;
  }

  .home__img {
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    width: 160px;
    height: 160px;
    background-color: var(--first-color);
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: var(--mb-2);
  }

  .home__img img {
    width: 155px;
  }

  .home__title {
    font-size: var(--h1);
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    margin-bottom: var(--mb-1);
  }

  .home__profession {
    display: block;
    font-size: var(--small);
    color: var(--first-color-dark);
    text-align: center;
    font-weight: var(--font-bold);
    margin-bottom: .25rem;;
  }

  .home__social {
    margin-bottom: 5rem;
  }

  .home__social-link {
    display: inline-flex;
    background-color: var(--first-color);
    font-size: 1.1rem;
    border-radius: 50%;
    padding: 0.4rem;
    margin: 0 var(--mb-1);
    transition: 0.3s;

    &:hover {
      background-color: var(--first-color-dark);
      color: white;
    }
  }

  .home__button {
    width: 100%;
  }

  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: var(--first-color-light);
    padding: 1rem 2rem;
    font-weight: var(--font-semi-bold);
    border-radius: 0.5rem;
    transition: 0.3s;

    &:hover {
      background-color: var(--first-color-dark);
      color: white;
    }
  }
`

export default function HomeComponent() {
    return (
        <>
            <Home className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                        <div className="home__img">
                            <img src={profile} alt="Kvitravn"/>
                        </div>

                        <h1 className="home__title">
                            Kvitravn
                        </h1>
                        <span className="home__profession">Software Developer</span>

                        <div className="home__social">
                            <ExternalLink href="https://www.linkedin.com/in/gustaf-toledo/"
                                          className="home__social-link" target="_blank"><i
                                className='bx bxl-linkedin'/></ExternalLink>
                            <ExternalLink href="https://github.com/kvitravn" className="home__social-link"
                                          target="_blank"><i
                                className='bx bxl-github'/></ExternalLink>
                            <ExternalLink href="https://twitter.com/GusttaToledo"
                                          className="home__social-link"
                                          target="_blank"><i
                                className='bx bxl-twitter'/></ExternalLink>
                            <ExternalLink href="https://www.instagram.com/gustaftoledo/?hl=pt-br"
                                          className="home__social-link" target="_blank"><i
                                className='bx bxl-instagram'/></ExternalLink>
                        </div>

                        <Link className="button home__button" to={cv} target="_blank"
                              download>Download CV</Link>
                    </div>
                </div>
            </Home>
        </>
    )
}
