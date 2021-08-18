//App.js 
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import MyApp from './Nav/appNavigation';
import { Provider } from 'react-redux'
import Store from './redux/store'

export default class App extends Component {

  componentDidMount() {
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#0d1917")
  }

  render() {
      return (
        <Provider store={Store}>
          <MyApp />
        </Provider>
      );
  }
}