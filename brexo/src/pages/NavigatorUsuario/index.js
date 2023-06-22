import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaUsuario from './../../pages/TelaUsuario'
import TelaCategorias from '../TelaCategorias';

const Stack = createNativeStackNavigator();



function NavigatorFavoritos() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    
          <Stack.Screen 
            name="TelaUsuario" 
            component={TelaUsuario}
          />
        
        <Stack.Screen 
            name="TelaCategorias" 
            component={TelaCategorias}
          />
    
          </Stack.Navigator>
       
      );
}

export default NavigatorFavoritos;
