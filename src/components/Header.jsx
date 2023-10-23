import Search from "./Search";

function Header({ search, setSearch }) {
  return (
    <header
      className={` transition-all bg-white dark:bg-slate-950 dark:border-none dark:text-white w-full  flex justify-between lg:px-8  py-2 text-lg lg:text-3xl p-3 gap-2 border`}
    >
      <h1 className=" items-center self-center  font-hsc">Image Gallery</h1>
      <Search search={search} setSearch={setSearch} />
    </header>
  );
}

export default Header;
