import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/CounterStore";
import { privacyAction } from "../store/PrivacyStore";

const Controller = () => {
  const inputElemnet = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterAction.increment())
  };

  const handleDecrement = () => {
   dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(counterAction.add(inputElemnet.current.value))
    inputElemnet.current.value = "";
  };

  const handleSub=()=>{
   dispatch(counterAction.substract(inputElemnet.current.value));
    inputElemnet.current.value = "";
  }

  const handlePrivacy = ()=>{
    dispatch(privacyAction.toggle());
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-outline-light btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Controller
        </button>
      </div>
      <input type="text" placeholder="Enter Number" className="input-text"  ref={inputElemnet}/>
      <button
        type="button"
        className="btn btn-outline-success btn-lg px-4 btn-add"
        onClick={handleAdd}
      >
        ADD
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-lg px-4"
        onClick={handleSub}
      >
        SUB
      </button>
    </div>
  );
};

export default Controller;
