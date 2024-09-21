import { useState } from "react"

function Counter() {
    var [count,setcount]= useState(0)
    function increment() {
         const newCount= count+1;
         setcount(newCount)
    }

    function decrement() {
        const newCount1= count-1;
        setcount(newCount1)
    }
    return(
        <div class="counter-container">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
     
      </div>
    )
}

export default Counter