import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

const App = () => {


  function say() {
    console.log('merhaba');
  }


  return (
  <SafeAreaView style={styles.upper_container}>
    <View style={styles.container}>
      <Text>Component yapısı</Text>
    </View>

        <Button
      onPress={say} 
      title="Click Me!!"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />

    <View style={styles.box}>
      <Text>
        MERT
      </Text>
    </View>

    <View style={styles.bottom_container}>
      <Text>
        Burayı Okuyorsun
      </Text>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upper_container: {
    flex: 1,
    backgroundColor: "#6495ed",
    flexDirection: "column",
    //justifyContent "space between" uzaklaştırabildiği kadar compnentleri birbirinden uzaklaştırır.
    //alignItems: x ekseninde hizalamaya yarar.
  },

  container: {
    flex: 1,
    backgroundColor: "red",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  bottom_container: {
    flex: 1,
    backgroundColor: "blue",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  box: {
    flex: 1,
    backgroundColor: "green",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  }
})
export default App;
