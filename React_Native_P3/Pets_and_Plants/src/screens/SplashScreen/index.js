import React from "react";
import { View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";



const  SplashScreen = () => {

    return (
        <LinearGradient style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            flex:1, justifyContent: "center",alignItems: "center",
        }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#ffffff", "#ffffff", "#e3f6d0", "#e3f6d0", "#e3f6d0", "#e3f6d0"]}
            
        >
           
            <Image style={{ width: 96, height: 96 }} source={require('../../assets/images/splash_logo.png')} />
            
        </LinearGradient>
       
    );
};


export { SplashScreen };