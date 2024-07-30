import { Brain, MagnifyingGlass, Rocket, TagCode, TestPipe, Tool } from './icons';
import { Translate } from './'

const serviceStages = [
  { icon: <MagnifyingGlass width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage1Title', description: 'serviceDescriptionStage1Text' },
  { icon: <Brain width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage2Title', description: 'serviceDescriptionStage2Text' },
  { icon: <TagCode width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage3Title', description: 'serviceDescriptionStage3Text' },
  { icon: <TestPipe width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage4Title', description: 'serviceDescriptionStage4Text' },
  { icon: <Rocket width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage5Title', description: 'serviceDescriptionStage5Text' },
  { icon: <Tool width={24} height={24} color="#ff66c4" />, title: 'serviceDescriptionStage6Title', description: 'serviceDescriptionStage6Text' },
]

export const ServiceStage = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="p-4 bg-ufopink w-fit rounded-xl bg-opacity-20">
        {icon}
      </div>
      <h3 className="text-xl font-medium">
        <Translate>{title}</Translate>
      </h3>
      <p className="opacity-85 text-center">
        <Translate>{description}</Translate>
      </p>
    </div>
  )
}

export const ServiceDescription = () => {
  return (
    <div className="py-24" id='serviceDescriptionContainer'>
      <h2 className="text-5xl font-bold text-center text-background-gradient">
        <Translate>serviceDescriptionTitle</Translate>
      </h2>
      <p className="text-center pt-3 text-balance max-w-xl mx-auto">
        <Translate>serviceDescriptionText</Translate>
      </p>

      <div className="margins grid grid-cols-3 grid-rows-2 w-full pt-24 gap-24">
        {serviceStages.map(serviceStage => (
          <ServiceStage 
            key={serviceStage.title} 
            icon={serviceStage.icon} 
            title={serviceStage.title} 
            description={serviceStage.description} 
          />
        ))}
      </div>
    </div>
  )
}