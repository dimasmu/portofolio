import React, { useContext } from 'react'
import './skill.css'
import { Waypoint } from 'react-waypoint'
import { ActiveContext } from '../../App'
import { BsPatchCheckFill } from 'react-icons/bs'
import { experienceData, ExperienceCategory } from '../../constant/experienceData'

const Skill = () => {
    const context = useContext(ActiveContext)
    if (!context) {
        throw new Error('Experience must be used within an ActiveContext Provider')
    }

    const { active, setActive } = context
    const _handleEnter = () => {
        setActive('#experience')
    }
    const _handleLeave = () => {
        setActive('#service')
    }

    return (
        <section id='experience'>
            <Waypoint onEnter={_handleEnter} />
            <h5>What Skills I have</h5>
            <h2>My Skill</h2>
            <div className='container experience__container'>
                {experienceData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className={`experience__${category.title.toLowerCase().replace(' ', '')}`}>
                        <h3>{category.title}</h3>
                        <div className="experience__content">
                            {category.skills.map((skill, skillIndex) => (
                                <article key={skillIndex} className='experience__details'>
                                    <BsPatchCheckFill className="experience__details-icon" />
                                    <div>
                                        <h4>{skill.name}</h4>
                                        <small className='text-light'>{skill.level}</small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* <Waypoint onLeave={_handleEnter}/> */}
        </section>
    )
}

export default Skill