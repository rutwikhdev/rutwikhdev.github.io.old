import { For } from "solid-js";

import Button from "./Button";

function Grid(props: { items: any }) {
  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <For each={props.items}>
          {(item) => {
            return (
              <div class="flex flex-col rounded-md bg-neutral-100 dark:bg-neutral-800 p-6">
                <div class="flex flex-col justify-between h-full">

                  <div class="flex flex-col">
                    <span class="font-mono text-neutral-500 dark:text-yellow-300">
                      {item.date}
                    </span>
                    <span class="font-base font-semibold my-2">{item.title}</span>
                    <span class="mb-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
                      {item.subtitle}
                    </span>
                  </div>

                  <div class="flex">
                    {item.filename ? (
                      <Button label="Article" link={"/blog/" + item.filename} icon={true} classes="dark:bg-[#343434] mr-2 bg-neutral-200" />
                    ) : (
                      ""
                    )}
                    {item.source ? (
                      <Button label="Source" link={item.source} icon={true} classes="dark:bg-[#343434] mr-2 bg-neutral-200" />
                    ) : (
                      ""
                    )}
                  </div>

                </div>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
}

export default Grid;
