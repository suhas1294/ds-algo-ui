import React, { useState, useEffect } from 'react'
import SampleInputOutputBlock from './sample-input-output'
import SolutionSteps from './solution-steps'
import Tags from './tag'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Loader from './loader'
import ErrorArticle from './error-article'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './dsa-code-block.css'

function dsaCodeBlock(props) {
    const [codeText, setCodeText] = useState('')
    const [error, setError] = useState(false)
    const [showCode, setShowCode] = useState(false)

    const {
        id,
        question,
        questionDescription,
        questionLink,
        samples,
        solutionLink,
        solutionLogic,
        solutionSteps,
        tags,
        credits,
    } = props

    const toggleCodeView = () => setShowCode((prevState) => !prevState)

    useEffect(() => {
        if (showCode) {
            fetch(solutionLink)
                .then((resp) => resp.text())
                .then((codeSnippet) => {
                    if (codeSnippet.includes('404')) {
                        throw new Error('404')
                    } else {
                        setCodeText(codeSnippet)
                    }
                })
                .catch(() => setError(true))
        }
    }, [showCode])

    return (
        <article id={id}>
            <div className="question-details">
                <h3>{question}</h3>
                <p className="qdesc">{questionDescription}</p>
                {questionLink ? <p className="qlink">{questionLink}</p> : null}
                {samples && samples.length > 0 ? (
                    <SampleInputOutputBlock samples={samples} />
                ) : null}

                <div className="content">
                    {error && showCode ? (
                        <ErrorArticle
                            refetchLink={solutionLink}
                            setCode={setCodeText}
                            setError={setError}
                        />
                    ) : null}

                    {solutionLogic ? (
                        <p className="solLogic">
                            <span className="label-highlight">Logic: </span>
                            {solutionLogic}
                        </p>
                    ) : null}
                    {solutionSteps && solutionSteps.length > 0 ? (
                        <SolutionSteps steps={solutionSteps} />
                    ) : null}
                    {credits ? (
                        <>
                            <span className="label-highlight">Credits: </span>
                            <a target="_blank" href={credits}>
                                {credits}
                            </a>
                        </>
                    ) : null}
                </div>
                {tags && tags.length > 0 ? <Tags tags={tags} /> : null}
            </div>
            <div className="sol-details">
                <button
                    type="button"
                    className="collapsible"
                    onClick={toggleCodeView}
                >
                    Solution
                </button>
                {codeText ? (
                    <div
                        className={
                            showCode
                                ? 'dsa-code-block-active'
                                : 'dsa-code-block-nodisplay'
                        }
                    >
                        <SyntaxHighlighter
                            language="java"
                            style={monokaiSublime}
                        >
                            {codeText}
                        </SyntaxHighlighter>
                    </div>
                ) : showCode && !error ? (
                    <Loader />
                ) : null}
            </div>
        </article>
    )
}

export default dsaCodeBlock
