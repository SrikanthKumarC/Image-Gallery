function Search({ search = "cats", setSearch }) {
  return (
    <>
      <div className="flex border-none w-fit p-2 rounded-md self-center">
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="items-center self-center rounded-sm shadow-inner dark:bg-black dark:border-gray-600 px-8 py-4 lg:text-4xl  border"
          placeholder="Type to start search.."
        />
      </div>
    </>
  );
}

export default Search;
