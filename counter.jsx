import {useState} from "react";

function counter(){

    let [count,setCount]=useState(0);

    let incCount=()=> {
        setCount(count+1);
    };

    
    return (
       <div>
        <h3>Count={count}</h3>
        <buttuon onClick={incCount}>Click Here If You Like The Camera</buttuon>
       </div>
    );
}

export default counter;