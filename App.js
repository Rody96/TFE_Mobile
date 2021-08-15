//App.js 
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Auth from './Screens/Auth';
import { NativeBaseProvider } from 'native-base';
import MyApp from './Nav/appNavigation'
import LoggedIn from './Screens/LoggedIn';
import SignIn from './Auth/SignIn';
import deviceStorage from './services/deviceStorage.js';
import HomeScreen from './Components/HomeScreen';
import { Provider } from 'react-redux'
import Store from './redux/store'

export default class App extends Component {

  componentDidMount() {
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#67B26F")
  }

  render() {
      return (
        <Provider store={Store}>
          <MyApp />
        </Provider>
      );
  }
}