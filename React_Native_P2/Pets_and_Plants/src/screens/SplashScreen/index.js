import React from "react";
import { View, Image } from "react-native";




const  SplashScreen = () => {

    return (
        <View style={{flex:1, backgroundColor:"#f2faf0", justifyContent: "center",alignItems: "center",}}>
            <Image style={{ width: 96, height: 96 }} source={require('../../assets/images/splash_logo.png')} />
        </View>
       
    );
};


export { SplashScreen };