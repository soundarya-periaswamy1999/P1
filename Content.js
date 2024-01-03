import React from "react"
const Content=()=>{
function handleNameChange(){
    const names=["React","Node js","Javascript","C"]
    const int=Math.floor(Math.random()*4);
    return names[int]
  }

    return(
        <p>Let's start learning {handleNameChange()}</p>
    )
}

export default Content