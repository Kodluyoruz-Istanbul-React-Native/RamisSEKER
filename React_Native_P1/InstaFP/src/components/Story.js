import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"




const Data = [{
    uri: "https://picsum.photos/200/300",
    username: "Loremipsum",
    hidden: false,
    color:"white",
    
    
}, {
    uri: "https://i.picsum.photos/id/71/200/300.jpg?hmac=gynXVv0pTO33farflQTb9mpn-A6N5nt8t0_r9DEDNKU",
    username: "dolorsitamet",
    hidden: true,
    color: "green",
    },
    
       {
    uri: "https://i.picsum.photos/id/660/200/300.jpg?hmac=j7s3I-0KukW6B1Vt4AJzCYxM8kbZz5kTMOEl9Y7zUOg",
    username: "consectetu",
           hidden: true,
    color: "red",
    }
    ,
     {
    uri: "https://i.picsum.photos/id/908/200/300.jpg?hmac=guEHon4cM5wVkD_yaCyg37gD09iEjrpqzKfo-YU-Iwc",
    username: "Maecenasut",
         hidden: true,
    color: "red",
    }, {
    uri: "https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8",
    username: "rhoncus",
         hidden: true,
    color: "red",
    }
]
const Child = ({uri,username,hidden,color}) => {
    return (
        <View style={{marginLeft:5, marginBottom:5,}}>
            <TouchableHighlight
                  style={styles.profileImgContainer}>
                <Image source={{ uri: uri }} style={[styles.StoryImage, { borderColor:color, borderWidth:2,  }]} />
            </TouchableHighlight>
            
            {hidden ? null :  <Entypo style={styles.plusIcon} name="circle-with-plus" size={30}  color="#FFF" />}  
            <Text style={styles.username}>{username}</Text>
        </View>
    );
}


export const Story = () => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center" }}>
                {Data.map((x, i) => <Child key={i} uri={x.uri} username={x.username} hidden={x.hidden} color={x.color}/>)}
             </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        marginVertical: 5,
      },
    StoryImage: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    },
    
    plusIcon: {
        
        position: "absolute",
        right: 5,
        bottom: 10,
        
        color: "#0499f9",
        backgroundColor: "white",
        
        borderRadius:30/2,
        
        
        
    },
    username: {
        fontSize: 12,
        fontWeight: "200",
        marginHorizontal: 10,
       
        
        
    }
  
});

export default Story;