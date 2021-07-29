import React from "react";
import { View, Text,Image,StyleSheet,TouchableOpacity } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";


const Header = () => {
    return (
        
       <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
              <Ionicons style={[styles.icons,{marginLeft:15,}]}  name={"reorder-three-outline"} size={28} />
            </TouchableOpacity>
               
                
           <View style={styles.topIcons}>
            <TouchableOpacity>
               <Feather style={[styles.icons,{}]} name={"search"} size={28} />
            </TouchableOpacity>
            <TouchableOpacity>
               <Ionicons style={[styles.icons,{marginLeft:15,}]}  name={"notifications-outline"} size={28} />
            </TouchableOpacity>
             </View>
           </View> 
          </View>
        
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    marginTop: 40,
    height: 50,
   },
  logo: {
    width: 100,
    height: 80,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
   },
  topIcons: {
    right: 15,
    flexDirection: "row",
  },
  icons: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 5,
    color: "black",
    padding:5,
  }
  
});

export { Header };