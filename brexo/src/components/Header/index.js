import React from 'react'
import {View,StyleSheet,Text,Image, Button} from 'react-native'
import TelaCarrinho from '../../pages/TelaCarrinho';



// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 68;


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
    },
    logo: {
        width: 150,
        height: 40,
      }
})


