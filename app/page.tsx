import Image from "next/image";
import HamburgerButton from "./components/hamburger";

export default function Home() {
  return (
    <div className="">
       <nav>
        <HamburgerButton className="flex justify-self-start"/>
       </nav>
    </div>
  );
}
