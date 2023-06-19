import React from 'react'
import {View,StyleSheet,Text,StatusBar,Image, Button, Pressable} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native';
import TelaFavoritos from './../../pages/TelaFavoritos'
import TelaCategorias from '../../pages/TelaCategorias'
import TelaUsuario from './../../pages/TelaUsuario'


import { IconButton } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();



// function TelaDeInicio(){
//     return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
//     </View>
//     );
// }
// function TelaDeFavoritos(){
//     return(
    
//     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <View>
//     <Pressable onPress={ () => {
//     navigation.navigate("TelaFavoritos")
//     }}></Pressable>
//     </View>

//     );
// }
// function ContaPessoal(){
//     return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>  tela de conta pessoal </Text>
//     </View>
//     );
// }

function NavigatorTabs() {
    return(

    <Tab.Navigator initialRouteName="TelaDeInicio"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#D9BBB0' }}>
    
    <Tab.Screen name="TelaPrincipal" component={TelaCategorias}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="home" size={size} />
    ),
    }}
    
    />
    <Tab.Screen name="TelaFavoritos" component={TelaFavoritos}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="heart" size={size} />
    ),
    }}
    />

    <Tab.Screen name="TelaUsuario" component={TelaUsuario}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="account-circle" size={size}/>
    ),
    }}
    />

    </Tab.Navigator>
    
    )
}

export default NavigatorTabs;
