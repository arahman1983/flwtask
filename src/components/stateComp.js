import React from "react";

export default function StateComp({ status, activeId, onChangeState }) {
  return (
    <li className="list-group-item p-0">
      <button 
        className={`btn ${status.id > activeId ? "btn-light" : status.id < activeId ? "btn-secondary" : status.activeClass} rounded-0`} 
        onClick={()=>onChangeState(status.id)}
        disabled={status.id <4 && status.id !== activeId + 1 && "disabled"}>
        {status.label}
      </button>
    </li>
  );
}
