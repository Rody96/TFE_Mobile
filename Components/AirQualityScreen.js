import React from "react";
import { Text, View, ActivityIndicator, ImageBackground} from "react-native";
import { getPPM } from "../HttpRequests/getPPM";
const image =  require('../Images/air3.jpg');

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
      let tab = [];
      tab = data;
      let lastMeasurement = tab[tab.length - 1];
      this.setState({
        ppm: lastMeasurement["ppm"],
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
          <Text style={styles.title}>{this.state.ppm} PPM</Text>
        </View>
        )}
      </View>
    </ImageBackground>  
    );
  }
}

export default AirQualityScreen;


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