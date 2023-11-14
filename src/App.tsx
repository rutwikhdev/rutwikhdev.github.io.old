import { createEffect, createSignal } from 'solid-js'
import { Route, Router, Routes } from "@solidjs/router"

import Header from './components/Header'
import Post from './components/Post'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  const [darkMode, setDarkMode] = createSignal(false)

  if (window.localStorage.getItem('DarkMode') === 'true') {
    setDarkMode(true)
  }

  createEffect(() => {
    if (darkMode() === true) {
      document.querySelector('html')!.classList.add('dark')
      document.querySelector('html')!.classList.add('dark-mode')
    } else {
      document.querySelector('html')!.classList.remove('dark')
      document.querySelector('html')!.classList.remove('dark-mode')
      document.querySelector('html')!.classList.add('light-mode')
    }
    window.localStorage.setItem('DarkMode', JSON.stringify(darkMode()))
  })

  return (
    <>
      <div class='flex flex-col items-center'>
        <div class="container px-10 lg:px-42 xl:px-48 text-lg">
          <Header darkMode={darkMode()} setDarkMode={setDarkMode}/>
          {/* components go here */}
          <Router>
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/projects/" component={Projects} />
              <Route path="/blog/:name" component={Post} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
