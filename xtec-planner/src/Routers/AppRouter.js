import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { BoardScreen } from '../components/board/BoardScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                    <Route
                        path="/auth/login"
                        component={LoginScreen}
                    />

                    <Route
                        exact
                        path="/"
                        component={BoardScreen}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
