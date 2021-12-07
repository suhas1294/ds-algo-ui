import React, { forwardRef } from 'react'
import './loader.css'

const Loader = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="loader">
            Loading...
        </div>
    )
})

export default Loader
