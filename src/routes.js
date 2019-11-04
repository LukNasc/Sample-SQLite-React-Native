import React from 'react';
import Main from './pages/Main';
import Register from './pages/Register';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Register
    })
)

export default Routes;
