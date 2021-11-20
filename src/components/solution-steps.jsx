import React from 'react'

function solutionSteps({ steps }) {
    const stepList = steps.map((step) => <li>{step}</li>)
    return <ol>{stepList}</ol>
}

export default solutionSteps
