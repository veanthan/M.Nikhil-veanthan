import { useState } from 'react';

function Counter(){

    const [count,setCount] = useState(0);
    const [status,setStatus] = useState('Click any button to get status');
    const [color,setColor] = useState('black');

    
    const Increment = () => {
        setCount(count + 1);
        setStatus('Incremented');
        setColor('green');
        if(count === 10)
        {
            setCount(0);
            setStatus('Resetted');
            setColor('black');
        }
    }
    const Decrement = () => {
        setCount(count - 1);
        setStatus('Decremented');
        setColor('red');
        if(count <= 0)
        {
            setCount(0);
            setStatus('Can\'t decrement click Increment');
            setColor('maroon');
        }
    }
    
    return (
      <>
        <h1>Welcome to my Counter</h1>
        <hr />
        <hr />
        <h1>This is my Counter</h1>
        <hr />
        <h2 style={{ color : color }}>Count : {count}</h2>
        <button onClick={Increment}>Increment +</button>
        <button onClick={Decrement}>Decrement -</button>
        <h3>Status : {status}</h3>
        <hr />
        <h5>Count is 10 → decrement | Count is 0 → increment</h5>
      </>
    )
}

export default Counter;