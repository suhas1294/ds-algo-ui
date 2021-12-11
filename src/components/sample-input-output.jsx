import React from 'react'

function sampleInputOutput({ samples }) {
    return samples.map((sample, index) => (
        <div key={index} className="example-io-blk">
            <p>example-{index + 1}</p>
            <p>
                <span className="label-highlight">Input</span> : {sample.input}{' '}
                <br />
                <span className="label-highlight">Output</span> :{' '}
                {sample.output}
                <br />
                {sample.explaination ? (
                    <>
                        <span className="label-highlight">Explaination</span>: {sample.explaination} 
                    </>
                ) : null}
            </p>
        </div>
    ))
}

export default sampleInputOutput
