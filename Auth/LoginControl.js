  
import React from "react";
import {View, ImageBackground} from "react-native";
//import store from "../redux/store";
import deviceStorage from "../services/deviceStorage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Loading } from "../common";
import {HomeScreen} from "../Components/HomeScreen"
import { connect } from "react-redux";
import store from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const image =  require('../Images/nature1.jpg');
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.loadJWT();
        this.state = {
          loading: true
        };
    }


    newJWT(jwt){
      store.dispatch({type: "SET_TOKEN", value: jwt})
    }

    componentDidUpdate() {
      if (store.getState().accessToken) {
          this.props.navigation.navigate('Home');
      } else  {
          this.props.navigation.navigate('Login');
      }
    }

    loadJWT = async () => {
      try {
        const value = await AsyncStorage.getItem('id_token');
        console.log("LOADINGJWT", value)
        if (value !== null) {
          console.log(value)
          store.dispatch({type: "SET_TOKEN", value: value})
        }
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    }

    componentDidMount() {
      if (store.getState().accessToken) {
        this.props.navigation.navigate('Home');
      } else  {
        this.props.navigation.navigate('Login');
      }
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      accessToken: state.accessToken,
  }
}

export default connect(mapStateToProps)(LoginControl)