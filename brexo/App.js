import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TelaLogin from "./src/pages/TelaLogin/index";
// import TelaPrincipal from './src/pages/TelaPrincipal/index';
import TelaCadastro from "./src/pages/TelaCadastro/index";
import TelaCarrinho from "./src/pages/TelaCarrinho/index";
import TelaFavoritos from "./src/pages/TelaFavoritos/index";
import TelaRecuperacaoSenha from "././src/pages/TelaRecuperacaoSenha/index";
import TelaUsuario from "./src/pages/TelaUsuario/index";
// import TelaProdutos from './src/pages/TelaProdutos';
import NavigatorTabs from "./src/components/barraInferior";
import NavigatorCategorias from "./src/pages/NavigatorCategorias";
import NavigatorFavoritos from "./src/pages/NavigatorFavoritos";
import TelaCompras from "./src/pages/TelaCompras";
import NavigatorUsuario from "./src/pages/NavigatorUsuario";
import Header from "./src/components/Header";
import IconeCarrinho from "./src/components/iconeCarrinho";
import BaseLayout from "./src/components/baseLayout";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TelaFinalizarCompra from "./src/pages/TelaFinalizarCompra";
import TelaCompraFinalizada from "./src/pages/TelaCompraFinalizada";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: () => <Header />,
          headerRight: () => <IconeCarrinho />,
        }}
      >
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="TelaCadastro"
          component={TelaCadastro}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen
          name="TelaRecuperacaoSenha"
          component={TelaRecuperacaoSenha}
        />

        <Stack.Screen 
        name="NavigatorTabs"
        component={NavigatorTabs} />

        <Stack.Screen 
        name="TelaFavoritos" 
        component={TelaFavoritos} />

        <Stack.Screen 
        name="TelaUsuario" 
        component={TelaUsuario} />

        <Stack.Screen
          name="NavigatorCategorias"
          component={NavigatorCategorias}
        />

        <Stack.Screen name="TelaCarrinho" component={TelaCarrinho} />
        <Stack.Screen name="TelaCompras" component={TelaCompras} />

        <Stack.Screen
          name="NavigatorFavoritos"
          component={NavigatorFavoritos}
        />

        <Stack.Screen
          name="TelaFinalizarCompra"
          component={TelaFinalizarCompra}
        />

        <Stack.Screen
          name="TelaCompraFinalizada"
          component={TelaCompraFinalizada}
        />

        <Stack.Screen name="NavigatorUsuario" component={NavigatorUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
