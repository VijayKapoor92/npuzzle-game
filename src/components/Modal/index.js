import React from "react";
import {
  FaTrophy,
  FaWindowClose
} from "react-icons/fa";
import "./index.css";

const Modal = ({open, type, title, children, onClose}) => {
  const className = `modal-content ${type === "hint" ? "hint" : ""} ${type === "scores" ? "scores" : ""} ${type === "config" ? "modal-config" : ""}`;
  return (
    <div className={`modal ${open ? "show" : ""}`}>
      <div className={className}>
        <div className="modal-dismiss" onClick={() => onClose()}>
          <FaWindowClose/>
        </div>
        <div className="modal-title">{title}</div>
        {type === "winner" && (
          <div>
            <FaTrophy style={{fontSize: 64}}/>
          </div>
        )}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;