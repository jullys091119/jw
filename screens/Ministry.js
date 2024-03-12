import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { readChristianMinistry } from "../firebase";
import Accordion from "../components/Acordion";
import { AvatarBible } from "../components/NativePaper";

const Ministry = () => {
  const [dataMinistry, setDataMinistry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await readChristianMinistry();
		  const value = Object.values(data)
			setDataMinistry(value)
    };

    fetchData();
  }, []);

	return (
		<>
		<View style={styles.containerTitle}>
			<Text style={styles.title}>Perlas Escondidas</Text>
		</View>
	  <ScrollView>
  {dataMinistry.map((text, index) => {
    return (
      <View key={index}>
        <Accordion
          questions={text.texto}
          answers={text.respuesta}
          key={index}
        />
        <AvatarBible />
      </View>
    );
  })}
</ScrollView>

		</>
	);
}

const styles = StyleSheet.create({
	container: {
	 backgroundColor: "red"
 	},
	title: {
		fontSize: 24
	},
	containerTitle: {
		marginTop: 40,
		marginHorizontal:10
	},
	title: {
		fontSize: 25,
		textAlign:"center",
		paddingVertical: 18
	},

});

export default Ministry;
