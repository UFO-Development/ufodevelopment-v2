import { Translate } from "./Translate"
import { ApiApp, FourBoxes } from "./icons"

const services = [
  { name: 'service1Name', description: 'service1Description', span: 1, number: '01', icon: <img alt="background" src="/bg.svg" className="w-full h-full absolute opacity-15 -right-[100px]" /> },
  { name: 'service2Name', description: 'service2Description', span: 1, number: '02', icon: <ApiApp  width={128} height={128} strokeWidth={0.5} color="#ff66c4" className="absolute -bottom-8 -right-8 opacity-15" /> },
  { name: 'service3Name', description: 'service3Description', span: 2, number: '03', icon: <FourBoxes className="size-24 stroke-ufopink/20 absolute -right-5 -bottom-5" />},
]

export const OurServices = () => {
  return (
    <div className="py-24" id="ourServicesContainer">
      <h2 className="text-5xl font-bold text-center text-background-gradient max-sm:text-4xl">
        <Translate>ourServicesDescriptionTitle</Translate>
      </h2>
      <p className="text-center pt-3 text-balance max-w-xl mx-auto">
        <Translate>ourServicesDescriptionText</Translate>
      </p>
      <div className="margins grid grid-cols-2 w-full pt-24 gap-8 max-sm:grid-cols-1">
        {services.map(service => <Service key={service.name} service={service} />)}
      </div>
    </div>
  )
}

const Service = ({ service }) => {
  return (
    <div className={`relative overflow-hidden flex flex-col gap-3 p-6 bg-ufopink bg-opacity-5 rounded-xl border border-ufopink border-opacity-15 hover:border-opacity-40 transition-colors  ${ service.span === 1 ? '' : 'col-span-2 max-sm:col-span-1'}`}>
      { service.icon }
      <div className="p-2 bg-ufopink w-fit rounded-xl bg-opacity-20 pointer-events-none">
        <div className="text-ufopink size-6 flex items-center justify-center">
          <span>{service.number}</span>
        </div>    
      </div>
      <h3 className="text-2xl font-medium pointer-events-none"><Translate>{service.name}</Translate></h3> 
      <p className="opacity-85 pointer-events-none">
        <Translate>{service.description}</Translate>
      </p> 
    </div>
  )
}