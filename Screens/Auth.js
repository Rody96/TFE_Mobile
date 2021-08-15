import React, { Component } from 'react';
import { View } from 'react-native';
import SignIn from '../Auth/SignIn';
import Signup from '../Auth/SignUp'

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };
    this.whichForm = this.whichForm.bind(this);
    this.authSwitch = this.authSwitch.bind(this);
  }

  authSwitch() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  whichForm() {
      return(
        <SignIn newJWT={this.props.newJWT} authSwitch={this.authSwitch} />
      );
    
  }

  render() {
    return(
      <View>
        {this.whichForm()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
};