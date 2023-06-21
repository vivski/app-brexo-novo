// import TelaCategorias from "../TelaCategorias"

// stack.navigator - 4 stack screens 

//     TelaCategorias
//     TelaProdutos
//     TelaProduto
//     TelaCarrinho 
import React from 'react'
import TelaCategorias from './../../pages/TelaCategorias'
import TelaProdutos from '../../pages/TelaProdutos'
import TelaProduto from './../../pages/TelaProduto'
import TelaCarrinho from './../../pages/TelaCarrinho'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


function NavigatorCategorias() {
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
    <Tab.Screen name="TelaProdutos" component={TelaProdutos}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="heart" size={size} />
    ),
    }}
    />

    <Tab.Screen name="TelaCarrinho" component={TelaProduto}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="account-circle" size={size}/>
    ),
    }}
    />

<Tab.Screen name="TelaCarrinho" component={TelaCarrinho}
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

export default NavigatorCategorias;
