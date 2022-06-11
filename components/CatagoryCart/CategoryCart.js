import Image from 'next/image'
import Link from 'next/link'
import DefaultImage from '../Assets/Images/Default/default-loading-image.png'

export default function CategoryCart({ image, name }) {
  return (
    <Link href={'#'}>
      <a className="flex flex-col   w-14 h-14 items-center justify-center rounded ">
        <CategoryImg image={image} />
        <p className="text-xs font-poppins ">{name}</p>
      </a>
    </Link>
  )
}

const CategoryImg = ({ image }) => (
  <div className="relative h-8 w-8 sm:h-12 sm:w-12 rounded-full">
    <Image src={image || DefaultImage} layout="fill" objectFit="contain" />
  </div>
)
