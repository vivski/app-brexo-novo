import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Pressable, Image, TextInput, FlatList} from 'react-native';
import requisicaorotaCarrinho from '../../api/request/rotaCarrinho';
import { Card, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function TelaCarrinho(){
const [carrinho, setCarrinho] = useState([])  
console.log(carrinho.length);
useEffect( () => {
async function reqCarrinho() {
  try {
    const recebeReq = await requisicaorotaCarrinho.pegarElistarCarrinho().then(res => res) //pega a req e faz a respost
    setCarrinho(recebeReq)
 } catch (error) {
  console.log("erro", error)
 }
  }
 }, [])

const RenderItem = ({item}) => ( 
<View style={styles.item}> 
<IconButton icon="checkbox-blank-outline" size={24} color="#7A6276" />

<View style={styles.itemDetalhes}>
<Text> {item.imagem} </Text>
<Text style={styles.itemNome}>{item.nome}</Text>
<Text style={styles.itemPreco}>{item.preco}</Text>
</View>

</View>
)

const navigation = useNavigation();
    const botaoInicio = () => {
    navigation.navigate('TelaCategorias');
    };

  return(
    
    <View style={{}}>
    <View>

    {carrinho.length == 0 ? (
        <View style={styles.estiloCarrinho} >
          <IconButton icon="cart-off" size={120} iconColor='#7A6276' />
          <Text style={styles.estiloTexto} > Seu carrinho está vazio. </Text>
    </View>

    ) : ( 
    <FlatList
      data={carrinho}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderItem}
    //   renderItem={({ item }) => (
    //     <Card>
    //       {/* Renderizar os detalhes do item no carrinho aqui */}
    //       <Text> {item.imagem}</Text>
    //       <Text>{item.nome}</Text>
    //       <Text>{item.preco}</Text>
    //     </Card>
    // )}
    />

    )
    }
 

        <Pressable onPress={botaoInicio}
        style={{
            backgroundColor: '#7A6276',
            borderRadius: 4,
            alignSelf: 'center',
            width: 200,
            padding: 15,
          
        }}>
        <View style={{}}>

        <Text style={styles.estiloTextoBotao}> iniciar compra</Text>

        </View>
        </Pressable>
       </View>



        </View>
    
    )

}

const styles = StyleSheet.create({
  estiloCarrinho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120, // distância do topo
    marginBottom: 40, // distancia entre o botao e o texto
  
  },
    estiloTexto: {
      fontSize: 30,
      // fontWeight: 'bold' 
    },
    estiloTextoBotao: {
      color: 'white', 
      textAlign: 'center', 
      fontSize: 25,
      fontWeight:'bold'
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemDetalhes: {
      flex: 1,
    },
    itemNome: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemPreco: {
      fontSize: 16,
      color: '#7A6276',
    }
  });





