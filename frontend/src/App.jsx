import React from 'react'
import Hero from './pages/Hero'
import BackgroundBows from './components/BackgroundBows'
// import RandomStars from './components/RandomStars'
import RandomGridHighlights from './components/RandomGridHighlights'

const App = () => {
  return (
    <div className="relative min-h-screen">
      <RandomGridHighlights />
      {/* <RandomStars /> */}
      {/* <BackgroundBows /> */}
      <Hero/>
    </div>
  )
}

export default App
