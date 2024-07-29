import { MainHookSection, ServiceDescription, Testimonials, OurServices, Contact } from '../components'

export const HomePage = () => {
  return (
    <section>
      <MainHookSection />
      <OurServices />
      <ServiceDescription />
      <Testimonials />
      <Contact />
    </section>
  )
}