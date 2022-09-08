import { useState } from "react";
import deleteIcon from "../../assets/delete.png";
import "./style.css";

export default function TaskList(props) {
  return (
    <div className="task-box">
      <div className="task-name-box">
        <input
          type="checkbox"
          onChange={props.toggleTaskCheck}
          title="Concluir tarefa"
          placeholder="Concluir tarefa"
        />
        <label className={props.isTaskChecked && "task-checked"}>{props.taskName}</label>
      </div>
      <div className="item-options">
        <button onClick={props.removeTask} title="Remover Tarefa">
          <img src={deleteIcon} alt="ícone de deletar" />
        </button>
      </div>
    </div>
  );
}
