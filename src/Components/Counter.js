import React, { useState } from 'react'

function Counter() {
    const [numberValue,setNumberValue] = useState(0)
    function handleClick(e){
        e.stopPropagation();
        console.log("CounterClicked and ",numberValue)
        setNumberValue(
            numberValue=>numberValue+1
        )
    }
  return (
    <div>
      <button onClick={handleClick}>Count Button {numberValue} </button>
    </div>
  )
}

export default Counter
