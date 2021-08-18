import React,{useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { RNCamera } from 'react-native-camera';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import storage from '@react-native-firebase/storage';
import { h, H, sbh, screen, W, w } from '~/utils/dimensions';
import { useSelector, useDispatch } from "react-redux";
import * as userTypes from '~/redux/types/user'





const Photo = ({navigation}) => {

  const [postUri, setPostUri] = useState('')




  const dispatch = useDispatch();
  const uid = useSelector(state => state.user.uid);

  let cameraRef = React.createRef();





  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: false };
      const data = await cameraRef.current?.takePictureAsync(options)
        .then(data => {
          console.log(data.uri);
          setPostUri(data == undefined ? '' : data.uri)
            })
          .then(() => console.log('Photo taken.'));
          dispatch({
          type: userTypes.USER_POSTURI,
          payload: {
            postUri: data.uri
          }
        });
         
        
      
        
    }
  };

 
  return (
    <View style={{ flex: 1, }}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
      />
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons color={"white"} size={32} name={"arrow-back-ios"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons color={"white"} size={32} name={"ios-flash"} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons color={"white"} size={32} name={"folder-multiple-image"} />
        </TouchableOpacity>
        
        <View style={styles.cameraBorder}>
          <TouchableOpacity onPress={() => takePicture(cameraRef.current)}>
            <View style={styles.cameraButton} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <MaterialIcons color={"white"} size={32} name={"flip-camera-ios"} />
        </TouchableOpacity>
      </View>
      

      
    </View>
     
  );
};


const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
  },
  topContainer: {
    height: "12%",
    width: "100%",
    position: "absolute",
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  bottomContainer: {
    height: "14%",
    width: "100%",
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  cameraButton: {
    justifyContent: "center",
    width: W(14),
    height: W(14),
    backgroundColor: "white",
    borderRadius: W(7),
    
  },
  cameraBorder: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: W(20),
    height: W(20),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: W(10),
  }

});
export { Photo };