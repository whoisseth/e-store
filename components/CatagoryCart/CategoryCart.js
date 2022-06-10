import Image from 'next/image'
import Link from 'next/link'
import DefaultImage from '../Assets/Images/Default/default-loading-image.png'

export default function CategoryCart() {
  return (
    <Link href={'#'}>
      <a className="flex flex-col   w-14 h-14 items-center justify-center rounded ">
        <CategoryImg />
        <p className="text-xs font-poppins">Grocery</p>
      </a>
    </Link>
  )
}

const CategoryImg = () => (
  <div className="relative h-8 w-8 rounded">
    <Image src={DefaultImage} layout="fill" objectFit="contain" />
  </div>
)
