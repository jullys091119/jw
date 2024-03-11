import React from "react";
import Accordion from "../components/Acordion";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
const Questions = ({ route }) => {
  const { id, questions} = route.params || {};
return (
  <SafeAreaView style={{ flex: 1, padding: 20 }}>
    <ScrollView>
      <Text style={styles.title}>Preguntas frecuentes</Text>
      <View style={styles.container}>
        {
          // Encontrar el objeto de pregunta específico por el id
          questions.find(item => item.id === id)?.questions?.map((question, index) => {
            console.log(question, "questions acordeon")
            return(
              <Accordion
                key={index}
                questions={question.pregunta}
                answers={question.respuesta}
              />

            )
          })
        }
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
