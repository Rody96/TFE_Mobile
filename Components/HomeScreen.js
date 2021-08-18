import React from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground,Alert} from "react-native";
import {postOnOfftoApi} from '../HttpRequests/switchOnOff';
import { connect } from "react-redux";
import store from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const image =  require('../Images/bgHome.jpg');

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.loadJWT();
    this.state = {
      backgroundColor: '#b4b8b5',
      led: false,
      loading:''
    };
    }

  onClick(value) {
    this.setState({ backgroundColor: value });
  }

  componentDidMount() {
    console.log('HOMESCREEN', store.getState().accessToken)
  }

  loadJWT = async () => {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        console.log(value)
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

  deleteJWT = async () => {
    try{
      console.log("DELETE")
      await AsyncStorage.clear()
      console.log("LoggedOut")
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

  onPressButton() {
    if(this.state.led == false){
      this.state.led = true;
      postOnOfftoApi(this.state.led,17);
      this.onClick("#52eb34");
      console.log('Fan On')  
    }
    else if(this.state.led == true){
      this.state.led = false;
      postOnOfftoApi(this.state.led,17);
      this.onClick("#f71919");
      console.log('Fan Off') 
    }
  }
  
  changeColor(){
    let color = "";
    if(this.state.led == true){
      color = "#a8e6ad"
    }
    else{
      color = "#e66a65"
    }
    return color;
  }


  render() {

    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          style={{width: '100%', height: '100%'}}
        >
          <Text style={{margin:40, fontSize: 30, fontWeight:"bold", color: "white"}}>Chambre</Text>
          <FontAwesomeIcon style={{ 
              position: 'absolute',
              right: 5,
              top: 5,
              margin: 35
               }}icon={faSignOutAlt} size={40} color={"white"} onPress={() => {
               store.dispatch({ type: "SET_TOKEN", value: null });
               this.deleteJWT()}}/>
          <View>
          </View>
          <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center',margin:100}}>
            <TouchableOpacity 
            style={{ 
              backgroundColor: this.state.backgroundColor, borderRadius: 25,
              height: 120,
              alignItems: "center",
              justifyContent: "center",
              margin: 40, }} onPress={this.onPressButton.bind(this)}
            >
              <Image
                style={styles.appIcon}
                source={require('../Images/fanIcon.png')}
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn2} onPress={() => {this.props.navigation.navigate("airQuality")}}>
              <Image
                style={styles.appIcon}
                source={require('../Images/airQualityIcon.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center',margin:150}}>
            <TouchableOpacity style={styles.btn3} onPress={() => {this.props.navigation.navigate("Humidity")}}>
              <Image
                style={styles.appIcon}
                source={require('../Images/HumidityIcon.png')}
              />
          </TouchableOpacity>
            

            <TouchableOpacity style={styles.btn4} onPress={() => {this.props.navigation.navigate("Temperature")}}>
              <Image
                style={styles.appIcon}
                source={require('../Images/TemperatureIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      accessToken: state.accessToken,
  }
}

export default connect(mapStateToProps)(HomeScreen);


const styles = {
  container: {
    justifyContent: "center",
    
  },
  btn1: {
    width: 120,
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
  },
  btn2: {
    width: 120,
        backgroundColor: '#158976',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40
  },
  btn3: {
    width: 120,
        backgroundColor: '#158976',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
  },
  btn4: {
    width: 120,
        backgroundColor: '#158976',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40, 
  },
  
};