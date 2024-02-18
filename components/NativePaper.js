import { useContext, useEffect, useState } from "react";
import { Button, Card,Avatar, IconButton,Title } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { modeBlackContext } from "../context/context";


const Icon = ({ color }) => (
  <View>
    <MaterialCommunityIcons name="arrow-right-thin" size={30} color="#333333" />
  </View>
);

const IconSunOn = ({ color }) => {
  const [isClicked, setIsClicked] = useState(false);

  const { setModeColor,modeColor } = useContext(modeBlackContext);

  const handleIconPress = () => {
    setIsClicked(!isClicked)
    setModeColor(isClicked ? "#ffffff" : "#333333");
  };

  return (
    <View>
      {modeColor == '#333333' ? (
      <MaterialCommunityIcons
        name="weather-sunny-off"
        size={30}
        color="white"
        onPress={() => {
          handleIconPress();
        }}
      />
      ):(
        <MaterialCommunityIcons
          name="weather-sunny"
          size={30}
          color="white"
          onPress={() => {
            handleIconPress();
          }}
        />
      )}
    </View>
  );
};

const LoadIicon = () => {
  const navigation = useNavigation();

  return (
    <Button
      icon={Icon}
      mode="contained"
      onPress={() => navigation.navigate("Home")}
      style={styles.btnLoad}
    >
      <Text style={styles.txtStart}>Comezar...</Text>
    </Button>
  );
};


const CardSettingPublication = ({titulo,imagen}) => {
  return (
    <Card.Title
      title={titulo}
      subtitle="Como responder ?"
      left={() => <Avatar.Image source={{uri:imagen}} size={50}/>}
      right={() => <IconButton icon="dots-vertical"  onPress={() => {}} iconColor="white" />}
      style={styles.card}
      titleStyle={styles.title}
      subtitleStyle={styles.subtitle}
    />
  )
};

const styles = StyleSheet.create({
  btnLoad: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 30,
    right: 10,
    paddingVertical: 5,
  },
  card: {
    backgroundColor: "purple",
    marginVertical: 10,
    marginHorizontal:10,
    borderRadius: 7,
    height: 100,
    height: 100
  },
  title: {
   color: "white",
   fontSize: 26,
   marginVertical: 0
  },
  txtStart: {
    color: "#333333",
  },
  subtitle: {
    color: "white"
  },

  right: {
    color: "white"
  }


});

export { LoadIicon, IconSunOn, CardSettingPublication  };
