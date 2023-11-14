import { For } from 'solid-js';
function List(props: {items: any}) {
  return (
    <>
      <div class="flex flex-col">
      <For each={props.items}> 
        {(item) => {
          return (
            <a href={"/blog/" + item.filename} class="py-2 group flex justify-between border-b-2 dark:border-neutral-800">
              <div>
                <span class="text-lg font-semibold group-hover:underline decoration-2">{item.title}</span>
                <br></br>
                <span class="text-base font-normal text-neutral-600 dark:text-neutral-400">{item.subtitle}</span>
              </div>
              <span class="hidden sm:block text-base text-neutral-700 dark:text-green-200 font-mono">{item.date}</span>
            </a>
          )
        }}
      </For>
      </div>
    </>
  )
}

export default List;
