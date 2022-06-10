export default function Footer() {
  return (
    <div className=" bg-slate-700 justify-between text-white   px-16 py-6 flex ">
      {Array.from(Array(3), (index) => index + 1).map(() => (
        <FooterSample />
      ))}
    </div>
  )
}

const FooterSample = () => (
  <div className="flex flex-col items-center">
    <p className=" text-gray-400 uppercase m-3 ">footer</p>
    <div className="flex flex-col gap-1">
      {Array.from(Array(5), (index) => index + 1).map(() => (
        <p className="capitalize font-semibold text-sm">footer</p>
      ))}
    </div>
  </div>
)
