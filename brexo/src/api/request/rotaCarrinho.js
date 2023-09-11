import axios from "axios"

const IP_vivian = "192.168.0.104"
const IP__jhon = "192.168.0.4"
const baseUrl = `http://${IP__jhon}:3000`

const requisicaorotaCarrinho = {

    async pegarElistarCarrinho(){
        return await axios.get(`${baseUrl}/listarCarrinho`)
    }
}

export default requisicaorotaCarrinho;