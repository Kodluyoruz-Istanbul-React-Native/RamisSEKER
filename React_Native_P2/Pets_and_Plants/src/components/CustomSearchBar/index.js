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
            containerStyle={{ backgroundColor: "#C9D8B6",borderBottomColor: 'transparent',
                              borderTopColor: 'transparent',}}
            inputStyle={{ backgroundColor: "#e2f0d8", }}
            platform={Platform.OS}     
            leftIconContainerStyle={{ backgroundColor: "#C9D8B6",}}
            rightIconContainerStyle={{ backgroundColor: "#C9D8B6"}}
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