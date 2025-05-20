import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/MyColors'


const Ongoing = ({navigation}) => {
    return (

        <ImageBackground source={require('D:/react native/cli/AwesomeProject/assets/img2.jpg')}
            style={Styles.background}
            resizeMode="cover">
            <View style={Styles.container}>
                <Text style={{
                    fontSize: 50, textShadowColor: '#000000',
                    textShadowOffset: { width: 2, height: 2 },
                    textShadowRadius: 40,
                }}>🛍️</Text>
                <Text style={{ color: myColors.secondary, fontSize: 30 }}>Welcome  </Text>
                <Text style={{ color: myColors.secondary, fontSize: 30 }}>to our store</Text>
                <Text style={{ color: '#abb2b9', fontSize: 16,padding:11 }}>Ger your groceries in as fast as one hour</Text>

                <TouchableOpacity
                    title="Learn More"
                    style={Styles.button1}
                    onPress={()=>navigation.navigate('Signin')}>
                    <Text style={{color:myColors.secondary,fontStyle:'italic',fontSize:17}}>Grocery Time!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        top:'20%',
        alignItems: 'center'
    },
    button1:{
        backgroundColor:myColors.primary,
        padding:15,
        paddingLeft:'20%',
        paddingRight:'20%',
        margin:14,
        borderRadius:15
        
        
    }

})

export default Ongoing;