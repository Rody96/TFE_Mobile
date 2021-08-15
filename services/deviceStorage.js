import  AsyncStorage  from '@react-native-async-storage/async-storage';
import store from "../redux/store";

const deviceStorage = {
  async saveKey(key, valueToSave) {
    try {
      console.log("YOOOOOO1")
      await AsyncStorage.setItem(key, valueToSave);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      console.log("YOOOOOO2")
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        store.dispatch({type: "SET_TOKEN", value: value})
        this.setState({
          loading: false
        });
      } else {
        store.dispatch({type: "SET_TOKEN", value: ''})
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async deleteJWT() {
    try{
      console.log("YOOOOOO3")
      await AsyncStorage.removeItem('id_token')
      .then(
        () => {
          store.dispatch({type: "SET_TOKEN", value: ''})
          console.log('loggedOut')
        }
      );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;