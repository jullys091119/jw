import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from "react-native";
import { readChristianMinistry, studyBook } from "../firebase";
import Accordion from "../components/Acordion";
import { AvatarBible } from "../components/NativePaper";
import {API_URL} from '@env'

const Ministry = () => {
  const [dataMinistry, setDataMinistry] = useState([]);
  const [data, setData] = useState([])
  const [image, setImage] = useState('')
	const [showMinistryTexts, setShowMinistryTexts] = useState(false);
	const [showBooksquestions, setShowBooksQuestions] = useState(false);
	const [book, setBook] = useState([])
	const [questionsBook, setQuestionBook] = useState([])

  useEffect(() => {
		const fetchData = async () => {
			const data = await readChristianMinistry();
			const bookData = await studyBook();
		  const value = Object.values(data[0])
	    const value2 = data[1]
      setImage(`${API_URL}${data[2]}`)
		  setDataMinistry(value)
		  setData(value2)
			setBook(bookData)
		  const value3 = 	bookData.map((callback)=> { return callback.questions})
			 setQuestionBook(value3[0])
    };
    fetchData();
  }, []);
	const renderQuestions = (data) => {
    return data.map((question, index) => {
        return (
					<Accordion
						questions={question.pregunta}
						answers={question.respuesta}
						key={`pregunta-${index}`}
					/>
        );
    });
  };
	const renderMinistryTexts = (dataMinistry) => {
		return dataMinistry.map((text, index) => {
			return (
				<View key={index}>
					<Accordion questions={text.texto} answers={text.respuesta} />
					<AvatarBible />
				</View>
			);
		});
	};
	const renderQuestionsStudyBook = () => {
			return questionsBook.map((question, index) => {
				return (
					<Accordion
						questions={question.pregunta}
						answers={question.respuesta}
						key={`pregunta-${index}`}
					/>
				);
		});
	}

	const renderStudyBook = (book) => {
		return  book.map((data, index)=> {
			return (
				<TouchableOpacity  key={index}  onPress={()=> {setShowBooksQuestions(!showBooksquestions)}}>
					<View style={{marginVertical: 40}}>
						<View style={styles.containerDataBook}>
							<View>
								<Image source={{uri: `${API_URL}${data.img}`}} width={100} height={130} style={styles.book}/>
							</View>
							<View style={styles.dataBookInfo}>
								<Text style={styles.chapter}>Capitulo {data.chapter}</Text>
								<Text style={styles.titleChapter}>{data.titleChapter}</Text>
								<Text style={styles.subtitle}>{data.subtitle}</Text>
								<Text style={styles.reference}>{data.reference}</Text>
							</View>
							</View>
					</View>
				</TouchableOpacity>
			)
		})
	}

  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Perlas Escondidas</Text>
      </View>
      <ScrollView style={{ marginHorizontal: 0 }}>
        {image && <Image source={{ uri: image }} width={340} height={200} style={{ alignSelf: "center", marginVertical: 10, borderRadius: 8 }} />}
        {renderQuestions(data)}
        <TouchableOpacity onPress={() => setShowMinistryTexts(!showMinistryTexts)}>
          <Text style={styles.foundPearlsTitle}>
            ¿Qué perlas espirituales has encontrado en tu lectura bíblica de esta semana?
          </Text>
        </TouchableOpacity>
        {showMinistryTexts && renderMinistryTexts(dataMinistry)}
				{renderStudyBook(book)}
				{showBooksquestions && renderQuestionsStudyBook()}
			
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
	foundPearlsTitle: {
		fontSize: 18,
		marginHorizontal: 10,
		marginVertical: 20,
		maxWidth: 300,
		fontFamily: "merri"
	}, 
	book: {
	marginHorizontal: 10
	},
	titleBook: {
		fontSize: 20,
		marginHorizontal: 10,
		fontFamily: "merri",
		marginVertical: 15
	},
	containerDataBook: {
		display: "flex",
		flexDirection:  "row"
	},
	dataBookInfo: {
	  maxWidth: 230
	},
	chapter: {
		fontWeight: "900",
		marginVertical: 10
	}, 
	titleChapter: {
		fontWeight: "900",
		textAlign: "left"
	}, 
	subtitle: {
		fontWeight: "900",
	},
	reference: {
		marginVertical: 6,
		fontSize: 15,
		fontWeight: "900"
	}

});

export default Ministry;
