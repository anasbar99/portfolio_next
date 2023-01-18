import Image from "next/image"
import ProPic from "../public/img/leka2.jpg"
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { GrDocumentText } from "react-icons/gr"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"

const Sidebar = () => {
  return (
    <div>
      <Image src={ProPic} alt="user profile" className="object-cover object-top w-32 h-32 mx-auto rounded-full " />
      <h3 className="mt-4 text-3xl font-medium tracking-wider font-kaushan ">
        <span className="text-green-600">Valezka</span> Leka
      </h3>
      <hr className="w-44 h-[1.5px] border-none bg-slate-300 mx-auto mt-2" />
      <p className="px-2 py-1 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 mx-auto my-3 bg-gray-200 rounded-full md:w-1/2 md:py-2 lg:w-full"
        href=""
        download="name">
        <GrDocumentText className="w-5 h-5 mx-2" />
        Download Resume
      </a>

      {/* social media icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-600 md:w-1/2 lg:w-full">
        <a href="https://www.youtube.com/@sanchezzaja" target="_blank" className="flex items-center lg:flex-col">
          <AiFillYoutube className="w-8 h-8 mx-2 cursor-pointer hover:text-red-600" />
          <p className="hidden md:block">YouTube</p>
        </a>
        <a href="https://www.tiktok.com/@anas.bar" target="_blank" className="flex items-center lg:flex-col">
          <FaTiktok className="w-8 h-8 cursor-pointer mx-2 hover:text-gray-800 hover:stroke-[10px] hover:stroke-red-600" />
          <p className="hidden md:block">TikTok</p>
        </a>
        <a href="https://github.com/anasbar99" target="_blank" className="flex items-center lg:flex-col">
          <AiFillGithub className="w-8 h-8 mx-2 cursor-pointer hover:text-gray-900" />
          <p className="hidden md:block">GitHub</p>
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200" style={{ margin: "1rem -1rem" }}>
        <div className="flex items-center justify-center space-x-3">
          <MdLocationOn className="w-5 h-5" />
          <span>Jakarta Utara, Indonesia</span>
        </div>
        <div className="flex items-center justify-center my-2 space-x-3">
          <MdEmail className="w-5 h-5" />
          <span>lekaa07@gmail.com</span>
        </div>
        <div className="flex items-center justify-center my-2 space-x-4">
          <BsFillTelephoneFill className="w-4 h-5" />
          <span>+62 82333444555</span>
        </div>
      </div>
      {/* Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none md:w-1/4 md:mx-7 lg:w-full lg:mx-auto"
        onClick={() => window.open("mailto:lekaa07@gmail.com")}>
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full md:w-1/3 bg-gradient-to-r from-green to-blue-400 md:mx-7 lg:w-full lg:mx-auto">
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
