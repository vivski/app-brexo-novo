import {StyleSheet, Text, View, TextInput, Image, Pressable, FlatList, TouchableOpacity} from 'react-native';

import { Avatar, Button, Card } from 'react-native-paper';
import { useEffect, useState } from 'react';
import {ListarFavorito} from './../../requests/favoritos'

export default function TelaFavoritos({ route }) {

  const [produtosFavoritos, setProdutosFavoritos] = useState([]);

useEffect( () => { async function Load(){
   const favoritos = await ListarFavorito()
   setProdutosFavoritos(favoritos)
} 
Load()
}, [] )

  const calcularTotal = () => {
      const total = produtosFavoritos.reduce((acc, produto) => acc + produto.preco, 0);
      return total;
  };

  const removerItemFavorito = (produtoId) => {
      const novosFavoritos = produtosFavoritos.filter(produto => produto.id !== produtoId);
      setProdutosFavoritos(novosFavoritos);
  };

  return (
      <View style={styles.container}>
          <FlatList
              data={produtosFavoritos}
              renderItem={({ item }) => (
                  <View style={styles.favoriteItem}>
                      <Image source={{ uri: item.imagem }} style={styles.favoriteImage} />
                      <View style={{ flex: 1 }}>
                          <Text>{item.nome}</Text>
                          <Text>{item.preco}</Text>
                      </View>
                      <TouchableOpacity onPress={() => removerItemFavorito(item.id)}>
                          <Text>Remover</Text>
                      </TouchableOpacity>
                  </View>
              )}
              keyExtractor={(item) => item.id.toString()}
          />
          <Text style={styles.total}>Total: {calcularTotal()} </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#F7F0F6',
  },
  favoriteItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
  },
  favoriteImage: {
      width: 50,
      height: 50,
      marginRight: 10,
  },
  total: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
  }
});
