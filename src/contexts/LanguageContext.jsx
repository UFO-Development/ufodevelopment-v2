import { useState } from 'react';
import { createContext } from 'react';

export const LanguageContext = createContext({})

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es')

  return (
    <LanguageContext.Provider 
      value={{
        currentLanguage,
        setCurrentLanguage
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}