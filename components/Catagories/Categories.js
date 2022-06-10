import CategoryCart from './../CatagoryCart/CategoryCart'
export default function Categories() {
  return (
    <div className="  bg-white  shadow px-2">
      <div className="flex gap-4  overflow-x-auto scrollbar-hide md:scrollbar-default py-2   mb-2  max-w-6xl mx-auto">
        {Array.from(Array(15), (index) => index + 1).map(() => (
          <CategoryCart />
        ))}
      </div>
    </div>
  )
}
