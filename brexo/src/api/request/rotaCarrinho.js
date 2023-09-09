import axios from "axios"
const baseUrl = "http://localhost:3000"

const requisicaorotaCarrinho = {

    async pegarElistarCarrinho(){
        return await axios.get(`${baseUrl}/listarCarrinho`)
    }
}

export default requisicaorotaCarrinho;