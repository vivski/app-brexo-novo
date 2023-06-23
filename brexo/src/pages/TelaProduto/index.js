import { StyleSheet, Text, View, TextInput, Image, Pressable, FlatList } from 'react-native';
// import Header from '../../components/Header';

export default function TelaProduto() {

    const idProduto = id;

    const [produto, setProduto] = useState({});

    const Produto = ({ nome, imagem, preco }) => (
        <View style={{ width: 200, height: 250 }}>

            <Pressable onPress={() => { }}>
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
            const resultApi = await fetch(`https://6480b615f061e6ec4d49bfea.mockapi.io/produtos/${idProduto}`)
            const result = await resultApi.json();
            setProduto(result);
        }

        load();
    }, []);

    return (
        <View style={{ alignSelf: 'center', backgroundColor: '#F7F0F6' }}>
            <View>
                <Produto
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}/>
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