import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TelaCarrinho from "../TelaCarrinho";


export default function TelaCompraFinalizada() {
  const navigation = useNavigation();
  const botaoFavoritos = () => {
    navigation.navigate("TelaFavoritos");
  };

  const botaoInicio = () => {
    navigation.navigate('TelaCarrinho'); 
    };

   const botaoCategorias = () => {
        navigation.navigate('TelaCategorias'); 
        };

  return (
<View style={styles.container}>
      {/* <View style={styles.descriptionUser}>
        <Image
          style={{ width: 190, height: 190 }}
          source={{
            uri: "https://raw.githubusercontent.com/vivski/app-brexo-novo/main/brexo/assets/img/IconePadraoUsuario.png",
          }}
        />
        <View>
          <Text style={styles.emailText}>{emailUser}</Text>
        </View>
      </View> */}

<View style={styles.estiloCarrinho} >
          <IconButton icon="chevron-down-circle" size={120} iconColor='#7A6276' />
          <Text style={styles.estiloTexto} > Seu pedido foi enviado! </Text>

          <Pressable onPress={botaoInicio}
        style={{
            backgroundColor: '#7A6276' ,
            borderRadius: 4 ,
            alignSelf: 'center' ,
            width: 200 ,
            padding: 15 ,
          
        }} >
        <View style={{}} >

        <Text style={styles.estiloTextoBotao}> Voltar para o carrinho </Text>

        </View>
        </Pressable>
    </View>

    <View style={styles.containerfunctions}>

        <View style={styles.touchableOpacity}>
          <TouchableOpacity onPress={botaoFavoritos}>
            <View style={styles.iconeContainer}>
              <IconButton icon="heart" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Ir para favoritos </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botaoCategorias}>
            <View style={styles.iconeContainer}>
              <IconButton icon="bag-personal" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Ir para categorias </Text>
            </View>
          </TouchableOpacity>

        </View>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "", //configurações do ícone de perfil padrão do usuário e texto de em-mail
    alignItems: "center",
    marginTop: 30,
  },
  touchableOpacity: {
    //justifyContent: "center",
    // marginTop: 80, //distancia dos botões do topo da tela
    // marginRight: 140, //posicionamento dos botões no canto da tela
  },

  iconeContainer: {
    flexDirection: "row",
    alignItems: "center", //alinha os icones no centro da página
    marginRight:150,
    
  },
  iconeTexto: {
    marginLeft: 1,
    fontSize: 30, // Espaçamento entre o ícone e o texto
  },
  emailText: {
    textAlign: "center",
    fontSize: 20, // Ajuste o tamanho da fonte conforme necessário
    fontWeight: "bold", // Define o texto em negrito
    color: "black", // Altera a cor do texto
  },
  descriptionUser: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerfunctions:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  estiloCarrinho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120, // distância do topo
    marginBottom: 40, // distancia entre o botao e o texto

  },
  estiloTextoBotao: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 15,
    fontWeight:'bold'
  },
  estiloTexto:{
   fontWeight:'bold',
   fontSize:25
  }
  
});
