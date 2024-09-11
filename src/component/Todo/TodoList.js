import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function TodoList() {
	const [taskList, setTaskList] = useState([]);
	const [task, setTask] = useState("");
	const [taskError, setTaskError] = useState("");
	const [edit, setEdit] = useState(true);
	const [editRow, setEditRow] = useState("");
	const [isHovered, setIsHovered] = useState(false);

	const buttonStyle = {
		marginLeft: "10px",
		padding: "10px 20px",
		border: "none",
		backgroundColor: isHovered ? "#f7eeec" : "white",
		cursor: "pointer",
	};
	const cardStyle = {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid rgb(0 0 0 / 5%) ",
		padding: "15px 10px",
		backgroundColor: "white",
		cursor: "pointer",
		boxShadow:
			"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	};

	const handleInputChange = (e) => {
		setTask(e.target.value);
	};

	const addTask = () => {
		let id = Math.floor(Math.random() * 10000);
		const payload = {
			id: edit ? id : editRow,
			task: task,
		};
		if (task.length > 0) {
			if (edit) {
				setTaskList([payload, ...taskList]);
			} else {
				setTaskList([
					...taskList.map((item) =>
						item.id === editRow ? payload : item
					),
				]);
				setEdit(true);
			}
			setTask("");
			setTaskError("");
		} else {
			setTaskError("Plese enter task");
		}
	};
	const deleteTask = (id) => {
		setTaskList([...taskList.filter((item) => item.id !== id)]);
	};
	const updateTask = (item) => {
		setEdit(false);
		setEditRow(item.id);
		setTask(item.task);
	};
	return (
		<div
			style={{
				marginTop: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					backgroundColor: "rgb(207 205 208 / 98%)",
					padding: "20px 30px",
					width: "400px",
				}}
			>
				<div
					style={{
						display: "flex",
					}}
				>
					<div>
						<input
							style={{
								padding: "10px 40px",
								width: "250px",
								border: "none",
							}}
							type="text"
							placeholder="Task..."
							value={task}
							onChange={handleInputChange}
						/>
						<div
							style={{
								color: "red",
								fontSize: "12px",
								padding: "5px",
							}}
						>
							{taskError}
						</div>
					</div>
					<div>
						<button
							style={buttonStyle}
							onClick={addTask}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{edit ? "Add" : "Update"}
						</button>
					</div>
				</div>
				<div
					style={{
						marginTop: "5px",
					}}
				>
					{taskList.length > 0 ? (
						taskList.map((item, index) => {
							return (
								<div key={index} style={cardStyle}>
									<div>
										{index + 1} . {item.task}
									</div>
									<div>
										<button
											style={{
												border: "none",
												background: "none",
												cursor: "pointer",
											}}
											onClick={() => updateTask(item)}
										>
											<EditOutlinedIcon color="primary" />
										</button>
										<button
											style={{
												border: "none",
												background: "none",
												cursor: "pointer",
												marginLeft: "5px",
												color: "red",
											}}
											onClick={() => deleteTask(item.id)}
										>
											<DeleteOutlineIcon />
										</button>
									</div>
								</div>
							);
						})
					) : (
						<div style={{ ...cardStyle, justifyContent: "center" }}>
							Not found task...
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
export default TodoList;
