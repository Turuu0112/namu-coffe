"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { IoGiftOutline } from "react-icons/io5";
import Image from "next/image";
import { GiCoffeeCup } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

export const MainNavbar = () => {
  const pathname = usePathname();
  const paths = [
    {
      name: "Бүртгүүлэх",
      path: "/signup",
    },
    {
      name: "Нэвтрэх",
      path: "/signin",
    },
  ];

  return (
    <Container>
      <div
        className="py-6 px-12 flex justify-between border-b dark:border-[#27272A] border-[#c6c6c6] items-center "
        data-cy="Navbar-DarkMode"
      >
        <Link href={`/`}>
          <div className="flex items-center  ">
            <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
            <div className="text-center">
              <h3 className="font-semibold text-[24px] max-sm:text-sm text-black dark:text-white leading-[32px] tracking-[-0.6px]">
                coffee namu
              </h3>
              <h5>Mongolia</h5>
            </div>
          </div>
        </Link>

        <div className="text-sm font-medium flex gap-2 items-center">
          <GiCoffeeCup className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-black dark:text-white" />
          <span className="ml-1"> Меню</span>

          <IoGiftOutline className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-black dark:text-white" />
          <span>Бонус</span>
          <>
            <TiShoppingCart className="w-6 h-6 cursor-pointer" />
            <span className="ml-1">Захиалга</span>
          </>

          <>
            {paths.map((path) => (
              <Link
                href={path.path}
                key={path.name}
                className={`${
                  path.name === "Бүртгүүлэх"
                    ? "max-sm:hidden max-md:hidden"
                    : ""
                }`}
              >
                <Button
                  className={`py-2 px-10 rounded-full bg-[#AA714A] font-extralight dark:border-[#4e4e51] dark:border dark:hover:bg-[#00B7F4] text-white max-sm:px-2 max-sm:py-1 max-sm:text-sm leading-[20px] ${
                    pathname === path.path
                      ? "bg-[#00B7F4]"
                      : "dark:bg-black hover:bg-[#00B7F4] duration-500 hover:text-black dark:hover:text-black"
                  }`}
                >
                  {path.name}
                </Button>
              </Link>
            ))}
          </>
        </div>
      </div>
    </Container>
  );
};
