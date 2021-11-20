import React from 'react'

function solutionSteps({ steps }) {
    const stepList = steps.map((step, index) => <li key={index}>{step}</li>)
    return <ol>{stepList}</ol>
}

export default solutionSteps
