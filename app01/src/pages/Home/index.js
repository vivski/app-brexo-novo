import {StyleSheet, Text, View} from 'react-native';
export default function Home(){
    return (
        <View style={styles.container}>
            <Text> aqui será a tela inicial do aplicativo </Text>
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