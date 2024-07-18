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
    <div className="p-1 fixed flex flex-col rounded top-1/2 -translate-y-1/2 left-4 gap-1 bg-[#1f1f1f]">
      <button onClick={handleSpanish} className={ `p-1 hover:bg-[#121212] rounded transition-colors ${currentLanguage === 'es' && 'bg-[#121212]' }` }>
        <img src="es.svg" className="w-6 h-full" alt='Spanish flag' />
      </button>
      <button onClick={handleEnglish} className={ `p-1 hover:bg-[#121212] rounded transition-colors ${currentLanguage === 'en' && 'bg-[#121212]' }` }>
        <img src="us.svg" className="w-6 h-full" alt='Spanish flag' />
      </button>
    </div>
  )
}