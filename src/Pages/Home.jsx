import Hero from '../Components/Hero'
import ServicesSmall from '../Components/ServicesSmall'
import Welcome from '../Components/Welcome'
import ServicesMedium from '../Components/ServicesMedium'
import BannerAppt from '../Components/BannerAppt'

const Home = () => 
{
  return (
    <>
      <Hero />
      <ServicesSmall />
      <Welcome />
      <ServicesMedium />
      <BannerAppt />
    </>
  )
}

export default Home