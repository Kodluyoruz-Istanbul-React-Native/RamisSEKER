import React from 'react';
import { useState, useEffect } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { MainScreen, SplashScreen, LoginScreen } from "~screens";

const Stack1 = createStackNavigator();


const Navigation = () => {
   
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplashScreen(false);
            }, 2000);
        }, []);


    return (

        <NavigationContainer>
            <Stack1.Navigator headerMode={'none'}>
                <Stack1.Screen
                    name={showSplashScreen ? 'SplashScreen' : 'LoginScreen'}
                    component={showSplashScreen ? SplashScreen : LoginScreen}
                />
                <Stack1.Screen
                    name={"MainScreen"}
                    component={MainScreen}
                />
            </Stack1.Navigator>
        </NavigationContainer>
    );
    
};


export default Navigation;