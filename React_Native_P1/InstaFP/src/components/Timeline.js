import React from 'react';
import { StyleSheet, Text, View, Image , SafeAreaView, TouchableHighlight, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Timeline = () => {
    return (
        <View style={styles.container} >
            <Image style={{width:windowWidth,height:windowWidth*0.611}} source={{ uri:"https://i.picsum.photos/id/184/500/400.jpg?hmac=I7lIxBKbewxZe_4euIMfmLyc88UCIguuEa42COSKD5A" }} />
        </View>
    );
};


const styles = StyleSheet.create({
   container: {
    marginVertical:5,
    flexDirection : "column",
    },
    
});


export default Timeline;