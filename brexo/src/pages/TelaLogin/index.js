import { StyleSheet, Text, View, Pressable, Image, TextInput} from 'react-native';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';
import { useNavigation } from '@react-navigation/native'
import NavigatorTabs from '../../components/barraInferior'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function TelaLogin() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.cssLogo}>
                <Logo />

            </View>

            <View style={styles.containerPrincipal}>
               
                <View>

                    <Text>e-mail:</Text>
                    <TextInput style={{

                        backgroundColor: '#fff',
                        borderWidth: 1,
                        width: 240,
                        color: '#7A6276',
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 4,

                    }}
                    
                    />

                </View>

                <View>

                    <Text style={{ marginTop: 10 }}>senha:</Text>
                    
                    <TextInput secureTextEntry={true} style={{
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        width: 240,
                        textAlign: 'left',
                        color: '#7A6276',
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 4, 
                        
                    }}
                    />

                </View>
            </View>    

            <View style={styles.botoesInferiores}> 
            <Pressable onPress={() => navigation.navigate('TelaRecuperacaoSenha')}>

                <View style={{
                    //flex: 5,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>

                    <View style={{
                        textAlign: 'center',
                        color: '#3C3838',
                        fontWeight: 'regular',
                        marginBottom: 10,
                        marginTop: 10
                    }}>

                        <Text>esqueceu a senha?</Text>
                    </View>

                </View>

            </Pressable>

            
            <Pressable onPress={() => navigation.navigate('NavigatorTabs')}
                style={{
                    backgroundColor: '#7A6276',
                    borderRadius: 4,
                    alignSelf: 'center',
                    width: 120,
                    //height: 30,
                    padding: 10,
                    //
                    //alignItems: 'center' 
                }}>
            <View style={{}}>

                <Text style={{ color: 'white',  textAlign: 'center', fontSize: 25 }}>entrar</Text>

            </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('TelaCadastro')}

                style={{
                    textAlign: 'center',
                    color: '#7A6276',
                    fontWeight: 'regular',
                    marginTop: 10
                }}>

                <Text
                    style={{
                        backgroundColor: 'white',
                        paddingLeft: 110,
                        paddingRight: 110,
                        marginBottom: 10
                    }}>
                    criar conta
                </Text>

            </Pressable>
        </View>
        


    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'

    },
    cssLogo: {
       // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: Constants.statusBarHeight
    },
    containerPrincipal:{
        //flex: 2, 
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'flex-end',
      //  marginTop: 350
    },
    botoesInferiores:{
        alignSelf: 'center'
    }

});