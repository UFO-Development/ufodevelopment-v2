import { CalendarCheck } from "./icons";
import { Translate } from "./Translate";

export const CallToAction = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-ufopink/10 to-ufopink/5">
      <div className="margins items-end max-lg:items-start flex gap-8 justify-between max-lg:flex-col">
        <p className="text-background-gradient text-4xl font-bold max-w-2xl">
          <Translate>callToActionText</Translate>
        </p>
        <button className="w-fit bg-ufopink px-4 py-2 rounded text-black font-medium hover:opacity-90 transition-opacity flex items-center gap-4 h-fit">
          <Translate>mainHookButton</Translate>
          <CalendarCheck />
        </button>
      </div>
    </div>
  );
};
