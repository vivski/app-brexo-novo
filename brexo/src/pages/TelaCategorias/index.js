import { StyleSheet, Text, View, TextInput, Image, Pressable, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';

export default function TelaCategorias({ navigation }) {

    const [categorias, setCategorias] = useState([]);
    // linha pro cod
    const Categoria = ({ id, imagem, nome }) => (
        <View style={{
            paddingTop: 30,

        }}>
            <Pressable onPress={() => {
                navigation.navigate("TelaProdutos", { id: id })
            }}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={{ uri: imagem }}
                />
                <Text style={{textAlign: 'center', fontSize: 24, paddingTop: 8, color: '#362533'}}>{nome}</Text>
            </Pressable>
        </View>
    );

    useEffect(() => {
        const load = async () => {
            const resultApi = await fetch('https://6480b615f061e6ec4d49bfea.mockapi.io/categorias')
            const data = await resultApi.json()
            let result = data.map(({ id, imagem, nome }) => ({
                id: id,
                imagem: imagem,
                nome: nome
            }));

            setCategorias(result);
        }

        load();
    }, []);

    return (

        <View style={styles.container}>


            
                <FlatList style={{
                    display: 'flex',
                    paddingBottom: 6,
                    // marginTop: 50,
                    marginTop: 0,
                    paddingTop: 10,
                    backgroundColor: '#F7F0F6',
                    gap: 40,
                }}
                    data={categorias}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-evenly', gap: 40}}
                    renderItem={({ item }) => (
                        <Categoria
                            imagem={item.imagem}
                            nome={item.nome}
                            id={item.id}

                        />
                    )}
                />
            


        </View >

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        display: 'flex',
        flexDirection: 'column'
    },
    cssImagensCategorias: {
        width: 150,
        aspectRatio: '1/1',
        resizeMode: 'contain',
        borderRadius: 6

    },
});
