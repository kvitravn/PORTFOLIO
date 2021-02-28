import React from 'react'

import styled from 'styled-components'

const Skill = styled.section`
  .skills__container {
    row-gap: 2rem;
  }

  .skills__subtitle {
    font-size: var(--h3);
    color: var(--first-color-dark);
    margin-bottom: var(--mb-2);
  }

  .skills__data {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 var(--mb-2);
    margin-bottom: var(--mb-4);
  }

  .skills__name {
    text-transform: uppercase;
  }

  .skills__bar {
    position: absolute;
    bottom: -0.75rem;
    height: 0.25rem;
    background-color: var(--first-color);
  }

  .skills__js {
    width: 90%;
  }

  .skills__styles {
    width: 80%;
  }

  .skills__react {
    width: 70%;
  }

  .skills__angular {
    width: 80%;
  }

  .skills__node {
    width: 80%;
  }

  .skills__db {
    width: 65%;
  }

  .skills__frameworks {
    width: 85%;
  }

  .skills__others {
    width: 80%;
  }
`

export default function SkillComponent() {
    return (
        <>
            <Skill className='skills section' id='skills'>
                <h2 className='section-title'>Stack</h2>
                <span className='section-subtitle'>Tecnologias que eu trabalho</span>

                <div className='skills__container bd-grid'>
                    <div className='skills__content'>
                        <h3 className='skills__subtitle'>Frontend</h3>

                        <div className='skills__data'>
                            <span className='skills__name'>Javascript/Typescript</span>
                            <span className='skills__number'>90%</span>
                            <span className='skills__bar skills__js'/>
                        </div>
                        <div className='skills__data'>
              <span className='skills__name'>
                Style Frameworks (Styled Components, SCSS, SASS...)
              </span>
                            <span className='skills__number'>80%</span>
                            <span className='skills__bar skills__styles'/>
                        </div>
                        <div className='skills__data'>
                            <span className='skills__name'>React</span>
                            <span className='skills__number'>70%</span>
                            <span className='skills__bar skills__react'/>
                        </div>
                        <div className='skills__data'>
                            <span className='skills__name'>Angular</span>
                            <span className='skills__number'>80%</span>
                            <span className='skills__bar skills__angular'/>
                        </div>
                    </div>

                    <div className='skills__content'>
                        <h3 className='skills__subtitle'>Backend</h3>

                        <div className='skills__data'>
                            <span className='skills__name'>Node</span>
                            <span className='skills__number'>80%</span>
                            <span className='skills__bar skills__node'/>
                        </div>
                        <div className='skills__data'>
                            <span className='skills__name'>SQL & NoSQL</span>
                            <span className='skills__number'>65%</span>
                            <span className='skills__bar skills__db'/>
                        </div>
                        <div className='skills__data'>
                            <span className='skills__name'>NestJS & NextJS</span>
                            <span className='skills__number'>85%</span>
                            <span className='skills__bar skills__frameworks'/>
                        </div>
                        <div className='skills__data'>
              <span className='skills__name'>
                Outras bibliotecas (Knex, Express, Axios...)
              </span>
                            <span className='skills__number'>80%</span>
                            <span className='skills__bar skills__others'/>
                        </div>
                    </div>
                </div>
            </Skill>
        </>
    )
}
