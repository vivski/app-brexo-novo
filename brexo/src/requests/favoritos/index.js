import axios from "axios";

const baseUrl = "http://192.168.0.104:3000"
export async function InsertFavorito ({produtosFavoritos}){
return(
    await axios.post(`${baseUrl}/adicionarFavoritos` , {
   ...produtosFavoritos
 }).then(res => res)
)
}

export async function ListarFavorito ({produtosFavoritos}){
  return(
      await axios.get(`${baseUrl}/listarFavoritos`).then(res => res)
  )
  }