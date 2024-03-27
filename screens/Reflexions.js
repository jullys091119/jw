import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist';
import { getReflexionTimeLine } from '../firebase';
import Constants from 'expo-constants';
const API_URL = Constants.expoConfig.extra.build.production.env.EXPO_PUBLIC_API_URL;

const renderDetail = (rowData, sectionID, rowID) => {
  const arr = [rowData]
  let description = null;
  
  if (arr.length > 0) {
    arr.map((data)=> {
      description = (
        <>
          <Text style={[styles.title]}></Text>
          <Card style={styles.descriptionContainer}>
            {data.img && <Image source={{ uri: `${API_URL}${data.img}`}} style={styles.image} resizeMode='cover' />}
            <View style={{width: "100%", height: "100%", position: "absolute", backgroundColor: "#33333370", borderRadius: 12}}>
            <Text style={[styles.textDescription]}>{data.txt.value}</Text>
            <Text style={[styles.textDataBible]}>{data.txtBible}</Text>
            <Text style={[styles.date]}>27/10/87</Text>
            </View>
          </Card>
        </>
      );
    
     })
  }

  return (
    <View style={{ flex: 1, gap: 20 }}>
      {description}
    </View>
  );
}

const TimelineComponent = () => {
  const [reflexion, setReflexion] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getReflexionTimeLine()
      setReflexion(data)
    }
    fetchData()
  }, [])

  return (
    <>
    <View style={styles.container}>
    <Text style={styles.textReflexions}>Mis reflexiones</Text>
      <Timeline
        data={reflexion}
        renderDetail={renderDetail}
        style={styles.timeline}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginLeft: -60,
    paddingVertical: 60,
  },

  descriptionContainer: {
    flexDirection: 'row',
    alignContent: "flex-start",
    position: "relative",
    marginTop: -43,
    width: 300
  },
  
  image: {
    width: 340,
    height: 200,
    zIndex: 0,
    borderRadius: 12
  },

  textDescription: {
    flex: 1,
    flexWrap: 'wrap',
    position: "absolute",
    left: 20,
    top: 28,
    fontSize: 40,
    color: "white",
    fontFamily: "explora",
    fontWeight: "600",
    color: "white",
    zIndex: 1,
    width: 250,
    overflow: "hidden",
    lineHeight: 27,
    padding: 20,
  },
  textReflexions: {
    textAlign: "center",
    fontSize: 36,
    marginVertical: 17,
    marginLeft: 80,
    fontFamily: "poiret"
  },
  date: {
    position: "absolute",
    bottom: 0,
    right: 10,
    fontFamily: "explora",
    color: "white"
  },
  textDataBible: {
    position: "absolute",
    fontFamily: "explora",
    color: "white",
    top: 120,
    left: 30,
    fontSize:36
  }

});

export default TimelineComponent;
