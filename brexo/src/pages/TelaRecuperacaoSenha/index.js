import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';
// import Logo from '../../../components/img/brexo-logo.png';


export default function TelaRecuperacaoDeSenha({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.cssLogo}>
                <Logo />
            </View>

            <View style={{
                backgroundColor: '#ffff',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <View>
                    <Text style={{ fontSize: 16 }}>nova senha:</Text>
                    <TextInput style={{
                        background: '#fff',
                        borderWidth: 1,
                        width: 240,
                        color: '#B2A5A1',
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 4
                    }} />
                </View>

                <View>
                    <Text style={{ marginTop: 10, fontSize: 16 }}>senha:</Text>
                    <TextInput style={{
                        background: '#fff',
                        borderWidth: 1,
                        width: 240,
                        textAlign: 'start',
                        color: '#B2A5A1',
                        borderRadius: 4,
                        padding: 10,
                        marginBottom: 4
                    }}
                        secureTextEntry={'true'} />
                </View>
            </View>

            <Pressable onPress={() => navigation.navigate('TelaLogin')}
                style={{
                    backgroundColor: '#7A6276',
                    borderRadius: 4,
                    alignSelf: 'center',
                    width: 120,
                    padding: 10,
                }}>

                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}> confirmar</Text>

            </Pressable>

            <View
                style={{
                    backgroundColor: 'white',
                    paddingLeft: 110,
                    paddingRight: 110,
                    marginBottom: 10
                }}>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
    },
    cssLogo: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 200
    },

});