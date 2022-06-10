export default function ItemsContainer({ children, itemType }) {
  return (
    <div className="px-4 font-poppins flex flex-col items-center bg-white shadow-md mb-2">
      <h1 className="font-semibold text-xl  my-6">{itemType} </h1>
      <div className="flex flex-wrap gap-6 justify-center  ">{children}</div>
    </div>
  )
}
