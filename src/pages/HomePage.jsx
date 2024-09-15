import BlogsSection from "../components/BlogsSection"
import Features from "../components/Features"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Testimonials from "../components/Testimonials"

const HomePage = () => {
  return (
    <div className="">
      < Header />
      <div className="">
        <Features />
        <BlogsSection />      
      <Testimonials />
      < Newsletter />

      </div>
     
    </div>
  )
}

export default HomePage