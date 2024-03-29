import React from "react";
import { Text, View, ActivityIndicator, ImageBackground} from "react-native";
import { getHum } from "../HttpRequests/getHum";
const image =  require('../Images/nature.jpg');

class HumScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hum: 0,
      isLoading: true
    };
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
            <Text style={styles.title}>{this.state.humidity}%</Text>
          </View>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default HumScreen;

const styles = {
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