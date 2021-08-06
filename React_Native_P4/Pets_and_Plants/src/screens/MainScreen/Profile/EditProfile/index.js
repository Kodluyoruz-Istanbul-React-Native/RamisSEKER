import React,{ useState ,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { Input } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector,useDispatch} from "react-redux";
import database from '@react-native-firebase/database';
import * as userTypes from  "../../../../redux/types/user";
import storage from '@react-native-firebase/storage';


const EditProfile = () => {

const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');

  const dispatch = useDispatch();
  const uid = useSelector(state => state.user.uid);

  
const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    })
    
     .then(image => {
       database()
      .ref(`/USERS/${uid}/info`)
      .update({
        image: image.data
      })
      .then(() => console.log('Data updated.'));
        dispatch({
                type: userTypes.USER_PHOTOURI,
                payload: {
                    photoUri: image.data
                }
        }); 
      
      bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
       database()
      .ref(`/USERS/${uid}/info`)
      .update({
        image: image.data
      })
      .then(() => console.log('Data updated.'));
        dispatch({
                type: userTypes.USER_PHOTOURI,
                payload: {
                    photoUri: image.data
                }
            }); 
      
      bs.current.snapTo(1);
    });
  }

  const   renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
             <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

  const  renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );
      const    bs = useRef(null);
      const fall = new Animated.Value(1);
      const photoUri = useSelector((state) => state.user.photoUri);
      
      

    return (
        
         <LinearGradient
            style={{height: '100%',}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68"]}>
            <View style={styles.container}>
                <BottomSheet
                    ref={bs}
                    snapPoints={[260, 0]}
                    renderContent={renderInner}
                    renderHeader={renderHeader}
                    initialSnap={1}
                    callbackNode={fall}
                   enabledGestureInteraction={true} />
                  <Animated.View style={{margin: 20,
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),}}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)} >
                        <View style={styles.ProfileContainer} >
                           <ImageBackground
                            source={{uri: `data:image/jpeg;base64,${photoUri}`}}  
                            style={{height: 100, width: 100}}>
                         <View
                           style={{
                                   flex: 1,
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   
                              }}>
                              <Icon
                                  name="camera"
                                  size={35}
                                  color="#fff"
                                   style={styles.iconCamera}
                                 />    
                              </View>
                            </ImageBackground>
                         </View>
                  </TouchableOpacity>  
                <View style={{marginTop:30,backgroundColor: "white",borderRadius:10,width:"80%"}}>
                <Input
                            inputContainerStyle={{width:"100%",}}
                            placeholder="Your Name"
                            label="Your Name"
                            labelStyle={{ color: "black",paddingTop:15 }}
                     />
                <Input
                        inputContainerStyle={{width:"100%",}}
                        placeholder="Your Username"
                            label="Your Username"
                            labelStyle={{color:"black"}}
                        />
                </View>
                </View>
                  <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                    <View style={styles.submitButton}>
                       <Text  style={styles.submitText}>Change Your Profile Photo</Text>
                    </View>
                 </TouchableOpacity>
                 </Animated.View>   
                </View>
                </LinearGradient>
       
    );


};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
        alignItems: "center",
        
    },
    ProfileContainer: {
        width: 105,
        height: 105,
        backgroundColor: "yellow",
        borderWidth: 5,
        borderColor: "white",
        justifyContent: 'center',
         alignItems: 'center',
        
        
    },
    
    topContainer: {
        flexDirection: "column",
        paddingLeft: 15,
        
        paddingBottom: 20,
        alignItems: 'center',

    },

    submitButton: {
        width: 350,
        height: 50,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius:10,
    },
    submitText: {
        textAlign: "center",
        fontWeight: "bold",
    },
    panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    //  borderTopLeftRadius: 20,
    //  borderTopRightRadius: 20,
    //  shadowColor: '#000000',
    //  shadowOffset: {width: 0, height: 0},
    //  shadowRadius: 5,
    //  shadowOpacity: 0.4,
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
    backgroundColor: '#FF3D68',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  iconCamera: {
    opacity: 0.5,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 1,
   borderColor: '#fff',
   borderRadius: 10,
    
  }




});

export { EditProfile };