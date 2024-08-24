const add = "Add";
function Card({ values, inputType, onOpenModal }) {
  const handleModalOpen = (e) => {
    onOpenModal(e.target.name);
  };
  return (
    <>
      <div className="flex items-center  p-3 ">
        <div className="flex items-center w-full">
          <span className="inline-block w-1/4 font-extrabold">
            {inputType.charAt(0).toUpperCase() + inputType.slice(1)}
          </span>
          <span className="inline-block w-3/4 truncate"> {values} </span>
        </div>
        <div>
          <button
            className=" text-sm px-2 py-1 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600"
            name={inputType}
            onClick={handleModalOpen}
          >
            {add}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
