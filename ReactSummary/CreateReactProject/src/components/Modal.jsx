import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

//children referes the content between the opening and closing tag in the custom component
// open prop is required

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
