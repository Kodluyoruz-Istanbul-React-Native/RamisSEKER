import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";




const NotificationScreen = () => {
    return (
        <LinearGradient
            style={{height: '100%',}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FAAD80","#FF6767","#FF3D68"]}>
                <View style={styles.container}>
                    
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

export { NotificationScreen };