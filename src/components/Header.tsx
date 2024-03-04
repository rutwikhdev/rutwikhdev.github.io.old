import { For } from "solid-js"
import Link from "./Link"
import Resume from "../assets/resume.pdf"

function Header(props: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
  return (
    <>
      <div class="flex justify-between py-20">
        <div class="flex flex-col">
          <a href="/" class="text-lg font-black mb-4"><span class="text-3xl">🪴</span> Rutwik Hiwalkar</a>
          <ul>
            <For each={[
              {label: "Blog", link: '/blog', color: "decoration-lime-400"},
              {label: "Projects", link: '/projects', color: "decoration-yellow-400"},
              {label: "Github", link: 'https://github.com/rutwikhdev', color: "decoration-indigo-400"},
              {label: "Resume", link: Resume, color: "decoration-blue-400"},
            ]}>
              {(link) => 
                <Link 
                  class={link.color + " mr-4 text-sm dark:text-gray-300" }
                  label={link.label} 
                  link={link.link} 
                />}
            </For>
          </ul>
        </div>
        <button 
          class=""
          onclick={() => props.setDarkMode(!props.darkMode)}
        >
          🚀
        </button>
      </div>
    </>
  )
}

export default Header
