import { useState } from "react";
import TaskInput from "../../components/TaskInput/";
import TaskList from "../../components/TaskList/";
import "./style.css";

/*  Requisitos {

  1 - Alterar o estilo de uma task quando concluída;
  2 - Remover espaços em brancos dos nomes;
  3 - Não permitir tasks duplicadas;
  4 - Permitir adição de task ao pressionar a tecla enter;

  Challanges {
    1 - Adicionar a opção de editar uma task;
    2 - Salvar os dados em localstorage;
  }

} */

export default function HomePage() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const idGenerator = taskList.length;
    if (task.length > 0) {
      setTaskList([...taskList, {
        id: idGenerator,
        name: task,
        done: false
      }]);
      setTask("");
    }
    else {
      alert("O nome da tarefa deve conter ao menos um caracter.");
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
