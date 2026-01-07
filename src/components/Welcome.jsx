import React, { useState } from "react";

const Welcome = () =>{
const [count, setCount ] = useState(0);
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}

export default Welcome;