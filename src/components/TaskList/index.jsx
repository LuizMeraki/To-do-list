import "./style.css";

export default function TaskList (props){
  return (
    <div className="task-box">
      <p>{props.taskName}</p>
      <div className="item-options">
        <button onClick={props.removeTask}>deletar</button>
      </div>
    </div>
  );
}
