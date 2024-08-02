import { useState } from "react"
import { Translate } from "./Translate"
import emailjs from '@emailjs/browser'
import { useContext } from "react"
import { LanguageContext } from "../contexts"
import translations from "../constants/translations"

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const { currentLanguage } = useContext(LanguageContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formInputs = Object.fromEntries(formData.entries())
    const name = formInputs.name
    const email = formInputs.email
    const phone = formInputs.phone
    const message = formInputs.message

    if (!name || !email || !phone || !message || !emailRegex.test(email)) {
      setErrorMessage(translations[currentLanguage].contactError)
      return
    }

    setDisabled(true)

    emailjs.sendForm('service_aqi9bgs', 'template_o1jt98i', e.target, 'leZnltx1UroiBE2ar')
      .then(() => {
        setErrorMessage('')
        setSuccessMessage(translations[currentLanguage].contactSuccess)
      })
      .catch(() => {
        setSuccessMessage('')
        setErrorMessage(translations[currentLanguage].contactCatchedError)
      })
      .finally(() => {
        setDisabled(false)
      })
  }

  return (
    <div className="py-24" id="contactContainer">
      <h2 className="text-5xl font-bold text-center text-background-gradient">
        <Translate>contactDescriptionTitle</Translate>
      </h2>
      <p className="text-center pt-3 text-balance max-w-xl mx-auto">
        <Translate>contactDescriptionText</Translate>
      </p>

      <div className="margins grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-12 w-full py-24">
        <aside className="flex flex-col gap-4 lg:sticky top-32 h-fit">
          <span className="badge-pink">
            <Translate>founderAgency</Translate>
          </span>

          <h3 className="text-5xl font-bold text-left text-pretty text-background-gradient py-2">
            <Translate>niceToMeetYou</Translate>
          </h3>

          <p className="max-w-xl text-balance">
            <Translate>niceToMeetYouText</Translate>
          </p>
        </aside>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <ContactInput name="name" label="contactNameLabel" placeholder="contactPlaceholder" />
          <ContactInput name="email" label="contactEmailLabel" placeholder="contactPlaceholderEmail" />
          <ContactInput name="phone" label="contactPhoneLabel" placeholder="contactPlaceholderPhone" />
          <ContactTextarea label="contactTextareaLabel" placeholder="contactPlaceholderMessage" />
          <button disabled={disabled} className="py-2 px-20 border-2 border-ufopink text-ufopink font-medium hover-fill-button rounded-full w-fit">
            <Translate>contactButton</Translate>
          </button> 
          <p className="text-red-400">{errorMessage}</p>
          <p className="text-green-400">{successMessage}</p>
        </form>
      </div>
    </div>
  )
}

const ContactInput = ({ label, placeholder, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-ufopink ps-4">
        <Translate>{label}</Translate>
      </label>
      <input 
        name={name}
        type="text" 
        className="bg-transparent px-4 py-3 border border-ufopink border-opacity-40 rounded-xl focus:outline-none" 
        placeholder={Translate({ isPlaceholder: true, children: placeholder })} 
      />
    </div>
  )
}

const ContactTextarea = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-ufopink ps-4">
        <Translate>{label}</Translate>
      </label>
      <textarea 
        name="message"
        className="bg-transparent px-4 py-3 border border-ufopink border-opacity-40 rounded-xl focus:outline-none h-40 min-h-40" 
        placeholder={Translate({ isPlaceholder: true, children: placeholder })}
      ></textarea>
    </div>
  )
}