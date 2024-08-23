import "./App.css";
import { useState } from "react";

import Card from "./components/Card";
import ModalForm from "./components/ModalForm";
import Header from "./components/Header";

const INITIAL_VALUES = { name: "", email: "" };
const inputName = "name";
const inputEmail = "email";
function App() {
  const [tempValues, setTempValues] = useState(INITIAL_VALUES);
  const { name, email } = tempValues;
  const [storedValues, setStoredValues] = useState(INITIAL_VALUES);
  const storedName = storedValues.name;
  const storedEmail = storedValues.email;
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validateInput = (targetName, textInput) => {
    switch (targetName) {
      case "name":
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(textInput);

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(textInput);
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setTempValues((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
    if (!validateInput(name, value)) {
      setIsError(true);
      setErrorMsg("Invalid input. Please check your text.");
    } else {
      setIsError(false);
      setErrorMsg("");
      console.log("success" + value);
    }
  };

  const onSubmit = (targetName, value) => {
    console.log(targetName, value);
    if (isError) {
      return;
    } else if (!validateInput(targetName, value)) {
      setIsError(true);
      setErrorMsg("This field cannot be left empty.");
      return;
    } else {
      switch (targetName) {
        case "name":
          setIsNameModalOpen(false);
          break;
        case "email":
          setIsEmailModalOpen(false);
          break;
      }
      setStoredValues(tempValues);
      console.log("Submitted");
    }
  };

  const onOpenModal = (targetName) => {
    switch (targetName) {
      case "name":
        setIsNameModalOpen(true);
        break;
      case "email":
        setIsEmailModalOpen(true);
        break;
    }
  };

  const onCancel = (targetName) => {
    console.log(targetName);
    switch (targetName) {
      case "name":
        setIsNameModalOpen(false);
        break;
      case "email":
        setIsEmailModalOpen(false);
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="">
        <Card
          values={storedName}
          inputType={inputName}
          onOpenModal={onOpenModal}
        />
        <Card
          values={storedEmail}
          inputType={inputEmail}
          onOpenModal={onOpenModal}
        />
        <ModalForm
          tempValues={name}
          isModalOpen={isNameModalOpen}
          inputType={inputName}
          isError={isError}
          errorMsg={errorMsg}
          onSubmit={onSubmit}
          onChange={onChange}
          onCancel={onCancel}
        />
        <ModalForm
          tempValues={email}
          isModalOpen={isEmailModalOpen}
          inputType={inputEmail}
          isError={isError}
          errorMsg={errorMsg}
          onSubmit={onSubmit}
          onChange={onChange}
          onCancel={onCancel}
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
