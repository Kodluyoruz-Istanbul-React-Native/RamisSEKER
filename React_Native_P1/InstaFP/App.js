import React , { Component } from 'react';
import { Text, View, StatusBar,SafeAreaView  } from 'react-native';
import { Buttons, TopBar, Username, Story, Timeline, Comment } from "./src/components/index";



const App = () => {
  
   
     return (
              <SafeAreaView>
               <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content"  />
                <View style={{height:"100%"}}>
               <TopBar />
               <Story />
               <Username />
               <Timeline />
               <Comment />
               <Buttons/>
               </View>
               </SafeAreaView>
          
     )
};



    
 



export default App;