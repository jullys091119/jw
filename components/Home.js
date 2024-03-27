import { useContext } from "react";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { modeBlackContext } from "../context/context";
import { readData, readChristianMinistry } from "../firebase";
import { CardSettingPublication, SearchContent } from "./NativePaper";
import { IconSunOn, LogoJw } from "../components/NativePaper";
import { settingQuestions } from "../context/questionsProvider";



const Home = () => {
  const { modeColor, getValueModeColor } = useContext(modeBlackContext);
  const { setQuestions} = useContext(settingQuestions); 
  const [data, setData] = useState({});
  
  const gettingPublications = async () => {
    const publications  = await readData()
    const formattedData = publications.map((publication,index) => ({
      id: publication.id,
      title: publication.title,
      questions: JSON.parse(publication.questions),//fallaste aqui agusado
      img: publication.img[index].attributes.uri.url,
    }));
    setQuestions(formattedData)
    setData(formattedData);
    
  };                                                 
  const SetCardPublication = () => (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item,index }) => (
          <CardSettingPublication
            id={item.id}
            titulo={item.title}
            imagen={item.img}
          />
        )}
      />
    </SafeAreaView>
  );

  useEffect(() => {
    getValueModeColor();
    gettingPublications(); 
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.headerHome}>
          <LogoJw/>
         <IconSunOn/>
        </View>
      </SafeAreaView>

      <View style={[styles.container, { backgroundColor: `${modeColor}` }]}>
        <SearchContent />
        <View
          style={[styles.containerCards, { backgroundColor: `${modeColor}` }]}
        >
          <Text
            style={[modeColor == "#333333" ? styles.titleColor : styles.title]}
          >
            Publicaciones
          </Text>
          <SetCardPublication />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 4,
    fontFamily: "righteous",
  },

  containerCards: {
    display: "flex",
    backgroundColor: "white",
    height: 370,
    marginVertical: 50,
  },

  title: {
    fontSize: 25,
    marginHorizontal: 20,
    marginVertical: 30,
    maxWidth: 200,
    color: "#333333",
    fontFamily: "merri",
  },

  titleColor: {
    color: "white",
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 30,
    fontFamily: "merri",
  },

  headerHome: {
    backgroundColor: "#800080",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  },
});

export default Home;
