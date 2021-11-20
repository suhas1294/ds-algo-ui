import React from 'react'

function sampleInputOutput({ samples }) {
    return samples.map((sample, index) => (
        <div className="example-io-blk">
            <p>example-{index + 1}</p>
            <p>
                <span className="label-highlight">Input</span> : {sample.input}{' '}
                <br />
                <span className="label-highlight">Output</span> :{' '}
                {sample.output}
            </p>
        </div>
    ))
}

export default sampleInputOutput
