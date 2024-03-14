import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView , Dimensions} from "react-native";
import { firebase } from "../Scripts/config";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

const ButtonUp = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,  //Images and Videos
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
            uploadMedia(result.assets[0].uri); // Call uploadMedia function after picking image
        }
    };

    const uploadMedia = async (imageUri) => {
        setUploading(true);
        try {
            const { uri } = await FileSystem.getInfoAsync(imageUri);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    resolve(xhr.response);
                };
                xhr.onerror = (e) => {
                    reject(new TypeError('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(`images/${filename}`);

            await ref.put(blob);
            setUploading(false);
            Alert.alert('File has been Uploaded!');
            setImage(null);

        } catch (error) {
            // Handle error
            console.error(error);
            setUploading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.selectButton} onPress={pickImage}>

                <Image style={styles.img} source={require('../assets/uploadIMG.png')} />

            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        alignItems: "center",
    },
    imageContainer: {
        marginTop: 15,
        marginBottom: 10,
        alignItems: "center",
    },
    selectButton: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor:'#7077A1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,

    }
});

export default ButtonUp;
