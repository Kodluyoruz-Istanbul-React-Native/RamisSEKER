import React, { useState }from "react";
import { View, Text, StyleSheet,SafeAreaView, ScrollView,TouchableOpacity,ImageBackground,FlatList} from "react-native";
import { CustomSearchBar } from "~/components/CustomSearchBar/index";
import LinearGradient from "react-native-linear-gradient";

// Group Data

const Data = [{
    groupPhoto: "https://www.randomlists.com/img/animals/camel.webp",
    groupName: "ASDASdsDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/burro.webp",
    groupName: "ASDAsfsSDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/rat.webp",
    groupName: "ASDAfsfSDA",
},{
    groupPhoto: "https://www.randomlists.com/img/animals/squirrel.webp",
    groupName: "ASDgdgASDA",
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

    const [groupData, setGroupData] = useState(Data);

    const filterGroups = val => {
        const filteredData = Data.filter(x => x.groupName.toLowerCase().includes(val.toLowerCase()));
        setGroupData(filteredData);
        console.log(val);
       }
    return (
       
        <SafeAreaView>
             <LinearGradient
                style={{
                    height: '100%',
                    
            
        }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68"]}
            >
                <View style={{marginTop:30,}}>
                <CustomSearchBar
                
                placeholder={"Search Groups..."}
                search={(val) => filterGroups(val)}
                    />
                    </View>
               <FlatList
                        data={groupData}
                        renderItem={Child}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}/>
              </LinearGradient> 
             </SafeAreaView>
        
    );
};


const styles = StyleSheet.create({
    
    groupText: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 20,
        backgroundColor: "#f9f9f9",
        color: "black",
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