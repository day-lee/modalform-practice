function Card({ values }) {
  return (
    <>
      <div className="border-2 p-3 w-1/2 border-sky-900">
        <div>
          <span>name</span>
          <span> {values} </span>
          <button className="border-2 bg-sky-700 px-2 rounded-lg">Add</button>
        </div>
        <div>
          <span>email</span>
          <span> {values} placeholder </span>
          <button className="border-2 bg-sky-700 px-2 rounded-lg">Add</button>
        </div>
      </div>
    </>
  );
}

export default Card;
