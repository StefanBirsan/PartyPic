import React from 'react';
import { StyleSheet, View } from 'react-native';
import FolderGen from "../CustomComponents/FolderGen";

const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <FolderGen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#676c8a',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
    },
});

export default CreateScreen;
