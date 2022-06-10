import client from '../utils/client'
import { Layout } from './../components/Layout'
import Categories from './../components/Catagories/Categories'
import Slider from './../components/Slider/Slider'
import DealsOfTheDay from './../components/DealsOfTheDay/DealsOfTheDay'
import Products from './../components/Products/Products'
import { HiOutlineMenu } from 'react-icons/hi'
import Image from 'next/image'

const Home = ({ products }) => {
  console.log(products)

  return (
    <Layout>
      <Categories />
      <div className="mx-2">
        <Slider />
        {/* <DealsOfTheDay /> */}
        {/* <Products /> */}
        <div>
          {products.map((data) => (
            <div>
              <div>{data.name}</div>
              <Image src={data.imageUrl[0]} height={200} width={200} />
            </div>
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
  return {
    props: {
      products,
    },
  }
}
