import React, { useEffect, useState } from 'react'
import { BASE_URL, GIST_BASE_URL } from '../constants'
import CodeCollection from './CodeCollection'
import useGetCode from '../hooks/use-get-code'
import Loader from './Loader'

function Section({ name, links }) {
    let url
    const transformedLinks = links.map((link) => {
        if (link.includes('http')) {
            url = ''
        } else if (link.includes('raw')) {
            url = GIST_BASE_URL
        } else {
            url = BASE_URL
        }
        return `${url}${link}`
    })
    const [codeSnippets, setCodeSnippets] = useState(null)
    const getData = useGetCode(transformedLinks)

    useEffect(() => {
        getData().then((snippets) => setCodeSnippets(snippets))
    }, [])

    return codeSnippets ? (
        <section>
            <h2>{name}</h2>
            <CodeCollection collection={codeSnippets} />
        </section>
    ) : (
        <Loader />
    )
}

export default Section
