import { createEffect, createSignal } from 'solid-js'
import { Route, Routes } from "@solidjs/router"

import Header from './components/Header'
import Post from './components/Post'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

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
      <div class='flex flex-col items-center mb-20'>
        <div class="max-w-3xl w-full text-base px-10 md:px-0">
          <Header darkMode={darkMode()} setDarkMode={setDarkMode}/>
          {/* components go here */}
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/projects/" component={Projects} />
              <Route path="/blog/:name" component={Post} />
            </Routes>
        </div>
        <br></br>
      </div>
    </>
  )
}

export default App
