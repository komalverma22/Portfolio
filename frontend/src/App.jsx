import React from 'react'
import Hero from './pages/Hero'
import BackgroundBows from './components/BackgroundBows'
// import RandomStars from './components/RandomStars'
import RandomGridHighlights from './components/RandomGridHighlights'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <RandomGridHighlights />
      {/* <RandomStars /> */}
      {/* <BackgroundBows /> */}
      <main className="flex-grow">
        <Hero/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
