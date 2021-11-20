import React from 'react'

function tag({ tags }) {
    return (
        <div className="tag-block">
            {tags.map((tagName, index) => (
                <p key={index}>#{tagName} </p>
            ))}
        </div>
    )
}

export default tag
