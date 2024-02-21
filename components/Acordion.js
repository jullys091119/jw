import { IconChevronDown } from "./NativePaper";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text, LayoutAnimation } from "react-native";

const Accordion = ({ questions,answers }) => {
  const [opened, setOpened] = useState(false);

  function toggleAccordion() {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: 'easeIn', property: 'opacity' },
      update: { type: 'linear', springDamping: 0.3, duration: 250 },
    });
    setOpened(!opened);
  }

  useEffect(() => {
    // Código adicional si es necesario
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
          <Text style={styles.details}>{answers}</Text>
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
    lineHeight: 29,
    fontSize: 18,
  },
});

export default Accordion;
