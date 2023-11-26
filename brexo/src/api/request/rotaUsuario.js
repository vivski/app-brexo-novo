import axios from "axios"
const IP = "192.168.3.10"
const baseUrl = `http://${IP}:3000`

const requisicaorotaUsuario = {
    async login({dadosUsuario}){
         return await axios.post(`${baseUrl}/login`,{...dadosUsuario})
    },

    async cadastro({dadosUsuario}){
        return await axios.post(`${baseUrl}/cadastro`,{...dadosUsuario})
    }
}

export default requisicaorotaUsuario;