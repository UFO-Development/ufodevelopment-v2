import { Translate } from './Translate'
import { CalendarCheck } from './icons'

export const MainHookSection = () => {
  return (
    <div id="mainHookContainer" className="h-screen">
      <div className="margins flex justify-center h-full flex-col gap-7">
        <span className="badge-pink">
          <Translate>mainHookAgency</Translate>
        </span>
        <h2 className="text-6xl font-bold text-left text-pretty max-w-[700px] text-background-gradient h-32">
          <Translate>mainHookTitle</Translate>
        </h2>
        <p className="opacity-80 text-lg text-pretty max-w-xl">
          <Translate>mainHookParagraph</Translate>
        </p>
        <button className="w-fit bg-ufopink px-4 py-2 rounded text-black font-medium hover:opacity-90 transition-opacity flex items-center gap-4">
          <Translate>mainHookButton</Translate>
          <CalendarCheck />
        </button>
      </div>
    </div>
  )
}