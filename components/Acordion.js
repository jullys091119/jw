import { IconChevronDown } from "./NativePaper";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text, LayoutAnimation, Linking } from "react-native";
import { Tooltip } from "react-native-paper";

const Accordion = ({ questions, answers }) => {

  const [opened, setOpened] = useState(false);
  const [tooltip,  setTooltip] = useState("")
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
            <>
              <Tooltip title="Click para ver" key={index}>
                <Text style={[styles.details, styles.tooltip]}>{versiculo}</Text>
              </Tooltip>
            </>
          ))}
        </>
      )

    }
  }

  const ReturnAnswer = () => {
    return (
      <>
        <Text style={styles.details}>{answers}</Text>
      </>
    );
  };


  useEffect(() => {
   
  }, [opened]);

  return (
    <View style={styles.container}>
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
            <ReturnTexts/>
            </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: "600",
    fontFamily: "righteous",
    fontSize: 15,
  },
  content: {
    marginTop: 8,
  },
  details: {
    fontFamily: "merri",
    lineHeight: 50,
    fontSize: 22,
    textAlign:"left",
  },
  tooltip: {
    backgroundColor: "#333333",
    margin: 2,
    width: 130,
    padding: 6,
    borderRadius: 90,
    color: "white",
    textAlign: "center",
    fontSize: 10,
  }, 
  containerTooltip: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 2
  }
});

export default Accordion;
