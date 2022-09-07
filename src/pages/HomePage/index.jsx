import { useState } from "react";
import TaskInput from "../../components/TaskInput/";
import TaskList from "../../components/TaskList/";
import "./style.css";

export default function HomePage() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const getAnId = taskList.length;
    if (task.length > 0) {
      setTaskList([...taskList, {
        id: getAnId,
        name: task,
        done: false
      }]);
      setTask("");
    }
    else {
      alert("O nome da tarefa deve conter ao menos um caracter.")
    }
  }

  const removeTask = (taskId) => {
    const newList = taskList.filter((task) => (
      task.id != taskId
    ));
    setTaskList(newList)
  }

  return (
    <main>
      <div className="todo-list-card">
        <div className="title-box">
          <h1>To do list</h1>
        </div>
        <TaskInput
          taskName={task}
          setTaskName={(e) => setTask(e.target.value)}
          addTask={addTask}
        />
        {taskList.map((item) => (
          <TaskList
            key={item.id}
            taskName={item.name}
            removeTask={() => removeTask(item.id)}
          />
        ))}
      </div>
    </main>
  );
}
