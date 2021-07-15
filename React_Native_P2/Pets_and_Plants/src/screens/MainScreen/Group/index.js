import React from "react";
import { View, Text, StyleSheet,SafeAreaView, ScrollView,TouchableOpacity,ImageBackground,FlatList} from "react-native";
import { CustomSearchBar } from "~/components/CustomSearchBar/index";




const Data = [{
    groupPhoto: "https://www.randomlists.com/img/animals/camel.webp",
    groupName: "ASDASDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/burro.webp",
    groupName: "ASDASDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/rat.webp",
    groupName: "ASDASDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
    groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }, {
        groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
        groupName: "ASDASDA",
    }];



const Child = ({ item }) => {
    return (
        <View style={styles.photoContainer}>
            <TouchableOpacity>
                <View style={{}}>
                    <ImageBackground style={styles.groupPhoto} source={{ uri: item.groupPhoto }} resizeMode="cover" >
                        <Text style={styles.text}>{item.groupName}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
    );
};



const Group = () => {
    return (
        <>
            <CustomSearchBar />
        
            <View style={{flex:1}}>
              
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={Data}
                        renderItem={Child}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    >

                    </FlatList>
            </SafeAreaView>
                  
              
            </View>
            
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "#e2f0d8",
        paddingTop:10,
        
        
    },
    search:{
        backgroundColor: "#C9D8B6",
    },
    groupPhoto: {
        width: 175,
        height: 125,
        justifyContent: "center",
        borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden'
        
    },
    text: {
    color: "white",
    fontSize: 12,
    lineHeight:20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
    },
    photoContainer: {
     
     justifyContent: "space-between",
        flex: 1,
        paddingLeft: 10,
      paddingVertical:10,
        
    },

});

export { Group };