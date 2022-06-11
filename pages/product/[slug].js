import { useState } from 'react'
import React, { useRef } from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import client from './../../utils/client'
import { Layout } from './../../components/Layout'

export default function Product({ post }) {
  console.log(post)
  const images = post.imageUrl
// 
  let [selectedImg, setSelectedImg] = useState(images[0])
  let [countImg, setCountImg] = useState(0)
  function nextImg() {
    if (countImg >= images.length - 1) {
      selectedImg = setSelectedImg(images[0])
      countImg = setCountImg(0)
    } else {
      selectedImg = setSelectedImg(images[countImg + 1])
      countImg = setCountImg(countImg + 1)
    }
  }
  function preImg() {
    if (countImg === 0) {
      selectedImg = setSelectedImg(images[images.length - 1])
      countImg = setCountImg(images.length - 1)
    } else {
      selectedImg = setSelectedImg(images[countImg - 1])
      countImg = setCountImg(countImg - 1)
    }
  }
  const [imgPreiw, setImgPeview] = useState(true)
// 
    
  return (
    <Layout>
      <div className="h-[60vh] mb-20   ">
        <div
          className={` hidden lg:${
            imgPreiw ? 'hidden' : 'flex'
          }   h-full w-full bg-black opacity-80 z-50 `}
        />
        {/* mobile view */}
        <ImagePreviewSlider
          images={images}
          imgPreiw={imgPreiw}
          selectedImg={selectedImg}
          preImg={preImg}
          nextImg={nextImg}
        />
        <div className="lg:mx-auto lg:mt-12   grid grid-cols-1 lg:grid-cols-2 items-center relative  lg:w-[56.25rem] ">
          <ImageSlider
            images={images}
            imgPreiw={imgPreiw}
            selectedImg={selectedImg}
            preImg={preImg}
            nextImg={nextImg}
          />
          <RightText
            name={post.name}
            description={post.description}
            price={post.price}
          />
        </div>
      </div>
    </Layout>
  )
}
function ImagePreviewSlider({
  imgPreiw,
  selectedImg,
  preImg,
  nextImg,
  images,
}) {
  return (
    <>
      <div>
        <div
          className={` hidden lg:${
            imgPreiw ? 'hidden' : 'flex'
          } absolute left  flex-col gap-6 h-screen w-screen  justify-center items-center top-0 right-0  z-50 overscroll-none `}
        >
          <div className=" ">
            <div className="flex  relative    items-center    w-full h-auto lg:w-[26rem]   ">
              <img
                className="h-full w-full lg:rounded-xl "
                src={selectedImg}
                alt=""
              />
              <button
                className="absolute right-0 -top-10"
                onClick={() => setImgPeview(true)}
              >
                <IoMdClose className="text-white text-3xl hover:text-brand" />
              </button>
              <button
                className=" absolute -left-4 text-2xl overflow-auto bg-white  p-1  rounded-full    "
                onClick={preImg}
              >
                <MdNavigateBefore className="font-bold h-8 w-8  hover:text-brand " />
              </button>
              <button
                className=" absolute -right-4  text-2xl overflow-auto bg-white  p-1  rounded-full"
                onClick={nextImg}
              >
                <MdNavigateNext className=" font-bold h-8 w-8  hover:text-brand" />
              </button>
            </div>
          </div>

          <div
            className="hidden lg:flex
            ImgSlider gap-4 justify-center  w-[26rem]"
          >
            {images.map((images, index) => (
              <div key={index}>
                <button
                  className={`relative h-22 w-22 overflow-hidden rounded-xl active:ring-2 
                   ${
                     selectedImg === images
                       ? 'ring-2 ring-brand transition delay-75 ease-linear '
                       : ''
                   } focus:ring-brand`}
                  onClick={() => setSelectedImg(images)}
                >
                  <div
                    className={`absolute h-full w-full hover:bg-white opacity-50  ${
                      selectedImg === images ? ' opacity-50 bg-white' : ''
                    }`}
                  ></div>
                  <img className={`h-full w-full `} src={images} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
function ImageSlider({ imgPreiw, selectedImg, preImg, nextImg, images }) {
  return (
    <>
      <div className="left flex flex-col gap-8 b">
        <div className="lg: ">
          <div className="flex  relative    items-center  lg:rounded-xl overflow-hidden   w-full h-auto lg:w-[24rem]   ">
            <img
              className="h-full w-full lg:rounded-xl cursor-pointer "
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
                       ? 'ring-2 ring-brand transition delay-75 ease-linear '
                       : ''
                   } focus:ring-brand`}
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
function RightText({ name, description, price, count }) {
  return (
    <div className="right p-6 flex gap-4 flex-col mb-16 lg:w-[27rem]">
      <div className="text-xs text-brand font-bold">e-store </div>
      <div className="font-semibold text-3xl lg:mb-4 lg:text-4xl">{name}</div>
      <div className=" text-gray-400 lg:text-sm">{description}</div>
      <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-semibold "> Rs {price}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:gap    ">
        <div className="font-semibold  flex justify-between space bg-light-grayish-blue rounded-xl py-2 px-4 items-center lg:w-32  ">
          <button
            className="text-brand font-semibold text-3xl hover:opacity-70"
            //   onClick={minusCount}
          >
            -
          </button>
          <div>{0} </div>
          <button
            className="text-brand font-semibold text-3xl hover:opacity-70"
            //   onClick={addCount}
          >
            +
          </button>
        </div>
        <button
          className="flex bg-brand rounded-xl py-4 justify-center gap-4 text-white font-semibold lg:grow lg:ml-4 hover:opacity-70 "
          onClick={count > 0 ? addCartbtnFun : console.log('count is zero')}
        >
          <AiOutlineShoppingCart className="h-6 w-6" />
          <div className="font-semibold ">Add to cart</div>
        </button>
      </div>
    </div>
  )
}

// api's

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{
      _id,
     slug{
      current
    },  
    }`
  const posts = await client.fetch(query)
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
export const getStaticProps = async ({ params }) => {
  const query = `*[_type =='product' && slug.current == $slug][0]{
    name,
    price,
    imageUrl,
    description,
    rating,
      category ->{
      name,
      imageUrl,
    },
    description,
      slug,
    }`
  const post = await client.fetch(query, { slug: params?.slug })
  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 1,
  }
}
