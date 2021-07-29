import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Provider } from 'react-redux';
import store from './redux/index';

import Navigation from "~/Navigation";





const App = () => {

    return (
       <>
        <StatusBar translucent={true} backgroundColor={'transparent'}  />
          <View style={{ flex: 1, backgroundColor: "#f2faf0" }}>
            <Provider store={store}>
               <Navigation />
            </Provider>
        </View>
        </>
    );
};

export default App;