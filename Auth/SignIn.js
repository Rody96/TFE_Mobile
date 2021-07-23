import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,Image } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient'

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userId: null
        }
    }

    /**
     * Cette fonction permet de vérifier la validité de l'email et de se connecter.
     * Une alerte s'affichera si les champs sont vides, l'email n'est pas valide ou n'existe pas, le mot de passe est incorrect.
     * Si tous les champs sont valides et l'utilisateur existe en base de données, alors l'utilisateur sera redirigé vers l'accueil.
     *
     */
    
    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email.length == 0 || this.state.password.length == 0) {
            alert('Champ(s) incomplet(s) !')
        } else if (reg.test(text) === false) {
            alert('Adresse email non valide');
            this.setState({ email: text })
            return false;
        } else if (this.state.email.length > 0 & this.state.password.length > 0 & reg.test(text) === true) {
            this.setState({ email: text })
            console.log("Email format is correct");

            fetch("https://rodrigue-projects.site/users/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "mail": this.state.email,
                    "password": this.state.password
                })
            }).then((response) => response.json())
                .then((json) => {
                    if (json === 'email/password incorrect') {
                        console.log("NOK");
                        alert(json)
                    }
                    else {
                        console.log("OK");
                        this.setState({ userId: json[0].id })
                        //this._changeGlobalState();
                        //this.storeData();
                        console.log(this.state.email);
                        console.log(this.state.password);
                        this.props.navigation.navigate("Home")
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
    

    render() {

        return (
            <LinearGradient
                colors={['#67B26F', '#4ca2cd']}//#999966 373b44 5a3f37
                style={styles.linearGradient}
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
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={(text => this.setState({ email: text }))}
                            ref={input => { this.emailTextInput = input }}
                            style={styles.inputText}
                        />
                    </View>

                    <View style={styles.inputView}>
                    <View><FontAwesomeIcon icon={faKey} /></View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={styles.inputText}
                            value={this.state.password}
                            ref={input => { this.passwordtextInput = input }}
                            onChangeText={(text => this.setState({ password: text }))}
                        />
                    </View>


                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => {
                            { this.validate(this.state.email) };
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
            </LinearGradient>


        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%'
    },
    main_container: {
        alignItems: 'center'
    },
    title_Screen: {
        marginTop: 30,
        fontSize: 35,
        color: 'white',
        marginBottom: 25
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
        color: '#26c2e3',
        fontWeight: 'bold',
    },
    checkbox: {
        alignSelf: "center",
    },
    checkBoxText: {
        textAlign: 'right'
    },
    loginBtn: {
        width: 270,
        backgroundColor: '#26c2e3',
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
    stepBack_container: {
        marginLeft: 25,
        marginTop: 25
    },
    appIcon:{
      marginTop:50
    }
})

export default SignIn