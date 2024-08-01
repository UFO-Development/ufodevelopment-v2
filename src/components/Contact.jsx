import { Translate } from "./Translate"

export const Contact = () => {
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

          <h2 className="text-5xl font-bold text-left text-pretty text-background-gradient py-2">
            <Translate>niceToMeetYou</Translate>
          </h2>

          <p className="max-w-xl text-balance">
            <Translate>niceToMeetYouText</Translate>
          </p>
        </aside>

        <form className="flex flex-col gap-6">
          <ContactInput label="contactNameLabel" placeholder="contactPlaceholder" />
          <ContactInput label="contactEmailLabel" placeholder="contactPlaceholderEmail" />
          <ContactInput label="contactPhoneLabel" placeholder="contactPlaceholderPhone" />
          <ContactTextarea label="contactTextareaLabel" placeholder="contactPlaceholderMessage" />
          <button className="py-2 px-20 border-2 border-ufopink text-ufopink font-medium hover-fill-button rounded-full w-fit">
            <Translate>contactButton</Translate>
          </button>
        </form>
      </div>
    </div>
  )
}

const ContactInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-ufopink ps-4">
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
      <label className="font-medium text-ufopink ps-4">
        <Translate>{label}</Translate>
      </label>
      <textarea 
        className="bg-transparent px-4 py-3 border border-ufopink border-opacity-40 rounded-xl focus:outline-none h-40 min-h-40" 
        placeholder={Translate({ isPlaceholder: true, children: placeholder })}
      ></textarea>
    </div>
  )
}