import {NavigationContainer} from '@react-navigation/native';
import Folderscreen from "./CustomScreens/Folderscreen";
import MainScreen from "./CustomScreens/Mainscreen"
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./CustomScreens/LoginScreen";
import GenerateFold from "./CustomScreens/GenerateFold";
import {View} from "react-native";
import {Camera, CameraView} from "expo-camera/next";
import {useState} from "react";

const StackNav = createStackNavigator();

const Cam = () => {
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

export default function App() {


    return (
        <NavigationContainer>

            <StackNav.Navigator
                initialRouteName={'Login'}
                headerShown="false"
            >

                <StackNav.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#F6B17A',
                        },
                        headerTintColor: '#424769',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,


                        },
                    }}

                />


                <StackNav.Screen

                    options={{
                        title: 'PartyPic',
                        headerStyle: {
                            backgroundColor: '#F6B17A',
                        },
                        headerTintColor: '#424769',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                        },
                    }}
                    name="Home"
                    component={MainScreen} />

                <StackNav.Screen

                    options={{
                        title: 'Folder',
                        headerStyle: {
                            backgroundColor: '#F6B17A',
                        },
                        headerTintColor: '#424769',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                        },
                    }}

                    name="Folderscreen"

                    component={Folderscreen}
                />

                <StackNav.Screen
                    name="Foldergen"

                    options={{
                        title: 'Folder generate',
                        headerStyle: {
                            backgroundColor: '#F6B17A',
                        },
                        headerTintColor: '#424769',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                        },
                    }}
                    component={GenerateFold}
                    />

                <StackNav.Screen
                    name="Cam"

                    options={{
                        title: 'Folder generate',
                        headerStyle: {
                            backgroundColor: '#F6B17A',
                        },
                        headerTintColor: '#424769',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 25,
                        },
                    }}
                    component={Cam}
                />



            </StackNav.Navigator>

        </NavigationContainer>


    );
}

