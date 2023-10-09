import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Avatar, Button, Card,IconButton } from "react-native-paper";
import { useEffect, useState } from "react";
import { ListarFavorito, InsertFavorito } from "../../api/request/rotaFavoritos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native'


export default function TelaFavoritos({ route }) {
  const [produtosFavoritos, setProdutosFavoritos] = useState([]);
  useFocusEffect( ()=> console.log("lalala") )
  useEffect(() => {
    console.log("texto")
    async function Load() {
      const { id_usuario } = await AsyncStorage.getItem("userBrexo").then(
        (data) => JSON.parse(data)
      );
      const favoritos = await ListarFavorito({ id_usuario: id_usuario }).then(
        ({ data }) => data.map(({produto}) => produto ))
      setProdutosFavoritos(favoritos);
    }
    Load();
  }, [])
  

  // const calcularTotal = () => {
  //   const total = produtosFavoritos.reduce(
  //     (acc, produto) => acc + produto.preco,
  //     0
  //   );
  //   return total;
  // };

  const removerItemFavorito = (produtoId) => {
    const novosFavoritos = produtosFavoritos.filter(
      (produto) => produto.id !== produtoId
    );
    setProdutosFavoritos(novosFavoritos);
  };

  const navigation = useNavigation();
    const botaoInicio = () => {
    navigation.navigate('TelaCategorias');
    };

  return (
    < View style={styles.container}>
      {produtosFavoritos.length === 0 ? (
  <View style={styles.estiloFavoritos}>
    <IconButton icon="emoticon-sad-outline" size={150} iconColor="#7A6276" />
    <Text style={styles.estiloTexto}> Favoritos está vazio.</Text>
    <Pressable onPress={botaoInicio} style={styles.estiloBotao}>
    <Text style={styles.estiloTextoBotao}> iniciar compra </Text>  
    </Pressable>
  </View>
) : (
   <>
  <FlatList
  data={produtosFavoritos}
  renderItem={({ item }) => (
    <View style={styles.favoritoItem}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.favoritoImagem}
              />
            <View style={{ flex: 1 }}>
              <Text style={styles.textoNome} >{item.nome}</Text>
              <Text style={styles.textoPreco} > R$ {item.preco}</Text>
            </View>
            <View style={styles.icones}>
            <IconButton icon="delete-forever" iconColor="#7A6276" size={30} onPress={() => removerItemFavorito(item.id)} />
            <IconButton icon="cart" size={30} onPress={() => InsertFavorito(item)} />
            </View>
          
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
        {/* <Text style={styles.total}>Total: {calcularTotal()} </Text>  */}
        </>
        )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7F0F6",
  },
  favoritoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  favoritoImagem: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  total: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  estiloFavoritos: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120, // distância do topo
    marginBottom: 40, // distancia entre o botao e o texto
  },
  estiloTexto: {
    fontSize: 30
  },
  estiloTextoBotao: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 25,
    fontWeight:'bold'
  },
  estiloBotao:{
    backgroundColor: '#7A6276',
    borderRadius: 4,
    alignSelf: 'center',
    width: 200,
    padding: 15,
  },
  icones: {
    flexDirection: 'column', 
    alignItems: 'center'
  },
  textoNome: {
    fontWeight: 'bold',
    fontSize:20,
    paddingBottom: 15
  },
  textoPreco: {
    fontWeight:'bold'
  }
});
