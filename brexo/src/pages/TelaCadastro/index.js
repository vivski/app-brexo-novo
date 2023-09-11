import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import Logo from "../../components/Logo";
import { useState } from "react";
import requisicaorotaUsuario from "../../api/request/rotaUsuario";
//  import Logo from '../../../components/img/brexo-logo.png';

export default function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmSenha, setConfirmSenha] = useState();

  async function Cadastrar() {
    if (senha != confirmSenha) {
      return;
    }

    try {
      const result = await requisicaorotaUsuario.cadastro({
        dadosUsuario: { email: email, senha: senha },
      });
      if (result.data) {
        setTimeout(() => {
          navigation.navigate("TelaLogin");
        }, 1000); //1seg
      }
    } catch (error) {}
  }
  return (
    <View style={styles.container}>
      <View style={styles.cssLogo}>
        <Logo />
      </View>

      <View
        style={{
          backgroundColor: "#ffff",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}> e-mail:</Text>
          <TextInput
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              width: 240,
              color: "#B2A5A1",
              borderRadius: 4,
              padding: 10,
              marginBottom: 4,
            }}
          />
        </View>

        <View>
          <Text style={{ marginTop: 10, fontSize: 16 }}>senha:</Text>
          <TextInput
            onChangeText={(text) => {
              setSenha(text);
            }}
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              width: 240,
              textAlign: "center",
              color: "#B2A5A1",
              borderRadius: 4,
              padding: 10,
              marginBottom: 4,
            }}
            secureTextEntry={true}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#ffff",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ marginTop: 10, fontSize: 16 }}>confirmar senha:</Text>
        <TextInput
          onChangeText={(text) => {
            setConfirmSenha(text);
          }}
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            width: 240,
            textAlign: "center",
            color: "#B2A5A1",
            borderRadius: 4,
            padding: 10,
            marginBottom: 4,
          }}
          secureTextEntry={true}
        />
      </View>

      <Pressable
        onPress={() => Cadastrar()}
        style={{
          backgroundColor: "#7A6276",
          borderRadius: 4,
          alignSelf: "center",
          width: 120,
          padding: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
          cadastrar
        </Text>
      </Pressable>

      <View
        style={{
          backgroundColor: "white",
          paddingLeft: 110,
          paddingRight: 110,
          marginBottom: 10,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },
  cssLogo: {
    backgroundColor: "#fff",
    flexDirection: "row",
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 200,
  },
});
