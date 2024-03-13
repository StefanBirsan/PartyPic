import {NavigationContainer} from '@react-navigation/native';
import Folderscreen from "./CustomScreens/Folderscreen";
import MainScreen from "./CustomScreens/Mainscreen"
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./CustomScreens/LoginScreen";
import GenerateFold from "./CustomScreens/GenerateFold";
import CamScreen from "./CustomScreens/CamScreen";
import {useEffect, useState} from "react";
import RegisterScreen from "./CustomScreens/RegisterScreen";
import { auth } from "./Scripts/config";
import {onAuthStateChanged} from "@firebase/auth";
import CreateScreen from "./CustomScreens/CreateScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";


const StackNav = createStackNavigator();


const AuthStack = () => {
    return (
        <StackNav.Navigator
            initialRouteName={'Login'}
        >

            <StackNav.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'Login',
                    headerStyle: {
                        backgroundColor: '#F6B17A',
                    },
                    headerTintColor: '#3B3486',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
            <StackNav.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: 'Register',
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
        </StackNav.Navigator>
    );
}

const CreateStack = () => {
    return (
        <StackNav.Navigator
            initialRouteName={'CreateScreen'}
        >
            <StackNav.Screen
                name="CreateScreen"
                component={CreateScreen}
                options={{
                    title: 'Create',
                    headerStyle: {
                        backgroundColor: '#F6B17A',
                    },
                    headerTintColor: '#2D3250',
                    headerShown: false,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    },
                }}
            />
        </StackNav.Navigator>
    );

}

const AppStack = () => {
    return (
        <StackNav.Navigator
            initialRouteName={'MainScreen'}
        >
            <StackNav.Screen
                name="Home"
                component={MainScreen}
                options={{
                    title: 'Home',
                    headerTintColor: '#424769',
                    headerStyle: {
                        backgroundColor: '#F6B17A',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                }}
            />

            <StackNav.Screen
                name="Folderscreen"
                component={Folderscreen}
                options={{
                    title: 'Folders',
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
                name="GenerateFold"
                component={GenerateFold}
                options={{
                    title: 'Generate',
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
                name="ScanQR"
                component={CamScreen}
                options={{
                    title: 'Scan',
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






        </StackNav.Navigator>
    );
}


export default function App() {

    const [isLogged, setIsLogged] = useState(true);
    const [hasFolder, setHasFolder] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
    }, []);

    useEffect(() => {
        const checkUserFolder = async () => {
            const userFolder = await AsyncStorage.getItem('userFolder');
            if (userFolder === undefined) {
                return; // Exit the function if userToken is undefined
            }

            try {
                if (userFolder === 'yes') {
                    setHasFolder(true);
                } else {
                    setHasFolder(false);
                }
            } catch (error) {
                console.error('Error retrieving user token:', error);
                setHasFolder(false);
            }
        };

        checkUserFolder();
    }, []);


    return (
        <NavigationContainer>
                {!isLogged ? <AuthStack /> :!hasFolder ? <CreateStack /> : <AppStack />}
        </NavigationContainer>


    );
}

