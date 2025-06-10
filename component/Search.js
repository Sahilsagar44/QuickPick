import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Search = () => {
  return (
    <View style={Styles.inputContainer}>
      <MaterialIcons
        name='search'
        size={25}
        color="grey"
        style={Styles.icon}
      />
      <TextInput style={Styles.input}
        placeholder='search'
        placeholderTextColor={'#7C7C7C'}
      />
    </View>
  )
}
const Styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal:'auto',
    borderRadius:15,
    width: '90%',
    backgroundColor:'#F2F3F2'
  },
  icon:{
    marginRight:8,
    color:'black'
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',

  },

})
export default Search;