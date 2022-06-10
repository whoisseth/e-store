import Image from 'next/image'
import DefaultImage from '../Assets/Images/Default/default-loading-image.png'

export default function ProductCard() {
  return (
    <div className="font-poppins  h-56 w-40 mb-8 flex flex-col items-center gap-2">
      <ProductImg />
      <h1 className="  text-sm   ">Portronics Modesk Burj Mobile Holder</h1>
      <p className="text-sm text-green-600 font-thin"> from ₹ 199 </p>
      <p className="text-xs whitespace-nowrap  text-gray-400 font-thin">
        Sport shoes & more
      </p>
    </div>
  )
}

const ProductImg = () => (
  <div className="relative h-full w-full  rounded">
    <Image src={DefaultImage} layout="fill" objectFit="cover" />
  </div>
)
