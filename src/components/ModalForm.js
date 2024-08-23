function ModalForm({
  tempValues,
  isModalOpen,
  inputType,
  isError,
  errorMsg,
  onChange,
  onSubmit,
  onCancel,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputType, tempValues);
  };
  const handleChange = (e) => {
    onChange(e);
    //console.log(e.target.value);
  };

  const cancelHandle = (e) => {
    onCancel(e.target.name);
    //console.log(e.target.name);
  };

  return (
    <>
      {isModalOpen ? (
        <div>
          <div className="fixed z-30 top-1/4 left-1/4 border-2 bg-sky-600 p-20">
            <div className="p-5">
              <span className="text-lg font-semibold">
                Please enter your {inputType}
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <label id={inputType}></label>
              <input
                className="border-2"
                type="text"
                value={tempValues}
                id={inputType}
                name={inputType}
                onChange={handleChange}
              />
              <button className="ml-3 p-1 px-2  border-2" type="submit">
                Submit
              </button>
              <button
                className="ml-3 p-1 px-2  border-2"
                onClick={cancelHandle}
                type="button"
                name={inputType}
              >
                Cancel
              </button>
              {isError && <div>{errorMsg}</div>}
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
