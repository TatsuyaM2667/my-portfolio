interface WorksProps {
    id?: string;
}
const Works = (props: WorksProps) => {
  return (
    <div id={props.id}>
      works zone
    </div>
  )
}

export default Works
