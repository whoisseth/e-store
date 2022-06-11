import client from '../utils/client'
import { Layout } from './../components/Layout'
import Categories from './../components/Catagories/Categories'
import Slider from './../components/Slider/Slider'
import DealsOfTheDay from './../components/DealsOfTheDay/DealsOfTheDay'
import Products from './../components/Products/Products'
import { HiOutlineMenu } from 'react-icons/hi'
import Image from 'next/image'
import ProductCart from './../components/ProductCart'

const Home = ({ products, category }) => {
  console.log(products)
  console.log(category)

  return (
    <Layout>
      <Categories category={category} />
      <div className="mx-2">
        <Slider />
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 sm:gap-6 items-center justify-center my-4">
          {products.map((data) => (
            <ProductCart
              image={data.imageUrl[0]}
              name={data.name}
              price={data.price}
              slug={`product/${data.slug.current}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)
  //
  // category
  const categoryQuery = `*[_type == 'category']{
    name,
    imageUrl
  }`
  const category = await client.fetch(categoryQuery)
  return {
    props: {
      products,
      category,
    },
  }
}
