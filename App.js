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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        });
    }, []);

    return (
        <NavigationContainer>
                {!isLogged ? <AuthStack /> : <AppStack />}
        </NavigationContainer>


    );
}

