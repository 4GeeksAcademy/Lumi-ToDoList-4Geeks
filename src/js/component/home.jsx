import React, {useState} from "react";
//include images into your bundle

//create your first component
const Home = () => {

	const [todo, setTodo] = useState([])

	const deleteTask = (taskName)=>{
		const todoFilter = todo.filter( itm => itm != taskName )
		setTodo(todoFilter)
	}

	return (
		<div className="container-fluid d-flex justify-content-center flex-column w-50">
			<h1 className="align-self-center">todos</h1>
			<input className="input-el" type="text" placeholder="Escribe la tarea aca"
				onKeyDown={(event)=>{
					if(event.key == "Enter" && event.target.value != ""){
						setTodo([...todo, event.target.value])
						event.target.value = ""
					}
				}}
			/>

			{
				todo.map((task, i)=> {
					return (
						<div key={i} className="tarea border border-top-0 d-flex justify-content-between align-items-center">
							<p className="m-0">{task}</p>
							<button className="border-0" type="button" onClick={()=> deleteTask(task)}>x</button>
						</div>
					)
				})
			}
		</div>
	);
};

export default Home;
