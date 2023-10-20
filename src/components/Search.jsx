
function Search({ search, setSearch }) {
  return (
    <>
      <div className="flex border-none  lg:w-full p-2 rounded-md self-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" rounded-sm bg-black lg:py-8 lg:text-4xl  border-none outline-none"
          placeholder="Type to start search.."
        />
      </div>
    </>
  );
}

export default Search;
