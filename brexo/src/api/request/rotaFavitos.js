import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const IP_vivian = "192.168.0.104";
const IP__jhon = "192.168.0.4";
const baseUrl = `http://${IP__jhon}:3000`;

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
