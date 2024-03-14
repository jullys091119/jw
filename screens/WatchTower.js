import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { watchTowerTopics } from "../firebase"
import Accordion from "../components/Acordion"

const WatchTower =  () => {
	const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataObj = await watchTowerTopics();
      const values = Object.values(dataObj)
      setData(values)
    };
    fetchData();
  }, []);

	return (
		<View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Respuesta Revista Atalaya</Text>
      </View>
			{
				data.map((question, index) => {
        return(
          <View style={styles.container} key={index}>
           <ScrollView>
              <Accordion
                questions={question.pregunta}
                answers={question.respuesta}
                key={index}
              />
            </ScrollView>
          </View>
        )
				})
			}
		</View>
	);
};

const styles = StyleSheet.create({

containerAcordion: {
 borderWidth: 2
},

containerTitle: {
 marginTop: 50,
},

title: {
 fontSize: 25,
 textAlign:"center",
 paddingVertical: 18
},
})

export default WatchTower