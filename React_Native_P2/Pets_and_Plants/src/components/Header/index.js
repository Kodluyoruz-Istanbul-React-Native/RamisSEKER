import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import Logo from "~/assets/images/splash_logo.png";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
    return (
        
            <View style={styles.container}>
                
             <View style={styles.h}>
                <Image style={styles.logo} source={Logo} />
              </View>
              <View  >
                <Feather style={styles.settings} name={"settings"} size={32} />
                </View>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "#C9D8B6",
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "center",
        
      },
    logo: {
        width: 100,
        height: 80,
        borderWidth: 1,
        
        
        
      },
    header: {
        borderWidth: 1,
    },
    settings: {
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "#8e8e8f",
        
        
        
        
    }
});

export { Header };