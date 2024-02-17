import React, { useState, useEffect } from 'react';
import {Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



function generateString() {

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let counter = 0;

    while (counter < 8) {

        result += characters.charAt(Math.floor(Math.random() * charactersLength));

        counter += 1;
    }
    return result;
}



const ButtonGEn = () => {

    const saveData = async () => {
        try {
            const folderName = generateString()

            console.log(JSON.stringify(folderName))

            await AsyncStorage.setItem('folder', folderName)

            Alert.alert('Your folder code: ' + folderName);

        } catch (e) {

        console.log(e)

    }}

    return (
        <TouchableOpacity

            onPress={() => {

                saveData()

            }}
        >
            <View style={[styles.viewsmek, Platform.OS === 'android' && styles.androidShadow]}>

                <Image style={styles.img} source={require('../assets/foldersmek.png.png')} />


            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 35,
        height: 35,
        marginTop: 10.
    },

    buttonText: {
        color: 'black',
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    viewsmek: {
        position: 'relative',
    },
});

export default ButtonGEn;
