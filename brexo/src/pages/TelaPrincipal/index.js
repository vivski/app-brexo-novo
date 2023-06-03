import {StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';
import Header from '../../components/Header';

export default function TelaPrincipal(){
    return (

    <View style={styles.container}>
        <Header/>
        
            <View style={styles.botaoPesquisar}>
                <TextInput style={styles.cssInput}/>

                < Pressable style={{paddingLeft: 10 }} >
                <View style={{ width: 20, height: 20}}>
                    <Image
                        source={require('../../components/img/search-icon-png.png')} />
                </View>
                </Pressable>
            </View>
    
    <View style={{display:'flex',flexDirection: 'column',paddingBottom: 11, marginTop: 10 }}>

        <View style={styles.cssViewCategorias}>
            <Pressable> 
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../components/img/icone-blusa.png')}
                />
                    <Text>blusas</Text>
            </Pressable>

            <Pressable>
                <Image
                    style={styles.cssImagensCategorias} 
                    source={require('../../components/img/icone-calca.png')}
                />
                    <Text>calças</Text>
            </Pressable>
        </View>

        <View style={styles.cssViewCategorias}>
            <Pressable>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../components/img/icone-short.png')}
                />
                    <Text>short</Text>
            </Pressable>

            <Pressable style={{ paddingLeft: 10, paddingBottom: 16}}>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../components/img/icone-vestido.png')}
                />
                    <Text>vestido</Text>
            </Pressable>
        </View>

        <View style={styles.cssViewCategorias}>
            <Pressable>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../components/img/icone-moletom.png')}
                />
                    <Text>moletom</Text>
            </Pressable>

            <Pressable>
                <Image
                    style={styles.cssImagensCategorias}
                    source={require('../../components/img/icone-biquini.png')}
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
