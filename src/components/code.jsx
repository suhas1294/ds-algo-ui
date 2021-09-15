import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './component_styles.css'

function Code({ code }) {
    return (
        code && (
            <div className="code-block">
                <SyntaxHighlighter language="java" style={monokaiSublime}>
                    {code}
                </SyntaxHighlighter>
            </div>
        )
    )
}

export default Code
