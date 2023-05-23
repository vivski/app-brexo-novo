import React from 'react'
import {View,StyleSheet,Text,StatusBar,Image} from 'react-native'



export default function Logo(){
    const logo = require('./../img/brexo-logo.png')
    return(
    <View styles={styles.container}> 
    <Image source={logo} style={styles.logo}/>
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
    backgroundColor:'#ffff',
    // paddingTop: statusBarHeight
    },
    logo: {
        width: 300,
        height: 200,
        // resizeMode: 'contain',
      }
})