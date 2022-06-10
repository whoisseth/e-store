import ProductCard from './ProductCard'
import ItemsContainer from './../ItemsContainer'

export default function Electronics() {
  return (
    <ItemsContainer itemType='Electronics'>
      {Array.from(Array(10), (index) => index + 1).map(() => (
        <ProductCard />
      ))}
    </ItemsContainer>
  )
}

//
