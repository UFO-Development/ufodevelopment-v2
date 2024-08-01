import { Translate } from "./Translate"

export const Footer = () => {
  return (
    <footer className="flex flex-col margins">
      <div className="border-[0.5px] border-opacity-40 border-l-0 border-r-0 border-t-ufopink border-b-ufopink py-10 flex justify-between max-md:flex-col max-md:gap-12">
        <div>
          <img src="/navbar.png" className="w-80 h-24 object-cover mb-6" />
          <p className="max-w-lg text-balance text-white text-opacity-70">Empresa de desarrollo de software que se dedica a crear soluciones innovadoras para mejorar la experiencia de los usuarios.</p>
        </div>
        <div className="flex gap-16 max-md:flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="text-ufopink text-opacity-90 font-medium">
              <Translate>footerInformation</Translate>
            </h4>
            <p className="text-sm text-white text-opacity-70">Quilmes, Buenos Aires, Argentina.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-ufopink text-opacity-90 font-medium">
              <Translate>footerNavigation</Translate>
            </h4>
            <a href="#mainHookContainer" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              <Translate>navbarItemHome</Translate>
            </a>
            <a href="#ourServicesContainer" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              <Translate>navbarItemServices</Translate>
            </a>
            <a href="#serviceDescriptionContainer" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              <Translate>navbarItemWork</Translate>
            </a>
            <a href="#testmonialsContainer" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              <Translate>navbarItemTestimonials</Translate>
            </a>
            <a href="#contactContainer" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              <Translate>navbarItemContact</Translate>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-ufopink text-opacity-90 font-medium">
              <Translate>footerSocialMedia</Translate>
            </h4>
            <a href="https://www.instagram.com/ufo.development/" target="__blank" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/ufo-development/" target="__blank" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              Linkedin
            </a>
            <a href="https://www.tiktok.com/@ufo.development" target="__blank" className="text-sm text-white text-opacity-70 hover:text-ufopink transition-colors">
              Tiktok
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-8">
        <p>&copy; Copyright</p>
        <p>2024 - <Translate>footerCopyright</Translate></p>
      </div>
    </footer>
  )
}