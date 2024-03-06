import { createContext, useState } from "react";
const settingQuestions = createContext();

const ProviderQuestions = ({children}) => {
 const [questions, setQuestions] = useState([])

 return<settingQuestions.Provider
    value={{
    questions,
    setQuestions

    }}
    >
        {children}
    </settingQuestions.Provider>
 
}

export {ProviderQuestions, settingQuestions}