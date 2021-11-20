import React from 'react'

function tag({ tags }) {
    return (
        <div className="tag-block">
            {tags.map((tagName) => (
                <p>#{tagName} </p>
            ))}
        </div>
    )
}

export default tag
