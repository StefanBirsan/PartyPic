import { Alert, View } from "react-native";
import { CameraView } from "expo-camera/next";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get, ref } from "firebase/database";
import { db } from "../Scripts/config";

const CamScreen = () => {
    const [scanned, setScanned] = useState(false);

    const searchAndStoreValue = async (code) => {
        try {
            const snapshot = await get(ref(db, `share_code/${code}`));
            const value = snapshot.val();
            const valueS = value.replace(/"/g, '');
            if (valueS) {
                await AsyncStorage.setItem('searchedValue', valueS);
                console.log(`Value stored for code ${code}: ${valueS}`);
            } else {
                console.log(`No value found for code ${code}`);
                Alert.alert('No Value Found', `No value found for code ${code}`);
            }
        } catch (error) {
            console.error('Error searching and storing value:', error);
            Alert.alert('Error', 'An error occurred while searching for the value');
        }
    };

    const handleBarcodeScanned = ({ data }) => {
        setScanned(true);
        searchAndStoreValue(data);
        console.log(data);
        Alert.alert('QR Code Scanned', 'The QR code was successfully scanned!');
    };

    return (
        <View style={{ flex: 1 }}>
            <CameraView
                style={{ flex: 1 }}
                barCodeScannerSettings={{ barCodeTypes: ["qr"] }}
                onBarcodeScanned={!scanned ? handleBarcodeScanned : () => {}}
            />
        </View>
    );
};

export default CamScreen;
