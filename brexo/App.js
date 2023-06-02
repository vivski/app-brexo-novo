import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/pages/TelaLogin'
import TelaPrincipal from './src/pages/TelaPrincipal';

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
        
    </NavigationContainer>
  );
};


