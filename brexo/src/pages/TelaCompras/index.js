import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { useEffect, useState } from "react";
import BaseLayout from "../../components/baseLayout";
import NavigatorTabs from "../../components/barraInferior";

export default function TelaCompras({ route, navigation }) {
  const [produtos, setProdutos] = useState([]);

  const Produto = ({ id, nome, imagem, preco }) => (
    <View style={{ width: 200, height: 250 }}>
      <Pressable
        onPress={() => {
          navigation.navigate("TelaProduto", { produtoId: id });
        }}
      >
        <Card
          style={{
            width: 350,
            height: 500,
            marginTop: 150,
            backgroundColor: "#F7F0F6",
          }}
        >
          <Card.Cover
            source={{ uri: imagem }}
            style={{
              width: 250,
              height: 300,
              margin: 10,
              alignSelf: "center",
            }}
          />

          <Card.Title
            title={nome}
            subtitle={preco}
            titleStyle={{ fontSize: 20 }}
            subtitleStyle={{ fontSize: 20 }}
          />

          <Card.Actions>
            <Button
              icon="cart"
              onPress={() => {
                navigation.navigate("TelaCarrinho");
              }}
            >
              {" "}
            </Button>
            <Button
              icon="heart"
              onPress={() => {
                navigation.navigate("TelaFavoritos");
              }}
            ></Button>
          </Card.Actions>
        </Card>
      </Pressable>
    </View>
  );

  useEffect(() => {
    const load = async () => {
      const resultApi = await fetch(
        "https://6480b615f061e6ec4d49bfea.mockapi.io/produtos/"
      );
      const data = await resultApi.json();
      // o filter é usado para filtrar elementos de uma coleção com base em uma determinada condição. Ele cria uma nova coleção contendo apenas os elementos que atendem a essa condição

      let result = data.map(({ id, nome, preco, imagem }) => ({
        id: id,
        nome: nome,
        preco: preco,
        imagem: imagem,
      }));

      setProdutos(result);
    };

    load();
  }, []);

  return (
    // tentativa de fazer a barra inferior funcionar na telaCompras usando esse BaseLayout
      <View style={{ alignSelf: "center", backgroundColor: "#F7F0F6" }}>
        {/* <View>
          <FlatList
            data={produtos}
            numColumns={2}
            renderItem={({ item }) => (
              <Produto
                id={item.id}
                nome={item.nome}
                preco={item.preco}
                imagem={item.imagem}
              />
            )}
          />
        </View> */}
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
