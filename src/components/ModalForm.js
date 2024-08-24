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
  };

  const cancelHandle = (e) => {
    onCancel(e.target.name);
  };

  return (
    <div>
      {isModalOpen ? (
        <>
          <div className="fixed w-[430px] h-[180px] z-30 top-1/4 left-1/4 rounded-xl bg-white border-2 p-10">
            <span className="py-2 inline-block text-md font-semibold">
              Please enter your {inputType}
            </span>

            <form onSubmit={handleSubmit}>
              <label id={inputType}></label>
              <input
                className="border-2 rounded-md p-1"
                type="text"
                value={tempValues}
                id={inputType}
                name={inputType}
                onChange={handleChange}
              />
              <button
                className="text-sm ml-3 p-1 px-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
                type="submit "
              >
                Submit
              </button>
              <button
                className="text-sm ml-3 p-1 px-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-gray-600"
                onClick={cancelHandle}
                type="button"
                name={inputType}
              >
                Cancel
              </button>
              {isError && (
                <div className="pt-1 text-sm text-red-600 font-semibold">
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
          <div className="fixed inset-0 w-full h-full z-20 bg-opacity-50 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default ModalForm;
