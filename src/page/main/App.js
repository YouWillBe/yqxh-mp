import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { styled } from 'linaria/react'

import Nav from './Nav'
import TunnelList from './TunnelList'
import RoomList from './RoomList'
import Manage from './Manage'
import User from './User'

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #eee;
`

function App() {
    return (
        <Router>
            <Wrap>
                <Switch>
                    <Route path='/main/room'>
                        <RoomList />
                    </Route>
                    <Route path='/main/manage'>
                        <Manage />
                    </Route>
                    <Route path='/main/user'>
                        <User />
                    </Route>
                    <Route path='/main'>
                        <TunnelList />
                    </Route>
                </Switch>
                <Nav></Nav>
            </Wrap>
        </Router>
    )
}

export default App
