//App.js 
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import MyApp from './Nav/appNavigation'
export default class App extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <MyApp />
      </NativeBaseProvider>
        
    );
  }
}