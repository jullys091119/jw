import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { watchTowerTopics } from "../firebase";
import Accordion from "../components/Acordion";



const WatchTower = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const dataObj = await watchTowerTopics();
      const values = Object.values(dataObj);
      setData(values);
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Respuesta Revista Atalaya</Text>
        </View>
        {data.map((question, index) => {
          return (
            <Accordion
            key={index}
            questions={question.pregunta}
            answers={question.respuesta}
            paragraphs={question.parrafo}
            />
          )
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20, // Padding to prevent content from sticking to the bottom
  },
  containerTitle: {
    marginTop: 50,
    marginBottom: 20, // Add some bottom margin for better spacing
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 18,
    color: "#800080",
    fontWeight: "800"
  },
});

export default WatchTower;
