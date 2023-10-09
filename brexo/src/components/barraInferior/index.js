import React from "react";
import TelaFavoritos from "./../../pages/TelaFavoritos";
import TelaUsuario from "./../../pages/TelaUsuario";
import NavigatorCategorias from "../../pages/NavigatorCategorias";

import { IconButton } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import{ createBottomTabNavigator}  from "@react-navigation/bottom-tabs";
import { View} from "react-native";


const Tab = createBottomTabNavigator();
const Test = createBottomTabNavigator()


function NavigatorTabs() {

  return (
    <Tab.Navigator
      initialRouteName="TelaDeInicio"   
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor:"#D9BBB0"
        },
      tabBarActiveTintColor:"#000000"

      }}

    >
      <Tab.Screen
        name="TelaPrincipal"
        component={NavigatorCategorias}
      
        options={{
          tabBarColor:'#ff0000',

          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" size={size} color={color} />
            
          ),
        }}
      />
      <Tab.Screen
        name="TelaFavoritos"
        component={TelaFavoritos}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TelaUsuario"
        component={TelaUsuario}
        options={{
          barStyle: 'transparent',
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigatorTabs;
