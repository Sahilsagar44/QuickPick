import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
    const nav=useNavigation();
    
    useEffect(()=>{
        
        setTimeout(() => {
            nav.replace('Ongoing')
        }, 5000);
    },[]);
    return (
        <View style={{ backgroundColor: myColors.primary, flex: 1 }}>
            <StatusBar style='light' />
            <View style={styles.container}>
                <Text style={{ fontSize: 60 }}>🛍️</Text>
                
                <View style={{ margin: 5 }}>
                    <Text style={{ color: myColors.secondary, fontSize: 40, fontStyle: 'italic' }}>QuickPick</Text>
                    <Text style={{ color: myColors.secondary, fontStyle: 'italic', letterSpacing: 6.7 }}>OnlineGrocery</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {

    }
})

export default Splash;