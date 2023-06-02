import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/pages/TelaLogin'
import TelaPrincipal from './src/pages/TelaPrincipal';
import TelaCadastro from './src/pages/TelaCadastro';
import TelaCarrinho from './src/pages/TelaCarrinho';
import TelaFavoritos from './src/pages/TelaFavoritos';
import TelaRecuperacaoSenha from '././src/pages/TelaRecuperacaoSenha';
import TelaUsuario from './src/pages/TelaUsuario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 

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
        
      <Stack.Screen 
        name="TelaCarrinho" 
        component={TelaCarrinho}
      /> 

      <Stack.Screen 
        name="TelaFavoritos" 
        component={TelaFavoritos}
      />

      <Stack.Screen 
        name="TelaRecuperacaoDeSenha" 
        component={TelaRecuperacaoSenha}
      />

      <Stack.Screen 
        name="TelaUsuario" 
        component={TelaUsuario}
      />
      
    </NavigationContainer>
  );
};


