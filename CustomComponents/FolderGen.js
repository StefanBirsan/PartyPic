import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import ButtonGEn from "./ButtonGEn";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from 'firebase/database';
import { auth, db } from "../Scripts/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FolderGen = () => {

    const navigation = useNavigation();

    function generateSixDigitNumber() {
        const min = 100000;
        const max = 999999;

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        const sixDigitNumberString = randomNumber.toString();

        return sixDigitNumberString;
    }

    function generateRandomString() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '';

        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }

        return randomString;
    }

    const getTimeAndDayString = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getDay()];

        return `${currentDay}, ${currentTime}`;
    };

    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const addCode = (userUID, share_code) => {
        set(ref(db, `share_code`), {
            [share_code]: userUID,
        })
            .then(
                response => {
                    console.log("Am ajuns aici")
                }
            )
            .catch((error) => console.error(error));
    };

    const createOn = async (userUID) => {

        await AsyncStorage.setItem('searchedValue', userUID);

        let share_code = generateSixDigitNumber();
        let folder_id = generateRandomString();
        let time_created_at = getTimeAndDayString();
        console.log(userUID)
        set(ref(db, `users/${userUID}`), {
            folder_id: folder_id,
            share_code: share_code,
            time_created_at: time_created_at,
        })
            .then(
                response => {
                    console.log("Am ajuns aici");
                    addCode(userUID, share_code);
                }
            )
            .catch((error) => console.error(error));
        console.log("Am ajuns si aci")
    };

    return (
        <View style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}>
            <Text style={styles.title}>Create or join a folder</Text>

            <View style={styles.buttonsdown}>
                <Text style={styles.text1}>Create</Text>
                <ButtonGEn imgSrc='' onPress={() => createOn(userId)}></ButtonGEn>
                <Text style={styles.text2}>Join</Text>
                <ButtonGEn imgSrc='' onPress={() => navigation.navigate("SearchFolder")}></ButtonGEn>
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
        color: '#F6B17A',
        fontFamily: 'monospace',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
        borderWidth: 1,
        borderColor: '#F6B17A',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    buttonsdown: {
        flexDirection: "row",
        alignItems: "center",
    },
    text1: {
        fontWeight: "bold",
        fontSize: 15,
        color: '#F6B17A',
        marginLeft: 5,
        marginRight: 10,
        marginTop: 5,
        fontFamily: 'monospace',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
    },
    text2: {
        fontWeight: "bold",
        fontSize: 15,
        color: '#F6B17A',
        marginLeft: 60,
        marginRight: 10,
        marginTop: 5,
        fontFamily: 'monospace',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
    },
});

export default FolderGen;
