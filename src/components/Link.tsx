function Link(props: { label: string, link: string, class?: string }) {
  const selected = window.location.pathname.includes(props.link)

  return (
    <a 
      class={props.class + " decoration-4 " + (selected ? "underline" : "hover:underline") }
      href={props.link} 
      target={props.link.includes('https') ? '_blank': ''}>
      {props.label}
    </a>
  );
}

export default Link;
