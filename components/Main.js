import React from 'react'

export default function Main() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 md:p-6  gap-3 md:gap-6">
      <Link key={post._id} href={`/post/${post.slug.current}`}>
        <a className="rounded-lg  border-2   overflow-hidden group">
          <div className="relative h-60 w-full bg-gray-300 overflow-hidden group-hover:scale-105 transition-transform duration-200 ease-in-out ">
            <Image
              objectFit="cover"
              layout="fill"
              src={urlFor(post.mainImage).url()!}
            />
          </div>
          <div className="flex justify-between p-4 gap-2 bg-white ">
            <div className=" ">
              <p className="text-lg font-bold ">{post.title} </p>
              <p className="text-sm mr-2 ">
                {post.description} by {post.author.name}
              </p>
            </div>
            <div className="  h-10 w-10 relative rounded-full bg-gray-300  overflow-hidden ">
              <Image
                objectFit="cover"
                layout="fill"
                src={urlFor(post.author.image).url()!}
              />
            </div>
          </div>
        </a>
      </Link>
    ))}
  </main>
  )
}
