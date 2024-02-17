import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigPush from "../CustomComponents/NavigPush";
import FolderGen from "../CustomComponents/FolderGen";
import FolderDetails from "../CustomComponents/FolderDetails";

const BottomTab = createBottomTabNavigator();

const MainScreen = () => {
    return(
        <View style={styles.container}>

            <FolderGen></FolderGen>

            <FolderDetails></FolderDetails>

            <NavigPush></NavigPush>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3250',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between'
    },
    textsmek: {
        paddingBottom: 50,
        color: "#fff",
        fontSize: 34,
    },
    img : {
        width: 150,
        height: 150,
    }
});

export default MainScreen;