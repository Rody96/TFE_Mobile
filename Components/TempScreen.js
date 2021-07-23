import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
import { getTempByID } from "../HttpRequests/getTemperature";

class TempScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    getTempByID(60).then((data) => {
      //console.log(data)
      this.setState({
        temp: data["temperature"],
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
          <Text style={styles.title}>{this.state.temp}°C</Text>
        </View>
        )}
      </View>
    );
  }
}

export default TempScreen;


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
  }
};