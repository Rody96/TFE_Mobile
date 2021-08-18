import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ImageBackground,
} from "react-native";
import { getTemp } from "../HttpRequests/getTemperature";
import LinearGradient from 'react-native-linear-gradient';
const image =  require('../Images/temp2.jpg');
class TempScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    getTemp().then((data) => {
      let tab = [];
      tab = data;
      let lastMeasurement = tab[tab.length - 1];
      this.setState({
        temp: lastMeasurement["temperature"],
        isLoading: false
      })
    });
  }



  render() {

    return (
      <ImageBackground
            source={image}
            style={{width: '100%', height: '100%'}}
      >
        <View style={styles.container}>
          {this.state.isLoading ? (
            <View style={styles.loading_container}>
              <ActivityIndicator size="large" color="#ffffff" />
                </View>
          ) : 
          (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.temp}°C</Text>
          </View>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default TempScreen;


const styles = {
  linearGradient: {
    height: '100%'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "2%",
  },
  title: {
    flex: 2,
    color: "#ffffff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 50,
    fontFamily: "monospace",
    marginLeft: "3%",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "5%",
  },
};