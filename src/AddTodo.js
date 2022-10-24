import { useState } from "react";

function AddTo({Add}) {
    const [text, setText] = useState('')
    return(
      <div>
        <h1>Todo list</h1>
      <input type='text' onChange={(event) => setText(event.target.value)}></input>
      <button onClick={() => Add({ id: Math.random(), task: text, done: false })}>Add</button>
      </div>
    );
}
export default AddTo;