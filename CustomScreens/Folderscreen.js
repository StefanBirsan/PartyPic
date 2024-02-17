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
            console.log(e)
        }}

    const [foldername, setFoldername] = useState("")

    useEffect(() => {
        getData().then(response =>{
            console.log(response)
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
                <Text style={styles.textsmek}>Folder Code: {foldername}</Text>

                <TouchableOpacity
                    style={styles.resetbutton}
                    onPress={() => AsyncStorage.clear()}
                >
                    <Text>Ma arunc in cada</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bottomContainer}>
               <ButtonUP/>
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
        position: 'absolute', // Position text absolutely
        top: 30, // Set top edge to top of container
        left: 10, // Set left edge to left of container
    },
    buttonup: {
        position: 'absolute',
        bottom: 0, // Set bottom edge to bottom of container
        left: '45%', // Position 50% to the left

    },
    resetbutton: {
        top: 500,
    }
});

export default Folderscreen;
