import { Metadata } from "next"
import Hero from "../components/hero"
import homeSrc from "/public/home.jpg"

// export const metadata: Metadata ={
//   title: 'Home'
// }

export default function Home() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="Welcome to our website"/>
  )
}