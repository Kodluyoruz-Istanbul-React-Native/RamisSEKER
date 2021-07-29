import React from "react";
import { View, Text, StyleSheet,SafeAreaView, ScrollView,TouchableOpacity,ImageBackground,FlatList} from "react-native";
import { CustomSearchBar } from "~/components/CustomSearchBar/index";


// Group Data

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
        
        <SafeAreaView style={styles.container}>
            
            <CustomSearchBar />
               <FlatList
                        data={Data}
                        renderItem={Child}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}/>
               
             </SafeAreaView>
        
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9f9f9",
        paddingTop:20,
        
    },
    groupText: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 20,
        backgroundColor: "#f9f9f9",
        color: "#57837B",
        alignSelf: "center",
        
    },
    
    groupPhoto: {
        width: 175,
        height: 125,
        justifyContent: "center",
        borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
        overflow: 'hidden',
    elevation: 5,
        
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