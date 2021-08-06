import React from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function Photo() {
  return (
    <LinearGradient
                            style={{height: '100%',}}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                                colors={["#FAAD80", "#FF6767", "#FF3D68"]}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Photo!</Text>
      </View>
      </LinearGradient>
  );
};
export { Photo };