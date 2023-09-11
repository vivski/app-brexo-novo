import { View, Pressable, Text, Image,} from "react-native"
import { Card, Button } from "react-native-paper";
//import Button from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const Produto = ({ id, nome, imagem, preco, functionCarrinho, functionFavoritos}) => { 
        
    const navigation = useNavigation()
    
    return (
    <View style={{ width: 200, height: 250 }}>

        <Pressable onPress={() => { navigation.navigate('TelaProduto', { produtoId: id }) }}>
            <Image source={{ uri: imagem }}
                style={{
                    width: 150,
                    height: 150,
                    margin: 5,
                    alignSelf: 'center'
                }} />

            <View style={{ width: 150 }}>
                <Text numberOfLines={1}> {nome} </Text>
                <Text> {preco} </Text>
            </View>

            <Card>
                <Card.Actions>
                    <Button icon={"cart"} onPress={functionCarrinho}></Button>
                    <Button icon="heart" onPress={functionFavoritos} ></Button>
                </Card.Actions>
            </Card>

        </Pressable>
    </View>
)}

export default Produto;