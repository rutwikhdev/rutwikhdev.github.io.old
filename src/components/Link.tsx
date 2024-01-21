function Link(props: { label: string, link: string, class?: string }) {
  const redirectLink = props.link.includes('https') || props.link.includes('assets') ? props.link : "/#" + props.link

  return (
    <a 
      class={props.class + " decoration-4 hover:underline"}
      href={redirectLink} 
      target={props.link.includes('https') ? '_blank': ''}>
      {props.label}
    </a>
  );
}

export default Link;
