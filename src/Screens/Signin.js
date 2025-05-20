import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import { myColors } from '../Utils/MyColors';

const Signin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Image
        source={require('D:/react native/cli/AwesomeProject/assets/img3.jpg')}
        style={styles.image}
      />
      </View>
      <Text style={styles.txt}>Get Your Groceries</Text>
      <Text style={styles.txt}>With QuickPick</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#fcfcfc',
  },
  txt:{
    fontStyle:'italic',
    fontWeight:'bold',
    fontVariant:'small-caps',
    fontSize:25,
    paddingLeft:20
  },
  container2:{
    width:'auto',
    height:'48%',
    position:'relative',
    overflow:'hidden'
  },
  image: {
    position: 'absolute',
    top: '-44%',
    left: '-12%',
    width: "150%",
    height: "150%",
    transform: [{ rotate: '-141.29deg' }],
  },
});

export default Signin;
