import React, { useState } from "react";
import { NewTask } from "./newTask";

//import { NewTask } from "./newTask.js";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState("");
	const [isShown, setIsShown] = useState(false);
	const [taskId, setTaskId] = useState(0);

	const handleKeyDown = event => {
		if (event.key === "Enter") {
			if (inputValue === "") {
				alert("Task can't be empty");
			} else {
				setTaskId(taskId + 1);
				setTaskList([...taskList, { id: taskId, input: inputValue }]);
				setInputValue("");
			}
		}
	};

	function removeTask(taskToRemoveID) {
		setTaskList(taskList.filter(task => task.id !== taskToRemoveID));
	}

	return (
		<div className="mt-5">
			<h1 className="display-1 justify-content-center text-center">
				todos
			</h1>
			<div className="justify-content-center">
				<div id="card" className="mx-auto text-center">
					<input
						id="newTaskInput"
						className="newTask"
						type="text"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={handleKeyDown}
					/>
				</div>
				{taskList[0] === undefined ? (
					<div className="newTask mx-auto row">
						<div className="col-11">No tasks, add a task</div>
					</div>
				) : (
					taskList.map(newTask => (
						<NewTask
							id={newTask.id}
							key={newTask.id}
							task={newTask.input}
							myFunction={removeTask}
						/>
					))
				)}
			</div>
			<div className="itemCounter">
				<div className="inner">{`${taskList.length} Items left`}</div>
			</div>
		</div>
	);
}
