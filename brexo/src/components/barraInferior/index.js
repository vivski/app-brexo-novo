import React from 'react'
import {View,StyleSheet,Text,StatusBar,Image} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native';

import { IconButton } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();



function TelaDeInicio(){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> tela de início </Text>
    </View>
    );
}
function TelaDeFavoritos(){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> tela de favoritos </Text>
    </View>
    );
}
function ContaPessoal(){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>  tela de conta pessoal </Text>
    </View>
    );
}

function MinhasTelas() {
    return(

    <Tab.Navigator initialRouteName="TelaDeInicio"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#D9BBB0' }}>
    
    <Tab.Screen name="TelaDeInicio" component={TelaDeInicio}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="home" size={size} />
    ),
    }}
    
    />
    <Tab.Screen name="TelaDeFavoritos" component={TelaDeFavoritos}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size }) => (
    <IconButton icon="heart" size={size} />
    ),
    }}
    />

    <Tab.Screen name="ContaPessoal" component={ContaPessoal}
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

export default MinhasTelas;
