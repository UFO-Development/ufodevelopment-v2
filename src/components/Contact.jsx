import { Translate } from "./Translate"

export const Contact = () => {
  return (
    <div className="py-24 relative" id="contactContainer">
      <h2 className="text-5xl font-bold text-center text-background-gradient">
        <Translate>contactDescriptionTitle</Translate>
      </h2>
      <p className="text-center pt-3">
        <Translate>contactDescriptionText</Translate>
      </p>

      <div className="margins grid grid-cols-2 w-full pt-24">
        <aside>
          
        </aside>
        <form className="flex flex-col gap-6">
          <ContactInput label="contactNameLabel" placeholder="contactPlaceholder" />
          <ContactInput label="contactEmailLabel" placeholder="contactPlaceholderEmail" />
          <ContactInput label="contactPhoneLabel" placeholder="contactPlaceholderPhone" />
          <ContactTextarea label="contactTextareaLabel" placeholder="contactPlaceholderMessage" />
        </form>
      </div>
    </div>
  )
}

const ContactInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-ufopink ps-3">
        <Translate>{label}</Translate>
      </label>
      <input 
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
      <label className="font-medium text-ufopink ps-3">
        <Translate>{label}</Translate>
      </label>
      <textarea 
        className="bg-transparent px-4 py-3 border border-ufopink border-opacity-40 rounded-xl focus:outline-none h-64" 
        placeholder={Translate({ isPlaceholder: true, children: 'contactPlaceholderMessage' })}
      ></textarea>
    </div>
  )
}