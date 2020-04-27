import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Page1DetailScreen from './screens/Page1DetailScreen';
import LoadPalletScreen from './screens/LoadPalletScreen';
import UnloadPalletScreen from './screens/UnloadPalletScreen';

// main nav
// for navigation V4
// V5の場合はタグでStack.NavigatorにStack.Screenを追加していく
const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  LoadPallet: {
    screen: LoadPalletScreen,
    navigationOptions: () => ({
      title: '積む'
    })
  },
  UnloadPallet: {
    screen: LoadPalletScreen,
    navigationOptions: () => ({
      title: '卸し'
    })
  }
});
const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
