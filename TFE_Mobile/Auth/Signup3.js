import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


class SignUpStep3 extends React.Component {

    render() {
        return (
            <LinearGradient colors={['#67B26F', '#4ca2cd']} style={styles.linearGradient}>

                <View style={styles.container_one}>
                    <Text style={{ color: '#f1f1f1', fontSize: 32, fontFamily: "Cochin" }}>Merci de votre inscription</Text>
                </View>

                <Image
                style={styles.appIcon}
                  source={require('../Images/check.png')}
                />

                <View style={styles.container_two}>
                    <Text style={{ color: '#f1f1f1', marginTop: 10, fontSize: 25 }}>Votre compte a bien été créé</Text>
                </View>

                <View style={styles.container_three}>
                    <TouchableOpacity style={styles.toLogin} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={{ color: '#f1f1f1', fontSize: 20 }}>Connectez vous ici</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column'
    },
    container_one: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_two: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_three: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toLogin: {
        width: 270,
        backgroundColor: '#26c2e3',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    appIcon: {
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 145,
        marginTop: 20
    }
})

export default SignUpStep3