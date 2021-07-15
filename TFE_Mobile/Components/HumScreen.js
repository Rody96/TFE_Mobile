import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
import { getHumByID } from "../HttpRequests/getHum";

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
    getHumByID(60).then((data) => {
      //console.log(data)
      this.setState({
        humidity: data["airHumidity"],
        isLoading: false
      })
    });
  }

  render() {

    return (
      
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
    );
  }
}

export default HumScreen;


const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "gainsboro",
    paddingTop: "2%",
  },
  title: {
    flex: 2,
    color: "gray",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 50,
    marginLeft: "3%",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gainsboro",
    flexDirection: "row",
    marginLeft: "5%",
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
};