function List({todo,Delete,Done}) {
    return(
        <div>
           
        {todo.map(el => <div> <li style={{textDecoration : el.done && "line-through"}} key={el.id}>{el.task}</li>
        <button onClick={() => Delete(el.id)}>Delete</button>
        <button onClick={() => Done(el.id)}>Done</button></div>)}
        </div>
    )
}
export default List ;