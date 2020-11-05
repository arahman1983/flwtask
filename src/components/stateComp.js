import React from "react";

export default function StateComp({status}) {
  return (
    <li class="list-group-item p-0">
      <button className={`btn btn-${status.isActive ? status.activeClass : 'btn-light'} rounded-0`} disabled={!status.isActive && true}>
        {status.label}
      </button>
    </li>
  );
}
