import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { ref, get } from 'firebase/database';
import { db } from "../Scripts/config";

const FolderSearch = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = React.useState('');

    const handleInputChange = (text) => {
        const filteredText = text.replace(/[^a-zA-Z0-9 ]/g, '');
        setSearchText(filteredText);
    };

    const searchAndStoreValue = async (code) => {
        try {
            const snapshot = await get(ref(db, `share_code/${code}`));
            const value = snapshot.val();
            if (value) {
                await AsyncStorage.setItem('searchedValue', value);
                console.log(`Value stored for code ${code}: ${value}`);
            } else {
                console.log(`No value found for code ${code}`);
                Alert.alert('No Value Found', `No value found for code ${code}`);
            }
        } catch (error) {
            console.error('Error searching and storing value:', error);
            Alert.alert('Error', 'An error occurred while searching for the value');
        }
    };

    const handleSearchPress = async () => {
        console.log('Searching for:', searchText);
        try {
            await searchAndStoreValue(searchText);
        } catch (error) {
            console.error('Error searching and storing value:', error);
        }
    };

    return (
        <View style={styles.container}>

            <TextInput
                value={searchText}
                onChangeText={handleInputChange}
                placeholder="Enter search query"
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSearchPress}>

                <Text style={styles.buttonText}>Search</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScanQR")}>

                <Text style={styles.buttonText}>Scan QR</Text>

            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 340,
        height: 200,
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
        color: '#FFF',
        marginBottom: 20,
        elevation: 50,
    },
    button: {
        backgroundColor: '#F6B17A',
        borderRadius: 10,
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 50,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FolderSearch;
