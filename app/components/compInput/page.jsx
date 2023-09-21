

export const Inp = ({index, task}) =>{
  return (
    <div key={index}>
    <p>#{index} - <span>{task}</span></p>
  </div>
  
  )
}
