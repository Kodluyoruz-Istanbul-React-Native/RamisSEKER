import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { CustomSearchBar } from "~/components/CustomSearchBar/index";
import LinearGradient from "react-native-linear-gradient";
import Animated from 'react-native-reanimated';

const Data = [{
  photo: "https://randomuser.me/api/portraits/men/81.jpg",
  username: "Loremipsum",
  message: "Proin in dictum leo. Donec bibendum, massa consequat semper",
  createdAt: "43 min",
}, {
  photo:"https://randomuser.me/api/portraits/men/82.jpg",
  username:"dolorsitamet",
  message: "Sed dui diam, aliquam non risus non, rhoncus sollicitudin sapien. ",
  createdAt: "43 min",
},
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    username: "consectetu",
    message: "Nulla facilisi. Curabitur elementum, velit at mattis rhoncus, purus urna vestibulum diam,",
    createdAt: "43 min",
  }
];


const Child = ({photo,username,message,createdAt }) => {
  return (
    
    <View style={styles.messageBox}>
      <TouchableOpacity>
        <View style={{flexDirection:"row",}}>
            <Image source={{ uri: photo }} style={{ height: 64, width: 64, borderRadius:10,  }} />
          <View style={{ paddingLeft: 10,padding:10, }} >
            <View style={{flexDirection:"row",justifyContent: "space-between",}}>
              <Text style={styles.username}>{username}</Text> 
              <Text style={{paddingRight: 10,}}>{createdAt}</Text>
             </View>
            <View>
              <Text style={styles.messageText} ellipsizeMode='tail' numberOfLines={1}>{message}</Text>
            </View>
            
          </View>
        </View>
        
        </TouchableOpacity>
        </View>
       
    );
};

const Messages = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={{
            
        }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68","#FF3D68"]}
      >
      <CustomSearchBar
      placeholder={"Search Messages..."}
      />
      <ScrollView vertical>
        <View style={styles.container}>
           {Data.map((x, i) => <Child key={i} photo={x.photo} username={x.username} message={x.message} createdAt={x.createdAt} />)}
       </View>
        </ScrollView>
        </LinearGradient>
     </SafeAreaView> 
      
      
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    
    
  },
  messageBox: {
    elevation:10,
    width: "95%",
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    
    
    
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
    color: "black",
    
  }
});




export { Messages };