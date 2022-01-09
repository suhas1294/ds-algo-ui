import React from 'react'

function Complexity({ time_complexity, space_complexity }) {
    return (
        <div className="complexity-wrapper">
            <p className="solLogic">
                <span className="label-highlight">Time Complexity: </span>
                {time_complexity}
            </p>

            {space_complexity ? (
                <p className="solLogic">
                    <span className="label-highlight">Space Complexity: </span>
                    {space_complexity}
                </p>
            ) : null}
        </div>
    )
}

export default Complexity
