import React from "react";
import { View, StyleSheet,} from "react-native";
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
            containerStyle={{ backgroundColor: "#e9f5db",borderBottomColor: 'transparent',
                              borderTopColor: 'transparent',}}
            inputStyle={{ backgroundColor: "#e2f0d8", borderRadius:10, }}
            platform={Platform.OS}     
            leftIconContainerStyle={{ paddingLeft:10,backgroundColor: "#e9f5db",}}
            rightIconContainerStyle={{ backgroundColor: "#e9f5db"}}
            />
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        
        
        backgroundColor:"#e2f0d8"
    },
    search:{
        backgroundColor: "#C9D8B6",
    },
    groupPhoto: {
        
    }

});

export { CustomSearchBar };