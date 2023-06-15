import React from 'react'
import {View,StyleSheet,Text,StatusBar,Image} from 'react-native'



const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 68;


export default function Header(){
    const logo = require('../../../assets/img/brexo-logo.png')
    return(
    <View styles={styles.container}> 
    <Image source={logo} style={styles.logo}/>
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
    backgroundColor:'#ffff',
    paddingTop: statusBarHeight
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
      }
})