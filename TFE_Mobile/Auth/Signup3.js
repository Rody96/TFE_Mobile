import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


class SignUpStep3 extends React.Component {

    render() {
        return (
            <LinearGradient colors={['#588B43', '#373b44']} style={styles.linearGradient}>

                <View style={styles.container_one}>
                    <Text style={{ color: '#f1f1f1', fontSize: 32, fontFamily: "Cochin" }}>Bienvenue sur eGrow</Text>
                </View>

                <View style={styles.container_two}>
                    <Text style={{ color: '#f1f1f1', fontSize: 18 }}>Merci
                        <Text style={{ color: '#f1f1f1', fontWeight: 'bold', fontSize: 18 }}> {this.props.route.params.firstName} </Text>
                    pour votre inscription</Text>
                    <Text style={{ color: '#f1f1f1', marginTop: 10, fontSize: 18 }}>Votre compte a bien été créé</Text>
                </View>

                <View style={styles.container_three}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Connexion') }}>
                        <Text style={{ color: '#f1f1f1', fontSize: 15 }}>Connectez vous
                        <Text style={{ color: '#588B43', fontWeight: 'bold', fontSize: 15 }}> ici </Text>
                        maintenant</Text>
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
})

export default SignUpStep3