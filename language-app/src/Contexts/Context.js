import { useState, createContext } from 'react'
// import WelcomeMessage from '../components/WelcomeMessage'




export const LanguageContext = createContext()



const Context = ({children}) => {

    const[language, setLanguage] = useState('')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
{children}
    </LanguageContext.Provider>
  )
}

export default Context
