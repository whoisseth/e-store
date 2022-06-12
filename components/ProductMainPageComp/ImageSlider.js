import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export default function ImageSlider({
  selectedImg,
  preImg,
  nextImg,
  images,
  setImgPeview,
  setSelectedImg,
}) {
  return (
    <>
      <div className="left flex flex-col gap-8  items-center">
        <div className="lg: ">
          <div className="flex  relative    items-center  lg:rounded-xl overflow-hidden   w-full h-auto lg:w-[24rem]    ">
            <img
              className="h-full w- sm:h-96 sm:w-96 object-cover sm:rounded-xl cursor-pointer "
              src={selectedImg}
              alt=""
              onClick={() => setImgPeview(false)}
            />
            <button
              className="lg:hidden absolute left-2 text-3xl overflow-auto bg-white  p-1  rounded-full    "
              onClick={preImg}
            >
              <MdNavigateBefore className="font-bold h-8 w-8  hover:text-brand " />
            </button>
            <button
              className="lg:hidden absolute right-2  text-2xl overflow-auto bg-white  p-1  rounded-full"
              onClick={nextImg}
            >
              <MdNavigateNext className=" font-bold h-8 w-8  hover:text-brand" />
            </button>
          </div>
        </div>

        <div
          className="hidden lg:flex
                  ImgSlider gap-4 justify-center  w-[24rem]"
        >
          {images.map((images, index) => (
            <div key={index}>
              <button
                className={` h-20 w-20 overflow-hidden rounded-xl active:ring-2 
                         ${
                           selectedImg === images
                             ? 'ring-2 ring-main-blue transition delay-75 ease-linear '
                             : ''
                         } focus:ring-main-blue`}
                onClick={() => setSelectedImg(images)}
              >
                <img
                  className={` object-cover hover:opacity-50 ${
                    selectedImg === images ? ' opacity-50 ' : ''
                  }`}
                  src={images}
                  alt=""
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
