import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TextInput from 'react-native-input-validator';
import LinearGradient from 'react-native-linear-gradient'

class SignUpStep1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstName: '',
      testBot: '',
      active: true
    }
  }
  //{/*<CustomHeader nav={this.props.navigation} />*/}
  render() {
    return (
      <LinearGradient
        colors={['#588B43', '#373b44']}//#999966 373b44 5a3f37
        style={styles.linearGradient}
      >

        <TouchableOpacity style={styles.stepBack_container} onPress={() => { this.props.navigation.openDrawer() }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
        </TouchableOpacity>


        <View style={styles.main_container}>



          <View><Text style={styles.title_Screen}>Inscription</Text></View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faUser} /></View>
            <TextInput
              placeholder="Nom"
              value={this.state.name}
              onChangeText={(text => this.setState({ name: text }))}
              style={styles.inputText} />
          </View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faUser} /></View>
            <TextInput
              placeholder="Prénom"
              value={this.state.firstName}
              onChangeText={(text => this.setState({ firstName: text }))}
              style={styles.inputText}>

            </TextInput>
          </View>

          <View style={styles.inputNotVisible}>
            <TextInput
              placeholder=""
              value={this.state.testBot}
              onChangeText={(text => this.setState({ testBot: text }))}
              style={styles.inputText}>
            </TextInput>
          </View>


          <View>
            <TouchableOpacity style={styles.step_button} onPress={() => {
              this.state.testBot === '' ?
                (this.props.navigation.navigate('SignUpStep2',
                  {
                    name: this.state.name,
                    firstName: this.state.firstName
                  })) : (alert('Alerte bot'))

            }}>
              <Text style={styles.stepText}>Suivant</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.info_container}>
            <Text style={styles.info_text} >Vous avez déjà un compte ?</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Connexion') }}>
              <Text style={styles.redirect_signIn_text}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%'
  },
  stepBack_container: {
    marginLeft: 25,
    marginTop: 25
  },
  main_container: {
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
  title_Screen: {
    marginTop: 80,
    fontSize: 35,
    color: 'white',
    marginBottom: 25
  },
  step: {
    flexDirection: 'row',
    marginTop: 25
  },
  circleDone: {
    width: 30,
    height: 30,
    backgroundColor: '#599743',
    borderRadius: 30,
    elevation: 5,
    position: 'relative',
    marginLeft: 8,
    marginRight: 8
  },
  line: {
    width: 13,
    height: 4,
    backgroundColor: '#577B43',
    borderRadius: 30,
    marginTop: 12,
    elevation: 5,
    position: 'relative',
    marginLeft: 8,
    marginRight: 8
  },
  circleToDo: {
    width: 30,
    height: 30,
    backgroundColor: '#577B43',
    borderRadius: 30,
    elevation: 5,
    position: 'relative',
    marginLeft: 8,
    marginRight: 8
  },
  inputView: {
    height: 37,
    width: 270,
    paddingLeft: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    position: 'relative'
  },
  inputNotVisible: {
    height: 0,
    width: 0
  },
  inputText: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 0,
  },
  iconTextInput: {
    padding: 10,
  },
  redirect_signIn_text: {
    color: '#577B43',
    fontWeight: 'bold'
  },
  checkbox: {
    alignSelf: "center",
  },
  checkBoxText: {
    textAlign: 'right'
  },
  step_button: {
    width: 170,
    backgroundColor: '#577B43',
    borderRadius: 15,
    height: 50,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  stepText: {
    color: '#f1f1f1',
    fontSize: 20,
  },
  info_container: {
    alignItems: 'center',
    marginTop: 15
  },
  info_text: {
    color: 'white'
  },

})

export default SignUpStep1