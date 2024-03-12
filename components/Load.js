import React from 'react'
import {Text, Image, StyleSheet, View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LoadIicon } from './NativePaper';

const Load = () => {
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
  },

  text: {
    fontSize: 24,
    color: "white",
    // fontFamily: 'Lobster',
    textAlign:'center',
    marginTop:22
  }
})
export default Load