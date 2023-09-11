import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaUsuario() {
    const [ emailUser, setEmailUser] = React.useState("")
  const navigation = useNavigation();
  const botaoFavoritos = () => {
    navigation.navigate("TelaFavoritos");
  };

  const botaoCompras = () => {
    navigation.navigate("TelaCompras"); //está funcionando corretamente
  };

  const botaoLogout = () => {
    navigation.navigate("TelaLogin"); //teste
  };

  React.useEffect( () => {
    (async() => {
       const dataUser =  await AsyncStorage.getItem("userBrexo").then( data => JSON.parse(data))
       console.log(dataUser);
       if(dataUser){
        setEmailUser(dataUser.email)
       }
    })()
  },[])

  return (
<View style={styles.container}>
      <View style={styles.descriptionUser}>
        <Image
          style={{ width: 190, height: 190 }}
          source={{
            uri: "https://raw.githubusercontent.com/vivski/app-brexo-novo/main/brexo/assets/img/IconePadraoUsuario.png",
          }}
        />
        <View>
          <Text style={styles.emailText}>{emailUser}</Text>
        </View>
      </View>

    <View style={styles.containerfunctions}>

        <View style={styles.touchableOpacity}>
          <TouchableOpacity onPress={botaoFavoritos}>
            <View style={styles.iconeContainer}>
              <IconButton icon="heart" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Favoritos </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botaoCompras}>
            <View style={styles.iconeContainer}>
              <IconButton icon="bag-personal" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Compras </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botaoLogout}>
            <View style={styles.iconeContainer}>
              <IconButton icon="delete" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Deletar conta </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botaoLogout}>
            <View style={styles.iconeContainer}>
              <IconButton icon="logout" color="#05894" size={40} />
              <Text style={styles.iconeTexto}> Sair </Text>
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
  }
});
