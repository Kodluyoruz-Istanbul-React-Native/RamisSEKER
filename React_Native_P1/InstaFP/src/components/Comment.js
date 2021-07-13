import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";


export const Comment = () => {
    return (
        <View style={styles.container}>
            <View style={{  flexDirection:"row",}}>
                <Icon style={{ marginHorizontal: 10 }} name="heart-o" size={30} color="black" />
                <Feather style={{ marginHorizontal: 10 }} name="message-circle" size={30} color="black" />
                <Feather style={{ marginHorizontal: 10 }} name="send" size={30} color="black" />
                <Icon style={{ left:210}} name="bookmark-o" size={30} color="black" />
            </View>
            <View style={{ flexDirection:"column", }}>
                <Text style={styles.username}>405 Beğenme</Text>
                <View style={{flexDirection:"row" }}>
                    <Text style={styles.username}>dolorsitamet</Text>
                    <Text style={styles.comment}>Lorem ipsum dolor sit amet, consectetur </Text>
                </View>
                <Text style={styles.comment}>76 yorumun tümünü gör </Text>
                <View style={{flexDirection:"row",alignItems: "center", marginVertical:5}}>
                    <TouchableHighlight
                  style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:0, marginLeft:10 }]}>
                   <Image source={{ uri:"https://picsum.photos/200/300" }} style={styles.StoryImage} />
                </TouchableHighlight>
                <Text style={styles.comment}>Yorum ekle... </Text>
                </View>
                <Text style={styles.comment}>33 dakika önce</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginVertical : 5,
        flexDirection: "column",
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 8,
        color: "black",
        marginVertical: 1,
    },
    comment: {
        fontSize: 14,
        fontWeight: "800",
        color: "black",
        marginHorizontal:8,
    },
    StoryImage: {
    height: 30,
    width: 30,
    borderRadius: 30/2,
    },
    profileImgContainer: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
     },

});


export default Comment;