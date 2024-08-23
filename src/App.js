import "./App.css";
import { useState } from "react";

import Card from "./components/Card";
import ModalForm from "./components/ModalForm";
import Header from "./components/Header";

function App() {
  const [tempValues, setTempValues] = useState("");
  const [storedValues, setStoredValues] = useState("");
  const [isNameModalOpen, setIsNameModalOpen] = useState(true);

  const onSubmit = (e) => {
    setStoredValues(tempValues);
    console.log("Submitted");
  };
  const onChange = (e) => {
    const { value } = e.target;
    setTempValues(value);
    console.log(value);
  };

  return (
    <>
      <Header />
      <div className="">
        <Card values={storedValues} />
        <ModalForm
          tempValues={tempValues}
          isModalOpen={isNameModalOpen}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default App;

/**
 * TASK1: modal input
 * TASK2: build from small component and lift state up
 * TASK3: remove the input when click add again
 * TASK4: validation - name: text? email: email format?
 *
 *
 * let's start from small components and lift state up  - app, card, modal
 * build the html structure first (position, border, bg) and logic later, css in the end (minimise css styling before everything unless it's necessary)
 *
 */
