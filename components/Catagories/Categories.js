import CategoryCart from './../CatagoryCart/CategoryCart'
export default function Categories({ category }) {
  return (
    <div className="   bg-white  shadow px-4 sm:px-8">
      <div className="flex gap-4  overflow-x-auto scrollbar-hide md:scrollbar-default py-2   mb-2  max-w-6xl mx-auto sm:gap-8 sm:py-4">
        {/* {Array.from(Array(15), (index) => index + 1).map(() => (
          <CategoryCart />
        ))} */}
        {category.map(({ imageUrl, name }) => (
          <CategoryCart image={imageUrl} name={name} />
        ))}
      </div>
    </div>
  )
}
