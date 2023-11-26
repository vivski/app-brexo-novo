import React, {useEffect, useState} from 'react'
import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View, Pressable, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';
import requisicaorotaCarrinho from '../../api/request/rotaCarrinho';
import { Card, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
// import TelaCompraFinalizada from '../TelaCompraFinalizada';



export default function TelaFinalizarCompra(){

const route = useRoute();
const carrinho = route.params?.carrinho || [];

// const [isChecked, setChecked] = useState(false);
const [isPixChecked, setPixChecked] = useState(false);
const [isBoletoChecked, setBoletoChecked] = useState(false);
const [isCredito1Checked, setCredito1Checked] = useState(false);
const [isCredito2Checked, setCredito2Checked] = useState(false);


const RenderItem = ({item,index}) => ( 
  <View style={styles.itemResumo}> 

    
  <View style={styles.itemDetalhes}>
  <Image style={styles.carrinhoImagem} source={{uri:item.imagem}}/>
  
  <View style={{flex:1}}>
  <Text style={styles.itemNome}>{item.nome}</Text>
  <Text style={styles.itemPreco}> R$ {item.preco}</Text>
  </View>
  </View> 
  </View>
  )

  const navigation = useNavigation();
  const finalizarCompra = () => {
    navigation.navigate('TelaCompraFinalizada')
  }

  const transformarPreco = (preco) => parseFloat(preco.replace(',', '.'));
  const calcularTotal = () => {
    return carrinho.reduce((acc, produto) => acc + transformarPreco(produto.preco), 0);
  };

return(
    
<View>
<View>
<Text style={styles.resumoPedido}> Resumo do pedido: </Text>
</View>
  
<FlatList
  data={carrinho}
  renderItem={RenderItem}
  style={{height:'30%'}}
/>


<View styles={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
<Text style={styles.resumoPedido}> Formas de pagamento </Text>

<View style={styles.container}>
    <View>

 {/* começa aqui */}
  <View>


    <View style={styles.section}>
    <Checkbox
      style={styles.checkbox}
      value={isPixChecked}
      onValueChange={(newValue) => {
        setPixChecked(newValue);
        setBoletoChecked(false);
        setCredito1Checked(false);
        setCredito2Checked(false);
      }}
      color={isPixChecked ? '#7A6276' : undefined}
      />
    <Text style={styles.paragraph}> Pix </Text>
   </View>
   <View style={styles.section}>
    <Checkbox
          style={styles.checkbox}
          value={isBoletoChecked}
          onValueChange={(newValue) => {
            setBoletoChecked(newValue);
            setPixChecked(false);
            setCredito1Checked(false);
            setCredito2Checked(false);
          }}
          color={isBoletoChecked ? '#7A6276' : undefined}
          />
    <Text style={styles.paragraph}> Boleto </Text>
   </View>
   <View style={styles.section}>
    <Checkbox
          style={styles.checkbox}
          value={isCredito1Checked}
          onValueChange={(newValue) => {
            setCredito1Checked(newValue);
            setPixChecked(false);
            setBoletoChecked(false);
            setCredito2Checked(false);
          }}
          color={isCredito1Checked ? '#7A6276' : undefined}
          />
    <Text style={styles.paragraph}> crédito 1 </Text>
   </View>

   <View style={styles.section}>
    <Checkbox
           style={styles.checkbox}
           value={isCredito2Checked}
           onValueChange={(newValue) => {
             setCredito2Checked(newValue);
             setPixChecked(false);
             setBoletoChecked(false);
             setCredito1Checked(false);
            }}
            color={isCredito2Checked ? '#7A6276' : undefined}
            />
    <Text style={styles.paragraph}> crédito  2 </Text>
   </View>
    </View>  
    {/* acaba aqui */}

    </View>
    <View style={styles.totalBar}>
            <View style={styles.totalContainer}>
            <Text style={styles.total}>Total: </Text>
            <Text style={styles.somaTotal}> Total: R$ {calcularTotal().toFixed(2)} </Text>
            </View>
            <Pressable onPress={finalizarCompra} style={styles.botaoFinalizarCompra}>
            <View>
            <Text style={styles.estiloTextoBotao}> FINALIZAR COMPRA </Text>
            </View>
          </Pressable>
      </View>

    </View>
      </View>
</View>
  
    
    )

}

const styles = StyleSheet.create({
  estiloFinalizarCompra: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 40, 
  
  }, 
  carrinhoImagem:{
    width: 50,
    height: 50,
    marginRight: 10,
  },
  resumoPedido:{
    fontWeight:"bold"
  },
  itemResumo:{
    backgroundColor:"#F7F0F6",
    marginTop: 20,
    marginRight:20,
    marginLeft:20
  },
  itemNome:{
    // fontWeight: 'bold',
    fontSize:20,
    paddingBottom: 15
  },
  itemDetalhes:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  // itemText:{
  //   fontWeight:'bold'
  // },
  // checkmark: {
  //   fontWeight: 'bold',
  //     flexDirection: 'row',
  // },
  // checkbox: {
  //   width: 24,
  //   height: 24,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 10, // Espaço entre o checkbox e o texto
  //   marginLeft:10,
  //   marginBottom:15
  // },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText:{
    marginBottom:10,
    fontSize:20,
    marginLeft:45
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
estiloTextoBotao: {
  color: 'white', 
  textAlign: 'center', 
  fontSize: 25,
  fontWeight:'bold'
},
somaTotal:{
  fontSize: 30,
  fontWeight: 'bold',
  // color: '#7A6276'
},
checkbox: {
  margin: 8,
},
paragraph: {
  fontSize: 18,
  marginLeft: 8,
},
// checkboxContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },




  });





