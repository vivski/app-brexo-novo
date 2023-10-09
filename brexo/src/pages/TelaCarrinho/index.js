import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Pressable, Image, TextInput, FlatList} from 'react-native';
import requisicaorotaCarrinho from '../../api/request/rotaCarrinho';
import { Card, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TelaFinalizarCompra from '../TelaFinalizarCompra'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaCarrinho(){
const [carrinho, setCarrinho] = useState([])  
const [mostrarTotal, setTotal] = useState(false);

console.log(carrinho);

useEffect(() => {
  async function Load() {
    const { id_usuario } = await AsyncStorage.getItem("userBrexo").then(
      (data) => JSON.parse(data)
    );
    const carrinho = await requisicaorotaCarrinho.pegarElistarCarrinho({ id_usuario: id_usuario }).then(
      ({ data }) => data.map(({produto}) => produto ))
    setCarrinho(carrinho);

    if (carrinho.length > 0) {
      setTotal(true);
    }
  }
  Load();
}, []);

const RenderItem = ({item,index}) => ( 
<View style={styles.item}> 

<View style={styles.itemDetalhes}>
<Image style={styles.carrinhoImagem} source={{uri:item.imagem}}/>

<View style={{flex:1}}>
<Text style={styles.itemNome}>{item.nome}</Text>
<Text style={styles.itemPreco}> R$ {item.preco}</Text>
</View>
<View style={styles.icones}>
<IconButton icon="delete-forever" size={24} color="#7A6276" onPress={ () => removerItemCarrinho(item.id) } />
</View>

</View>

</View>
)

const navigation = useNavigation();

    const botaoInicio = () => {
    navigation.navigate('TelaCategorias');
    
    };

    const finalizarCompra = () => {
      navigation.navigate('TelaFinalizarCompra', {carrinho})
    }

  const removerItemCarrinho = async (id_produto) => {
   await requisicaorotaCarrinho.deletarItemCarrinho(id_produto)
  }


  return(
    
    <View style={{flex:1}}>
    

    {carrinho.length == 0 ? (
        <View style={styles.estiloCarrinho} >
          <IconButton icon="cart-off" size={120} iconColor='#7A6276' />
          <Text style={styles.estiloTexto} > Seu carrinho está vazio. </Text>

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

    ) : ( 
    <FlatList
      data={carrinho}
      renderItem={RenderItem}     
    />
    )
    }
    {mostrarTotal && (
      <View>
            <View style={styles.totalContainer}>
            <Text style={styles.total}>Total: </Text>
            <Text style={styles.somaTotal}> R$ {carrinho.reduce((acc, produto) => acc + produto.preco, 0)}</Text>
            </View>
            <Pressable onPress={finalizarCompra} style={styles.botaoFinalizarCompra}>
            <View>
            <Text style={styles.estiloTextoBotao}> FINALIZAR COMPRA </Text>
            </View>
          </Pressable>
      </View>
    )}

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
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    itemNome: {
    fontWeight: 'bold',
    fontSize:20,
    paddingBottom: 15
    },
    itemPreco: {
      fontWeight:'bold'

    },
    botaoFinalizarCompra: {
      backgroundColor: '#7A6276',
      borderRadius: 4,
      alignSelf: 'center',
      width: 200,
      padding: 15,     
    }, 
    total: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    totalContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 10,
    },
    somaTotal:{
      fontSize: 30,
      fontWeight: 'bold',
      // color: '#7A6276'
    },
    icones:{
      flexDirection: 'column', 
      alignItems: 'center'
    },
    carrinhoImagem:{
      width: 70,
      height: 70,
      marginRight: 10,
    }
  });





