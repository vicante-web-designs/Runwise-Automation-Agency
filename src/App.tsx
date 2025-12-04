import './App.css'
import Nav from './sections/Nav'
import Hero from './sections/Hero'

function App() {

  return (
    <main className='flex flex-col gap-20 md:gap-40'>
     <Nav />
     <Hero />
    </main>
  )
}

export default App
