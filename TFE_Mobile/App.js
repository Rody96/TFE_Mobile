//App.js 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBasics from './Components/simpleComponent';
import Signin from './Auth/SignIn';
import MyApp from './Nav/appNavigation'
export default class App extends React.Component {
  render() {
    return (
        <MyApp />
    );
  }
}