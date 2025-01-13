import { Footer } from "./components/footer";
import { Applink } from "./components/main-app";
import { Order } from "./components/main-home";
import { Special } from "./components/special-items";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Order />
      <Applink />
      <Special />
      <Footer />
    </div>
  );
}
