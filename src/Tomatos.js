import React from "react"

const Tomatos = (props) =>{

  const count = props.count;
  let tomatoArray =[]

  if (count ===0){
    tomatoArray.push(
      <h3>Please hit the buttons above to begin adding tomatoes to your basket!</h3>
    )
  }

  for (let i=0; i<count;i++){
    tomatoArray.push(
      <img src='https://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg' alt='tomato' className='tomato-image' />   
    )
    }
  

  return (
    <div class="tomato-container">
     {tomatoArray}
     </div>

  )
}

export default Tomatos