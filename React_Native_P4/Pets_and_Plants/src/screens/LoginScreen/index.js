import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LoginScreenPhoto from "~/assets/images/loginscreenphoto.png";
import { Input } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

import { USER_LOGIN, USER_SIGNIN } from "../../redux/actions/user";


const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
    USER_LOGIN: (email, password ,navigation) => dispatch(USER_LOGIN(email, password,navigation)),
    USER_SIGNIN: (email, password) => dispatch(USER_SIGNIN(email, password)),
});

 

// Login and Sign Up Screen 


const LoginScreen = connect(mapStateToProps, mapDispatchToProps)((props) => {

    const [isSignIn, setIsSignIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = props;
    
    return (
        <LinearGradient style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
        }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[ "#FF3D68","#FF3D68", "#FF6767", "#FF6767","#FAAD80","#FAAD80"]}>
        <View style={{ flex: 1, paddingTop: 30, }}>
            <Text style={[styles.logintext, { fontSize: 22,color: "white" }]}>LOG IN</Text>
            <View>
                <Image style={{ alignSelf: "center", width: 96, height: 96, marginTop: 30 }} source={require("../../assets/images/svg.png")} />
            </View>
            <View style={styles.inputstyle}>
                <Input
                    inputContainerStyle={styles.inputContainerStyle}
                    style={{fontWeight:"bold",color:"white"}}
                    placeholder='E-mail Adress'
                    placeholderTextColor="#f6f6f6"
                    value={email}
                    onChangeText={setEmail}
                    maxLength={64}
                    leftIcon={{ type: 'feather', name: 'mail', marginLeft: 8,color:"white" }} />
                <Input
                    inputContainerStyle={styles.inputContainerStyle}
                    style={{fontWeight:"bold",color:"white"}}
                    placeholder='Password'
                    placeholderTextColor="#f6f6f6"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    maxLength={16}
                    leftIcon={{ type: 'entypo', name: 'key', marginLeft: 8,color:"white" }} />
                <TouchableOpacity>
                    <Text
                        style={{ fontWeight: "bold", fontSize: 16, marginRight: 22, color: "white",alignSelf:"flex-end" }}
                    >Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: "center", }}>
                    <LinearGradient
                     start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={["#FF6767", "#FF3D68"]}
                    style={styles.loginbutton}>
                        <Text onPress={() => isSignIn ? props.USER_SIGNIN(email, password) : props.USER_LOGIN(email,password,props.navigation)}
                            style={[styles.logintext, { color: "white",width:"100%",height:"100%",textAlign:"center",textAlignVertical:"center", }]}>
                        {isSignIn ? 'SIGN UP' : 'LOG IN'}
                    </Text>
                    </LinearGradient>
                    <View style={{flexDirection:"row",}}>
                        <Text style={[styles.logintext, { color: "black", paddingTop: 30, fontWeight: "400", }]}>{isSignIn ? "Have you an Account?" : "Don't have an account yet?"  }</Text>
                <TouchableOpacity
                    style={{}}
                    onPress={() => setIsSignIn(!isSignIn)}
                >
                    <Text style={[styles.logintext, { color: "white",fontWeight: "bold",paddingTop:30,}]}>{isSignIn ? "  Log In!" : "  Register Now!" }</Text>
                </TouchableOpacity>
                    </View>
                    <Text style={[styles.logintext, { color: "black",paddingTop:40,fontSize:16,fontWeight:"400", }]}>Or Sign Up Using</Text>
                    <View style={{flexDirection: "row",marginTop:10}}>
                        <TouchableOpacity style={styles.signupbutton}  >
                    <Image style={styles.icon} source={require("../../assets/images/google.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupbutton}  >
                    <Image style={styles.icon} source={require("../../assets/images/facebook.png")} />
                   
                        </TouchableOpacity>
                    </View>
               </View>
            </View >
      </LinearGradient>
    );

});

const styles = StyleSheet.create({
    loginscreenphoto: {
        borderTopWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        opacity: 0.3,
        zIndex: -1,
    },
    loginscreencontainer: {
        justifyContent: "flex-end",
        flex: 1,
    },
    logintext: {
        alignSelf: "center",
        fontWeight: "bold",
        lineHeight: 16,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        color: "black",
        paddingTop: 10,
    },
    
    inputstyle: {
        marginTop: 50,
    },
    loginbutton: {
        width: "90%",
        height: 50,
        alignSelf: "center",
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: "#2a521d",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,

    },
    signupbutton: {
        alignItems: "center",
    },
    inputContainerStyle: {
        width: "95%",
        alignSelf: "center",
        borderColor: "white",
        
        
    },
    icon: {
        width: 52,
        height: 52,
        margin: 10,
    }
});

export { LoginScreen };