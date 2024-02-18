import { useContext } from 'react'
import React, {useEffect, useState } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native'
import { modeBlackContext } from '../context/context'
import { readData } from '../firebase';
import { CardSettingPublication } from './NativePaper';

const Home =  () => {
  const {modeColor,getValueModeColor} = useContext(modeBlackContext)
  const [data,setData] = useState({})

  const gettingPublications = async () => {
    const  data = await readData()
    console.log(data)
    setData(data)
  }

  const SetCardPublication = () => (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <CardSettingPublication  
             titulo={item.titulo}
             imagen={item.imagen}
            />
          </>
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
    <SetCardPublication/>
   </View>
  )
}

const styles = StyleSheet.create({
 container: {
  flex:1,
 },
 tinyLogo: {
   width: 130,
   height: 130
 }
})

export default Home