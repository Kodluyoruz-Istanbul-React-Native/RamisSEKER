import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { CustomSearchBar } from "~/components/CustomSearchBar/index";



const SearchScreen = () => {
    return (
        <LinearGradient
            style={{height: '100%',}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68"]}>
                <View style={styles.container}>
                    <CustomSearchBar />
                </View>
                </LinearGradient>

    );


};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop:30,
    }

});

export { SearchScreen };