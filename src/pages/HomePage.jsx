import { MainHookSection, ServiceDescription, Testimonials, OurServices } from '../components'

export const HomePage = () => {
  return (
    <section>
      <MainHookSection />
      <OurServices />
      <ServiceDescription />
      <Testimonials />
    </section>
  )
}