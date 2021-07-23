import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,Alert
} from "react-native";
import {postOnOfftoApi} from '../HttpRequests/switchOnOff'
import LinearGradient from 'react-native-linear-gradient';
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      led: false,
    };
    }

  componentDidMount() {

  }

  onPressButton() {
    if(this.state.led == false){
      this.state.led = true;
      postOnOfftoApi(this.state.led,1);
      console.log(this.state.led)
      Alert.alert('On')  
    }
    else if(this.state.led == true){
      this.state.led = false;
      postOnOfftoApi(this.state.led,1);
      console.log(this.state.led)
      Alert.alert('Off') 
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
      <LinearGradient
                colors={['#67B26F', '#4ca2cd']}//#999966 373b44 5a3f37
                style={styles.linearGradient}
            >
      <View style={styles.container}>
        <Text style={{margin:40, fontSize: 30, fontWeight:"bold"}}>Room</Text>
        <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center',margin:100}}>
          <TouchableOpacity style={styles.btn1} onPress={this.onPressButton.bind(this)}
          >
            <Image
              style={styles.appIcon}
              source={require('../Images/fanIcon.png')}
            />
          </TouchableOpacity>
        

        
        <TouchableOpacity style={styles.btn2} onPress={() => {this.props.navigation.navigate("airQuality")}}
          >
            <Image
              style={styles.appIcon}
              source={require('../Images/airQualityIcon.png')}
            />
        </TouchableOpacity>
        </View>

        <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center',margin:150}}>
        <TouchableOpacity style={styles.btn3} onPress={() => {this.props.navigation.navigate("Humidity")}}
          >
            <Image
              style={styles.appIcon}
              source={require('../Images/HumidityIcon.png')}
            />
          </TouchableOpacity>
        

        <TouchableOpacity style={styles.btn4} onPress={() => {this.props.navigation.navigate("Temperature")}}
          >
            <Image
              style={styles.appIcon}
              source={require('../Images/TemperatureIcon.png')}
            />
          </TouchableOpacity>
        </View>
        
      </View>
      </LinearGradient>
    );
  }
}

export default HomeScreen;


const styles = {
  linearGradient: {
    height: '100%'
  },
  container: {
    justifyContent: "center",
    
  },
  btn1: {
    width: 120,
        backgroundColor: '#b4b8b5',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
  },
  btn2: {
    width: 120,
        backgroundColor: '#26c2e3',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40
  },
  btn3: {
    width: 120,
        backgroundColor: '#26c2e3',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40
  },
  btn4: {
    width: 120,
        backgroundColor: '#26c2e3',
        borderRadius: 25,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 40, 
  },
  
};