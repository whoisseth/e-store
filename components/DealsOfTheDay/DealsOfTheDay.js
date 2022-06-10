import Card from '../DealsCard/DealsCard'
import ItemsContainer from './../ItemsContainer'

export default function DealsOfTheDay() {
  return (
    <ItemsContainer itemType="Deals of the Day">
      {Array.from(Array(6), (index) => index + 1).map(() => (
        <Card />
      ))}
    </ItemsContainer>
  )
}
