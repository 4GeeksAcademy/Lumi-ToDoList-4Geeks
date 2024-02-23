import React, {useState} from "react";
import Task from './Task.jsx'

function App() {
  
	const [todo, setTodo] = useState({id: 0, title: "", description: ""})
	const [todoArr, setTodoArr] = useState([])
  
  
	const handleChange = ({target}) => setTodo({...todo, [target.name]: target.value})
	
	const addTask = (e)=>{
	  e.preventDefault()
	  if(todo.title != ""){
		setTodoArr([...todoArr, {...todo, id: todoArr.length + 1}])
		setTodo({id: 0, title: "", description: ""})
	  }
	}
  
	const deleteTask = (key)=>{
	  const todoArrFiltered = todoArr.filter(e => e.id !== key)
	  setTodoArr(todoArrFiltered)
	}
  
	const task = todoArr.map(e=>{
	  return(
		<Task 
		  key={e.id} 
		  title={e.title} 
		  description={e.description} 
		  handleClick={()=>deleteTask(e.id)}
		  display = {e.id != todoArr.length ? true : false}
		/>
	  )
	})
  
	return (
	  <>
	  <main>
		<div className="container-fluid d-flex justify-content-center flex-column p-0 todo-wrapper" >
		  <form 
			className="bg-light d-flex align-items-center gap-2 p-3 pb-2 border border-bottom-0 mt-2 rounded-top shadow"
			onSubmit={addTask}
		  >
			<input type="text" className="form-control" name="title" placeholder="Task" value={todo.title} onChange={handleChange}/>
			<input type="text" className="form-control" name="description" placeholder="Description" value={todo.description} onChange={handleChange}/>
			<input type="submit" className="btn btn-primary" style={{width:"300px"}} value={"Add task"}/>
		  </form>
		  <div className="d-flex justify-content-between align-items-center py-2 px-2">
			<h1 className='text-center my-1'>Todo list</h1>
			<button className="btn btn-danger" onClick={()=> setTodoArr([])}>Delete all Tasks</button>
		  </div>
		  <div className='p-3 border border-top-0 mt-0 rounded-bottom shadow bg-light'>
			{todoArr.length > 0 ? task : 
			  <div className="d-flex justify-content-center align-items-center py-3 text-muted" >
				<h4>No Task Yet...</h4>
			  </div>
			}
		  </div>
		  <div className="mt-3 border rounded d-flex align-items-center py-3 px-2 bg-light">
			<p className="px-3 text-muted m-0"> Number of Tasks: {todoArr.length} </p>
		  </div>
		</div>
	  </main>
	  
	  </>
	)
  }
  
  export default App
  
