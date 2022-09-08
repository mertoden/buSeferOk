import React from "react";
import { SafeAreaView, View, Text, Button,TouchableOpacity, StyleSheet } from "react-native";
import Card from "./components/Card";
function App() {

  return (
  <SafeAreaView style={styles.container}>
    <Card title = "asahin25" text="Deneme Yazısıdır."/>
    <Card title = "naytar" text="Deneme Yazısıdır."/>
    <Card title = "myildi90" text="Deneme Yazısıdır."/>
    <Card title = "ecanci" text="Deneme Yazısıdır."/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  
});

export default App;
