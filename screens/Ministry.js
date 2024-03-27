import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { readChristianMinistry, studyBook } from "../firebase";
import Accordion from "../components/Acordion";
import { AvatarBible } from "../components/NativePaper";
import Constants from 'expo-constants';
const API_URL = Constants.expoConfig.extra.build.production.env.EXPO_PUBLIC_API_URL;

const Ministry = () => {

  //perlas espirituales
  const [dataMinistry, setDataMinistry] = useState([]);

  const [showMinistryTexts, setShowMinistryTexts] = useState(false);

  const [topic1, setTopic1] = useState([])

  const [image, setImage] = useState('')
  const  [imageVisible, setImageVisible] = useState(false)
  const [showBooksquestions, setShowBooksQuestions] = useState(false);
  const [book, setBook] = useState([])
  const [questionsBook, setQuestionBook] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await readChristianMinistry();
      const bookData = await studyBook();
      const value = Object.values(data)
      const ministry = value.map((data) => { return data })
      const lastIndex = bookData.length -1
      ministry.map((img, index)=> {
        setImage(img.img)
        setDataMinistry(JSON.parse(ministry[index].pearls))
        setTopic1(JSON.parse(ministry[index].topic1))
        setBook([bookData[lastIndex]])
        setQuestionBook(bookData[lastIndex].questions)
      })
    };
    fetchData();
  }, []);

  const renderQuestions = (data) => {
    return data.map((question, index) => {
      return (
        <View style={styles.topic1} key={index}>
          <Accordion
            questions={question.pregunta}
            answers={question.respuesta}
            key={`pregunta-${index}`}
          />
        </View>
      );
    });
  };

  const hiddePictureBible = () => {
    setShowMinistryTexts(!showMinistryTexts)
    setImageVisible(!imageVisible)
  }

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
    return book.map((data, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => { setShowBooksQuestions(!showBooksquestions) }}>
          <View style={{ marginVertical: 20 }}>
            <View style={styles.containerDataBook}>
              <View>
                <Image source={{ uri: `${API_URL}${data.img}` }} width={100} height={130} style={styles.book} />
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
      <ScrollView style={{ marginHorizontal: 0, backgroundColor: "#e6e6e6" }}>
        {image && <Image source={{ uri: `${API_URL}${image}` }} width={340} height={190} style={{ alignSelf: "center", marginVertical: 10, borderRadius: 8 }} />}
        {renderQuestions(topic1)}
        <TouchableOpacity onPress={() => hiddePictureBible()} style={styles.containerHiddenPearls}>
          <Text style={styles.foundPearlsTitle}>
            ¿Qué perlas espirituales has encontrado en tu lectura bíblica de esta semana?
          </Text>
          {!imageVisible && <Image source={require('../img/biblia.jpg')} style={styles.pictureBible}/>}
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
    marginHorizontal: 10
  },
  containerHiddenPearls: {
   display: "flex",
   flexDirection: "row",
   marginVertical: 20,
   backgroundColor: "white",
   padding: 17,
   marginHorizontal: 10,
   borderRadius:9
  },
  topic1: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    borderRadius:9,
    marginVertical: 12
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 18
  },
  foundPearlsTitle: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    maxWidth: 200,
    fontFamily: "merri"
  },

  titleBook: {
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: "merri",
    marginVertical: 15
  },

  containerDataBook: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    borderRadius:9
  },

  dataBookInfo: {
    maxWidth: 200,
    marginHorizontal: 10
  },

  chapter: {
    fontFamily: "merri"
  },

  titleChapter: {
    textAlign: "left",
    fontFamily: "merri"
  },

  subtitle: {
    fontFamily: "merri"
  },

  reference: {
    marginVertical: 6,
    fontSize: 15,
    fontFamily: "merri"
  }, 

  pictureBible: {
   width: 70,
   height: 100,
   marginHorizontal: 10
  }

});

export default Ministry;
