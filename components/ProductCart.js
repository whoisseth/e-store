import Image from 'next/image'
import Link from 'next/link'
export default function ProductCart({ image, name, price, slug }) {
  return (
    <>
      <Link href={slug}>
        <a className="rounded-2xl bg-white overflow-hidden ">
          <Image src={image} height={200} width={200} />
          <div className="px-4 py-2">
            <div className="font-semibol text-lg mb-1">{name}</div>
            <div className=" text-brand  text-sm">Rs. {price}</div>
          </div>
        </a>
      </Link>
    </>
  )
}
