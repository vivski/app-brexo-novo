import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import requisicaorotaUsuario from "../../api/request/rotaUsuario";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaLogin() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function lidarComOlogin() {
    //return navigation.navigate("NavigatorTabs"); //se logado

    try {
      await AsyncStorage.clear();

      const { data } = await requisicaorotaUsuario
        .login({ dadosUsuario: { email: email, senha: senha } })
        .then((res) => res);

      await AsyncStorage.setItem("userBrexo", JSON.stringify(data));

      if (data) {
        navigation.navigate("NavigatorTabs"); //se logado
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cssLogo}>
        <Logo />
      </View>

      <View style={styles.containerPrincipal}>
        <View>
          <Text style={{ fontSize: 16 }}>e-mail:</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              width: 240,
              color: "#7A6276",
              borderRadius: 4,
              padding: 10,
              marginBottom: 4,
            }}
          />
        </View>

        <View>
          <Text style={{ marginTop: 10, fontSize: 16 }}>senha:</Text>

          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              width: 240,
              textAlign: "left",
              color: "#7A6276",
              borderRadius: 4,
              padding: 10,
              marginBottom: 4,
            }}
          />
        </View>
      </View>

      <View style={styles.botoesInferiores}>
        <Pressable onPress={() => navigation.navigate("TelaRecuperacaoSenha")}>
          <View
            style={{
              //flex: 5,
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                textAlign: "center",
                color: "#3C3838",
                fontWeight: "regular",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>esqueceu a senha?</Text>
            </View>
          </View>
        </Pressable>

        <Pressable
          onPress={lidarComOlogin}
          style={{
            backgroundColor: "#7A6276",
            borderRadius: 4,
            alignSelf: "center",
            width: 120,
            //height: 30,
            padding: 10,
            //alignItems: 'center'
          }}
        >
          <View style={{}}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>
              entrar
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("TelaCadastro")}
          style={{
            textAlign: "center",
            color: "#7A6276",
            fontWeight: "regular",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "white",
              paddingLeft: 110,
              paddingRight: 110,
              marginBottom: 10,
              fontSize: 16,
            }}
          >
            criar conta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cssLogo: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: Constants.statusBarHeight,
  },
  containerPrincipal: {
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  botoesInferiores: {
    alignSelf: "center",
  },
});
