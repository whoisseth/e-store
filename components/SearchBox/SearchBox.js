import SearchBtn from './../SearchBtn/SearchBtn'
export const SearchBox = ({ className }) => {
  return (
    <div
      className={
        '  mx-4   flex gap-1 items-center text-white font-poppins  bg-white rounded overflow-hidden px-2 max-w-xl  ring-1 ring-blue-500 ' +
        className
      }
    >
      <SearchBtn />
      <input
        type="text"
        placeholder="Search for Products, Brands and More   "
        className="flex  mb-2 w-full px-2  outline-none  placeholder:text-gray-400 placeholder:text-xs  text-black   my-2 text-sm 
      "
      />
    </div>
  )
}
