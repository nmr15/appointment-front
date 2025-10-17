import Hero from '../Components/Hero'
import ServicesSmallList from '../Components/ServicesSmallList'
import Welcome from '../Components/Welcome'
import ServicesMedium from '../Components/ServicesMedium'

const Home = () => 
{
  return (
    <>
      <Hero />
      <ServicesSmallList />
      <Welcome />
      <ServicesMedium />
    </>
  )
}

export default Home