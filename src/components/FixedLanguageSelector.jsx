import { useContext } from 'react'
import { LanguageContext } from '../contexts'

export const FixedLanguageSelector = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext)

  const handleEnglish = () => {
    setCurrentLanguage('en')
  }

  const handleSpanish = () => {
    setCurrentLanguage('es')
  }

  return (
    <div className="p-1 flex rounded gap-1 w-fit">
      <button onClick={handleSpanish} className={ `p-1 hover:bg-ufopink rounded transition-colors ${currentLanguage === 'es' && 'bg-ufopink' }` }>
        <img src="es.svg" className="w-6 h-full" alt='Spanish flag' />
      </button>
      <button onClick={handleEnglish} className={ `p-1 hover:bg-ufopink rounded transition-colors ${currentLanguage === 'en' && 'bg-ufopink' }` }>
        <img src="us.svg" className="w-6 h-full" alt='Spanish flag' />
      </button>
    </div>
  )
}