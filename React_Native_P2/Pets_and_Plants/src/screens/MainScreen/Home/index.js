import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import Logo from "~/assets/images/splash_logo.png";
import Feather from "react-native-vector-icons/Feather";
import { Header } from "~/components/Header/index";

const Home = () => {
    return (
        <View style={styles.container}>
           <Header />
        </View>
            
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9f5db",
        
      
    }
});

export { Home };