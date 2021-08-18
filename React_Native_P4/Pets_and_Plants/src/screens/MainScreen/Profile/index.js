import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image,SafeAreaView,FlatList,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";








const Data = [{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},{
    photos: "https://i.pinimg.com/236x/d0/77/e0/d077e04c65f2a49ab8a329d370ee65b4.jpg",
},
    
];


const Child = ({ item }) => {
    return (
        <View style={styles.contentPhotosContainer}>
            <TouchableOpacity>
              <Image style={styles.contentPhotos}  source={{ uri :item.photos }} resizeMode="cover"/>
            </TouchableOpacity>
        </View>
    );
  };



const Profile = () => {
    const navigation = useNavigation();

    const photoUri = useSelector((state) => state.user.photoUri);
    
    return (

          
        
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ImageBackground style={styles.backgroundPhoto} source={require("../../../assets/images/oda-manzara.jpg")}>
                    <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={() => navigation.navigate("EditProfile")}>
                       <Ionicons style={[styles.icons,{marginRight:15,}]}  name={"reorder-three-outline"} size={28} />
                    </TouchableOpacity>
                    <View style={styles.profilePhotoContainer} >
                        <View style={{
                            borderColor: "white", 
                            borderWidth: 3,
                            elevation: 5,
                            alignSelf: "flex-end",
                            bottom: -20,
                        }}>
                          <Image style={styles.profilePhoto}  source={{uri: `data:image/jpeg;base64,${photoUri}`}} />
                        </View>
                        
                        <View style={styles.followButton}>
                            <View style={{borderRightWidth:1,borderColor:"lightgray",paddingHorizontal:10,display:"flex",justifyContent:"center",alignItems: "center",height: "100%",}}>
                                <Text style={styles.textFollow}>Followers</Text>
                                <Text>100</Text>
                              </View>
                                 
                              <View style={{borderRightWidth:1,borderColor:"lightgray",paddingHorizontal:10,display:"flex",justifyContent:"center",alignItems: "center",height: "100%",}}>
                                <Text style={styles.textFollow}>Followed</Text>
                                <Text>101</Text>
                            </View>
                            
                           <LinearGradient
                            style={{height: '100%',}}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                                colors={["#FAAD80", "#FF6767", "#FF3D68"]}>
                                <TouchableOpacity style={{padding:10}} >
                                    <Text style={styles.followText}>Follow</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                           </View>
                        </View>
                </ImageBackground>
            </View>
            <View style={styles.usernameContainer}>
                <Text style={{fontWeight: 'bold',fontSize:16,}}>Username</Text>
                <Text style={{color:"grey",paddingTop:10,}}>Bio</Text>
            </View>
            <View style={styles.photosContainer}>
                <SafeAreaView>
                <FlatList
                        data={Data}
                        renderItem={Child}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}/>
               
             </SafeAreaView>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    backgroundContainer: {
        width: "100%",
        height: 200,
    },
    backgroundPhoto: {
        flex:1,
    },
    icons: {
        marginTop: 40,
        backgroundColor: "white",
        borderRadius:5,
    },
    photosContainer: {
        flex: 1,
        width: "95%",
        alignSelf: "center",
        marginTop: 10,
        borderRadius:10,
    },
    profilePhoto: {
        width: 100,
        height: 100,
    },
    profilePhotoContainer: {
        justifyContent: "space-around",
        flex:1,
        flexDirection: "row",
    },
    contentPhotos: {
        width: 175,
        height: 175,
        borderRadius:10,
        
    },
    contentPhotosContainer: {
        padding:1,
        borderColor: "white",
        borderWidth: 5,
        justifyContent: "center",
        flex: 1,
    },
    followButton: {
        width: 220,
        height: 50,
        backgroundColor: "white",  //#1c3205
        alignSelf: "flex-end",
        bottom: -20,
        borderRadius: 10,
        elevation: 5,
        flexDirection: "row",
        justifyContent: "center"
    },
    followText: {
        textAlign: "center",
        textAlignVertical: "center",
        width: "100%",
        height: "100%",
        fontWeight: "bold",
        color:"white",

    },
    usernameContainer: {
        paddingLeft: 20,
        paddingTop:30,
    },
    textFollow: {
        fontWeight: "bold",
    }
});

export { Profile };