function Link(props: { label: string, link: string, class?: string }) {
  return (
    <>
    <a 
      class={props.class + " decoration-4 hover:underline" }
      href={props.link} 
      target={props.link.includes('https') ? '_blank': ''}>
      {props.label} 
    </a>
    </>
  );
}

export default Link;
