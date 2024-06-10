import { IconChevronDown,IconSizeLetters,IconRead,Paragraphs } from "./NativePaper";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text, LayoutAnimation} from "react-native";
import { Tooltip } from "react-native-paper";
import Slider from "@react-native-community/slider";




const Accordion = ({ questions, answers,  paragraphs }) => {
  const [opened, setOpened] = useState(false);
  const [tooltip,  setTooltip] = useState("")
  const [size, setSize] = useState(16)
  const [visible, setVisible] = useState(false);

  function toggleAccordion() {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: 'easeIn', property: 'opacity' },
      update: { type: 'linear', springDamping: 0.3, duration: 250 },
    });
    setOpened(!opened);
  }

  const ReturnTexts = () => {
    const regex = /\b[A-Za-záéíóú]+\s+\d+:\d+\b/g;
    const versiculos = answers.match(regex);
    if(versiculos !== null) {
      return (
        <>
          {versiculos.map((versiculo, index) => (
            <Tooltip title="Click para ver" key={index}>
              <Text style={[styles.details, styles.tooltip]}>{versiculo}</Text>
            </Tooltip>
          ))}
        </>
      )

    }
  }
  
  const doBiggerLetter = (size) => {
    setSize(size);
  };

  const openParagaphs = () => {
    setVisible(!visible);
  };
  
  const ReturnAnswer = () => {
    return (
      <View style={styles.container}>
        <Text style={[styles.details, { fontSize: size }]}>{answers}</Text>
      </View>  
    );
  };

  return (
    <View style={styles.container}>
      <Paragraphs  visibleParagraphs={visible} paragraphs={paragraphs}/>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{questions}</Text>
          <IconChevronDown opened={opened} />
        </View>
      </TouchableWithoutFeedback>

      {opened && (
        <View style={styles.content}>
           <ReturnAnswer/>
            <View style= {styles.containerTooltip}>
            <IconSizeLetters/>
            <View style={{display: "flex", flexDirection: "row-reverse"}}>
              <Slider
                value={size}
                onValueChange={(value) => doBiggerLetter(value)}
                style={{ width: "100%" }}
                minimumValue={15}
                maximumValue={24}
                minimumTrackTintColor="white"
                maximumTrackTintColor="transparent"
                thumbTintColor="white"
              />
            </View>
           </View>
          <View style={{height: 90, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20}}>
             <TouchableOpacity onPress={()=> {openParagaphs()}}>
                <View style={styles.read}>
                  <IconRead />
                </View>
                <Text style={styles.txtMenu}>Leer</Text>
             </TouchableOpacity>
              <View>
                <View style={styles.read}>
                  <Text style={{fontSize: 10, color: "black", padding: 4, fontWeight: "800"}}>{size.toFixed()}px</Text>
                </View>
                <Text style={styles.txtMenu}>tamaño</Text>
              </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 6,
    backgroundColor: "#800080",
    padding: 9,
    position: "relative"
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  title: {
    fontWeight: "600",
    fontFamily: "merri",
    fontSize: 15,
    color:"white",
    maxWidth: 220,
    marginLeft: 10
  },
  content: {
   
  },
  details: {
    fontFamily: "merri",
    color: "white",
    lineHeight: 40
  },
  tooltip: {
    margin: 2,
    width: 130,
    padding: 6,
    borderRadius: 90,
    color: "#333333",
    textAlign: "center",
    fontSize: 10,
  }, 

  containerTooltip: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 2
  },

  read: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  txtMenu: {
    color: "white",
    textAlign: "center"
  }
});

export default Accordion;
