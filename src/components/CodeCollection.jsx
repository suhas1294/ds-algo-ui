import React from 'react'
import Code from './code'
import './component_styles.css'

function CodeCollection({ collection }) {
    return (
        <div className="code-collection">
            {collection.map((snippet, index) => (
                <Code key={index} code={snippet} />
            ))}
        </div>
    )
}

export default CodeCollection
