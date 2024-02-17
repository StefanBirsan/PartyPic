import React from "react-native";
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavigPush = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}
            onPress={() => navigation.navigate("Folderscreen")}
        >
            <Text style={styles.text}>
                Folder
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 110,
        height: 60,
        backgroundColor: '#7077A1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    text : {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#F6B17A",
    },

    // Shadow style for Android
    androidShadow: {
        elevation: 5,
    },
});

export default NavigPush;
