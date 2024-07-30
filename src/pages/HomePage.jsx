import { MainHookSection, ServiceDescription, Testimonials, OurServices, Contact, Footer } from '../components'

export const HomePage = () => {
  return (
    <section>
      <MainHookSection />
      <OurServices />
      <ServiceDescription />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  )
}