import Image, { StaticImageData } from "next/image";
import homeSrc from "/public/home.jpg"

interface IProps {
    imgUrl: StaticImageData;
    altTxt: string;
    content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="w-full absolute inset-0 -z-10">
        <Image src={props.imgUrl}  fill style={{objectFit: 'cover'}} alt={props.altTxt}></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  )
}