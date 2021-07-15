import React from "react";
import { View, Text, StatusBar } from "react-native";

import Navigation from "~/Navigation";





const App = () => {

    return (
       <>
        <StatusBar translucent={true} backgroundColor={'transparent'}  />
        <View style={{ flex: 1,paddingTop:20, backgroundColor: "#C9D8B6"}}>
            <Navigation />
            
        </View>
        </>
    );
};

export default App;