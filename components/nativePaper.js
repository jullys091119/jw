
import { Button } from 'react-native-paper';
import { StyleSheet,Text, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Icon = ({ color }) => (
  <View>
      <MaterialCommunityIcons name="arrow-right-thin" size={30} color="#333333" /> 
  </View>
);

const LoadIicon = () => {

    const navigation = useNavigation();

    return (
        <Button 
         icon={Icon}
         mode="contained"
         onPress={() => navigation.navigate("Home")}
         style={styles.btnLoad}
         >
          <Text style={styles.txtStart}>Comezemos...</Text>
        </Button>

    )
    };


const styles = StyleSheet.create({
 btnLoad :{
    backgroundColor: 'white',
    position: "absolute",
    bottom:30,
    right: 10,
    paddingVertical: 5,
    

 },

 txtStart: {
    color: "#333333"
 }
})

export {LoadIicon}