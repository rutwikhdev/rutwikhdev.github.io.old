import { For } from "solid-js"
import Link from "./Link"

function Header(props: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
  return (
    <>
      <div class="flex justify-between py-10">
        <div class="flex flex-col">
          <a href="/" class="text-lg font-black mb-4">🦄 Rutwik Hiwalkar</a>
          <ul>
            <For each={[
              {label: "Blog", link: '/blog', color: "decoration-rose-400"},
              {label: "Projects", link: '/projects', color: "decoration-yellow-400"},
              {label: "Art", link: '/art', color: "decoration-green-400"},
              {label: "Github", link: 'https://github.com/rutwikhdev', color: "decoration-indigo-400"}
            ]}>
              {(link) => 
                <Link 
                  class={link.color + " mr-4 text-base dark:text-gray-300" }
                  label={link.label} 
                  link={link.link} 
                />}
            </For>
          </ul>
        </div>
        <button 
          class="my-auto p-2 shadow hover:shadow-lg bg-white dark:bg-neutral-800 rounded"
          onclick={() => props.setDarkMode(!props.darkMode)}
        >
          🚀
        </button>
      </div>
    </>
  )
}

export default Header
