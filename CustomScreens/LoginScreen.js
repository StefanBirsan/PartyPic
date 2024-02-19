import React, {TextInput, TouchableOpacity} from "react-native";
import {StyleSheet, Text, View, KeyboardAvoidingView} from "react-native";
import {useEffect, useState} from "react";
import {auth} from "../Scripts/config";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const logged = auth.onAuthStateChanged(user => {

            if (user) {
                navigation.navigate("Home")
            }

        })

        return logged

    }, []);


    const handleSingUP = () => {

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const  user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))

    };

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email )
            })
            .catch(error => alert(error.message))
    };


    return (
        <KeyboardAvoidingView

            style={styles.container}

            behavior='padding'

        >
            <View style={styles.inputcontainer}>

                <TextInput

                    placeholder="Email"

                    value={email}
                    onChangeText={text => setEmail(text)}

                    style={styles.inpu}
                    autoCapitalize="none"
                >
                </TextInput>

                <TextInput

                    placeholder="Password"

                    value={password}
                    onChangeText={text => setPassword(text) }

                    style={styles.inpu}
                    secureTextEntry={true}
                    autoCapitalize="none"
                >
                </TextInput>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.buttos}
                    >
                        <Text style={styles.buttontext}> Login </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSingUP}
                        style={[styles.buttos, styles.buttonoutline]}
                    >

                        <Text style={styles.buttontext}> Register </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2D3250'

      },

      inputcontainer: {
        width: '80%',
          padding: 15,
          borderRadius: 10,
      },

      buttos : {

          backgroundColor: '#F6B17A',
          width: '100%',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
          alignItems: 'center',

      },

    buttontext : {

          color : 'black',
        fontWeight: '700',


    },

    buttonContainer : {

          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
          marginLeft: 32,

    },

    inpu: {

          paddingHorizontal: 15,
          backgroundColor: 'white',
          paddingVertical: 10,
          marginBottom: 10,
          marginTop: 5,
        padding: 15,
        borderRadius: 10,

    },

    buttonoutline: {

          backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#7077A1',
        borderWidth: 4,

    },





});


export default LoginScreen;