import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Loading } from '../common';
import axios from 'axios';
import HomeScreen from '../Components/HomeScreen';

export default class LoggedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: ''
    }
  }

  componentDidMount(){
    console.log("ISLOGGEDIN COMPONENT",this.props)
    this.setState({
      loading: false
    });
  }

  render() {
    const { container, emailText, errorText } = styles;
    const { loading, email, error } = this.state;

    if (loading){
      return(
        <View style={container}>
          <Loading size={'large'} />
        </View>
      )
    } else {
        return(
          <View style={container}>
            <Button onPress={console.log("DECO")}>
              Log Out
            </Button>
          </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  emailText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};