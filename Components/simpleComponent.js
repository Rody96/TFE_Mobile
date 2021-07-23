import React from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, Touchable, TouchableOpacity,Text, View } from 'react-native';  
import {postOnOfftoApi} from '../HttpRequests/switchOnOff'

export default class ButtonBasics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      led: false,
    };
    }
    
    onPressButton() {
      if(this.state.led == false){
        this.state.led = true;
        postOnOfftoApi(this.state.led,1);
        console.log(this.state.led)
        Alert.alert('On')  
      }
      else if(this.state.led == true){
        this.state.led = false;
        postOnOfftoApi(this.state.led,1);
        console.log(this.state.led)
        Alert.alert('Off') 
      }
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <TouchableOpacity style={styles.validateBtn}
                        onPress={this.onPressButton.bind(this)}  
                        title="Switch"
                    >
                      <Text>Switch</Text>
                    </TouchableOpacity>  
                </View>
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    validateBtn: {
      width: 270,
      backgroundColor: '#588B43',
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30
    }, 
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  