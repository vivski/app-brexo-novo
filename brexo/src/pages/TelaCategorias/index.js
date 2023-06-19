import {StyleSheet, Text, View, TextInput, Image, Pressable, FlatList} from 'react-native';
import Header from '../../components/Header';
// import TabNavigator from '../../components/barraInferior';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';

export default function TelaCategorias({navigation}){

    const [categorias, setCategorias] = useState([]);
// linha pro cod
    const Categoria = ({id, imagem, nome}) => (
    <View>
            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos", {id:id})
            }}> 
                <Image
                    style={styles.cssImagensCategorias}
                    source={{uri:imagem}}
                />
                    <Text>{nome}</Text>
            </Pressable>       
    </View>
    );

    useEffect(() =>{
        const load = async() => {
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
                <Header/>
        
            <View style={styles.botaoPesquisar}>
                <TextInput style={styles.cssInput}/>

                < Pressable style={{paddingLeft: 10 }} >
                <View style={{ width: 20, height: 20}}>
                    <Image style={{width: 20, height: 20 }}
                        source={require('../../../assets/img/icone-pesquisa.png')} />
                </View>
                </Pressable>
            </View>
    
        <View style={{display:'flex',lexDirection: 'column',paddingBottom: 6, marginTop: 50, backgroundColor:'#F7F0F6' }}>
       

    <View>
        <FlatList
        data={categorias}
        numColumns={2}
        renderItem={({item}) => (
        <Categoria 
            imagem={item.imagem}
            nome={item.nome}
            id={item.id}
        />
        )}
        />    
    </View>
    

       
    </View> 

</View>

    );
    
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         backgroundColor:'#fff',
         
        display: 'flex', 
        //  flexDirection: 'column', 
        //  paddingBottom: 11 
    
        },
        botaoPesquisar:{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: 10
        },
        cssInput:{
            background: '#F7F0F6',
            borderWidth: 1,
            width: 300,
            color: '#666464',
            borderRadius: 20,
            padding: 5
        },
        cssImagensCategorias:{
            width: 160,
            height: 160, 
            borderRadius: 6 
        }, 
        cssViewCategorias:{
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'row', 
            backgroundColor: '#D9D9D9', 
            marginTop: 10,
            borderRadius:20,
            paddingLeft: 10
        },
        

    });
