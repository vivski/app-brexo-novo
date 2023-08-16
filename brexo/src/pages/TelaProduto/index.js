import { StyleSheet, Text, View, TextInput, Image, Pressable, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card } from 'react-native-paper';
// import Header from '../../components/Header';

export default function TelaProduto({ route }) {

    const { produtoId } = route.params;

    const [produto, setProduto] = useState({});

    const Produto = ({ nome, imagem, preco }) => (
        <View>

            <Card style={{
                width: 350,
                height: 500,
                marginTop: 150,
                backgroundColor: '#F7F0F6'
            }}>
                <Card.Cover source={{ uri: imagem }}
                    style={{
                        width: 250,
                        height: 300,
                        margin: 10,
                        alignSelf: 'center'
                    }} />

                <Card.Title title={nome} subtitle={preco} 
                    titleStyle={{ fontSize: 20 }}
                    subtitleStyle={{fontSize: 20}} />

                <Card.Actions>
                    <Button icon="cart"></Button>
                    <Button icon="heart"></Button>
                </Card.Actions>

            </Card>
        </View>

    );

    useEffect(() => {
        const load = async () => {
            const resultApi = await fetch(`https://6480b615f061e6ec4d49bfea.mockapi.io/produtos/1`)
            const result = await resultApi.json();
            console.log(result)
            setProduto(result);
        }  

        load();
    }, []);

    return (
        <View style={{ alignSelf: 'center' }}>
            <View>
                <Produto
                    nome={produto?.nome}
                    preco={produto?.preco}
                    imagem={produto?.imagem} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

});