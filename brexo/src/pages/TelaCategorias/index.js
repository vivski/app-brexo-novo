import { StyleSheet, Text, View, TextInput, Image, Pressable, FlatList } from 'react-native';
import Header from '../../components/Header';
// import TabNavigator from '../../components/barraInferior';
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
                <Text style={{textAlign: 'center', fontSize: 24, paddingTop: 8}}>{nome}</Text>
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
            <Header />

            
                <FlatList style={{
                    display: 'flex',
                    // flexDirection: 'column',
                    paddingBottom: 6,
                    marginTop: 50,
                    paddingTop: 20,
                    backgroundColor: '#F7F0F6',
                    // alignSelf: 'center',
                    // width: '100%',
                    // height: '100%',
                    gap: 30,
                    // flex: 1
                    // alignContent:
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
        //  flexDirection: 'column', 
        //  paddingBottom: 11 

    },
    // cssInput: {
    //     background: '#F7F0F6',
    //     borderWidth: 1,
    //     width: 300,
    //     color: '#666464',
    //     borderRadius: 20,
    //     padding: 5
    // },
    cssImagensCategorias: {
        // padding: 12,
        width: 150,
        aspectRatio: '1/1',
        resizeMode: 'contain',
        borderRadius: 6

    },
    // cssViewCategorias: {
    //     display: 'flex',
    //     alignSelf: 'center',
    //     flexDirection: 'row',
    //     backgroundColor: '#D9D9D9',
    //     // marginTop: 10,
    //     borderRadius: 20,
    //     // paddingLeft: 10
    // },


});
