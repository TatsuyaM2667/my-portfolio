interface ContactProps {
    id?: string;
}
const Contact = (props: ContactProps) => {
  return (
    <div id={props.id}>
      contact zone
    </div>
  )
}

export default Contact
