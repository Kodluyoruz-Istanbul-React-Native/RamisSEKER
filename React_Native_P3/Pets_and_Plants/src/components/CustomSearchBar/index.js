import React from "react";
import { View, StyleSheet,Text} from "react-native";
import { SearchBar } from 'react-native-elements';



class CustomSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    
      return (
          <View style={styles.container}>
          <View style={styles.search}>
            
                 <SearchBar
            placeholder="Search Groups.."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{ backgroundColor: "#f9f9f9",borderBottomColor: 'transparent',
                              borderTopColor: 'transparent',paddingLeft:10,}}
            inputStyle={{ backgroundColor: "white",elevation:10,borderBottomWidth:1,borderColor: "#57837B",borderRadius:10 }}
            platform={Platform.OS}     
            leftIconContainerStyle={{ backgroundColor: "#f9f9f9",marginLeft:10,}}
            rightIconContainerStyle={{ backgroundColor: "#f9f9f9" }}
              
            />
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#f9f9f9",
    
     
    },
    search:{
        backgroundColor: "white",
    },
    groupPhoto: {
        
    }

});

export { CustomSearchBar };