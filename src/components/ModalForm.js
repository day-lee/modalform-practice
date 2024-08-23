import { useState } from "react";

function ModalForm({ tempValues, isModalOpen, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const handleChange = (e) => {
    onChange(e);
    console.log(e.target.value);
  };

  return (
    <>
      {isModalOpen ? (
        <div>
          <div className="fixed z-30 top-1/4 left-1/4 border-2 bg-sky-600 p-20">
            <div className="p-5">
              <span>Please enter your input</span>
            </div>
            <form onSubmit={handleSubmit}>
              <label id=""></label>
              <input
                className="border-2"
                type="text"
                value={tempValues}
                id=""
                name=""
                onChange={handleChange}
              />
              <button className="ml-3 p-1 px-2  border-2" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="fixed w-full h-full z-20 bg-opacity-50 bg-black">
            modal bg
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalForm;
