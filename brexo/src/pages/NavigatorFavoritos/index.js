import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCategorias from './../../pages/TelaCategorias'
import TelaFavoritos from '../TelaFavoritos';



const Stack = createNativeStackNavigator();



function NavigatorFavoritos() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    
          <Stack.Screen 
            name="TelaFavoritos" 
            component={TelaFavoritos}
          />
        
        <Stack.Screen 
            name="TelaCategorias" 
            component={TelaCategorias}
          />

          </Stack.Navigator>
       
      );
}

export default NavigatorFavoritos;
