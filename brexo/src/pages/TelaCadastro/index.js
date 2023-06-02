import {StyleSheet, Text, View, Pressable, Image, TextInput} from 'react-native';
import Constants from 'expo-constants';
// import Logo from '../../components/Logo';
import Logo from '../../components/img/brexo-logo.png';


export default function TelaLogin({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.cssLogo}>
            <Image style={{width: 300, height:200}} source={Logo}/>
            </View>
        
        <View style={{flex: 1, backgroundColor: '#ffff', alignItems: 'center', justifyContent: 'flex-end'}}>
            <View>
                <Text>e-mail:</Text>
                <TextInput style={{ background: '#fff',borderWidth: 1, width: 240, color: '#666464', borderRadius: 4, padding: 10, marginBottom: 4}}/>
            </View>

            <View>
                <Text style={{marginTop:10}}>senha:</Text>
                <TextInput style={{ background: '#fff',borderWidth: 1, width: 240, textAlign: 'start', color: '#666464', borderRadius: 4, padding: 10, marginBottom: 4}} secureTextEntry={'true'}/>
            </View>
        </View>

            <View>
                <Text style={{marginTop:10, textAlign: 'center' }}>confirmar senha:</Text>
                <TextInput style={{ background: '#fff',borderWidth: 1, width: 240, textAlign: 'start', color: '#666464', borderRadius: 4, padding: 10, marginBottom: 4}} secureTextEntry={'true'}/>
            </View>

            <Pressable onPress={() => navigation.navigate('TelaLogin')}
             style={{backgroundColor: '#666464', 
             textAlign: 'center', 
             borderRadius: 4, width: 100, 
             height: 30, 
             justifyContent: 'center', 
             alignItems: 'center'}}>

            <Text style={{color: "white"}}>cadastrar</Text>

            </Pressable>

            <View 
            style={{backgroundColor: 'white', 
            paddingLeft: 110, 
            paddingRight: 110, 
            marginBottom: 10}}>
                
            </View>
        </View>
    );
    
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         backgroundColor:'#fff'
    
        },
        cssLogo:{
            flex:6,
            flexDirection: 'row',
            backgroundColor:'#ffff',
            alignItems:'center',
            justifyContent:'space-around',
            marginTop: Constants.statusBarHeight
        },
        
    });