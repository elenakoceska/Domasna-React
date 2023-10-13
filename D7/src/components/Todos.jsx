import{useState, useEffect} from 'react';


export const Todos = () =>{

    const [todos, setTodos] = useState("")

    function getTodos(){
        fetch("https://jsonplaceholder.typicode.com/todos")
           .then(res=>res.json)
           .then(json=>setTodos(json))
           .catch(err=>alert(err))
    }

    // useEffect(()=>{
    //     getTodos()
    // },[])


    return(
        <div>
           <button onClick={getTodos}>Todos</button>

           <input
           type="text"
           value={todos}
           onChange={(e)=>setTodos({todos:e.target.value})}
           
           />
        </div>
    )
}