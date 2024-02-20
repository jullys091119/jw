import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    Platform,
    LayoutAnimation,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import { IconChevronDown } from './NativePaper';
  const Accordion = (props) => {
    const [opened, setOpened] = useState(false);

    console.log(props.question, "props")

  
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  
    function toggleAccordion() {
      LayoutAnimation.configureNext({
        duration: 300,
        create: { type: 'easeIn', property: 'opacity' },
        update: { type: 'linear', springDamping: 0.3, duration: 250 },
      });
      setOpened(!opened);
    }
  
    return (
      <View style={styles.container}>
       
        <TouchableWithoutFeedback onPress={toggleAccordion}>
          <View style={styles.header}>
            <Text style={styles.title}>{props.question}</Text>
            <IconChevronDown  opened={opened}  />
          </View>
        </TouchableWithoutFeedback>
  
        {opened && (
          <View style={[styles.content]}>
            <Text style={styles.details}>
             {props.answers}
            </Text>
          </View>
        )}
      </View>
    );
  }

  export default Accordion
  
  const styles = StyleSheet.create({
    content: {
      marginTop: 8,
    },
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
      fontSize: 15
    },
    details: {
      fontFamily: "merri",
      lineHeight: 29,
      fontSize: 18
    }
  });