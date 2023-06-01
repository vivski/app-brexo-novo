import {StyleSheet, Text, View, Pressable} from 'react-native';
import Constants from 'expo-constants';
import Logo from '../../components/Logo';

export default function Home({navigation}){
    return (
        <View style={styles.container}>
        <Logo/>
            <View>
                <Text>e-mail:</Text>
            </View>

            <View>
                <Text>senha:</Text>
            </View>

            <View>
                <Text>esqueceu a senha?</Text>
            </View>

            <Pressable>
                <Text>entrar</Text>
            </Pressable>

            <View>
                <Text>criar conta</Text>
            </View>
        </View>
    );
    
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         backgroundColor:'#fff'
    
        },
    });