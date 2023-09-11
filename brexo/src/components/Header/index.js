import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";

export default function Header() {
  const logo = require("../../../assets/img/brexo-logo.png");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue"
  },
  logo: {
    width: 150,
    height: 40,
  },
});
