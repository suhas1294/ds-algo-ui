import React from 'react'

function errorArticle({ refetchLink, setCode, setError }) {
    const refetchCodeSnippet = () => {
        setCode('')
        fetch(refetchLink)
            .then((respText) => respText.text())
            .then((codeSnippet) => {
                if (codeSnippet.includes('404')) {
                    throw new Error('404')
                } else {
                    setCode(codeSnippet)
                }
            })
            .catch(() => {
                setError(true)
                setCode('')
            })
    }

    return (
        <div className="error-block">
            <h1>
                Oops ! we could not load the code snippet, please try reloading
            </h1>
            <button onClick={refetchCodeSnippet}>Refresh</button>
        </div>
    )
}

export default errorArticle
