import React, { useState } from "react";
import { StyleSheet, TextInput, View, Platform, Text } from "react-native";
import ButtonGEn from "./ButtonGEn";
import ButtonFind from "./ButtonFind";

const FolderGen = () => {
    const [folderName, setFolderName] = useState('');

    // Function to handle text input change
    const handleTextChange = newText => {
        // Remove special characters using regex
        const filteredText = newText.replace(/[^\w\s]/gi, '');
        setFolderName(filteredText);
    };

    return (
        <View style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}>
            <Text style={styles.title}>Create or join a folder</Text>
            <TextInput
                style={[styles.input, Platform.OS === 'android' && styles.androidShadow]}
                placeholder="Folder name:"
                value={folderName}
                onChangeText={handleTextChange}
                maxLength={20}
            />
            <View style={styles.buttonsdown}>
                <Text style={styles.text1}>Create</Text>
                <ButtonGEn></ButtonGEn>
                <Text style={styles.text2}>Search Folder</Text>
                <ButtonFind></ButtonFind>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 340,
        height: 145,
        backgroundColor: '#424769',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#7077A1',
        borderRadius: 10,
        width: '80%',
        height: 40,
        paddingLeft: 10,
        color: '#F6B17A',
    },

    androidShadow: {
        elevation: 5,
    },

    title: {
        marginBottom: 12,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F6B17A'
    },

    buttonsdown : {
      flexDirection : "row",
      alignItems: "center",
    },

    text1 : {
        fontWeight: "bold",
        fontSize: 15,
        color: '#F6B17A',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },

    text2 : {
        fontWeight: "bold",
        fontSize: 15,
        color: '#F6B17A',
        marginLeft: 15,
        marginRight: 10,
        marginTop: 5,
    },



});

export default FolderGen;
