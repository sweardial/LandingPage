import Header from './components/Header/Header'
import FirstPage from './components/FirstPage/FirstPage'
import SecondPage from './components/SecontPage/SecondPage'
import ThirdPage from './components/ThirdPage/ThirdPage'
import FourthPage from './components/FourthPage/FourthPage'
import FifthPage from './components/FifthPage/FifthPage'
import SixthPage from './components/SixthPage/SixthPage'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className='Body'>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <Footer />
    </div>
  )
}

export default App;
