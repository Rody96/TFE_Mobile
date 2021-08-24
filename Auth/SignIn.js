import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const image =  require('../Images/nature1.jpg');

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }

        this.loginUser = this.loginUser.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }
      
    /**
     * Fonction permettant de stocker le token dans l'Asyncstorage ainsi que dans le store Redux
     */
    saveKey = async (key, valueToSave) => {
        try {
          await AsyncStorage.setItem(key, valueToSave);
          this.props.dispatch({type: "SET_TOKEN", value: valueToSave})
          console.log("LOGIN, TOKEN:", key + " " +  valueToSave)
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    }

    /**
     * 
     * Fonction de login. On vérifie ici la validité des champs, pour l'adresse mail on utilise une regex. Avec Axios on vérifie via requête HTTP si le mail et mot de passe correspondent.
     * Si c'est le cas un token est créé et sauvegardé dans l'Asynstorage. L'utilisateur sera redirigé vers l'écran d'accueil.
     * 
     * @param {*} text l'adresse mail
     * 
     */
    loginUser(text) {
        const { email, password} = this.state;
    
        this.setState({ error: '', loading: true });

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email.length == 0 || this.state.password.length == 0) {
            this.setState({
                error: 'Champ(s) incomplet(s)',
                loading: false
            });
            console.log("HEY")
            return false;
        } else if (reg.test(text) === false) {
            this.setState({
                error: 'Adresse email non valide',
                loading: false
            });
            this.setState({ email: text })
            return false;
        } else if (this.state.email.length > 0 & this.state.password.length > 0 & reg.test(text) === true) {
    
            axios.post("https://rodrigue-projects.site/api/auth/signin",{
                mail: email,
                password: password
            })
            .then((response) => {
              this.saveKey("id_token", response.data.accessToken);
              this.props.navigation.navigate("Home")
            })
            .catch((error) => {
              console.log(error);
              this.onLoginFail();
            });
        }
      }
    
      onLoginFail() {
        this.setState({
          error: 'Adresse mail ou mot de passe incorrect',
          loading: false
        });
      }

    render() {

        const { email, password, error, loading } = this.state;
        const { errorTextStyle } = styles;

        return (
            <ImageBackground
                source={image}
                style={{width: '100%', height: '100%'}}
            >


                <View style={styles.main_container}>

                <Image
                style={styles.appIcon}
                  source={require('../Images/appIcon.png')}
                />

                    <View><Text style={styles.title_Screen}>AirQualityControl</Text></View>

                    <View style={styles.inputView}>
                    <View style={styles.icon_inputText}><FontAwesomeIcon icon={faUser} /></View>
                        <TextInput
                            placeholder="Adresse email"
                            label="Email"
                            value={email}
                            onChangeText={email => this.setState({ email })}
                            ref={input => { this.emailTextInput = input }}
                            style={styles.inputText}
                        />
                    </View>

                    <View style={styles.inputView}>
                    <View><FontAwesomeIcon icon={faKey} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Mot de passe"
                            label="Password"
                            style={styles.inputText}
                            value={password}
                            ref={input => { this.passwordtextInput = input }}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>

                    <Text style={errorTextStyle}>
                        {error}
                    </Text>

                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => {
                            { this.loginUser(this.state.email) }
                            { this.emailTextInput.clear() };
                            { this.passwordtextInput.clear() }
                        }}
                        >
                            <Text style={styles.loginText}>Se connecter</Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.info_container}>
                        <Text style={{ color: 'white' }}>Pas encore de compte ?</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
                            <Text style={styles.redirect_signin_text}>Créez un compte ici</Text>
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
        marginTop: 30,
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
        width: 270,
        padding: 10,
    },
    redirect_signin_text: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    loginBtn: {
        width: 270,
        backgroundColor: '#0d1917',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: 'white',
        fontSize: 20
    },
    info_container: {
        alignItems: 'center',
        marginTop: 15
    },
    appIcon:{
      marginTop:50
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken,
    }
  }

export default connect(mapStateToProps)(SignIn)