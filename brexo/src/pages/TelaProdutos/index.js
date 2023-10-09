import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import dadosProdutos from "../../dadosProdutos.json";
import { InsertFavorito } from "../../api/request/rotaFavoritos";
import TelaFavoritos from "../TelaFavoritos";
import Produto from "../../components/produto/index";
import axios from "axios";
import requisicaorotaCarrinho from "../../api/request/rotaCarrinho";

function TelaProdutos({ route, navigation }) {
  const idCategoria = route.params.id;
  const [produtos, setProdutos] = useState([]);

  const adicionarAosFavoritos = async (produto) => {
    const res = await InsertFavorito(produto);
  };

  const adicionarAoCarrinho = async(produto) => {
    const res = await requisicaorotaCarrinho.InsertCarrinho(produto)
  }


  useEffect(() => {
    const load = async () => {
      // const resultApi = await axios.get('httprs://10.220.30.121:3004/brexo/produtos')
      // const data = await resultApi.json();
      // console.log(data);

      // o filter é usado para filtrar elementos de uma coleção com base em uma determinada condição. Ele cria uma nova coleção contendo apenas os elementos que atendem a essa condição
      const data = dadosProdutos;

      let result = data
        .filter((p) => p.idcategoria == idCategoria)
        .map(({ id, nome, preco, imagem }) => ({
          id: id,
          nome: nome,
          preco: preco,
          imagem: imagem,
        }));
      setProdutos(result);
    };

    load();
  }, []);

  return produtos.length > 0 ? (
    <View style={{ alignSelf: "center", backgroundColor: "#F7F0F6" }}>
      <View>
        <FlatList
          data={produtos}
          numColumns={2}
          renderItem={({ item }) => (
            <Produto
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              imagem={item.imagem}
              functionFavoritos={() => adicionarAosFavoritos(item)}
              functionCarrinho={() => adicionarAoCarrinho(item)}
            />
          )}
        />
      </View>
    </View>
  ) : (
    <ActivityIndicator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default TelaProdutos;
