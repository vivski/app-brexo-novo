import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const IP = "192.168.0.104"

const baseUrl = `http://${IP}:3000`

const requisicaorotaCarrinho = {

    async pegarElistarCarrinho({id_usuario}){
        return await axios.post(`${baseUrl}/listarCarrinho`, {id_usuario : id_usuario}).then(res => res)
    },
    async InsertCarrinho({ id, ...rest }){
        const user = await AsyncStorage.getItem("userBrexo").then( (data) => JSON.parse(data) )
        console.log(user)
        return await axios.post(`${baseUrl}/criarCarrinho`, {
            id_usuario: user.id_usuario,
            id_produto: id,
            quantidade : 1,
            ...rest,
        }).then(res => res )
    },
    async deletarItemCarrinho(id_produto){
        console.log(id_produto)
    return await axios.delete(`${baseUrl}/deletarItemCarrinho/${id_produto}`, {
     
    })
    }
}


export default requisicaorotaCarrinho;