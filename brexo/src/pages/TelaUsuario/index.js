import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function TelaUsuario(){
    const navigation = useNavigation();
    const botaoFavoritos = () => {
    navigation.navigate('TelaFavoritos');
    };

    const botaoCompras = () => {
    navigation.navigate('TelaCompras'); //está funcionando corretamente
    };

    const botaoLogout = () => {
        navigation.navigate('TelaLogin'); //teste
        };

    return( 
    <View style={styles.container}>
    
    <View>
    <Image
    style={{width: 190, height: 190 }}
    source={{uri: 'https://raw.githubusercontent.com/vivski/app-brexo-novo/main/brexo/assets/img/IconePadraoUsuario.png' }}
    />
    <View>
    <Text style={styles.emailText}> aqui será exibido o e-mail. </Text>
    </View>
    </View>


    <View style={styles.touchableOpacity}>
    <TouchableOpacity onPress={botaoFavoritos}>
    <View style={styles.iconeContainer}>
    <IconButton icon="heart" color="#05894" size={40} />
    <Text style={styles.iconeTexto}> Favoritos </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={botaoCompras} >
    <View style={styles.iconeContainer}>
    <IconButton icon="bag-personal" color="#05894" size={40} />
    <Text style={styles.iconeTexto}> Compras </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={botaoLogout} >
    <View style={styles.iconeContainer}>
    <IconButton icon="logout" color="#05894" size={40} />
    <Text style={styles.iconeTexto}> Sair </Text>
    </View>
    </TouchableOpacity>
    </View>
    
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',  //configurações do ícone de perfil padrão do usuário e texto de em-mail
      alignItems: 'center',
      marginTop:30
    
    },
    touchableOpacity:{
        alignSelf: 'flex-end',
        marginTop:80, //distancia dos botões do topo da tela
        marginRight:200 //posicionamento dos botões no canto da tela

    },

    iconeContainer: {
        flexDirection: 'row',
        alignItems: 'center', //alinha os icones no centro da página
    
    },
    iconeTexto: {
        marginLeft: 1, 
        fontSize:30// Espaçamento entre o ícone e o texto
    },
    emailText: {
        fontSize: 20, // Ajuste o tamanho da fonte conforme necessário
        fontWeight: 'bold', // Define o texto em negrito
        color: 'black', // Altera a cor do texto
    }

  });