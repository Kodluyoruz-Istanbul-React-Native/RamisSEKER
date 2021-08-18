import React, { useState }from "react";
import { View, Text, StyleSheet,TouchableOpacity,ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Group } from "~/screens/MainScreen/Group";
import { Message } from "~/screens/MainScreen/Message";
import { Profile } from "~/screens/MainScreen/Profile";
import { Home } from "~/screens/MainScreen/Home";
import { Photo } from "~/screens/MainScreen/Photo";
import LinearGradient from "react-native-linear-gradient";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import { AddPost } from "./Home/AddPost/index";
import { BaseToast } from "react-native-toast-message";





const Tab = createBottomTabNavigator();

const MainScreen = () => {

  return (
        <View style={{ flex: 1, }}>
           <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    showLabel:false,
                    labelStyle: { color: "white" },
                    activeTintColor: "white",
                    inactiveTintColor: "white",
                    style: {position:"absolute",backgroundColor:"#FF3D68" ,borderTopWidth: 1, borderColor: "white", }
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" color={color} size={32} />
                        ),}}/>
                <Tab.Screen
                    name="Group"
                    component={Group}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="select-group" color={color} size={32}/>
                        ),}}/>
                <Tab.Screen
                    name="Photo"
                    component={Photo}
                    options={{
                        tabBarVisible: false,
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="plus-square" color={color} size={32}

                            />),}}/>
                <Tab.Screen
                    name="Message"
                    component={Message}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="message-square" color={color} size={32} />
                        ),}}/>
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                    tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="account-circle" color={color} size={32} />
                        ),}}/>
            </Tab.Navigator>
           </View>
            
    );
};

const styles = StyleSheet.create({
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

});

export {MainScreen};