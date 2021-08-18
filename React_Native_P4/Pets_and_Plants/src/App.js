import React,{useEffect} from "react";
import { View, Text, StatusBar,PermissionsAndroid } from "react-native";
import { Provider } from 'react-redux';
import store from './redux/index';

import Navigation from "./Navigation";

const GRANTED = PermissionsAndroid.RESULTS.GRANTED;
const DENIED = PermissionsAndroid.RESULTS.DENIED;
const READ_EXTERNAL_STORAGE = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
const WRITE_EXTERNAL_STORAGE = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
const RECORD_AUDIO = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;
const CAMERA = PermissionsAndroid.PERMISSIONS.CAMERA;





const App = () => {
   useEffect(async () => {
        if (await PermissionsAndroid.check(READ_EXTERNAL_STORAGE) !== GRANTED) {
            await PermissionsAndroid.request(READ_EXTERNAL_STORAGE);
        }


        if (await PermissionsAndroid.check(WRITE_EXTERNAL_STORAGE) !== GRANTED) {
            await PermissionsAndroid.request(WRITE_EXTERNAL_STORAGE);

        }


        if (await PermissionsAndroid.check(RECORD_AUDIO) !== GRANTED) {
            await PermissionsAndroid.request(RECORD_AUDIO);

        }


        if (await PermissionsAndroid.check(CAMERA) !== GRANTED) {
            await PermissionsAndroid.request(CAMERA);
        }
    }, []);


  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{ flex: 1, backgroundColor: "#f2faf0" }}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    </>
  );
};

export default App;