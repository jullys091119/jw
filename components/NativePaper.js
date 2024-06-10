import  React,{ useContext, useEffect, useState } from "react";
import { Button, Card, Avatar, IconButton,Title,Dialog,Portal,Text } from "react-native-paper";
import { StyleSheet,  View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { modeBlackContext } from "../context/context";
import { settingQuestions } from "../context/questionsProvider";




const Icon = ({ color }) => (
  <View>
    <MaterialCommunityIcons name="arrow-right-thin" size={30} color="#333333" />
  </View>
);

const IconChevronDown = ({ color, opened, id }) => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={opened ? "chevron-up" : "chevron-down"} size={30} color="white" />
      </View>
    </>
  );
};
 


const IconHeart = () => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={"heart-multiple-outline"} size={25} color="purple"/>
      </View>
    </>
  );
};

const IconWatchTower = () => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={"office-building-outline"} size={25} color="purple" />
      </View>
    </>
  );
};

const IconHome = () => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={"home-import-outline"} size={25} color="purple" />
      </View>
    </>
  );
};

const IconSizeLetters = () => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={"format-letter-case"} size={25} color="white" marginLeft={13} />
      </View>
    </>
  );
};

const IconRead = () => {
  return (
    <>
      <View>
        <MaterialCommunityIcons name={"read"} size={20} color="#800080" style={{marginTop: 0}}/>
      </View>
    </>
  );
};


const LogoJw = () => (
  <Avatar.Image size={30} source={require('../assets/jw.png')} />
);
const Paragraphs = ({ visibleParagraphs, paragraphs }) => {
  const [visible, setVisible] = useState(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    setVisible(!visible);
  }, [visibleParagraphs, paragraphs]);
    
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
            {
              paragraphs!== null &&
              <Text style= {{fontSize: 16, lineHeight: 30, fontWeight: "700", textAlign: "left"}}>
              {paragraphs}
              </Text>
            }
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

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



const AvatarBible = () => (
  <Avatar.Image size={50} source={require('../img/david.jpg')}  style={styles.avatarBible}/>
);


const LoadIicon = () => {
  const navigation = useNavigation();
  return (
    <Button
      icon={Icon}
      mode="contained"
      onPress={() => navigation.push("MyTabs")}
      style={styles.btnLoad}
    >
      <Text style={styles.txtStart}>Comezar...</Text>
    </Button>
  );
};


const CardSettingPublication = ({ id, titulo, imagen}) => {
  const {questions} = useContext(settingQuestions)
  const navigation = useNavigation();
  return (
    <>
      <Card
        key={id}
        mode="elevated"
        style={styles.card}
        onPress={() => {
          navigation.navigate("Questions", { id: id, questions: questions});
        }}
        
      >
        <Card.Cover source={{ uri: 'https://elalfaylaomega.com/' + imagen }} style={styles.img} />
        <Card.Title title={titulo} subtitle="Card Subtitle" titleStyle={styles.titleCard} subtitleStyle={styles.subtitle} />
      </Card>
     
    </>
  );
};

const SearchContent = () => {
  return (
    <Card style={styles.cardContent}>
      <Card.Content>
        <Text  style={styles.searchText} variant="titleLarge">Buscar Publicacion</Text>
      </Card.Content>
      <Card style={styles.search}>
        <View style={{display:"flex", flexDirection:"row"}}>
          <MaterialCommunityIcons name="file-search-outline" size={30} color="red"/>
          <MaterialCommunityIcons name="bell-badge-outline" size={30} color="red"/>
        </View>
      </Card>
    </Card>
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
    width: 190,
    height: 200,
    marginHorizontal: 10
  },
  title: {
   color: "white",
   fontSize: 26,
  },
  txtStart: {
    color: "#333333",
  },
  subtitle: {
    color: "white"
  },
  img: {
   width: '100%',
   height: 130
  },
  right: {
    color: "white"
  },
  cardContent: {
    width: '82%',
    height: 120,
    borderRadius: 32,
    justifyContent: "center",
    marginLeft: 15,
    padding: 10,
    position: "relative",
    backgroundColor: "#800080",
  },
  searchText: {
    fontSize: 23,
    maxWidth: 150,
    color:"white",
    // fontFamily: "merri"
  },
  search: {
    height:60,
    width: 80,
    position: "absolute",
    right: -44,
    top:10,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    fontFamily: "merri"
  },
  titleCard: {
    fontSize: 19,
    // fontFamily: "merri"
  },
  subtitle: {
    fontSize: 15
  },
  avatarBible: {
    position: "absolute",
    right: 70,
    top: 25
  }


});

export { 
LoadIicon,
IconSunOn,
IconHeart,
IconWatchTower,
IconHome,
CardSettingPublication,
SearchContent,
LogoJw,
IconChevronDown,
AvatarBible,
IconSizeLetters,
IconRead,
Paragraphs

};
