import axios from "axios"

const IP = "192.168.0.104"

const baseUrl = `http://${IP}:3000`

const requisicaorotaCarrinho = {

    async pegarElistarCarrinho(){
        return await axios.get(`${baseUrl}/listarCarrinho`)
    }
}

export default requisicaorotaCarrinho;