// za Domashna Zadolzitelno: Da se dodade delete funkcionalnost na kodot od casot i da se napravi Random generated id na elementite
// za Domashna Opcionalno:
// Privot Screen e kako izgleda so dodadeni elementi, vtoriot screen e so edit
// Funkcionalnosti:
// Add Element vo array (arrayot definiran vo state e inicijalno prazen - prikazan na tretiot screen )
// Random generated id na elementite
// Delete na Element od Array
// Counter za kolku elementi se completed
// Show/Hide opcija na kompletirani Elementi od array-ot
// Edit na textot od todo-to so opcija za Save/Cancel na edit


import PropTypes from 'prop-types';


export const Todos = ({listOfTodos, markTodoAsDone, }) =>{       
    return(
        
        <table border={1}>
        {listOfTodos.map(todo => {
            return(
                
            <li key={todo.id}>
            <span>{todo.text}</span>
            <input
            type="checkbox"
            value={todo.done}
            checked={todo.done}
            onChange={()=>{markTodoAsDone(todo)}}
            
            //onChange={()=>{deleteTodo(todo)}}
            />
            
            </li>
            
            
            )
    })}
        </table>
    
        )

}

Todos.propTypes={
    listOfTodos: PropTypes.arrayOf(PropTypes.object),
    markTodoAsDone: PropTypes.func,
    // deleteTodo: PropTypes.func
}