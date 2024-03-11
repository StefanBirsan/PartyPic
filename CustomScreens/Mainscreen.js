import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigPush from "../CustomComponents/NavigPush";
import FolderGen from "../CustomComponents/FolderGen";
import FolderDetails from "../CustomComponents/FolderDetails";
import UserCard from "../CustomComponents/UserCard";
import ButtonUp from "../CustomComponents/ButtonUP";

import { Image } from 'react-native';

const BottomTab = createBottomTabNavigator();

const MainScreen = () => {
    return(
        <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
            <View style={{ height: 20}} />

            <Image source={{ uri: 'https://quickchart.io/qr?text=378192'}} style={{width: 200, height: 200}}/>

            <FolderGen></FolderGen>

            <FolderDetails></FolderDetails>

            <View>

                <Text style={styles.texts1}>Upload files              See the folder</Text>

            </View>

            <View style={styles.bottomrow}>

                <ButtonUp styles={styles.bottomup}></ButtonUp>

                <Text>                   </Text>

                <NavigPush></NavigPush>

            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D3250',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textsmek: {
        paddingBottom: 50,
        color: "#fff",
        fontSize: 34,
    },
    img : {
        width: 150,
        height: 150,
    },

    bottomrow : {
        flexDirection : "row",
        marginTop: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    bottomup : {
        marginRight: 20,
    },

    texts1: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 10,
    },

});

export default MainScreen;