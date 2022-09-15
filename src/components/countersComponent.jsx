import React, { Component, useState } from "react";
import Counter from "./counterComponent";

export const counterContext = React.createContext();
export const Counters = () => {
  const [count, setCount] = useState(0);
  // const updateFieldChanged = (index,  value) => {
  // console.log('index: ' + index);
  // console.log('property name: '+ e.target.name);
  // let newArr = [...data]; // copying the old datas array
  // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
  // newArr[index] = value; // replace e.target.value with whatever you want to change it to
  // setData(newArr);
  // }
  return (
    <div>
      <counterContext.Provider value={{count,setCount}}>
        <Counter></Counter>
      </counterContext.Provider>
    </div>
  );
};

export default Counters;
