import Hero from '../Components/Hero'
import ServicesSmallList from '../Components/ServicesSmallList'
import Welcome from '../Components/Welcome'
import ServicesMediumList from '../Components/ServicesMediumList'
import BannerAppt from '../Components/BannerAppt'

const Home = () => 
{
  return (
    <>
      <Hero />
      <ServicesSmallList />
      <Welcome />
      <ServicesMediumList />
      <BannerAppt />
    </>
  )
}

export default Home