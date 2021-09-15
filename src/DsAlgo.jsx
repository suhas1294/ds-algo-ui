import React from 'react'
import data from '../data.json'
import Section from './components/Section'
import NavBar from './NavBar'

function DsAlgo() {
    const allUi = data.map((section) => (
        <Section
            key={section.section_name}
            name={section.section_name}
            links={section.section_code_links}
            isGist={false}
        />
    ))
    return (
        <>
            <NavBar />
            {allUi}
        </>
    )
}

export default DsAlgo
