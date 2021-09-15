import React, { useEffect, useState } from 'react'
import { BASE_URL, GIST_BASE_URL } from '../constants'
import CodeCollection from './CodeCollection'
import useGetCode from '../hooks/use-get-code'
import Loader from './Loader'

function Section({ name, links, isGist }) {
    const url = isGist ? GIST_BASE_URL : BASE_URL
    const transformedLinks = links.map((link) => `${url}${link}`)
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
