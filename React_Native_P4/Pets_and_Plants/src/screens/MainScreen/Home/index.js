import React, { useState }from "react";
import { View, Text,Image,StyleSheet,SafeAreaView,FlatList,TouchableOpacity,ImageBackground } from "react-native";
import Logo from "~/assets/images/splash_logo.png";
import Feather from "react-native-vector-icons/Feather";
import { Header } from "~/components/Header/index";
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DoubleClick from "react-native-double-tap";
import LinearGradient from "react-native-linear-gradient";



// TimeLine Data

const Data = [{
    profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profileUsername: "Mary Anne Aslaug",
    sharedlocation: "Manzanillo",
    sharedContent: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    likes: "1.2k",
    comments: "201",
}, {
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileUsername: "Isaak Alfwin",
    sharedlocation: "Samraong",
    sharedContent: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    likes: "958",
    comments: "125",
    
}, {
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileUsername: "Chelsie Vissenta",
    sharedlocation: "Sigmaringen",
    sharedContent: "https://images.unsplash.com/photo-1581316693711-a0bee730e97e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGN1dGUlMjBhbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    likes: "1.3k",
    comments: "253",
    
}, {
    profilePhoto: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profileUsername: "Liam Azad",
    sharedlocation: "Marino",
    sharedContent: "https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBsYW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    likes: "251",
    comments: "55",
    
    }];




// Home Screen







const Home = () => {

    // // Like Hooks

    const [isLiked, setIsLiked] = useState(false);
    // // Show and Hide  likes and Comments
    const [isShow, setIsShow] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68","#FF3D68"]}
      >
        <Header />
         <FlatList
            data={Data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                   <View style={styles.contentContainer}>
                     <TouchableOpacity>
                       <View style={{ flexDirection: "column" }}>
                           <View style={styles.username}>
                               <Image style={styles.profilePhoto} source={{ uri: item.profilePhoto }} resizeMode="cover" />
                               <View style={{ marginLeft: 10, }}>
                                     <Text style={{ fontWeight: "bold", fontSize: 14,color:"black" }}>{item.profileUsername}</Text>
                                     <Text style={{ color: "grey" }}>{item.sharedlocation}</Text>
                            </View>
                            </View>
                                    {/* // Double Click For Like */}
                             <DoubleClick
                            singleTap={() => {
                             setIsShow(!isShow);
                              }}
                          doubleTap={() => {
                             setIsLiked(!isLiked);
                             }}
                            delay={200}
                             >
                        <View>
                        <ImageBackground style={styles.sharedContent} source={{ uri: item.sharedContent }}>
                        {isShow ?
                        <View style={styles.iconsContainer}>
                        <View style={{ flexDirection: "row", paddingLeft: 10, }}>
                         <FontAwesome
                            onPress={() => { setIsLiked(!isLiked) }}
                            color={isLiked ? "red" : "white"} name={isLiked ? "heart" : "heart-o"} size={22} />
                            <Text style={styles.likes}>{item.likes}</Text>
                         </View>
                       <View style={{ flexDirection: "row", paddingLeft: 20, }}>
                       <FontAwesome color={"white"} name={"comment-o"} size={22} />
                     <Text style={styles.likes}>{item.comments}</Text>
                   </View>
                </View>  : null}
               </ImageBackground>
             </View>
          </DoubleClick>   
       </View>
     </TouchableOpacity>
 </View>
 );
}}/>
    </LinearGradient>
  </SafeAreaView>
 );
};







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe3c1",
    },
    username: {
        flexDirection: "row",
        padding: 10,
        
        
    },
    contentContainer: {
        flex: 1,
        
        width: "95%",
        height: "100%",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        elevation:5,
        
        
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 10,
        
        
    },
    sharedContent: {
        width: "100%",
        height: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
        
        
        
    },
    likes: {
        fontSize: 12,
        color: "white",
        paddingLeft: 6,
        top:2,
        
        
        
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        flex: 1,
        paddingBottom:5,
      }
});

export { Home };