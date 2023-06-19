import { useEffect, useState } from "react";
import { View, Text, Image, Pressable, FlatList, StyleSheet } from "react-native"

function TelaProdutos({ route }) {

    const idCategoria = route.params.id;

    const [produtos, setProdutos] = useState([]);
    // linha pro codigo
    const Produto = ({ nome, imagem, preco }) => (
        <View style={{ width: 200, height: 250 }}>

            <Pressable onPress={() => { }}>
                {/* navigation.navigate("TelaProdutos", {id:id})  */}
                <Image source={{ uri: imagem }} style={{ width: 150, height: 200, margin: 10 }} />

                <View style={{ width: 150 }}>
                    <Text numberOfLines={1}> {nome} </Text>
                    <Text> {preco} </Text>
                </View>

            </Pressable>
        </View>

    );

    useEffect(() => {
        const load = async () => {
            const resultApi = await fetch('https://6480b615f061e6ec4d49bfea.mockapi.io/produtos')
            const data = await resultApi.json();
            // o filter é usado para filtrar elementos de uma coleção com base em uma determinada condição. Ele cria uma nova coleção contendo apenas os elementos que atendem a essa condição

            let result = data.filter(p => p.idcategoria == idCategoria)
                .map(({ nome, preco, imagem }) => ({
                    nome: nome,
                    preco: preco,
                    imagem: imagem
                }));

            console.log(result.length);

            setProdutos(result);
        }

        load();
    }, []);

    return (
        <View style={{ alignSelf: 'center', background: '' }}>
            <View >
                <FlatList
                    data={produtos}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Produto
                            nome={item.nome}
                            preco={item.preco}
                            imagem={item.imagem} />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

});
export default TelaProdutos;