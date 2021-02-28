import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'

import NavMenuScripts from "../js/navMenuScripts";

import styled from "styled-components";

const Header = styled.div`
  .l-header {
    width: 100%;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(first-color-light);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
  }
`

const Nav = styled.nav`
  .nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
  }

  .nav__menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 90%;
    height: 100vh;
    padding: 3rem;
    align-items: center;
    background-color: var(--first-color);
    transition: 0.3s;
  }

  .nav__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;
    color: var(--text-color);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--first-color-light);
    }
  }

  .nav__item {
    margin-bottom: var(--mb-4);
  }

  .nav__link {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-color);
    font-weight: var(--font-bold);
    transition: 0.3s;

    &:hover {
      color: var(--first-color-light);
    }
  }

  .nav__toggle {
    font-size: 1.8rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--text-color);
    }
  }

  .show {
    left: 0 !important;
  }
`

export default function HeaderComponent() {

    useEffect(() => {
        const script = document.createElement('script')

        script.src = NavMenuScripts('nav-menu', 'nav-toggle', 'nav-close', '.nav__link')
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header>
                    <div className="l-header" onLoad={useEffect}>
                    <Nav className="nav bd-grid">
                        <div className="nav__toggle" id="nav-toggle">
                            <i className='bx bx-menu'></i>
                        </div>

                        <div className="nav__menu" id="nav-menu">
                            <div className="nav__close" id="nav-close">
                                <i className='bx bx-x'></i>
                            </div>

                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#home" className="nav__link">
                                        Início
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className="nav__link">
                                        Quem sou eu
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#skills" className="nav__link">
                                        Stack
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#education" className="nav__link">
                                        Formação
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#works" className="nav__link">
                                        Projetos
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className="nav__link">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Nav>
                    </div>
                </Header>
            </BrowserRouter>
        </>
    )
}
