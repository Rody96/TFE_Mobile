import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TextInput from 'react-native-input-validator';
import axios from 'axios';
const image =  require('../Images/nature1.jpg');

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      error: '',
      loading: false
    }
    this.registerUser = this.registerUser.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }


  registerUser(text) {
    const { email, password, firstName, lastName } = this.state;

    this.setState({ error: '', loading: true });

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.state.email.length == 0 || this.state.password.length == 0 || this.state.lastName.length == 0 || this.state.firstName.length == 0) {
        this.setState({
            error: 'Champ(s) incomplet(s)',
            loading: false
        });
        return false;
    } else if (reg.test(text) === false) {
        this.setState({
            error: 'Adresse email non valide',
            loading: false
        });
        this.setState({ email: text })
        return false;
    } else if (this.state.email.length > 0 & this.state.password.length > 0 & this.state.lastName.length > 0 & this.state.firstName.length > 0 & reg.test(text) === true) {

        axios.post("https://rodrigue-projects.site/api/auth/signup",
        {   
            mail: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            roles: ["user"]
          }
          ,)
        .then((response) => {
          this.props.navigation.navigate('Login')
        })
        .catch((error) => {
          console.log(error);
          this.onRegistrationFail();
        });
      }
  }

  onRegistrationFail() {
    this.setState({
      error: 'Erreur lors de l\'inscription',
      loading: false
    });
  }

  render() {

    const { email, password, firstName, lastName, error, loading } = this.state;
    const { errorTextStyle } = styles;

    return (
      <ImageBackground
        source={image}
        style={{width: '100%', height: '100%'}}
      >

        <View style={styles.main_container}>

          <View><Text style={styles.title_Screen}>Inscription</Text></View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faUser} /></View>
            <TextInput
              placeholder="Nom"
              label="Nom"
              value={lastName}
              onChangeText={lastName => this.setState({ lastName })}
              style={styles.inputText} />
          </View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faUser} /></View>
            <TextInput
              placeholder="Prénom"
              label="Prénom"
              value={firstName}
              onChangeText={firstName => this.setState({ firstName })}
              style={styles.inputText}>

            </TextInput>
          </View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faEnvelope} /></View>
            <TextInput
              placeholder="Adresse mail"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
              ref={input => { this.emailTextInput = input }}
              style={styles.inputText}>

            </TextInput>
          </View>

          <View style={styles.inputView}>
            <View style={styles.icon_inputText}><FontAwesomeIcon icon={faKey} /></View>
            <TextInput
              secureTextEntry={true}
              placeholder="Mot de passe"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
              ref={input => { this.passwordtextInput = input }}
              style={styles.inputText}>

            </TextInput>
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          <View>
            <TouchableOpacity style={styles.signUpBtn} onPress={() => {
                { this.registerUser(this.state.email) }
            }}
            >
              <Text style={styles.btnSignupText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.info_container}>
            <Text style={styles.info_text} >Vous avez déjà un compte ?</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
              <Text style={styles.redirect_signIn_text}>Connectez-vous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center'
  },
  title_Screen: {
    marginTop: 80,
    fontSize: 35,
    color: 'black',
    marginBottom: 25,
    fontFamily: 'serif'
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
  inputText: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 0,
  },
  redirect_signIn_text: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  signUpBtn: {
    width: 170,
    backgroundColor: '#0d1917',
    borderRadius: 15,
    height: 50,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSignupText: {
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
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
})

export default SignUp