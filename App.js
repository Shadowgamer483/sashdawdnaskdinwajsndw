import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Appdrawnavigator}from"./components/appdrawnavi"
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: Appdrawnavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
