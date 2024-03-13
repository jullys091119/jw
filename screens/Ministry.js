import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { readChristianMinistry } from "../firebase";
import Accordion from "../components/Acordion";
import { AvatarBible } from "../components/NativePaper";
import {API_URL} from '@env'

const Ministry = () => {
  const [dataMinistry, setDataMinistry] = useState([]);
  const [data, setData] = useState([])
  const [image, setImage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const data = await readChristianMinistry();
		const value = Object.values(data[0])
	    const  value2 = data[1]
        setImage(`${API_URL}${data[2]}`)
		setDataMinistry(value)
		setData(value2)
    };
     
    fetchData();
  }, []);
	return (
	  <>
		<View style={styles.containerTitle}>
			<Text style={styles.title}>Perlas Escondidas</Text>
		</View>
	  <ScrollView style={{marginHorizontal:0}}>
		  <Image source={{uri: image}}  width='93%' height={300}  style={{alignSelf:"center"}} />
		{data.map((question, index) => {
			return (
				<View key={index}>
					<Accordion
						questions={question.pregunta}
						answers={question.respuesta}
					/>
				</View>
			);
		})}
		
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
