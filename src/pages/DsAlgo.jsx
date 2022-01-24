import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import NavBar from '../components/NavBar'
import { BASICS_DS } from '../constants'

function DsAlgo() {
    const [dsData, setDsData] = useState(null)

    useEffect(() => {
        fetch(BASICS_DS)
            .then((response) => response.json())
            .then((data) => setDsData(data))
    }, [])

    return dsData ? (
        <>
            <NavBar />
            {dsData.map((section) => (
                <Section
                    key={section.section_name}
                    name={section.section_name}
                    links={section.section_code_links}
                />
            ))}
        </>
    ) : null
}

export default DsAlgo
