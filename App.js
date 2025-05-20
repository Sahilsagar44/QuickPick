import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Signin from './src/Screens/Signin';
import Ongoing from './src/Screens/Ongoing';
import Signup from './src/Screens/Signup';
// import CustomCarrot from './src/Components/CustomCarrot';

const Stack = createNativeStackNavigator("");

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Ongoing" component={Ongoing}/>
        <Stack.Screen name="Signup" component={Signup}/>
        {/* <Stack.Screen name="CustomCarrot" component={CustomCarrot}/> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  
export default App