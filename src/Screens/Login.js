import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { myColors } from '../Utils/MyColors';


const Login = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValid(emailRegex.test(text));
  };

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
          <Text style={Styles.heading}>Log in</Text>
          <Text style={Styles.subheading}>Enter your Email and Password

          </Text>
        </View>

        <View style={Styles.inputcontainer}>
          <Text style={[Styles.subheading, { paddingTop: 20 }]}>Email</Text>
          <View style={Styles.inputWrapper}>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              style={{ flex: 1, fontSize: 16, color: 'black' }}
            />
            {email.length > 0 && (
              <MaterialIcons
                name="check-circle"
                size={24}
                color={isValid ? 'green' : 'gray'}
                style={Styles.icon}
              />
            )}
          </View>

          <Text style={[Styles.subheading, { paddingTop: 20 }]}>Password</Text>
          <View style={Styles.inputWrapper}>
            <TextInput
              secureTextEntry={secure}
              keyboardType="ascii-capable"
              style={{
                flex: 1,
                fontSize: 16,
                paddingVertical: 8,
                color: 'black',
              }}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <MaterialIcons
                name={secure ? 'visibility-off' : 'visibility'}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          
            <TouchableOpacity><Text style={{ color:myColors.primary,alignSelf:'flex-end',margin:20 }}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            title="Learn More"
            style={Styles.button1}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={{ color: myColors.secondary, fontStyle: 'italic', fontSize: 17 }}>Log In</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: myColors.primary }}>Signup</Text>
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
  button1: {
    backgroundColor: myColors.primary,
    padding: 15,
    paddingLeft: '20%',
    paddingRight: '20%',
    margin: 'auto',
    marginTop:20,
    borderRadius: 15
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inputcontainer: {
    paddingTop: 40,
    marginLeft: 15,
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e2e2e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '95%',
    color: 'black'
  },
  icon: {
    marginLeft: 8,
  },
});

export default Login;
