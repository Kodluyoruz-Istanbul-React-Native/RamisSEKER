import React from "react";
import { View, Text,Image,StyleSheet,TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';



const Header = () => {
  const navigation = useNavigation();
  
    return (
      
       <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Ionicons style={[styles.icons,{marginLeft:15,}]}  name={"reorder-three-outline"} size={28} />
            </TouchableOpacity>
          <View>
            <Text style={styles.hederText}>Pets&Plants</Text>
          </View>
                
           <View style={styles.topIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
               <Feather style={[styles.icons,{}]} name={"search"} size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
               <Ionicons style={[styles.icons,{marginLeft:15,}]}  name={"notifications-outline"} size={28} />
            </TouchableOpacity>
             </View>
           </View> 
        </View>
       
        
    );
};

const styles = StyleSheet.create({
  container: {
    
    paddingTop:50,
    height: 100,
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
    backgroundColor: "#FFF5FD",
    borderRadius: 10,
    elevation: 5,
    color: "black",
    padding:5,
  },
  hederText: {
    fontWeight: "bold",
    fontStyle:"italic",
    fontSize: 32,
    color: "white",
    
  }
  
});

export { Header };