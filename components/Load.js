import React, {useCallback,useState,useEffect} from 'react'
import {Text, Image, StyleSheet, View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LoadIicon } from './NativePaper';
import * as Font from 'expo-font';

const Load = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    const prepare = async () => {
      try {
        const loadFonts = async () => {
          return Font.loadAsync({
            'righteous': require('../assets/fonts/Righteous-Regular.ttf'),
            'poiret': require('../assets/fonts/PoiretOne-Regular.ttf'),
            'merri': require('../assets/fonts/MerriweatherSans-VariableFont_wght.ttf'),
          });
        };
    
        await loadFonts();
        await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5 segundos
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare()
  }, []);

   


  if (!appIsReady) {
    return null; // or render a loading indicator
  } 

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.animatableLogo}>
            <Image 
            style={{width: 120, height: 120}}
            source={require('../img/logo.png')} />  
        </Animatable.Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>Mi estudio personal</Text>
          <Text style={styles.textNombre}>Julián Ontiveros Ramírez</Text>
        </View>        
      </View>
     <LoadIicon/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800080',
    height: '100%',
  },
  iconLoad: {
    backgroundColor:"red"
  },
  contain: {
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },

  animatableLogo : {
    height: 200,
    display: 'flex',
  },

  textNombre: {
    fontSize:10,
    color: 'white',
    fontFamily: "poiret"
  },

  text: {
    fontSize: 24,
    color: "white",
    fontFamily: 'merri',
    textAlign:'center',
    marginTop:22
  }
})
export default Load
