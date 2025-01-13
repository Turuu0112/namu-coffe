import {  SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaGreaterThan } from "react-icons/fa";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <Container>
    <div className="bg-[#F8F1E7] w-full h-full flex mt-12 p-10 justify-around ">
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <p className="font-bold">coffee namu mongolia</p>
        </div>
        <div className="ml-20">
          <p>Утас: (976)7772-4422</p>
          <p>coffeenamumongolia@gmail.com</p>
        </div>
        <div className="flex gap-8 mt-20">
            <Link href="https://www.facebook.com/coffeenamumongolia/">
          <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/coffeenamumongolia/">
          <BsInstagram />
          </Link>
          <Link href="https://www.youtube.com/name-coffee">
          <BsYoutube />
          </Link>
          <SearchIcon />
        </div>
      </div>
      <div className="flex flex-col gap-5" >
        <h1 className="font-bold">Бидний тухай</h1>
        <span className="flex items-center gap-3">
          {" "}
          <FaGreaterThan /> Байгууллага
        </span>
        <span className="flex items-center gap-3">
          {" "}
          <FaGreaterThan /> Бүтээгдхүүн
        </span>
      </div>
      <div className="flex flex-col gap-5" >
        <h1 className="font-bold">Захиалга</h1>
        <span className="flex items-center gap-3">
          {" "}
          <FaGreaterThan /> Аппликэйшн
        </span>
        <span className="flex items-center gap-3">
          {" "}
          <FaGreaterThan /> Урамшуулал
        </span>
        <span className="flex items-center gap-3">
          {" "}
          <FaGreaterThan /> Салбарууд
        </span>
      </div>
    </div>
    </Container>
  );
};
