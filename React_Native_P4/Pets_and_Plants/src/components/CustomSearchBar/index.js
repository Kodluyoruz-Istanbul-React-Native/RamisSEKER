import React, { useState }from "react";
import { View, StyleSheet,Text} from "react-native";
import { SearchBar } from 'react-native-elements';
import  Feather  from "react-native-vector-icons/Feather";





const CustomSearchBar = ({ placeholder,search }) => {
  
  

 
  
  const updateSearch = (upSearch) => {
    
    search(upSearch);
  };

    
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          {/* <Feather name={"search"} size={32} /> */}
          <SearchBar
            
            placeholder={placeholder}

            onChangeText={updateSearch}
            
            containerStyle={{ height: 50, paddingVertical: 0, marginHorizontal: 10, marginVertical: 5, justifyContent: 'center',  borderRadius: 10, }}
            inputStyle={{ marginLeft: 0, borderRadius: 10 }}
            platform={Platform.OS}
            leftIconContainerStyle={{ margin: 0, }}
            rightIconContainerStyle={{  }}
              
          />
        </View>
      </View>
    );
  

  
  
};

const styles = StyleSheet.create({
    container: {
    
    justifyContent: 'center',
    marginTop:10,
      
    },
    search:{
      
      display: "flex",
     justifyContent: 'center'
      
    },
    groupPhoto: {
        
    }

});

export { CustomSearchBar };