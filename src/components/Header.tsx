function Header(props: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
  return (
    <>
      Header
      <button onclick={() => props.setDarkMode(!props.darkMode)}>
        Dark Mode
      </button>
    </>
  )
}

export default Header
