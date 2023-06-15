import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native"
import { FlatList } from "react-native-web";

function TelaProdutos({route}){

const idCategoria = route.params.id;

const [produtos, setProdutos] = useState([]);
// linha pro codigo
 const Produtos = ({nome, imagem}) => (
<View>
    <Pressable onPress={ () => {}}>
    {/* navigation.navigate("TelaProdutos", {id:id})  */}
            {/* <Image source={{uri:imagem}}/> */}
            <Text> {nome}</Text>

    </Pressable>
</View>

    );

    useEffect(() =>{
        const load = async() => {
            const resultApi = await fetch('https://6480b615f061e6ec4d49bfea.mockapi.io/produtos')
            const data = await resultApi.json();
          
            let result = data.filter(p =>p.idcategoria == idCategoria)
                .map(({ nome, preco, imagem }) => ({
                    nome: nome,
                    preco: preco,
                    imagem: imagem
            }));

            console.log(result.length);

            setProdutos(result);
        }

        load();
    }, []);

return(
    <View> 
<View>
    <FlatList
        data={produtos}
        numColumns={2}
        renderItem={({item}) => (
        <Produtos 
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}/>
        )}
    />    
    </View>
    </View>
)
}
export default TelaProdutos;