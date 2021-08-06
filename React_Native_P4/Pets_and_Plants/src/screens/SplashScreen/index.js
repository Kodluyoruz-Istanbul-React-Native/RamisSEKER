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
            colors={["#FAAD80", "#FF6767", "#FF3D68"]}
            
        >
           
            <Image style={{ width: 120, height: 120 }} source={require('../../assets/images/svg.png')} />
            
        </LinearGradient>
       
    );
};


export { SplashScreen };