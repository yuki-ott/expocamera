import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadPalletScreen from './screens/LoadPalletScreen';
import UnloadPalletScreen from './screens/UnloadPalletScreen';

// main nav
// for navigation V4
// V5の場合はタグでStack.NavigatorにStack.Screenを追加していく
const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      headerTitleStyle: {
      }
    })
  },
  LoadPallet: {
    screen: LoadPalletScreen,
    navigationOptions: () => ({
      title: '積む',
      headerTitleStyle: {
        backgroundColor: '#50d0b0'
      },
    })
  },
  UnloadPallet: {
    screen: UnloadPalletScreen,
    navigationOptions: () => ({
      title: '卸し',
      headerTitleStyle: {
        backgroundColor: '#F0F8FF'
      }
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
