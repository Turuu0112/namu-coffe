import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Order=()=>{
    return(
        <div className="relative flex justify-end  ">
            <Image width={10000} height={10000} alt="Order" src="/home.png" className="absolute  "></Image>
            <div className="relative mt-[20%] mr-[10%] flex flex-col gap-4 ">
            <span className="text-white">Яг одоо захиалаад авах.</span>
            <Link  href="/order">
            <Button className="  w-[160px] h-[54px] bg-white text-[#AA714A] border-[#AA714A] border-2  "> Захиалах <ArrowRight/></Button>
            </Link>
            </div>
        </div>
    )
}