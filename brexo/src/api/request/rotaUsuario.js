import axios from "axios"
const baseUrl = "http://192.168.0.104:3000"


const requisicaorotaUsuario = {

    async login({dadosUsuario}){
        // return await axios.get(`${baseUrl}/login`,{...dadosUsuario})
    },
    async cadastro({dadosUsuario}){
        return await axios.post(`${baseUrl}/cadastro`,{...dadosUsuario})
    }
}

export default requisicaorotaUsuario;