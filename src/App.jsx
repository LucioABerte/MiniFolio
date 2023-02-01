import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Tabs from './components/tabs/Tabs'
import { useEffect } from 'react'

function App() {

  const toTheTop = () => {
    window.scrollTo({ top:1, left:0, behavior:'smooth'})
  }

  useEffect(() => {
    
    toTheTop()

  }, [])

  return (
    <div>
      <Header />
      <Tabs />
      <Footer top={toTheTop}/>
    </div>
  )
}

export default App
