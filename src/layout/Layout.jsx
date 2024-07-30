import { FixedLanguageSelector, Navbar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GradientDown />
      { children }
    </>
  )
}

const GradientDown = () => <div className="z-[999] h-32 bg-gradient-to-t from-ufodark to-transparent fixed w-full bottom-0 pointer-events-none"></div>

export default Layout