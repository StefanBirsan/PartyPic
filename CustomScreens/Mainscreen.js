import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ButtonUp from "../CustomComponents/ButtonUP";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {get, ref} from "firebase/database";
import {db, firebase} from "../Scripts/config";
import {Share} from "react-native";
import QRCode from "react-native-qrcode-svg";

const MainScreen = () => {
    const navigation = useNavigation();

    const handleLogoutPress = async () => {
        try {

            await AsyncStorage.removeItem('searchedValue');

            console.log('AsyncStorage values deleted successfully');

        } catch (error) {

            console.error('Error deleting AsyncStorage values:', error);

        }
    };

    const shareCode = async () => {
        try {
            const uid = await AsyncStorage.getItem('searchedValue');
            const snapshot = await get(ref(db, `users/${uid}/share_code`));
            const shareCode = snapshot.val();
            const shareCodeW = shareCode.replace(/"/g, '');

            if (shareCodeW) {
                await Share.share({
                    message: `Join my folder on PartyPic: ${shareCodeW}`,
                });
            } else {
                console.log("Share code not found");
            }
        } catch (error) {
            console.error(error);
        }
    };


    const shareQRCode = async () => {
        try {
            const uid = await AsyncStorage.getItem("searchedValue");
            const snapshot = await get(ref(db, `users/${uid}/share_code`));
            const shareCode = snapshot.val();
            const shareCodeW = shareCode.replace(/"/g, '');
            const qrCodeUrl = `https://quickchart.io/qr?text=${shareCodeW}`;

            await Share.share({
                message: `Join my folder on PartyPic: ${qrCodeUrl}`,
            });
        } catch (error) {
            console.error("Error sharing QR code:", error);
        }
    };

    return (
        <View style={styles.container}>

            {/* Title View */}
            <View style={styles.titleContainer}>

                <Text style={styles.title}>partypic</Text>

            </View>

            {/* Buttons Container */}
            <View style={styles.buttonsContainer}>

                {/* Folder Button */}

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Folderscreen")}>

                    <Text style={styles.buttonText}>Folders</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={shareCode} >

                    <Text style={styles.buttonText}>Share Code</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={shareQRCode} >

                    <Text style={styles.buttonText}>Share QR</Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.button} >

                    <Text style={styles.buttonText}>Download as ZIP</Text>

                </TouchableOpacity>



                {/* Logout Button */}

                <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>

                    <Text style={styles.buttonText}>Logout</Text>

                </TouchableOpacity>

                {/* Upload Files */}

                <ButtonUp />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3250',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        width: '100%',
        alignItems: 'center',

    },
    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 70,
        lineHeight: 115.2,
    },
    buttonsContainer: {
        borderRadius: 25,
        width: 340,
        height: 500,
        backgroundColor: '#424769',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F6B17A',
        borderRadius: 10,
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },

});


export default MainScreen;
