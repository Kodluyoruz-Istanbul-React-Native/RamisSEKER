import React, {useState} from "react";
import { View, Text ,Image, StyleSheet,TouchableOpacity } from "react-native";
import LoginScreenPhoto from "~/assets/images/loginscreenphoto.png";
import { Input } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";

import { USER_LOGIN, USER_SIGNIN } from "../../redux/actions/user";


const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
    USER_LOGIN: () => dispatch(USER_LOGIN()),
    USER_SIGNIN: (email, password) => dispatch(USER_SIGNIN(email, password)),
});




const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(props => {  
    
    const [isSignIn, setIsSignIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user} = props;


    return (
        <View style={{ flex: 1, backgroundColor: "#f2faf0",paddingTop:30, }}>
            <Text style={[styles.logintext,{fontSize:22}]}>LOG IN</Text>
            <View>
                <Image style={{alignSelf: "center",width:96,height:96,marginTop:30}} source={require("../../assets/images/splash_logo.png")} />
            </View>
            <View style={styles.inputstyle}>
                <Input
                   inputContainerStyle={styles.inputContainerStyle}
                    placeholder='E-mail Adress'
                    value={email}
                    onChangeText={setEmail}
                    maxLength={64}
                   leftIcon={{ type: 'feather', name: 'mail',marginLeft:8, }}/>
                <Input
                    inputContainerStyle={styles.inputContainerStyle}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    maxLength={16}
                     leftIcon={{ type: 'entypo', name: 'key',marginLeft:8, }} />
                <TouchableOpacity>
                     <Text
                    style={{ fontWeight: "bold", fontSize: 16, marginLeft: 22, color: "#406335" }}
                >Forgot Password?</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{alignItems: "center",}}>
                <TouchableOpacity
                    style={styles.loginbutton}
                    onPress = { () => isSignIn ? props.USER_SIGNIN(email,password) : props.USER_LOGIN()}
                >
                    <Text style={[styles.logintext, { color: "white" }]}>
                        {isSignIn ? 'LOG IN' : 'SIGN IN'}
                    </Text>
            </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.loginbutton, { backgroundColor: "#f2f7f0" }]}
                    onPress= {() => setIsSignIn(true)}
                >
                <Text style={[styles.logintext,{color:"#2a521d"}]}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupbutton}  >
                <Image style={styles.icon} source={require("../../assets/images/google.png")}/>
                <Text style={[styles.logintext,{color:"#2a521d",marginLeft:20,}]}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupbutton}  >
                <Image style={styles.icon}  source={require("../../assets/images/facebook.png")}/>
                <Text style={[styles.logintext,{color:"#2a521d",marginLeft:20}]}>Sign in with Facebook</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.loginscreencontainer}>
              <Image style={styles.loginscreenphoto} source={LoginScreenPhoto} />
            </View>
        </View>
    );

});

const styles = StyleSheet.create({
    loginscreenphoto: {
        borderTopWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        
        width: "100%",
        opacity: 0.3,
        zIndex:-1,
        
        
    },
    loginscreencontainer: {
        justifyContent: "flex-end",
        flex: 1,
        
        
    },
    logintext: {
        alignSelf: "center",
        
        fontWeight: "bold",
        lineHeight:18,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        color: "#2a521d",
        paddingTop:10,
        
    },
    inputstyle: {
        marginTop: 50,
        
    },
    loginbutton: {
        width: "80%",
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
        width: "80%",
        height: 50,
        alignItems: "center",
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: "#f2f7f0",
        borderColor: "#2a521d",
        flexDirection:"row",
        
        
        
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f2f7f0",
        width: "95%",
        alignSelf: "center",
        borderColor: "#2a521d",

    },
    icon: {
        width: 36,
        height: 36,
        marginLeft:10,
        
        
    }
    
    
})

export { LoginScreen };