import React from "react";
import {
  Text, View,} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
class Settings extends React.Component {

  componentDidMount() {

  }


  render() {

    return (
      <LinearGradient
                colors={['#67B26F', '#4ca2cd']}//#999966 373b44 5a3f37
                style={styles.linearGradient}
      > 
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Settings</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default Settings;


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