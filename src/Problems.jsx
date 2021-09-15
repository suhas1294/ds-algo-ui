import React from 'react'
import problemsData from '../problems.json'
import NavBar from './NavBar'
import Section from './components/Section'

function Problems() {
    const allUi = problemsData.map((section) => (
        <Section
            key={section.section_name}
            name={section.section_name}
            links={section.section_code_links}
        />
    ))
    return (
        <>
            <NavBar />
            {allUi}
        </>
    )
}

export default Problems
