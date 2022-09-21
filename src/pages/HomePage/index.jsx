import { useState } from "react";

// Components
import TaskInput from "../../components/TaskInput/";
import TaskList from "../../components/TaskList/";

// CSS
import "./style.css";

export default function HomePage() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const checkTaskExistence = () => {
    for (const taskItem of taskList) {
      if (taskItem.name === task) {
        return true
      }
    }
  }

  const addTask = () => {
    const taskExists = checkTaskExistence();
    const checkTaskSize = task.length > 0;
    const idGenerator = taskList.length;

    if (taskExists) {
      alert(`A tarefa "${task}" já existe.`)
    }
    else if (!checkTaskSize) {
      alert("O nome da tarefa deve conter ao menos um caracter.");
    }
    else {
      const newList = [...taskList, {
        id: idGenerator,
        name: task,
        done: false
      }];

      setTaskList([...newList]);
      setTask("");
    }
  }

  const removeTask = (taskId) => {
    const filteredList = taskList.filter((task) => (
      task.id !== taskId
    ));
    setTaskList([...filteredList]);
  }

  const toggleTaskCheck = (id, done) => {
    const index = taskList.findIndex(item => item.id === id);
    const newList = taskList;
    newList[index].done = !done;
    setTaskList([...newList]);
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
          addTaskPressingEnter={(e) => e.key === "Enter" && addTask()}
          addTask={addTask}
        />
        {taskList.map((item) => (
          <TaskList
            key={item.id}
            toggleTaskCheck={() => toggleTaskCheck(item.id, item.done)}
            isTaskChecked={item.done}
            taskName={item.name}
            removeTask={() => removeTask(item.id)}
          />
        ))}
      </div>
    </main>
  );
}
