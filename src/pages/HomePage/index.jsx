import { useState } from "react";
import TaskInput from "../../components/TaskInput/";
import TaskList from "../../components/TaskList/";
import "./style.css";

/*  Requisitos {

  1 - OK - Alterar o estilo de uma task quando concluída;
  2 - OK - Não permitir tasks duplicadas;
  3 - Permitir adição de task ao pressionar a tecla enter;

  Challanges {
    1 - Adicionar a opção de editar uma task;
    2 - Salvar os dados em localstorage;
  }

} */

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
      setTaskList([...taskList, {
        id: idGenerator,
        name: task,
        done: false
      }]);
      setTask("");
    }
  }

  const removeTask = (taskId) => {
    const filteredList = taskList.filter((task) => (
      task.id != taskId
    ));
    setTaskList(filteredList)
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
