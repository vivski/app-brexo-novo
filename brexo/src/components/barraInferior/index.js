import React from 'react'
import {View,StyleSheet,Text,StatusBar,Image, Button, Pressable} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TelaFavoritos from './../../pages/TelaFavoritos'
// import TelaCategorias from '../../pages/TelaCategorias'
import TelaUsuario from './../../pages/TelaUsuario'
import NavigatorCategorias from '../../pages/NavigatorCategorias';


import { IconButton } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

function NavigatorTabs() {
    return(

    <Tab.Navigator initialRouteName="TelaDeInicio"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#D9BBB0' }}>
    
    <Tab.Screen name="TelaPrincipal" component={NavigatorCategorias}
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
    }} />

    {/* <Tab.Screen name="teste" component={IconButton} /> */}

    </Tab.Navigator>
    
    )
}

export default NavigatorTabs;
