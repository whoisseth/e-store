import { useState } from 'react'
import React, { useRef } from 'react'

import client from './../../utils/client'
import { Layout } from './../../components/Layout'
// import ImagePreviewSlider from './../../components/ProductMainPageComp/ImagePreviewSlider'
import ImageSlider from './../../components/ProductMainPageComp/ImageSlider'
import RightText from './../../components/ProductMainPageComp/RightText'

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
      <div className=" mb-20   ">
        <div
          className={` hidden lg:${
            imgPreiw ? 'hidden' : 'flex'
          }   h-full w-full bg-black opacity-80 z-50 `}
        />
        {/* mobile view */}

        <div className="lg:mx-auto lg:mt-12   grid grid-cols-1 sm:grid-cols-2 items-center relative  lg:w-[56.25rem] ">
          <ImageSlider
            images={images}
            imgPreiw={imgPreiw}
            selectedImg={selectedImg}
            preImg={preImg}
            nextImg={nextImg}
            setSelectedImg={setSelectedImg}
            setImgPeview={setImgPeview}
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
