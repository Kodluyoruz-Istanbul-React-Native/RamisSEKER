import React from "react";
import { View, Text, StyleSheet } from "react-native";
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


const Tab = createBottomTabNavigator();

const MainScreen = () => {
    
    return (
        
        <View style={{ flex: 1, backgroundColor: "#F8FFF8" }}>
           
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: "#57837B",
                    style: { backgroundColor: "white",borderTopWidth:1,borderColor:"#57837B" }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Group"
                    component={Group}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="select-group" color={color} size={size}/>
                        ),
                    }}
                />
                
                <Tab.Screen
                    name="Photo"
                    component={Photo}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="plus-square" color={color} size={size}

                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Message"
                    component={Message}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="message-square" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="account-circle" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
                 
        </View>
    );
};

const styles = StyleSheet.create({

});

export {MainScreen};