import {StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';

export default function TelaPrincipal({navigation}){

    const [categorias, setCategorias] = useState([]);

    useEffect(() =>{
        const load = async() => {
            const resultApi = await fetch('https://6480b615f061e6ec4d49bfea.mockapi.io/categorias')
            const data = await resultApi.json()
            let result = data.map(({ id, imagem }) => ({
                id: id,
                imagem: imagem,
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
    
        <View style={{display:'flex',flexDirection: 'column',paddingBottom: 11, marginTop: 10 }}>

        
        

        <View style={styles.cssViewCategorias}>
            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}> 
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../../assets/img/icone-blusa.png')}
                />
                    <Text>blusas</Text>
            </Pressable>

            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}>
                <Image
                    style={styles.cssImagensCategorias} 
                    source={require('../../../assets/img/icone-calca.png')}
                />
                    <Text>calças</Text>
            </Pressable>
        </View>

        <View style={styles.cssViewCategorias}>
            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../../assets/img/icone-short.png')}
                />
                    <Text>short</Text>
            </Pressable>

            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}  style={{ paddingLeft: 10, paddingBottom: 16}}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../../assets/img/icone-vestido.png')}
                />
                    <Text>vestido</Text>
            </Pressable>
        </View>

        <View style={styles.cssViewCategorias}>
            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../../assets/img/icone-moletom.png')}
                />
                    <Text>moletom</Text>
            </Pressable>

            <Pressable onPress={ () => {
                navigation.navigate("TelaProdutos")
            }}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../../assets/img/icone-biquini.png')}
                />
                    <Text>biquíni</Text>
            </Pressable>
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
            // background: '#ffff',
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
