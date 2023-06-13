import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaLogin from './src/pages/TelaLogin/index';
import TelaPrincipal from './src/pages/TelaPrincipal/index';
import TelaCadastro from './src/pages/TelaCadastro/index';
// import TelaCarrinho from './src/pages/TelaCarrinho/index';
// import TelaFavoritos from './src/pages/TelaFavoritos/index';
import TelaRecuperacaoSenha from '././src/pages/TelaRecuperacaoSenha/index';
// import TelaUsuario from './src/pages/TelaUsuario/index';
import TelaProdutos from './src/pages/TelaProdutos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen 
        name="TelaLogin" 
        component={TelaLogin}
      />

      <Stack.Screen 
        name="TelaPrincipal" 
        component={TelaPrincipal}
      />

      <Stack.Screen 
        name="TelaCadastro" 
        component={TelaCadastro}
      />
        
      {/* <Stack.Screen 
        name="TelaCarrinho" 
        component={TelaCarrinho}
      /> 

      <Stack.Screen 
        name="TelaFavoritos" 
        component={TelaFavoritos}
      />

      <Stack.Screen 
        name="TelaUsuario" 
        component={TelaUsuario}
      /> */}

      <Stack.Screen 
        name="TelaRecuperacaoSenha" 
        component={TelaRecuperacaoSenha}
      />

<Stack.Screen 
        name="TelaProdutos" 
        component={TelaProdutos}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};


