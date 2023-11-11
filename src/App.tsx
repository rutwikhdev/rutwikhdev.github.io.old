import { createEffect, createSignal } from 'solid-js'

import Header from './components/Header'

function App() {
  const [darkMode, setDarkMode] = createSignal(false)

  if (window.localStorage.getItem('DarkMode') === 'true') {
    setDarkMode(true)
  }

  createEffect(() => {
    if (darkMode() === true) {
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
    }
    window.localStorage.setItem('DarkMode', JSON.stringify(darkMode()))
  })

  return (
    <>
      <div
        class={
          (darkMode() ? 'dark-mode' : 'light-mode') +
          ' h-screen flex flex-col items-center'
        }
      >
        <Header darkMode={darkMode()} setDarkMode={setDarkMode}/>
      </div>
    </>
  )
}

export default App
