import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native";
import { firebase } from "../Scripts/config";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';



const ButtonUp  = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async ()  => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,  //Images and Videos
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadMedia = async () => {
        setUploading(true);
        try {
            const { uri } = await FileSystem.getInfoAsync(image);
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

            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(`images/${filename}`);

            await  ref.put(blob);
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
                <Text style={styles.buttonText}>Pick your FILE</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                {image && <Image
                    source={{uri: image}}
                    style={{width:150, height: 150}}
                />}
            </View>
            <TouchableOpacity onPress={uploadMedia}>
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
        alignItems:"center",
    },

    selectButton: {
        borderRadius: 25,
        width: 110,
        height: 50,
        backgroundColor: '#9f79ad',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ButtonUp;
