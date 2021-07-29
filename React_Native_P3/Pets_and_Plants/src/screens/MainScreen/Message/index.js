import React from "react";
import { View, Text } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Messages } from "./Messages/index";
import { Others } from "./Others/index";

const Tab = createMaterialTopTabNavigator();

const Message = () => {
  return (
     
      <View style={{ flex: 1, backgroundColor:"#e9f5db" }}>
           <Tab.Navigator tabBarOptions={{
              labelStyle: { fontSize: 12, color:"#8e8e8f" },
              activeTintColor:"#57837B",   
              style: { backgroundColor: '#e9f5db' },
            indicatorStyle:{backgroundColor:"#57837B"},
  }}
>
         <Tab.Screen name="Messages" component={Messages} />
         <Tab.Screen name="Others" component={Others} />
         </Tab.Navigator>
        </View>
      
    
    );
};
      
  
export { Message };