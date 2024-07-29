import { useContext } from 'react'
import { LanguageContext } from '../contexts'
import translations from '../constants/translations.js'

export const Translate = ({ children, isPlaceholder = false }) => {
  const { currentLanguage } = useContext(LanguageContext)
  const translatedText = translations[currentLanguage][children]
  
  if (isPlaceholder) return translatedText

  return translatedText
    ? <span dangerouslySetInnerHTML={{ __html: translatedText }}></span>
    : 'No hay traducción disponible para esa key.'
}