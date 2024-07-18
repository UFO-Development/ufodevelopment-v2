import { useContext } from 'react'
import { LanguageContext } from '../contexts'
import translations from '../constants/translations.js'

export const Translate = ({ children }) => {
  const { currentLanguage } = useContext(LanguageContext)
  const translatedText = translations[currentLanguage][children]
  return translatedText
    ? <span dangerouslySetInnerHTML={{ __html: translatedText }}></span>
    : 'No hay traducción disponible para esa key.'
}