import Image from 'next/image'
import DefaultImage from '../Assets/Images/Default/default-loading-image.png'

export default function DealsCard() {
  return (
    <div className="font-poppins  h-44 w-32 mb-8 flex flex-col items-center gap-2">
      <CardImg />
      <h1 className="font-semibold text-sm   whitespace-nowrap">
        Nike, Adidas, PUMA..
      </h1>
      <p className="text-sm text-green-600 font-thin"> from ₹ 199 </p>
      <p className="text-xs whitespace-nowrap  text-gray-400 font-thin">
        Sport shoes & more
      </p>
    </div>
  )
}

const CardImg = () => (
  <div className="relative h-full w-full  rounded">
    <Image src={DefaultImage} layout="fill" objectFit="cover" />
  </div>
)
