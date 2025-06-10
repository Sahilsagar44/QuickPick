import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import Search from '../../../component/Search';
import ProductCard from './ProductCard';
// import Icon from '@react-native-vector-icons/evil-icons';

const Home = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView style={Styles.scrollContent}>
        <View style={Styles.locationContainer}>
          <Icon
            name='map-pin'
            size={25}
            color="grey"
          />
          <Text style={{fontSize:16,color:'#566573',fontWeight:'bold'}}>Dhaka, Banassre</Text>
        </View>
        <View style={Styles.searchWrapper}>
        <Search />
        </View>
        <ScrollView>
          <ProductCard />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const Styles=StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'#fcfcfc'
  },
  locationContainer:{
    paddingTop:50,
    gap:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  searchWrapper:{
    marginTop:30,
  },
  scrollContent: {
    paddingBottom: 20,
  },
})

export default Home;