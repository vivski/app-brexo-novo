import axios from "axios"
const IP_vivian = "192.168.0.104"
const IP_jhon = "192.168.0.4"
const baseUrl = `http://${IP_jhon}:3000`

const requisicaorotaUsuario = {
    async login({dadosUsuario}){
         return await axios.post(`${baseUrl}/login`,{...dadosUsuario})
    },

    async cadastro({dadosUsuario}){
        return await axios.post(`${baseUrl}/cadastro`,{...dadosUsuario})
    }
}

export default requisicaorotaUsuario;