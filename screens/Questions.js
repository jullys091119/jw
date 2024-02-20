import React, { useState, useEffect } from "react";
import Accordion from "../components/Acordion";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { readData } from "../firebase";

const Questions = () => {
  const [data, setData] = useState({});
  const [question, setQuestion] = useState('')
  const [answers,setAnswers] = useState("")
  
  const gettingPublications = async () => {
    const data = await readData();
     data.forEach((e)=> {e.questions, "questios"})
    setData(data);
  };

  useEffect(() => {
    gettingPublications();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text style={styles.title}>Preguntas frecuentes</Text>
        <View style={styles.container}>
          {Object.keys(data).map((el, index) => {  
            return (
                <View key={data[el].id}>
                    <Accordion question={data[el].questions} answers={answers[index]} />
                </View>
            )
                
                
          })}
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
    marginTop: 20,
    marginLeft: 13,
  },
});

export default Questions;
