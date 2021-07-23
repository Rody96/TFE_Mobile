import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
class Notifications extends React.Component {

  componentDidMount() {

  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mes Notifications</Text>
        </View>
      </View>
    );
  }
}

export default Notifications;


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
    fontSize: 35,
    marginLeft: "3%",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gainsboro",
    flexDirection: "row",
    marginLeft: "5%",
  },
  image: {
    flex: 1,
    borderRadius: 2000,
    width: "80%",
    height: "100%",
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "3%",
  },
  itemContainer: {
    flex: 4,
    width: "100%",
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignContent: "center",
  },
  line: {
    flex: 0,
    height: "0.5%",
    width: "65%",
    backgroundColor: "silver",
    borderRadius: 100,
    alignSelf: "center",
    marginTop: "1%",
  },
  headInfos: {
    alignSelf: "center",
    color: "gray",
  },
  deleteButton: {
    marginTop: "5%",
    alignSelf: "center",
  },
};