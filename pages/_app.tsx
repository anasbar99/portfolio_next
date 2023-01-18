import "../styles/globals.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function App({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-6 md:mx-14 md:my-10 lg:my-4 lg:mx-4">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
