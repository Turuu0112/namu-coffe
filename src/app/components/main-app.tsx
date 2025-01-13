import Image from "next/image";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";

export const Applink = () => {
  return (
    <Container>
      <div className="bg-[#F8F1E7] w-full h-full flex mt-[15%] rounded-xl pb-10">
        <div className="relative  flex mt-10 justify-center  ">
          <Image
            className="relative ml-[25%]  -rotate-12"
            alt="shake"
            src="/shake.png"
            width={300}
            height={300}
            
          />

          <Image
            className="relative mr-[15%]  "
            alt="coffee"
            src="/coffe.png"
            width={300}
            height={300}
          />

          <Image
            className="absolute mr-[10%] "
            alt="order"
            src="/app.png"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h2 className="text-[#AA714A]">Үнэгүй кофе авахад илүү амар боллоо.</h2>
          <p>Coffee namu app - Урамшууллын апп татаж аваад, дуртай зүйлээ хаанаас ч, хэзээ ч хамаагүй захиалаарай.</p>
          <Button className="w-[173px] h-[53px] bg-white text-[#AA714A] border-[#AA714A] border-2"> Апп татах</Button>
        </div>
      </div>
    </Container>
  );
};
