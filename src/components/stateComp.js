import React, { useRef, useEffect } from "react";

export default function StateComp({ status, activeId, onChangeState }) {
  const ref = useRef();
  useEffect(() => {
    if(activeId === 5 && status.id === 4){
      ref.current.disabled = false
    }else if(status.id !== activeId + 1){
      ref.current.disabled = 'disabled'
    }else{
      ref.current.disabled = false
    }
  }, [activeId, status.id])
  return (
    <li className="list-group-item p-0">
      <button
        ref={ref}
        className={`btn ${status.id > activeId ? "btn-light" : status.id < activeId ? "btn-secondary" : status.activeClass} rounded-0`}
        onClick={() => onChangeState(status.id)}
      >
        {status.label}
      </button>
    </li>
  );
}
