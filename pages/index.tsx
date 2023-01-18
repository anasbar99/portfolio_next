import { services } from "../data"
// import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import ServiceCard from "../components/ServiceCard"

// export default function index(props) {
//   // console.log("CLIENT", services)

//   return (
//     <div className="p-4">
//       <h1>ASMARA_KURANG_APAKU_PADAMU</h1>
//     </div>
//   )
// }

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-6 font-medium">
        I am currently pursuing success (This Final Year) in Computer Science Engineering from self-taught science. I have 4+
        months experience in Web Development and I want to become a successful public figure and YouTuber.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{ margin: "0 -1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services")
//   const data = await res.json()

//   console.log("SERVER", services)

//   return {
//     props: { services: data.services },
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services")
//   const data = await res.json()

//   console.log("SERVER", services)

//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }
