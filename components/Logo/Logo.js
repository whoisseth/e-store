import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
export default function Logo() {
  return (
    <Link href="/">
      <a className="italic   font-poppins whitespace-nowrap text-2xl font-semibold text-blue-500 ">
        e-Store
      </a>
    </Link>
  )
}
