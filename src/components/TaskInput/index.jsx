import "./style.css";

export default function TaskInput(props) {
  return (
    <div className="input-task">
      <input
        type="text"
        value={props.taskName}
        onChange={props.setTaskName}
        onKeyUp={props.addTaskPressingEnter}
        autoFocus
        placeholder="Adicione uma tarefa"
      />
      <button
        type="button"
        onClick={props.addTask}
        title="Adicionar tarefa">+</button>
    </div>
  );
}
