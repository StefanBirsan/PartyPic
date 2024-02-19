import React, {TextInput, TouchableOpacity} from "react-native";
import {StyleSheet, Text, View, KeyboardAvoidingView} from "react-native";

const GenerateFold = () => {
    return (
        <KeyboardAvoidingView

            style={styles.container}

            behavior='padding'

        >
            <View style={styles.inputcontainer}>

                <TextInput

                    placeholder="Folder name"

                   // value={email}
                    //onChangeText={text => setEmail(text)}

                    style={styles.inpu}
                    autoCapitalize="none"
                >
                </TextInput>

                <TextInput

                    placeholder="Creator name"

                   // value={password}
                    //onChangeText={text => setPassword(text) }

                    style={styles.inpu}
                    secureTextEntry={true}
                    autoCapitalize="none"
                >
                </TextInput>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        style={styles.buttos}
                    >
                        <Text style={styles.buttontext}> Generate the Folder </Text>

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

});

export default GenerateFold;