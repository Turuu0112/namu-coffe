"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { IoGiftOutline, IoLogoFacebook } from "react-icons/io5";
import Image from "next/image";
import { GiCoffeeCup,} from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { BiLogoGmail } from "react-icons/bi";

export const MainNavbar = () => {
  const pathname = usePathname();
  const [openDialog, setOpenDialog] = useState<"signup" | "signin" | null>(
    null
  );

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

  const openAuthDialog = (type: "signup" | "signin") => {
    setOpenDialog(type);
  };

  const closeAuthDialog = () => {
    setOpenDialog(null);
  };

  return (
    <Container>
      <div
        className="py-6 px-12 flex justify-between border-b dark:border-[#27272A] border-[#c6c6c6] items-center"
        data-cy="Navbar-DarkMode"
      >
        <Link href={`/`}>
          <div className="flex items-center">
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
          <span className="ml-1">Меню</span>

          <IoGiftOutline className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-black dark:text-white" />
          <span>Бонус</span>

          <TiShoppingCart className="w-6 h-6 cursor-pointer" />
          <span className="ml-1">Захиалга</span>

          <div>
            {paths.map((path) => (
              <Button
                key={path.name}
                onClick={() =>
                  openAuthDialog(
                    path.name === "Бүртгүүлэх" ? "signup" : "signin"
                  )
                }
                className={`${
                  path.name === "Бүртгүүлэх"
                    ? "max-sm:hidden max-md:hidden"
                    : ""
                } py-2 px-10 rounded-full bg-[#AA714A] font-extralight dark:border-[#4e4e51] dark:border dark:hover:bg-[#00B7F4] text-white max-sm:px-2 max-sm:py-1 max-sm:text-sm leading-[20px] ${
                  pathname === path.path
                    ? "bg-[#00B7F4]"
                    : "dark:bg-black hover:bg-[#00B7F4] duration-500 hover:text-black dark:hover:text-black"
                }`}
              >
                {path.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* ShadCN Dialog for Auth */}
      <Dialog  open={openDialog !== null} onOpenChange={closeAuthDialog } >
        <DialogTrigger />
        <DialogContent className=" flex flex-col justify-center items-center w-full h-fit ">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center mb-10">
              {openDialog === "signup" ? "Бүртгүүлэх " : "Нэвтрэх"}
              <div>
                <span className="text-[12px] text-gray-400">
                  Та бүртгэлтэй юу?{" "}
                </span>
                <span className="text-[12px] border-b-2 border-black">
                  {" "}
                  Нэвтрэх{" "}
                </span>
              </div>
            </DialogTitle>

            <div className="flex flex-col  gap-2 mt-4">
              <button className="bg-white border-black border-2 flex justify-center items-center  rounded-full w-[406px] mb-4 px-8 gap-4 py-2  text-black">
                <IoLogoFacebook />
                Login with facebook
              </button>
              <button className="bg-white border-black border-2 flex justify-center items-center  rounded-full w-[406px] mb-4 px-8 gap-4 py-2  text-black">
                <BiLogoGmail />
                Login with Gmail
              </button>
            </div>
          </DialogHeader>
          <div className="border-2 border-y-black"></div>
          <div>
            {openDialog === "signup" ? (
              <form>
                Бүртгэл үүсгэхийн тулд имэйл хаягаа оруулна уу
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full mb-4 p-2 border"
                />
                <Button className="bg-[#AA714A]">Бүртгүүлэх</Button>
              </form>
            ) : (
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full mb-4 p-2 border"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-4 p-2 border"
                />
                <input type="checkbox" 
                className="mb-4  "/>
                <span>Сануулах</span>
                <Button className="bg-[#AA714A]">Нэвтрэх</Button>
              </form>
            )}
          </div>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
