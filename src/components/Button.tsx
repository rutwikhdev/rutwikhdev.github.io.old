import ExternalLinkIcon from "../assets/ExternalLinkIcon";

function Button(props: { link: string, label: string, icon?: boolean, classes?: string }) {
  const btnClasses = "flex py-2 px-4 rounded shadow-sm text-sm bg-gray-100 \
    border border-gray-100 dark:border-neutral-800  \
    hover:border hover:border-black dark:hover:border-gray-100 cursor-pointer w-fit dark:bg-neutral-800 " + props.classes

  return (
    <>
      <a class={btnClasses} href={props.link}>
        <span class={props.icon ? "mr-2" : ""}>{props.label}</span> 
        {props.icon ? <ExternalLinkIcon /> : ""}
      </a>
    </>
  )
}

export default Button;
