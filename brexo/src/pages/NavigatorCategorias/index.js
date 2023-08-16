import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCategorias from './../../pages/TelaCategorias'
import TelaProdutos from '../../pages/TelaProdutos'
import TelaProduto from './../../pages/TelaProduto'
import TelaCarrinho from './../../pages/TelaCarrinho'


const Stack = createNativeStackNavigator();



function NavigatorCategorias() {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
          }}>
    
          <Stack.Screen 
            name="TelaCategorias" 
            component={TelaCategorias}
          />
    
         <Stack.Screen 
            name="TelaProdutos" 
            component={TelaProdutos}
          />
    
         <Stack.Screen 
            name="TelaProduto" 
            component={TelaProduto}
          />    
         <Stack.Screen 
            name="TelaCarrinho" 
            component={TelaCarrinho}
          />       

          </Stack.Navigator>
       
      );
}

export default NavigatorCategorias;
