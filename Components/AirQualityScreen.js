import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
import { getPPM } from "../HttpRequests/getPPM";
import LinearGradient from 'react-native-linear-gradient';

class AirQualityScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ppm: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    getPPM().then((data) => {
      //console.log(data)
      let tab = [];
      tab = data;
      let lastMeasurement = tab[tab.length - 1];
      //console.log(lastMeasurement)
      this.setState({
        ppm: lastMeasurement["ppm"],
        isLoading: false
      })
    });
  }


  render() {

    return (
      <LinearGradient
                colors={['#67B26F', '#4ca2cd']}
                style={styles.linearGradient}
            >
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="#0000ff" />
              </View>
        ) : 
        (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.ppm} PPM</Text>
        </View>
        )}
      </View>
      </LinearGradient>
    );
  }
}

export default AirQualityScreen;


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
    color: "#34ebc3",
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