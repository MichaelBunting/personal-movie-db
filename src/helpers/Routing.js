import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import MainLayout from '../views/MainLayout'
import Movies from '../views/Movies'
import AddMoviePage from '../views/AddMoviePage'

const Routing = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exact path="/">
                        <Movies />
                    </Route>
                    <Route exact path="/add">
                        <AddMoviePage />
                    </Route>
                    <Route path="*" render={() => {
                        return (
                            <div>
                                404 not found
                            </div>
                        );
                    }} />
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default Routing;