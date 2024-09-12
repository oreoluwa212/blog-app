import BlogsSection from "../components/BlogsSection"
import CategorySection from "../components/CategorySection"
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
      {/* < CategorySection /> */}
      <Testimonials />
      < Newsletter />

      </div>
     
    </div>
  )
}

export default HomePage