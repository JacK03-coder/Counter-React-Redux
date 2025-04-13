import { useSelector } from "react-redux"

const CounterDisplay = () => {
    const {counterval} = useSelector((store)=>store.counter);
  return (
    <p className="fs-5 mb-4">
      Counter Current Count :: {counterval}
    </p>
  );
};

export default CounterDisplay;
