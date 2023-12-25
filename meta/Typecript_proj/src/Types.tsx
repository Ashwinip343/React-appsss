

interface Propel {
    name:string,
    age:number;
}

const Types = (props: Propel) => {
  return (
    <div>
        <p>{props.name},{props.age}</p>
    </div>
  )
}
export default Types;