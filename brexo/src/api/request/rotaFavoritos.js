import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const IP = "192.168.3.10";
const baseUrl = `http://${IP}:3000`;

export async function InsertFavorito({ id, ...rest }) {
  const user = await AsyncStorage.getItem("userBrexo").then((data) =>
    JSON.parse(data)
  );
  return await axios
    .post(`${baseUrl}/adicionarFavoritos`, {
      id_usuario: user.id_usuario,
      id_produto: id,
      ...rest,
    })
    .then((res) => res);
}

export async function ListarFavorito({ id_usuario }) {
  console.log(id_usuario);
  return await axios.post(`${baseUrl}/listarFavoritos`, {
    id_usuario: id_usuario
  }).then((res) => res);
}

export async function deletarItemFavorito(produtoId) {
  try {
    await axios.delete(`${baseUrl}/deletarItemFavoritado`, {
      data: { id_produto: produtoId },
    });
    // Aqui você pode adicionar lógica adicional, se necessário, após a exclusão bem-sucedida
  } catch (error) {
    console.error("Erro ao remover item favorito:", error);
    throw error; // Se preferir tratar o erro no componente, pode lançá-lo aqui
  }
}