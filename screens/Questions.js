import React, { useState, useEffect } from "react";
import Accordion from "../components/Acordion";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";


const Questions = ({ route }) => {
  const { pregunta,respuestas } = route.params || {}; // Asegúrate de que route.params sea un objeto

  useEffect(() => {
  }, [pregunta]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text style={styles.title}>Preguntas frecuentes</Text>
        <View style={styles.container}>
          {pregunta &&
            pregunta.map((item, index) => (
              <Accordion
                key={index}
                questions={item}
                answers={respuestas[index]}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontFamily: "merri",
    fontSize: 26,
    marginTop: 50,
    textAlign: "center"
  },
});

export default Questions;
