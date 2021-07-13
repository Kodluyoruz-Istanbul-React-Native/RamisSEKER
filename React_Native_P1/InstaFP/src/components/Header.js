import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, Dimensions } from 'react-native';
import Logo from "../images/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const TopBar = () => {
  return (
    <View style={styles.container}>
       <View style={{height:50, flexDirection: "row",justifyContent: "space-between"}}>
        <Image style={styles.logo} source={Logo} />
         <View style={styles.icons}>
          <Icon style={{marginHorizontal:10}} name="plus-square-o" size={30} color="black" />
          <Icon style={{marginHorizontal:10}} name="heart-o" size={30} color="black" />
          <Feather style={{marginHorizontal:10}} name="send" size={30} color="black" />
        </View>
       </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    
   },
  icons: {
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    
   },
  logo: {
    width: windowWidth* 0.381,   
    height: 50,
    marginLeft : 10,
   }
});

export default TopBar;