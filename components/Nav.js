import React, { Component } from 'react';
import { Text, Navigator } from 'react-native';

export default class NavBar extends Component {
    render() {
        const routes = [
            { title: 'Login', index = 0 },
            { title: 'Hub', index = 1}
        ]
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene=
        )
    }
}