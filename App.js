//App.js 
import React, { Component } from 'react';
import { Loading } from './common';
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

  render() {
      return (
        <Provider store={Store}>
          <MyApp />
        </Provider>
      );
  }
}