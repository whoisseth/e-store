import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import Link from 'next/link'
import DefaultImage from '../Assets/Images/Default/default-loading-image.png'

export default function Slider() {
  const images = [
    {
      id: '1',
      image:
        'https://img.freepik.com/free-psd/cyber-monday-sale-composition-mock-up_23-2148659811.jpg?t=st=1654888412~exp=1654889012~hmac=0bfe3d336327f14f3c2b9edd6ad9c9c6838875d6e15e43a6e26948919b7545a4&w=1480',
    },
    {
      id: '2',
      image:
        'https://img.freepik.com/free-psd/laptop-screen-psd-mockup-gray-background_53876-116370.jpg?t=st=1654888412~exp=1654889012~hmac=00e9e73dda7c43f9a29945b02e3eacbda2f90d146392670c4eef75110f5e0ddd&w=1380',
    },
    {
      id: '3',
      image:
        'https://img.freepik.com/free-vector/banner-concept-fast-online-order-with-store-phone-gifts-gift-bags-location-realistic-style-vector-illustration_548887-124.jpg?t=st=1654889410~exp=1654890010~hmac=53867934119521e4dfd9c6961f5549f2eafd448e0016f392689bc276fc2655cf&w=1380',
    },
    {
      id: '4',
      image:
        'https://img.freepik.com/free-vector/online-beauty-stores-banner-concept-ecommerce-mobile-shopping-internet-vector-cartoon-illustration-cosmetic-salon-interior-online-shop-laptop-screen_107791-4006.jpg?t=st=1654936727~exp=1654937327~hmac=8e9406d690fabef854533f1dafbfc6b16495bde03cf3fd5ade6da76a7dc1e2c5&w=1380',
    },
    {
      id: '5',
      image:
        'https://img.freepik.com/free-vector/banner-holiday-sale-with-store-gift-bag-gifts-location-realistic-style-vector-illustration_548887-118.jpg?t=st=1654889410~exp=1654890010~hmac=fbfc4a5df06d85f4c73a05a5f2e03adc938e8eb8246ac91176a8239597f62afa&w=1380',
    },
  ]
  return (
    <div className="mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        cursor
        showThumbs={false}
        showStatus={false}
        emulateTouch
      >
        {images.map(({ id, image }) => (
          <div>
            <img
              className="max-w-7xl max-h-96 object-cover  "
              loading="lazy"
              src={image}
              alt={id}
            />
            {/* <div>{index}</div> */}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

// const Slide = () => (
//   <Link href={'#'}>
//     <div className="w-full h-52  relative cursor-pointer ">
//       <Image src={DefaultImage} layout="fill" objectFit="cover" />
//     </div>
//   </Link>
// )
