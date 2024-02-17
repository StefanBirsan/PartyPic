import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity} from "react-native";

const ButtonFind = () => {

    return(

        <TouchableOpacity
            style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}
        >
            <Text style={styles.text}>Search</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 70,
        height: 40,
        backgroundColor: '#7077A1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    text : {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#F6B17A",
    },

    // Shadow style for Android
    androidShadow: {
        elevation: 5,
    },
});

export default  ButtonFind;