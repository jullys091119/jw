import { useContext } from 'react'
import React, {useEffect, useState } from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { modeBlackContext } from '../context/context'

const Home =  () => {
  const {modeColor,getValueModeColor} = useContext(modeBlackContext)

  useEffect(()=> {
    getValueModeColor()
  },[])
  return (
   <View style={[styles.container, {backgroundColor:`${modeColor}`}]}>
    
   </View>
  )
}

const styles = StyleSheet.create({
 container: {
  flex:1,
 }
})

export default Home