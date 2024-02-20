import React, {useState} from "react";

const Home = ()=>{

	const [todoArr, setTodoArr] = useState([])

	const [todo, setTodo] = useState({title: "", description: ""})

	const handleChange = ({ target })=>{
		setTodo({...todo, [target.name]: target.value})
	}

	const addTodo = (event)=>{
		event.preventDefault()
		if(todo.title !== ""){
			setTodoArr([...todoArr, todo])
			setTodo({title: "", description: ""})
		}
	}

	const deleteTask = (key) =>{
		const NewTodos = todoArr.filter((todo)=> todo !== todoArr[key])
		setTodoArr(NewTodos)
	}

	return (
		<div className="container-fluid d-flex justify-content-center flex-column w-50 p-0">
			<form className="d-flex align-items-center gap-2 p-3 pb-2 border border-bottom-0 mt-2 rounded-top shadow"
				onSubmit={addTodo}
			>
				<input type="text" className="form-control" name="title" placeholder="Task" value={todo.title} onChange={handleChange}/>
				<input type="text" className="form-control" name="description" placeholder="Description" value={todo.description} onChange={handleChange}/>
				<input type="submit" className="btn btn-primary" style={{width:"300px"}} value={"Add task"}/>
			</form>
			<div className="d-flex justify-content-between align-items-center py-2 px-2">
				<h3 className="m-0">Todo List</h3>
				<button className="btn btn-danger" onClick={()=> setTodoArr([])}>Delete all Tasks</button>
			</div>
			<div className="p-3 border border-top-0 mt-0 rounded-bottom shadow">
				{todoArr.length > 0 ? 
					todoArr.map((todo,todoIndex)=>
						<div key={todoIndex} className="d-flex justify-content-between align-items-center pb-1">
							<p className="m-0">
								{todo.title}<br/>
								<span className="text-muted">{todo.description}</span>
							</p>
							<button className="btn btn-danger" onClick={()=> deleteTask(todoIndex)}>🗑️</button>
						</div>
					) : 
					(
					<div className="d-flex justify-content-center align-items-center py-3 text-muted" >
						<h4>No Task Yet...</h4>
					</div>
					)
				}
			</div>
			<div className="mt-3 border rounded d-flex align-items-center py-3 px-2">
				<p className="text-muted m-0"> Number of Tasks: {todoArr.length} </p>
			</div>
		</div>
	)
}

export default Home;
