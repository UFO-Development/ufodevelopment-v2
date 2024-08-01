import { Translate } from "./Translate"

export const Footer = () => {
  return (
    <footer className="flex flex-col margins">
      <div className="border-[0.5px] border-opacity-40 border-l-0 border-r-0 border-t-ufopink border-b-ufopink py-10 flex justify-between">
        <div>
          <img src="/navbar.png" className="w-80 h-24 object-cover mb-6" />
          <p className="max-w-lg text-balance text-white text-opacity-70">Empresa de desarrollo de software que se dedica a crear soluciones innovadoras para mejorar la experiencia de los usuarios.</p>
        </div>
        <div className="flex gap-16">
          <div>
            <h4 className="text-ufopink text-opacity-90 font-medium">
              Información
            </h4>
            <p className="text-sm text-white text-opacity-70">Quilmes, Buenos Aires, Argentina.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-ufopink text-opacity-90 font-medium">
              <Translate>footerNavigation</Translate>
            </h4>
            <a className="text-sm text-white text-opacity-70">
              <Translate>navbarItemHome</Translate>
            </a>
            <a className="text-sm text-white text-opacity-70">
              <Translate>navbarItemServices</Translate>
            </a>
            <a className="text-sm text-white text-opacity-70">
              <Translate>navbarItemWork</Translate>
            </a>
            <a className="text-sm text-white text-opacity-70">
              <Translate>navbarItemTestimonials</Translate>
            </a>
            <a className="text-sm text-white text-opacity-70">
              <Translate>navbarItemContact</Translate>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-ufopink text-opacity-90 font-medium">
              <Translate>footerSocialMedia</Translate>
            </h4>
            <a className="text-sm text-white text-opacity-70">Instagram</a>
            <a className="text-sm text-white text-opacity-70">Linkedin</a>
            <a className="text-sm text-white text-opacity-70">Tiktok</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-8">
        <p>&copy; Copyright</p>
        <p>2024 - All rights reserved</p>
      </div>
    </footer>
  )
}