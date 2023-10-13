import {useState, useEffect} from 'react';
import {Todos} from './components/Todos';
//import React from 'react';

export function App(){
    const[car,setCar] = useState({model:"BMW", year:2010})
    const [days, setDays] = useState(["monday", "tuesday", "wednesday"])

    const[person,setPerson] = useState({firstName:"",lastName:""})

    const [todos,setTodos] = useState([
        {id:1,text:"Learn React",done:false},
        {id:2,text:"Eat Dinner",done:false},
        {id:3,text:"Go to Sleep",done:false},
    ])

    const [newTodo, setNewTodo] = useState("")

    useEffect(()=>{
        console.log(person) //(car)
    },[person]) //[car]


    function newCar(){
        setCar({
            ...car,
            model:"Yugo",
            year: 1985,

        });
    }


    function addDays(){
        setDays([...days,"Thursday"])  //["Sunday",...days,"Thursday"]
    }

    function addNewTodo(){
if(newTodo !== ""){

        let newObject = {
            id: todos.length + 1,
            text: newTodo,
            done:false
        }
        setTodos([...todos,newObject]);
        setNewTodo("");
        }else{
        alert("No value")
    }
    }


    function markTodoAsDone(todo){
        console.log(todo);
        setTodos([
            ...todos.map(item=> (item.id === todo.id) ?
            {id:item.id,text:item.text,done:!item.done} 
            : item
            )
        ])
    }

    // function deleteTodo(i) {
    //     const todos = this.state.todos.filter((todoIndex) => {
    //         return todoIndex !== i
    //       })
    //       this.setState({ todos })
    // }

    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(removeItem);
      }

    return(
        <div id='app'>
            <input
            type="text"
            placeholder="Enter Todos"
            value={newTodo}
            onChange={(e)=>{setNewTodo(e.target.value)}}
            />
            <button onClick={addNewTodo}>Add TODO</button>
            <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} 
            //deleteTodo={setState}
            //onClick = {this.deleteTodo}
             />
        
           
            {/* <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <button onClick={deleteTodo}>Delete</button> */}
            <ol className="todo-list">
              {todos.map((todo) => (
                 <li key={todo.id}>
                   {todo.text} <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
                 </li>
              ))}
            </ol>
            
            <input 
            type="text"
            placeholder='Enter First Name'
            value={person.firstName}
            onChange={(e) =>{setPerson({...person,firstName:e.target.value})}}
            />
            <br>
            </br>
            <input 
            type="text"
            placeholder='Enter Last Name'
            value={person.lastName}
            onChange={(e) =>{setPerson({...person,lastName:e.target.value})}}
           />
            <h2>Car:</h2>
            <p>Model: {car.model} </p>
            <p>Year: {car.year} </p>
            <button onClick={newCar}>Buy new car</button>
            <hr/>
            <ul>
                {days.map((day, i) => (
                    <li key={i}>{day}</li>
                ))}
            </ul>
            <button onClick={addDays}>Add Days</button>
       
        </div>
    )
}