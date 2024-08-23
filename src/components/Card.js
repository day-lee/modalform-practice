const add = "Add";
function Card({ values, inputType, onOpenModal }) {
  const handleModalOpen = (e) => {
    onOpenModal(e.target.name);
  };
  return (
    <>
      <div className="border-2 p-3 w-1/2 border-sky-900">
        <div>
          <div>
            <span>{inputType}</span>
            <span> {values} </span>
          </div>
          <div>
            <button
              className="border-2 bg-sky-700 px-2 rounded-lg"
              name={inputType}
              onClick={handleModalOpen}
            >
              {add}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
