import React  from 'react';
import {Image, Platform, StyleSheet,TouchableOpacity, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const ButtonGEn = ({imgSrc, onPress}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity

            onPress={onPress}
        >
            <View style={[styles.viewsmek, Platform.OS === 'android' && styles.androidShadow]}>

                <Image style={styles.img} source={require('../assets/foldersmek.png.png')} />


            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 35,
        height: 35,
        marginTop: 10.
    },

    buttonText: {
        color: 'black',
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    viewsmek: {
        position: 'relative',
    },
});

export default ButtonGEn;
