import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Main from './component/main'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
