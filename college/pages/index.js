
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/herosection'
import ContactForm from '@/components/contact'
import Footer from '@/components/footer'
import About from '@/components/about'
import ImageCarousel from '@/components/carousel'
import {images} from "../dummdata"
import Post from "../components/post"
import Courses from '@/components/courses'
import Services from '@/components/services'
import Blog from '@/components/Blog'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
<Navbar/>
<HeroSection/>
<About/>
<Services/>

<ImageCarousel images={images}/>
<ContactForm/>
<Footer/>

   </>
  )
}
