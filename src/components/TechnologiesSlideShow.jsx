
import React, { useState } from 'react'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'
import typescript from '../images/typescript.svg'
import node from '../images/node.svg'
import solidity from '../images/solidity.svg'
import github from '../images/github.svg'
import gitlab from '../images/gitlab.svg'
import git from '../images/git.svg'
import azure from '../images/azure.svg'
import postgres from '../images/postgres.svg'
import css from '../images/css.svg'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'
// Removed those images because there was an error with svg code because some namespace
import '../styles/technologiesSlideShow.css'

const TechnologiesSlideShow = () => {
  const [elementToShow, setElementToShow] = useState(0)

  const moveItem = (type) => {
    if (type === "back") setElementToShow(s => s === 0 ? (items.length - 1) : (s - 1))
    else setElementToShow(s => s === (items.length - 1) ? 0 : (s + 1))
  }
  const items = [{
    "type": "Front-end",
    "tech": ["Javascript", "Typescript", "CSS", "React"],
    "images": [javascript, typescript, css, react]
  },
  {
    "type": "Back-end",
    "tech": ["Javascript", "Typescript", "Node"],
    "images": [javascript, typescript, node]
  },
  {
    "type": "Blockchain",
    "tech": ["Solidity"],
    "images": [solidity]
  },
  {
    "type": "Database",
    "tech": ["PostgreSQL"],
    "images": [postgres]
  },
  {
    "type": "Cloud platform",
    "tech": ["Azure"],
    "images": [azure]
  },
  {
    "type": "Version control",
    "tech": ["Git", "GitHub", "GitLab"],
    "images": [git, github, gitlab]
  },
  ]

  return (
    <section className='slideshow-out-container'>
      <SlideShowItem element={items[elementToShow]} />
      <button className="btn button-back" onClick={() => moveItem("back")}><img src={leftArrow} alt='Left arrow' className="img-arrows" /></button>
      <button className="btn button-next" onClick={() => moveItem("next")}><img src={rightArrow} alt='right arrow' className="img-arrows" /></button>
    </section >)
}


const SlideShowItem = ({ element }) => {
  return (
    <>
      <h3 className='tech-type-title'> {element.type}</h3>
      <div className="work-tech-container">
        {element.tech.map((el, index) =>
          <article key={el.type} className="tech-type-article">
            <img src={element.images[index]} alt='Tech logo' className="img-tech" />
            <span className="tech-name">{el}</span>
          </article>)}
      </div>
    </>

  )
}

export default TechnologiesSlideShow