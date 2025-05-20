import { View, Image, StyleSheet, Text, ImageBackground, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Svg from 'react-native-svg';

// const CustomCarrot = () => (
//   <Svg width="64" height="64" viewBox="0 0 64 64">
//     {/* Leaves */}
//     <Path
//       d="M32 4C34 0 40 0 38 6C36 12 30 10 32 4Z"
//       fill="green"
//     />
//     <Path
//       d="M28 6C30 0 36 2 34 8C32 14 26 12 28 6Z"
//       fill="green"
//     />
//     {/* Carrot Body */}
//     <Path
//       d="M26 12L38 60L30 62L20 18Z"
//       fill="orange"
//     />
//   </Svg>
// );
 

const Signup = () => {

  const [secure, setSecure] = useState(true);
  const [email,setEmail]=useState(true);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView contentContainerStyle={Styles.scrollContent}>
        <View style={Styles.container2}>
          <ImageBackground
            source={require('D:/react native/cli/AwesomeProject/assets/img4.png')}
            style={Styles.image}>
            <Text style={Styles.txt}>🛍️</Text>
          </ImageBackground>
        </View>

        <View style={Styles.content}>
          <Text style={Styles.heading}>Sign Up</Text>
          <Text style={Styles.subheading}>Enter your credentials to continue</Text>
        </View>

        <View style={Styles.inputcontainer}>
          <Text style={Styles.subheading}>Username</Text>
          <TextInput
            style={Styles.txtinput}
            keyboardType='name-phone-pad'
            maxLength={9}>
          </TextInput>
          <Text style={Styles.subheading}>Email</Text>
          <TextInput
            style={Styles.txtinput}
            keyboardType='email-address'>
          </TextInput>
          <Text style={Styles.subheading}>Password</Text>
          <View style={Styles.inputWrapper}>
            <TextInput
              secureTextEntry={secure}
              keyboardType='ascii-capable'
              style={{ flex: 1, fontSize: 16, paddingVertical: 8,width:'90%',color:'black', }} >

            </TextInput>
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <MaterialIcons
                name={secure ? 'visibility-off' : 'visibility'}
                size={24}
                color="grey" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inputcontainer: {
    paddingTop: 40,
    marginLeft: 15
  },
  txt: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    alignSelf: 'center',
    fontSize: 45,
    padding: '20%',
  },
  container2: {
    width: '100%',
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  heading: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    fontSize: 26,
  },
  subheading: {
    fontStyle: 'italic',
    fontVariant: ['small-caps'],
    fontSize: 15,
    paddingTop: 4,
    color: 'grey',
  },
  txtinput: {
    borderBottomWidth: 2,
    borderColor: '#e2e2e2',
    marginBottom: 30,
    fontsize: 14,
    width: '95%',
    lineHeight: 25,
    letterSpacing: 0.7,
    color: 'black'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e2e2e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    width:'95%'
  },
});

export default Signup;
