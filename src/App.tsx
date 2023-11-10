import { createEffect, createSignal } from 'solid-js'

import Header from './components/Header'

function App() {
  const [darkMode, setDarkMode] = createSignal(false)
  console.log(window.localStorage.getItem('DarkMode') === 'true')

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
          ' h-screen flex flex-col justify-center items-center'
        }
      >
        <p>
        Blog Init Bruv
        </p>

        <button onclick={() => setDarkMode(!darkMode())}>
          Dark Mode
        </button>
        <Header />
      </div>
    </>
  )
}

export default App
