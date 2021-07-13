import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";



export const Username = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center",  }}>
                <TouchableHighlight
                  style={[styles.profileImgContainer, { marginLeft:10 }]}>
                    <Image source={{ uri: "https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU" }} style={[styles.StoryImage,{borderColor: 'white', borderWidth:2}]} />
                </TouchableHighlight>
                <Text style={styles.username}>dolorsitamet</Text>
            </View>
            <View>
               <Entypo style={{position: "absolute", right: 20,bottom: 15}} name="dots-three-horizontal" size={20}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
    
    
    flexDirection : "column",
    },
    StoryImage: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    },
    
    username: {
        fontSize: 16,
        fontWeight: "800",
        marginHorizontal: 8,
        color:"black",
    }
    
    

});


export default Username;