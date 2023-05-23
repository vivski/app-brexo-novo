import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../components/Logo';
export default function Home(){
    return (
        <View style={styles.container}>
        <Logo/>

        <Text> aqui será a tela inicial do aplicativo </Text>
        <Text> tela de login </Text>
        <Text> com ícones e botões </Text>
        <Text> bem vindo ao brexó </Text>
        </View>
    );
    
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         backgroundColor:'#fff'
    
        },
    });