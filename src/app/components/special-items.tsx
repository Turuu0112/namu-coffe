import Image from "next/image";

export const Special = () => {
  return (
    <div className="flex items-center flex-col mt-10 gap-10">
      <h2 className="font-bold">Онцлох бүтээгдхүүн</h2>
      <p>Энэ сарын онцлох, дуусахаас өмнө захиалаарай!</p>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <Image src="/first.png" alt="first" width={200} height={150} />
          <p>affogato</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/second.png" alt="second" width={200} height={150} />
          <p>green tea smoothie</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/third.png" alt="third" width={200} height={150} />
          <p>iced grapefruit tea</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/fourth.png" alt="fourth" width={200} height={150} />
          <p>iced mocha</p>
        </div>
      </div>
    </div>
  );
};
