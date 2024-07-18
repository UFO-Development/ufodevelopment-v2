import { FixedLanguageSelector, Navbar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <FixedLanguageSelector />
      <GradientDown />
      { children }
    </>
  )
}

const GradientDown = () => <div className="z-[999] h-32 bg-gradient-to-t from-ufodark to-transparent fixed w-full bottom-0"></div>

export default Layout