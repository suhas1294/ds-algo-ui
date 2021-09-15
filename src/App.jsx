import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Problems from './Problems'
import DsAlgo from './DsAlgo'

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <DsAlgo />
                </Route>

                <Route path="/problems" problems>
                    <Problems />
                </Route>
            </Switch>
        </>
    )
}

export default App
