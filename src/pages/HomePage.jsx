import { MainHookSection, ServiceDescription, Testimonials, OurServices, Contact, Footer, CallToAction } from '../components'

export const HomePage = () => {
  return (
    <section>
      <MainHookSection />
      <OurServices />
      <CallToAction />
      <ServiceDescription />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  )
}