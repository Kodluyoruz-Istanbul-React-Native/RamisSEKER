import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";


const Data = [{
  photo: "https://randomuser.me/api/portraits/men/81.jpg",
  username: "Loremipsum",
  message:"Proin in dictum leo. Donec bibendum, massa consequat semper",
}, {
  photo:"https://randomuser.me/api/portraits/men/82.jpg",
  username:"dolorsitamet",
  message: "Sed dui diam, aliquam non risus non, rhoncus sollicitudin sapien. ",
},
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message:"Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
  }
];


const Child = ({photo,username,message }) => {
  return (
    
    <View style={styles.messageBox}>
      <TouchableOpacity>
        <View style={{flexDirection:"row",}}>
          <Image source={{ uri: photo }} style={{ height: 64, width: 64, }} />
          <View style={{paddingLeft:10,}} >
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.messageText} ellipsizeMode='tail' numberOfLines={1}>{message}</Text>
          </View>
        </View>
        
        </TouchableOpacity>
        </View>
       
    );
};

const Messages = () => {
  return (
    <SafeAreaView>
      <ScrollView vertical>
        <View style={styles.container}>
           {Data.map((x, i) => <Child key={i} photo={x.photo} username={x.username} message={x.message} />)}
       </View>
      </ScrollView>
     </SafeAreaView> 
      
      
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor:"#e2f0d8",
    
  },
  messageBox: {
    borderWidth: 0.2,
    width: "100%",
    borderColor: "#8e8e8f",
    flexDirection: 'row',
    
  },
  messageText: {
    flex:1,
    fontSize: 12,
    fontWeight: "600",
    width: 300,
    flexDirection: 'row',
    
    
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8e8e8f"
    
  }
});




export { Messages };