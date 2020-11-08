import React, { useRef, useEffect } from "react";

export default function StateComp(props: any) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if(props.activeId === 5 && props.status.id === 4){
      if(ref.current){
        ref.current.disabled = false
      }
      // ref.current && ref.current.disabled = false
    }else if(props.status.id !== props.activeId + 1){
      if(ref.current) {
        ref.current.disabled = true
      }  
    }else{
      if(ref.current){
        ref.current.disabled = false
      }
    }
  }, [props.activeId, props.status.id])
  return (
    <li className="list-group-item p-0">
      <button
        ref={ref}
        className={`btn ${props.status.id > props.activeId ? "btn-light" : props.status.id < props.activeId ? "btn-secondary" : props.status.activeClass} rounded-0`}
        onClick={() => props.onChangeState(props.status.id)}
      >
        {props.status.label}
      </button>
    </li>
  );
}
