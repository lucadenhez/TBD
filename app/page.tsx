import Image from "next/image";
import Footer from "./components/pages/Footer";
import Link from "next/link";
import PrimaryButton from "./components/home/PrimaryButton";
import DecodeText from "./components/animation/DecodeText";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <div className="absolute h-full w-full z-20 inset-0 mask-radial-at-top-right mask-circle mask-radial-to-[60%] topographic" />
      <div className="relative w-full overflow-hidden flex items-center justify-center max-h-[calc(100vh-400px)]">
        <div className="bg-linear-to-b from-transparent to-[#0a0a0a] via-black/50 absolute w-full bottom-0 h-full z-10" />
        <Image
          src="/photos/group_pictures/day_1.jpeg"
          alt="Group photo"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>

      <div className="m-10 flex flex-col gap-3">
        <DecodeText
          text="We are team [TBD]"
          className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight"
        />
        <DecodeText
          text="Yes, that is our name."
          className="text-md sm:text-md md:text-md lg:text-lg xl:text-lg uppercase leading-tight"
        />
        <p className="text-[#C8FF00] lg:pt-0 pt-10 text-right text-md sm:text-md md:text-md lg:text-lg xl:text-lg uppercase leading-tight">Team 203 · Integrated Design Project · Spring `26</p>
        <p className="lg:pt-0 text-right text-md sm:text-md md:text-md lg:text-lg xl:text-lg uppercase leading-tight">Jairo, Luca, Calvin, Jesse, and Kai</p>
      </div>

      <div className="mx-10 my-30 flex sm:flex-row flex-col gap-x-10 gap-y-5 sm:items-start items-center">
        <PrimaryButton
          text="Deliverables"
          target="/deliverables"
          color="#C8FF00"
        />

        <PrimaryButton
          text="Project Updates"
          target="/updates"
          color="#C8FF00"
        />

        <PrimaryButton
          text="Who We Are"
          target="/about-us"
          color="#C8FF00"
        />
      </div>
    </main>
  );
}
