
import Header from "./components/Header/header"
import Image from 'next/image';
import DescriptionCard from "./components/Header/description/description"
import Contact from "./components/contact/contact"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"
import SocialMediaLinks from "./SocialMedia/social"
import PhotosGallery from "./Gallery/gallery";
import ProductCarousel from "./Carousel/carousel"
import BusinessHoursAndAppointment from "./Schedule/schedule"
import Gallery from "./Gallery/gallery";


export default function Home() {
  return (
   <div>
    <Header/>
    <DescriptionCard/>
    <Contact/>
    <SocialMediaLinks/>
    <ProductCarousel/>
    <PhotosGallery/>
    <BusinessHoursAndAppointment/>
    <Form/>
    <Footer/>
   </div>
   
  )
}
