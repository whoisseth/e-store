import { FaUserCheck } from 'react-icons/fa'
import Logo from './../Logo/Logo'
import { Menu } from './../Menu/Menu'
import { CartIcon } from '../ShopCart/CartIcon'
import { SearchBox } from './../SearchBox/SearchBox'

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-brand py-2 space-y-2 z-50 shadow-md  ">
      <div className=" flex justify-between items-center  px-4 max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <Menu />
          <Logo />
        </div>
        <SearchBox className="hidden md:flex w-full" />
        <div className="flex gap-4 items-center">
          <CartIcon />
          <User />
        </div>
      </div>
      <SearchBox className="md:hidden" />
    </div>
  )
}

const User = () => <FaUserCheck className="text-white text-2xl" />
