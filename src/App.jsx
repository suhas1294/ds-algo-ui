import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Problems from './pages/Problems'
import DsAlgo from './pages/DsAlgo'
import LoveBabbar450Questions from './pages/love-babbar-450-dsa'

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <DsAlgo />
                </Route>

                <Route path="/problems">
                    <Problems />
                </Route>

                <Route path="/love-babbar-450-dsa">
                    <LoveBabbar450Questions />
                </Route>
            </Switch>
        </>
    )
}

export default App
