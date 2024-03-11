import {View} from "react-native";
import {CameraView} from "expo-camera/next";
import {useState} from "react";


const CamScreen = () => {
    const [scanned, setScanned] = useState(false);

    return (
        <View style={{ flex: 1}}>
            <CameraView style={{flex: 1}} barCodeScannerSettings={{
                barCodeTypes: ["qr"],
            }} onBarcodeScanned={!scanned ? (event) => {
                setScanned(true);
                console.log(event.data)} : () => {}} />
        </View>
    )
}

export default CamScreen;