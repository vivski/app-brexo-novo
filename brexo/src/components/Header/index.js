import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'


export default function Header(){
    return(
    <View> 
    <View style={{flex:6,flexDirection: 'row', backgroundColor: '#ffff', alignItems: 'center', paddingTop: 5, paddingBottom: 5, justifyContent: 'space-around', marginTop: Constants.statusBarHeight}} >
    <Image style={{width: 300, height:200}} source={require('./assets/brexo-logo.png')}/>
    </View> 
      
    </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})