import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}