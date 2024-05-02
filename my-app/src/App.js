// Task1: 
// i.   Components Added  =>  Header  ,Input Box ,Button to Add todo
// ii.  Actions => Handle button click to add a todo to list
// iii. Show Todo List 
import React from 'react';
import './App.css';
import { useState } from 'react';

function App()
{
   //2. state ,State-setterMethod ,defaultValue(emptyArray)
  const [todoList, setTodoList] = useState([])

  // 1. check addtodo button works or not
  const addTodo = () =>
  {
    // console.log("Add todo")

    // 3. Check text readed input box or not
    // console.log("Text readed: ",document.getElementById("input").value)

    // 4. Push elements in todoList array
    // console.log("todoList: ",todoList)    //array blank
    todoList.push(document.getElementById("input").value)
    setTodoList(todoList)    //update elements in todoArray [ABC,CDE]
    console.log("todoList: ",todoList)
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <span>Insert Todo</span> <span>|</span> <span>Complete Todo</span> <span>|</span> <span>Incomplete Todo</span> <br/> */}
      <input type="text" id="input" class="input1" placeholder='Enter Todo here...'  />
      <button onClick={addTodo}>Add Todo</button>

      <div>
        <ul>
          {
            todoList.map(iterator =>
            {
             return <li>{iterator}</li>
            }
         )}
         
        </ul>
      </div>


    </div>
  )

}
export default App;