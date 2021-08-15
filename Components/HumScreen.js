import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
import { getHum } from "../HttpRequests/getHum";
import LinearGradient from 'react-native-linear-gradient';

class HumScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hum: 0,
      isLoading: true
    };
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  componentDidMount() {
    getHum().then((data) => {
      let tab = [];
      tab = data;
      let lastMeasurement = tab[tab.length - 1];
      this.setState({
        humidity: lastMeasurement["airHumidity"],
        isLoading: false
      })
    });
  }

  render() {

    return (
      <LinearGradient
                colors={['#67B26F', '#4ca2cd']}//#999966 373b44 5a3f37
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
            <Text style={styles.title}>{this.state.humidity}%</Text>
          </View>
          )}
        </View>
      </LinearGradient>
    );
  }
}

export default HumScreen;


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