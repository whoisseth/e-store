// export default function Footer() {
//   return (
//     <div className=" bg-slate-700 justify-between text-white   px-16 py-6 flex ">
//       {Array.from(Array(3), (index) => index + 1).map(() => (
//         <FooterSample />
//       ))}
//     </div>
//   )
// }

// const FooterSample = () => (
//   <div className="flex flex-col items-center">
//     <p className=" text-gray-400 uppercase m-3 ">footer</p>
//     <div className="flex flex-col gap-1">
//       {Array.from(Array(5), (index) => index + 1).map(() => (
//         <p className="capitalize font-semibold text-sm">footer</p>
//       ))}
//     </div>
//   </div>
// )

import Link from 'next/link'
import { GrTwitter } from 'react-icons/gr'
import { CgIndieHackers } from 'react-icons/cg'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
export default function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: ['Academy', 'Concierge', 'Studio'],
    },
    {
      title: 'Resources',
      links: ['Blogs', 'Documentation', 'Templates', 'Integrations'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Jobs', 'Contact Us'],
    },
    {
      title: 'Use Cases',
      links: [
        'Data Analytics',
        'No-code Backend',
        'API Integrations',
        'Automation Workflow',
        'Data Navigation',
      ],
    },
  ]
  const footerStyle =
    'hover:opacity-75 cursor-pointer transition transition-all transform hover:scale-105  '
  return (
    <footer className="bg-[#E9E9E9] font-poppins">
      <div className="sm:max-w-6xl mx-auto  px-6 pt-12  pb-12 flex flex-wrap justify-between gap-5 sm:gap-20  sm:pb-24 ">
        {footerLinks.map(({ title, links }) => (
          <div>
            <h2 className="text-sm font-semibold sm:text-xl mb-1 sm:mb-3">
              {title}
            </h2>
            <div className="flex flex-col gap-1 sm:gap-2">
              {links.map((link, index) => (
                <Link key={index} href='#'>
                  <a className="text-sm class-name sm:text-lg">{link}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className=" flex    mx-auto gap-4 flex-col-reverse  sm:flex-col lg:mx-0">
          <p className="text-sm sm:text-lg ">?? 2022 e-store Pvt. Ltd.</p>
          <div className="text-black flex gap-3  justify-center sm:text-2xl items-center sm:gap-5  ">
            <GrTwitter className={footerStyle} />
            <BsLinkedin className={`text-sm sm:text-xl ${footerStyle}`} />
            <CgIndieHackers className={`lg:text-3xl ${footerStyle}`} />
            <BsYoutube className={footerStyle} />
            <AiFillInstagram className={footerStyle} />
          </div>
        </div>
      </div>
    </footer>
  )
}

//  <div>
