import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";


const UserCard = () => {

    return (
        <View style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}>
            <View  style={styles.usercard}>

                <Text style={styles.title}>User: </Text>

                <Text style={styles.nams}> Smekerie</Text>

            </View>

            <View style={styles.usercard}>

                <Text style={styles.title}>Folder access to: </Text>

                <Text style={styles.nams}> Smekerie </Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 340,
        height: 80,
        backgroundColor: '#424769',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    androidShadow: {
        elevation: 5,
    },

    title: {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F6B17A',
        marginLeft: 20,
    },

    usercard : {
        flexDirection : "row",
    },

    nams : {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F6B17A',
    },

    folder : {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F6B17A',
        marginLeft: 5,
    },

});

export default UserCard;
