import React from "react";
import { View, Text } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Messages } from "./Messages/index";
import { Others } from "./Others/index";

const Tab = createMaterialTopTabNavigator();

const Message = () => {
  return (
     
      <View style={{ flex: 1,paddingTop:40,backgroundColor: "#FAAD80"  }}>
      <Tab.Navigator
        backgroundColor="#FF3D68"
        tabBarOptions={{
              labelStyle: { fontSize: 12, color:"white" },
              activeTintColor: "#57837B",
              
              style: { backgroundColor:"#FAAD80"},
            indicatorStyle:{backgroundColor:"white"},
  }}
>
         <Tab.Screen name="Messages" component={Messages} />
         <Tab.Screen name="Others" component={Others} />
         </Tab.Navigator>
        </View>
      
    
    );
};
      
  
export { Message };