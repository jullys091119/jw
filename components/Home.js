import { useContext } from 'react'
import React, {useEffect, useState } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image
} from 'react-native'
import { modeBlackContext } from '../context/context'
import { readData } from '../firebase';
import { CardSettingPublication,SearchContent } from './NativePaper';

const Home =  () => {
  const {modeColor,getValueModeColor} = useContext(modeBlackContext)
  const [data,setData] = useState({})

  const gettingPublications = async () => {
    const  data = await readData()
    setData(data)
  }
  console.log(modeColor, "Mode color")
  const SetCardPublication = () => (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <CardSettingPublication   
            titulo={item.titulo}
            imagen={item.imagen}
          />
        )}
        keyExtractor={item => item.titulo}
      />
    </SafeAreaView>
  );
  
  useEffect(()=> {
    getValueModeColor()
    gettingPublications()
  },[])
  return (
    <View style={[styles.container, {backgroundColor:`${modeColor}`}]}>
      <SearchContent/>
      <View style={[styles.containerCards, {backgroundColor:`${modeColor}`}]}>
      <Text style={[modeColor == "#333333"?styles.titleColor: styles.title]}>Publicaciones</Text>
        <SetCardPublication/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

 container: {
  display: "flex",
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: 4,
  fontFamily: "righteous"
 },

 containerCards:  {
  display: "flex",
  backgroundColor: "white",
  height: 370,
  marginVertical: 50
 }, 

 title: {
  fontSize: 25,
  marginHorizontal: 20,
  marginVertical: 30,
  maxWidth: 200,
  color: "#333333",
  fontFamily: "merri"
 },

 titleColor: {
  color: "white",
  fontSize: 30,
  marginHorizontal: 20,
  marginVertical: 30,
  fontFamily: "merri"
 }

})

export default Home