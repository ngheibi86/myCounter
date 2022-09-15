import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { counterContext } from "./countersComponent";

const Counter = () => {
  const { count, setCount } = useContext(counterContext);
  // const {cnt,index,updateFieldChanged}=useContext(counterContext);
  //   const handleIncreament=()=> {
  //     cnt.amount+=1;
  //     updateFieldChanged(index,cnt);
  //     console.log(cnt);
  //    }
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const handleDelete = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <ul>
        <li>{count}</li>
      </ul>
      <Button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => handleIncreament()}
      >
        Increament
      </Button>
      <Button
        className="btn btn-secondary btn-sm"
        onClick={() => handleDelete()}
      >
        Delete
      </Button>
    </div>
  );
};
export default Counter;
