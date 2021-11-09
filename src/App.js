import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../src/css/style.css'
import Banner from './component/landing_page/Banner';
import Navbar from './component/Navbar';
import About from './component/landing_page/about';
import Brand from './component/landing_page/brand';
function App() {
  return(
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Brand/>
    </>
  )
}

export default App;
