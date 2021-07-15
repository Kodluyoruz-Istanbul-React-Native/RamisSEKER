import React from "react";
import { View, Image } from "react-native";




const  SplashScreen = () => {

    return (
        <View style={{flex:1, backgroundColor:"#C9D8B6", justifyContent: "center",alignItems: "center",}}>
            <Image  source={require('../../assets/images/splash_logo.png')} />
        </View>
       
    );
};


export { SplashScreen };