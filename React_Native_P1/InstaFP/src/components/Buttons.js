import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



export const Buttons = () => {
    return (
        <View style={styles.container}>
            <View style={{  flexDirection:"row",justifyContent:"space-between",alignItems: "center",padding:5,marginVertical:10}}>
                <Feather style={{ marginHorizontal: 20 }} name="home" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="search" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="video" size={30} color="black" />
                <Feather style={{ marginHorizontal: 20 }} name="shopping-bag" size={30} color="black" />
                <MaterialCommunityIcons style={{ marginHorizontal: 10 }} name="account-circle" size={30} color="black" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom:0,
    flexDirection: "column",
    borderWidth: 0.6,
        borderColor: "#DDDDDD",
    width:"100%",
    },

});




export default Buttons;