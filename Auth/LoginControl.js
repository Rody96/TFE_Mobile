  
import React from "react";
import {View, ImageBackground} from "react-native";
import { connect } from "react-redux";
import store from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    /**
     * Récupération du token dans l'Asyncstorage
     */
    loadJWT = async () => {
      try {
        const value = await AsyncStorage.getItem('id_token');
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