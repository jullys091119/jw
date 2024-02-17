import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const modeBlackContext = createContext();

const AppProvider = ({ children }) => {
  const [modeColor, settingModeColor] = useState("")


  const setModeColor = async (color) => {
    try {
      await AsyncStorage.setItem('MODE', color);
      getValueModeColor()
    } catch (e) {
      console.log(e)
    }
  };
 
  const getValueModeColor = async () => {
    try {
      const color = await AsyncStorage.getItem('MODE')
      settingModeColor(color)
    } catch (e) {
      console.log(e)
    }
  };


  return <modeBlackContext.Provider value={{
    setModeColor,
    settingModeColor,
    getValueModeColor,
    modeColor,
  }}>
    {children}
  </modeBlackContext.Provider>;
};


export { AppProvider, modeBlackContext }