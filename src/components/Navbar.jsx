import { FixedLanguageSelector } from './FixedLanguageSelector'
import { Translate } from './Translate'
import { useRef, useEffect } from 'react'

export const Navbar = () => {
  const navbar = useRef()

  useEffect(() => {
    const handle = () => {
      navbar.current.classList.toggle('bg-[#14102C]', scrollY > 25 )
      navbar.current.classList.toggle('top-4', scrollY > 25 )
      navbar.current.classList.toggle('backdrop-blur-sm', scrollY > 25 )
      navbar.current.classList.toggle('border', scrollY > 25 )
    }

    window.addEventListener('scroll', handle)
  }, [])

  return (
    <header ref={navbar} className="fixed left-1/2 -translate-x-1/2 z-50 transition-all rounded-full margins w-full top-0 bg-opacity-85 border-ufopink border-opacity-10 hover:border-opacity-40">
      <div className="flex justify-between items-center py-4">
        <a href="#mainHookContainer" className="text-4xl font-black hover:text-ufopink transition-colors">
          UFO
        </a>

        <nav className="max-xl:hidden">
          <ul className="flex gap-12 items-center">
            <a href="#mainHookContainer" className="hover:text-ufopink font-medium transition-colors">
              <Translate>navbarItemHome</Translate>
            </a>
            <a href="#ourServicesContainer" className="hover:text-ufopink font-medium transition-colors">
              <Translate>navbarItemServices</Translate>
            </a>
            <a href="#serviceDescriptionContainer" className="hover:text-ufopink font-medium transition-colors">
              <Translate>navbarItemWork</Translate>
            </a>
            <a href="#testmonialsContainer" className="hover:text-ufopink font-medium transition-colors">
              <Translate>navbarItemTestimonials</Translate>
            </a>
            <a href="#contactContainer" className="py-2 px-8 border-2 border-ufopink text-ufopink font-medium hover-fill-button rounded-full">
              <Translate>navbarItemContact</Translate>
            </a>
          </ul>
        </nav>

      <FixedLanguageSelector />

      </div>
    </header>
  )
}