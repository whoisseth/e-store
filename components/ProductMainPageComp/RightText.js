import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function RightText({ name, description, price, count }) {
  return (
    <div className="right p-6 flex gap-4 flex-col mb-16 lg:w-[27rem]">
      <div className="text-xs text-main-blue font-bold">e-store </div>
      <div className="font-semibold text-3xl lg:mb-4 lg:text-4xl">{name}</div>
      <div className=" text-gray-400 lg:text-sm">{description}</div>
      <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-semibold "> Rs {price}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:gap    ">
        <div className="font-semibold  flex justify-between space  bg-blue-100  rounded-xl py-2 px-4 items-center lg:w-32  text-slate-500 ">
          <button
            className=" font-semibold text-3xl hover:opacity-70"
            //   onClick={minusCount}
          >
            -
          </button>
          <div className='text-black'>{0} </div>
          <button
            className=" font-semibold text-3xl hover:opacity-70"
            //   onClick={addCount}
          >
            +
          </button>
        </div>
        <button
          className="flex bg-blue-300 rounded-xl py-4 justify-center gap-4 text-white font-semibold lg:grow lg:ml-4 hover:opacity-70 "
          onClick={count > 0 ? addCartbtnFun : console.log('count is zero')}
        >
          <AiOutlineShoppingCart className="h-6 w-6" />
          <div className="font-semibold ">Add to cart</div>
        </button>
      </div>
    </div>
  )
}
