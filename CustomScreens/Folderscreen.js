import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import ButtonUP from "../CustomComponents/ButtonUP";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Folderscreen = () => {
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('folder');
            if (value !== null) {
                return value
            }
        } catch (e) {

        }}

    const [foldername, setFoldername] = useState("")

    useEffect(() => {
        getData().then(response =>{

            setFoldername(response)
        })
    }, []);



    const removeItemValue = async () => {
        try {
            await AsyncStorage.removeItem('folder');
            console.log('Sters a fost')
            return true
        }
        catch(exception) {
            return false;
        }
    }


    return (
        <View style={styles.Smekcontainer}>

            <View style={styles.topsmekcont}>

                <Text style={styles.textsmek}>Folder Name: {foldername}</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    Smekcontainer: {
        flex: 1,
        backgroundColor: '#2D3250',
    },

    topsmekcont: {
        flex: 1,
    },

    bottomContainer : {
      justifyContent: 'center',
    },

    textsmek: {
        color: "#fff",
        fontSize: 27,
        position: 'absolute',
        top: 30,
        left: 10,
    },
    buttonup: {
        position: 'absolute',
        bottom: 0,
        left: '45%',

    },
    resetbutton: {
        top: 500,
    }
});

export default Folderscreen;
