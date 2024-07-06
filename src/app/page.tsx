import CardOne from "@/components/CardOne";
import CardThree from "@/components/CardThree";
import CardTwo from "@/components/CardTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-slate-400 flex justify-around items-center">
        <CardOne/>
        <CardTwo/>
        <CardThree/>
    </div>
  );
}
