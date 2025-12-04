import './App.css'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'

function App() {

  return (
    <main className='flex flex-col gap-20 md:gap-40'>
     <Nav />
     <Hero />
     <Services />
    </main>
  )
}

export default App
