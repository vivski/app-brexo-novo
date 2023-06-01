import {StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';
import Header from '../../components/Header';

export default function TelaPrincipal(){
    return (

    <View style={styles.container}>
        <Header/>
        
            <View style={styles.botaoPesquisar}>
                <TextInput style={styles.cssInput}/>

                <Pressable style={{paddingLeft: 10 }} >
                <View style={{ width: 20, height: 20}}>
                    <Image
                        source={require('../../components/img/search-icon-png.png')} />
                </View>
                </Pressable>
            </View>
    
    <View style={{display:'flex',flexDirection: 'column',paddingBottom: 11, marginTop: 10 }}>

        <View style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row',backgroundColor:'#D9D9D9'}}>
            <Pressable> 
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6}}
                    source={require('../../components/img/icone-blusa.png')}
                />
            </Pressable>

            <Pressable>
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6}} 
                    source={require('../../components/img/icone-calca.png')}
                />
            </Pressable>
        </View>

        <View style={{display: 'flex', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#D9D9D9', marginTop: 10}}>
            <Pressable>
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6 }}
                    source={require('../../components/img/icone-short.png')}
                />
            </Pressable>

            <Pressable style={{ paddingLeft: 10, paddingBottom: 16}}>
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6 }}
                    source={require('../../components/img/icone-vestido.png')}
                />
            </Pressable>
        </View>

        <View style={{display: 'flex', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#D9D9D9', marginTop: 10}}>
            <Pressable>
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6 }}
                    source={require('../../components/img/icone-moletom.png')}/>
            </Pressable>

            <Pressable>
                <Image
                    style={{ width: 160, height: 160, borderRadius: 6 }}
                    source={require('../../components/img/icone-biquini.png')}
                />
            </Pressable>
        </View> 

    </View> 
 </View>
    );
    
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         backgroundColor:'#fff'
    
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
    });